"use client"

import { Eye, Pencil, Trash, MoreHorizontal, ActivityIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type BlogActionsProps = {
  post: any
  onView?: (id: string) => void
  onEdit?: (id: string) => void
  onDelete?: (id: string) => void,
  onChangeStatus?: (id: string, is_active: boolean) => void
}

export default function BlogActions({ post, onView, onEdit, onDelete, onChangeStatus }: BlogActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        {onView && (
          <DropdownMenuItem onClick={() => onView(post.id)}>
            <Eye className="mr-2 h-4 w-4" />
            View
          </DropdownMenuItem>
        )}
        {onEdit && (
          <DropdownMenuItem onClick={() => onEdit(post.id)}>
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </DropdownMenuItem>
        )}
        {(onView || onEdit) && <DropdownMenuSeparator />}
         {onChangeStatus && (
          <DropdownMenuItem
            onClick={() => onChangeStatus(post.id, post.is_active)}
          >
            <ActivityIcon className="mr-2 h-4 w-4" />
            Change Status
          </DropdownMenuItem>
        )}
        {(onChangeStatus ) && <DropdownMenuSeparator />}
        {onDelete && (
          <DropdownMenuItem
            className="text-destructive focus:text-destructive"
            onClick={() => onDelete(post.id)}
          >
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        )}
       
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
