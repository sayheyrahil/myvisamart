import React, { useState, useRef, useEffect } from "react";
import { FaClock, FaEllipsisV, FaEye, FaPencilAlt, FaToggleOff, FaToggleOn, FaTrashAlt, FaUtensils } from "react-icons/fa";

interface Row {
  id: string;
  is_active: boolean;
}

interface ActionButtonsProps {
  row: Row;
  showRowDataModal?: (row: Row) => void;
  editButtonClick?: (id: string) => void;
  requestManagerChangeStatus?: (id: string, status: string) => void;
  deleteButtonClick?: (id: string) => void;
 
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  row,
  showRowDataModal,
  editButtonClick,
  requestManagerChangeStatus,
  deleteButtonClick,
 
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const items = [
    showRowDataModal && {
      key: "view",
      label: (
        <button
          className="flex items-center w-full px-3 py-2 hover:bg-gray-100"
          onClick={() => { showRowDataModal(row); setOpen(false); }}
        >
          <FaEye className="mr-2" /> <span>View</span>
        </button>
      ),
    },
    editButtonClick && row.id && {
      key: "edit",
      label: (
        <button
          className="flex items-center w-full px-3 py-2 hover:bg-gray-100"
          onClick={() => { editButtonClick(row.id); setOpen(false); }}
        >
          <FaPencilAlt className="mr-2" /> <span>Edit</span>
        </button>
      ),
    },
    requestManagerChangeStatus && row.id && {
      key: "status",
      label: (
        <button
          className="flex items-center w-full px-3 py-2 hover:bg-gray-100"
          onClick={() => { requestManagerChangeStatus(row.id, row.is_active ? "false" : "true"); setOpen(false); }}
        >
          {row.is_active ? (
            <>
              <FaToggleOff className="mr-2" /> <span>Deactivate</span>
            </>
          ) : (
            <>
              <FaToggleOn className="mr-2" /> <span>Activate</span>
            </>
          )}
        </button>
      ),
    },
    deleteButtonClick && row.id && {
      key: "delete",
      label: (
        <button
          className="flex items-center w-full px-3 py-2 hover:bg-gray-100"
          onClick={() => { deleteButtonClick(row.id); setOpen(false); }}
        >
          <FaTrashAlt className="mr-2" /> <span>Delete</span>
        </button>
      ),
    },
  ].filter(Boolean);

  return (
    <div className="relative flex gap-1" ref={menuRef}>
      <button
        type="button"
        className="p-2 rounded hover:bg-gray-100"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <FaEllipsisV className="text-[#A4A7AE]" />
      </button>
      {open && (
        <div className="absolute right-0 z-20 mt-2 w-40 bg-white border rounded shadow-lg py-1">
          {items.map((item: any) => (
            <div key={item.key}>{item.label}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActionButtons;
