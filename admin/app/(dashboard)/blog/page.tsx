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

type BlogPost = {
  id: string
  title: string
  status: boolean // changed from "active" | "inactive" to boolean
  createdAt: Date
  updatedAt: Date
}

export default function BlogPage() {
  const [data, setData] = React.useState<BlogPost[]>([])
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState<boolean>(false)
  const [postToDelete, setPostToDelete] = React.useState<string | null>(null)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter()
  const { toast } = useToast()
  const [items, setItems] = useState<any[]>([]);
  // Pagination state
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalRows, setTotalRows] = useState(0);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);

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
        const response: any = await axiosInstance.get(ENDPOINTS.blog_get + options)
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
    setPostToDelete(id)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    if (postToDelete) {
      setIsLoading(true)

      axiosInstance.delete(`${ENDPOINTS.blog_delete}?id=${postToDelete}`)
        .then((response) => {
          handleAxiosSuccess(toast, response)
          getData(page, perPage) // Refresh data after deletion
        })
        .catch((error) => {
          handleAxiosError(toast, error)
        })
        .finally(() => {
          setDeleteDialogOpen(false)
          setPostToDelete(null)
          setIsLoading(false)
        })
    }
  }

  // Open view modal with selected post
  const handleView = (post: any) => {
    setSelectedPost(post);
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
      accessorKey: "shortDescription",
      header: ({ column }: any) => {
        const isSorted = sort[0]?.id === "shortDescription" ? sort[0]?.desc : undefined;
        return (
          <Button
            variant="ghost"
            onClick={() =>
              handleSortChange([
                { id: "shortDescription", desc: isSorted === undefined ? false : !isSorted }
              ])
            }
          >
            short Description
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }: any) => <div>{row.getValue("shortDescription")}</div>,
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
        const post = row.original
        return (
          <Actions
            post={post}
            onView={() => handleView(post)}
            onEdit={(id) => router.push(`/blog/new?id=${id}`)}
            onDelete={handleDelete}
            onChangeStatus={async (id: string, is_active: boolean) => {
              setIsLoading(true)
              try {
                const response = await axiosInstance.post(ENDPOINTS.blog_change_status, {
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
        <h1 className="text-3xl font-bold tracking-tight">Blog Posts</h1>
        <Link href="/blog/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Post
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
            <DialogTitle>Blog Post Details</DialogTitle>
          </DialogHeader>
          {selectedPost && (
            <table className="min-w-full text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="font-semibold pr-4 py-2">ID:</td>
                  <td>{selectedPost.id}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold pr-4 py-2">Title:</td>
                  <td>{selectedPost.title}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold pr-4 py-2">Short Description:</td>
                  <td>{selectedPost.shortDescription}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold pr-4 py-2">Content:</td>
                  <td>
                    <div style={{ maxHeight: 200, overflowY: "auto", whiteSpace: "pre-wrap" }}>
                      {selectedPost.content}
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold pr-4 py-2">Status:</td>
                  <td>
                    <Badge variant={selectedPost.is_active ? "default" : "secondary"}>
                      {selectedPost.is_active ? "Active" : "Inactive"}
                    </Badge>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold pr-4 py-2">Created At:</td>
                  <td>{selectedPost.createdAt ? new Date(selectedPost.createdAt).toLocaleString() : ""}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold pr-4 py-2">Updated At:</td>
                  <td>{selectedPost.updatedAt ? new Date(selectedPost.updatedAt).toLocaleString() : ""}</td>
                </tr>

                <tr className="border-b">
                  <td className="font-semibold pr-4 py-2 align-top py-2 px-5">Image:</td>
                  <td className="py-2 px-5">
                    {selectedPost.image ? (
                      <img src={`${WEB_URL}${selectedPost.image}`} alt="post" className="w-16 h-16 object-cover rounded" />
                    ) : (
                      <span className="text-xs text-muted-foreground">No Image</span>
                    )}
                                  </td>
                                </tr>
                {/* Add more fields as needed */}
                {Object.entries(selectedPost).map(([key, value]) => {
                  // Skip already shown fields
                  if (
                    [
                      "id",
                      "title",
                      "shortDescription",
                      "content",
                      "is_active",
                      "status",
                      "createdAt",
                      "updatedAt"
                    ].includes(key)
                  ) return null;
                  return (
                    <tr className="border-b" key={key}>
                      <td className="font-semibold pr-4 py-2">{key}:</td>
                      <td>
                        {typeof value === "object" && value !== null
                          ? JSON.stringify(value)
                          : String(value)}
                      </td>
                    </tr>
                  );
                })}
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