"use client"
import Link from "next/link"
import * as React from "react"
import { useRouter } from "next/navigation"
import { ArrowUpDown, PlusCircle } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

import { useToast } from "@/components/ui/use-toast"
import DataTable from "@/components/ui/data-table"
import { axiosInstance } from "@/lib/axios-instance"
import { ENDPOINTS, WEB_URL } from "@/lib/constants"
import { handleAxiosSuccess, handleAxiosError } from "@/lib/common"
import { useEffect, useState } from "react"
import Actions from "@/components/common/Actions"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"

type HappyClient = {
  id: string
  name: string
  description: string
  designation: string
  image: string
  star_count: number
  status: boolean
  createdAt: Date
  updatedAt: Date
}

export default function HappyClientPage() {
  const [data, setData] = React.useState<HappyClient[]>([])
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState<boolean>(false)
  const [clientToDelete, setClientToDelete] = React.useState<string | null>(null)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter()
  const { toast } = useToast()
  const [items, setItems] = useState<any[]>([]);
  // Pagination state
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalRows, setTotalRows] = useState(0);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<any>(null);

  // Server-side search and sort state
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState([{ id: "createdAt", desc: true }]);

  const getData = React.useCallback(
    async (
      pageParam = page,
      perPageParam = perPage,
      sortParam = sort,
      searchParam = search
    ) => {
      setItems([]);
      // Extract sort field and direction
      const sortField = sortParam[0]?.id || "createdAt";
      const sortDirection = sortParam[0]?.desc ? "desc" : "asc";
      // API query parameters
      const options = `?page=${pageParam}&per_page=${perPageParam}&delay=1&sort_direction=${sortDirection}&sort_field=${sortField}&search=${encodeURIComponent(searchParam)}`;
      try {
        const response: any = await axiosInstance.get(ENDPOINTS.happy_client_get + options)
        if (response && response.data) {
          setItems(response.data.data.desc); // Set table data
          setTotalRows(response.data.data.total || 0); // Set total rows for pagination
        }
      } catch (error: any) {
        handleAxiosError(toast, error)
      }
    },
    [page, perPage, sort, search]
  );

  useEffect(() => {
    getData(page, perPage, sort, search);
  }, [page, perPage, sort, search, getData]);

  // Pagination change handler
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handlePerPageChange = (newPerPage: number) => {
    setPerPage(newPerPage);
    setPage(1); // Reset to first page when perPage changes
  };

  // Server-side search handler
  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1); // Reset to first page on search
  };

  // Server-side sort handler
  const handleSortChange = (newSort: any) => {
    setSort(newSort);
    setPage(1); // Reset to first page on sort
  };

  const handleDelete = (id: string) => {
    setClientToDelete(id)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    if (clientToDelete) {
      setIsLoading(true)

      axiosInstance.delete(`${ENDPOINTS.happy_client_delete}?id=${clientToDelete}`)
        .then((response) => {
          handleAxiosSuccess(toast, response)
          getData(page, perPage) // Refresh data after deletion
        })
        .catch((error) => {
          handleAxiosError(toast, error)
        })
        .finally(() => {
          setDeleteDialogOpen(false)
          setClientToDelete(null)
          setIsLoading(false)
        })
    }
  }

  // Open view modal with selected client
  const handleView = (client: any) => {
    setSelectedClient(client);
    setViewDialogOpen(true);
  };

  const columns = [
    {
      id: "select",
      header: ({ table }: any) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }: any) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: ({ column }: any) => {
        const isSorted = sort[0]?.id === "name" ? sort[0]?.desc : undefined;
        return (
          <Button
            variant="ghost"
            onClick={() =>
              handleSortChange([
                { id: "name", desc: isSorted === undefined ? false : !isSorted }
              ])
            }
          >
            Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }: any) => <div className="font-medium">{row.getValue("name")}</div>,
    },
    {
      accessorKey: "designation",
      header: ({ column }: any) => {
        const isSorted = sort[0]?.id === "designation" ? sort[0]?.desc : undefined;
        return (
          <Button
            variant="ghost"
            onClick={() =>
              handleSortChange([
                { id: "designation", desc: isSorted === undefined ? false : !isSorted }
              ])
            }
          >
            Designation
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }: any) => <div>{row.getValue("designation")}</div>,
    },
    {
      accessorKey: "star_count",
      header: "Stars",
      cell: ({ row }: any) => {
        const count = row.getValue("star_count") as number
        return (
          <span>
            {Array.from({ length: count }, (_, i) => (
              <span key={i} style={{ color: "#facc15" }}>★</span>
            ))}
          </span>
        )
      },
    },
    {
      accessorKey: "image",
      header: "Image",
      cell: ({ row }: any) => {
        const img = row.getValue("image") as string
        return img ? (
          <img src={`${WEB_URL}${img}`} alt="client" className="w-12 h-12 object-cover rounded" />
        ) : (
          <span className="text-xs text-muted-foreground">No Image</span>
        )
      },
    },
    {
      accessorKey: "is_active",
      header: "Status",
      cell: ({ row }: any) => {
        const status = row.getValue("is_active") as boolean
        return (
          <Badge variant={status ? "default" : "secondary"}>
            {status ? "Active" : "Inactive"}
          </Badge>
        )
      },
      filterFn: (row: any, id: any, value: any) => {
        return value.includes(row.getValue(id))
      },
    },
    {
      accessorKey: "updatedAt",
      header: ({ column }: any) => {
        const isSorted = sort[0]?.id === "updatedAt" ? sort[0]?.desc : undefined;
        return (
          <Button
            variant="ghost"
            onClick={() =>
              handleSortChange([
                { id: "updatedAt", desc: isSorted === undefined ? false : !isSorted }
              ])
            }
          >
            Last Updated
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }: any) => {
        const date = row.getValue("updatedAt") as Date
        return <div>{formatDistanceToNow(date, { addSuffix: true })}</div>
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }: any) => {
        const client = row.original
        return (
          <Actions
            post={client}
            onView={() => handleView(client)}
            onEdit={(id) => router.push(`/happy-client/new?id=${id}`)}
            onDelete={handleDelete}
            onChangeStatus={async (id: string, is_active: boolean) => {
              setIsLoading(true)
              try {
                const response = await axiosInstance.post(ENDPOINTS.happy_client_change_status, {
                  id: id.toString(),
                  is_active: !is_active,
                })
                handleAxiosSuccess(toast, response)
                getData(page, perPage)
              } catch (error) {
                handleAxiosError(toast, error)
              } finally {
                setIsLoading(false)
              }
            }}
          />
        )
      },
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Happy Clients</h1>
        <Link href="/happy-client/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Client
          </Button>
        </Link>
      </div>
      <DataTable
        columns={columns}
        data={items}
        deleteDialogOpen={deleteDialogOpen}
        setDeleteDialogOpen={setDeleteDialogOpen}
        confirmDelete={confirmDelete}
        page={page - 1}
        perPage={perPage}
        totalRows={totalRows}
        onPageChange={n => setPage(n + 1)}
        onPerPageChange={handlePerPageChange}
        search={search}
        onSearchChange={handleSearchChange}
        sort={sort}
        onSortChange={handleSortChange}
      />
      {/* View Modal */}
      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Happy Client Details</DialogTitle>
          </DialogHeader>
          {selectedClient && (
            <table className="min-w-full text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="font-semibold pr-4 py-2">Name:</td>
                  <td>{selectedClient.name}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold pr-4 py-2">Designation:</td>
                  <td>{selectedClient.designation}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold pr-4 py-2">Stars:</td>
                  <td>
                    {Array.from({ length: selectedClient.star_count }, (_, i) => (
                      <span key={i} style={{ color: "#facc15" }}>★</span>
                    ))}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold pr-4 py-2 align-top">Image:</td>
                  <td>
                    {selectedClient.image ? (
                      <img src={`${WEB_URL}${selectedClient.image}`} alt="client" className="w-16 h-16 object-cover rounded" />
                    ) : (
                      <span className="text-xs text-muted-foreground">No Image</span>
                    )}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold pr-4 py-2">Description:</td>
                  <td>
                    <div dangerouslySetInnerHTML={{ __html: selectedClient.description }} />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold pr-4 py-2">Status:</td>
                  <td>
                    <Badge variant={selectedClient.status ? "default" : "secondary"}>
                      {selectedClient.status ? "Active" : "Inactive"}
                    </Badge>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold pr-4 py-2">Created At:</td>
                  <td>{selectedClient.createdAt ? new Date(selectedClient.createdAt).toLocaleString() : ""}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold pr-4 py-2">Updated At:</td>
                  <td>{selectedClient.updatedAt ? new Date(selectedClient.updatedAt).toLocaleString() : ""}</td>
                </tr>
              </tbody>
            </table>
          )}
          <DialogClose asChild>
            <Button variant="secondary" className="mt-4">Close</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  )
}