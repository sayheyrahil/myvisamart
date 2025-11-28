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

type GalleryItem = {
  id: string
  title: string
  images: string[] // Array of image URLs/paths
  description: string
  status: boolean
  createdAt: Date
  updatedAt: Date
}

export default function GalleryPage() {
  const [data, setData] = React.useState<GalleryItem[]>([])
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState<boolean>(false)
  const [itemToDelete, setItemToDelete] = React.useState<string | null>(null)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter()
  const { toast } = useToast()
  const [items, setItems] = useState<any[]>([]);
  // Pagination state
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalRows, setTotalRows] = useState(0);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

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
        const response: any = await axiosInstance.get(ENDPOINTS.gallery_get + options)
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
    setItemToDelete(id)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    if (itemToDelete) {
      setIsLoading(true)

      axiosInstance.delete(`${ENDPOINTS.gallery_delete}?id=${itemToDelete}`)
        .then((response) => {
          handleAxiosSuccess(toast, response)
          getData(page, perPage) // Refresh data after deletion
        })
        .catch((error) => {
          handleAxiosError(toast, error)
        })
        .finally(() => {
          setDeleteDialogOpen(false)
          setItemToDelete(null)
          setIsLoading(false)
        })
    }
  }

  // Open view modal with selected item
  const handleView = (item: any) => {
    setSelectedItem(item);
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
      accessorKey: "title",
      header: ({ column }: any) => {
        // Determine current sort direction for this column
        const isSorted = sort[0]?.id === "title" ? sort[0]?.desc : undefined;
        return (
          <Button
            variant="ghost"
            onClick={() =>
              handleSortChange([
                { id: "title", desc: isSorted === undefined ? false : !isSorted }
              ])
            }
          >
            Title
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }: any) => <div className="font-medium">{row.getValue("title")}</div>,
    },
    {
      accessorKey: "description",
      header: ({ column }: any) => {
        const isSorted = sort[0]?.id === "description" ? sort[0]?.desc : undefined;
        return (
          <Button
            variant="ghost"
            onClick={() =>
              handleSortChange([
                { id: "description", desc: isSorted === undefined ? false : !isSorted }
              ])
            }
          >
            Description
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }: any) => <div>{row.getValue("description")}</div>,
    },
    {
      accessorKey: "images",
      header: "Images",
      cell: ({ row }: any) => {
        const images = row.getValue("images") as string[]
        return (
          <div className="flex flex-wrap gap-2">
            {images && images.length > 0
              ? images.slice(0, 3).map((img: string, idx: number) => (
                  <img
                    key={idx}
                    src={`${WEB_URL}${img}`}
                    alt="gallery"
                    className="w-12 h-12 object-cover rounded"
                  />
                ))
              : <span className="text-xs text-muted-foreground">No Images</span>
            }
            {images && images.length > 3 && (
              <span className="text-xs text-muted-foreground">+{images.length - 3} more</span>
            )}
          </div>
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
        const item = row.original
        return (
          <Actions
            post={item}
            onView={() => handleView(item)}
            onEdit={(id) => router.push(`/gallery/new?id=${id}`)}
            onDelete={handleDelete}
            onChangeStatus={async (id: string, is_active: boolean) => {
              setIsLoading(true)
              try {
                const response = await axiosInstance.post(ENDPOINTS.gallery_change_status, {
                  id: id.toString(),
                  is_active: !is_active, // send the toggled value directly
                })
                handleAxiosSuccess(toast, response)
                getData(page, perPage) // Refresh data after status change
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
        <h1 className="text-3xl font-bold tracking-tight">Gallery Items</h1>
        <Link href="/gallery/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Item
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
            <DialogTitle>Gallery Item Details</DialogTitle>
          </DialogHeader>
          {selectedItem && (
            <table className="min-w-full text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="font-semibold pr-4 py-2">Title:</td>
                  <td>{selectedItem.title}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold pr-4 py-2">Description:</td>
                  <td>{selectedItem.description}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold pr-4 py-2 align-top">Images:</td>
                  <td>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.images && selectedItem.images.length > 0
                        ? selectedItem.images.map((img: string, idx: number) => (
                            <a
                              key={idx}
                              href={`${WEB_URL}${img}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={`${WEB_URL}${img}`}
                                alt="gallery"
                                className="w-16 h-16 object-cover rounded hover:opacity-80 transition"
                              />
                            </a>
                          ))
                        : <span className="text-xs text-muted-foreground">No Images</span>
                      }
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold pr-4 py-2">Web URL:</td>
                  <td>
                    {selectedItem.web_url ? (
                      <a
                        href={selectedItem.web_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline break-all"
                      >
                        {selectedItem.web_url}
                      </a>
                    ) : (
                      <span className="text-xs text-muted-foreground">No URL</span>
                    )}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold pr-4 py-2">Status:</td>
                  <td>
                    <Badge variant={selectedItem.status ? "default" : "secondary"}>
                      {selectedItem.status ? "Active" : "Inactive"}
                    </Badge>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold pr-4 py-2">Created At:</td>
                  <td>{selectedItem.createdAt ? new Date(selectedItem.createdAt).toLocaleString() : ""}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold pr-4 py-2">Updated At:</td>
                  <td>{selectedItem.updatedAt ? new Date(selectedItem.updatedAt).toLocaleString() : ""}</td>
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