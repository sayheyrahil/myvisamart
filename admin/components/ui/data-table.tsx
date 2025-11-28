"use client"

import * as React from "react"
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
  VisibilityState,
} from "@tanstack/react-table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  deleteDialogOpen: boolean
  setDeleteDialogOpen: (open: boolean) => void
  confirmDelete: () => void
  page: number
  perPage: number
  totalRows: number
  onPageChange: (page: number) => void
  onPerPageChange: (perPage: number) => void
  search: string
  onSearchChange: (search: string) => void
  sort: any
  onSortChange: (sort: any) => void
}

export default function DataTable<TData, TValue>({
  columns,
  data,
  deleteDialogOpen,
  setDeleteDialogOpen,
  confirmDelete,
  page,
  perPage,
  totalRows,
  onPageChange,
  onPerPageChange,
  search,
  onSearchChange,
  sort,
  onSortChange,
}: DataTableProps<TData, TValue>) {
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount: Math.ceil(totalRows / perPage),
    state: {
      columnVisibility,
      rowSelection,
      pagination: {
        pageIndex: page,
        pageSize: perPage,
      },
    },
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
  })

  return (
    <div className="space-y-4">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter posts..."
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(0)}
            disabled={page === 0}
          >
            {"<<"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(page - 1)}
            disabled={page === 0}
          >
            Previous
          </Button>
          <span className="px-2 text-sm">
            Page{" "}
            <strong>
              {page + 1} of {Math.max(1, Math.ceil(totalRows / perPage))}
            </strong>
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(page + 1)}
            disabled={page + 1 >= Math.ceil(totalRows / perPage)}
          >
            Next
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(Math.max(0, Math.ceil(totalRows / perPage) - 1))}
            disabled={page + 1 >= Math.ceil(totalRows / perPage)}
          >
            {">>"}
          </Button>
          <span className="px-2 text-sm">| Go to page:</span>
          <Input
            type="number"
            min={1}
            max={Math.max(1, Math.ceil(totalRows / perPage))}
            defaultValue={page + 1}
            onChange={e => {
              const newPage = e.target.value ? Number(e.target.value) - 1 : 0
              onPageChange(newPage)
            }}
            className="w-16"
          />
          <select
            className="ml-2 border rounded px-3 py-2 text-sm"
            value={perPage}
            onChange={e => {
              onPerPageChange(Number(e.target.value))
            }}
          >
            {[5, 10, 20, 50, 100].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                 {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the selected blog post.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
