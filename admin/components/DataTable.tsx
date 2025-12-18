import React, { useState } from 'react';
import {  FaChevronLeft, FaChevronRight,  FaPlusCircle, FaSearch } from 'react-icons/fa';
import Link from 'next/link';
 
interface DataTableProps {
  columnsAnt: any[];
  dataTableData: any[];
  loading: boolean;
  totalRows: number;
  getData: (page?: number, perPage?: number, sortField?: string, sortDirection?: string) => void;

  filterText: string;
  setFilterText: (text: string) => void;
  pageTitleName: string;
  filterComponentHandleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // made optional
  hideAddButton?: boolean;
  onAddClick?: () => void; // Add this prop
   customAddButtonLink?: string; // <-- Add this line

 
}

const DataTable: React.FC<DataTableProps> = ({
  columnsAnt,
  dataTableData,
  loading,
  totalRows,
  getData,
  pageTitleName,
  filterText,
  setFilterText,
  filterComponentHandleChange,
  hideAddButton,
  onAddClick,
   customAddButtonLink, // <-- Add this line
 
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  // Custom filter button for restaurant page
 
  const onChange = (page: number, pageSize: number, sortField?: string, sortDirection?: string) => {
    setCurrentPage(page);
    getData(page, pageSize, sortField, sortDirection);
  };

  return (
    <div className="p-4 rounded-md w-full">

      <div className="mb-6 flex flex-row gap-3 justify-between">

        {/* Mobile search and add button remain unchanged */}
        <div className="flex gap-2 items-center w-full justify-between">
          {showMobileSearch ? (
            <input
              type="text"
              className="flex-1 rounded-lg border-[1.5px] border-stroke bg-transparent p-1  "
              id="search-mobile"
              placeholder="Search"
              value={filterText}
              onChange={filterComponentHandleChange ? (event) => filterComponentHandleChange(event) : undefined}
              autoFocus
              onBlur={() => setShowMobileSearch(false)}
            />
          ) : (
            <button
              className="p-2 rounded-full flex items-center justify-center "
              aria-label="Search"
              onClick={() => setShowMobileSearch(true)}
            >
              <FaSearch size={24} />
            </button>
          )}

       
          {/* Add Button for mobile */}
          {!hideAddButton && (
            <>
              {/* Make sure this is not hidden by parent flex or overflow styles */}

              {!onAddClick && (
                <Link
                  href={customAddButtonLink ? customAddButtonLink : `/${pageTitleName}/manage/`}
                  className="p-2  rounded-md  bg-brand  flex items-center justify-center !static"
                  aria-label="Add"
                >
                  <FaPlusCircle size={24} color='fff' />
                </Link>
              )

              }

              {onAddClick && (
                <button
                  type="button"
                  className="p-2 rounded-full   flex items-center justify-center !static ml-2"
                  aria-label="Add"
                  onClick={onAddClick}
                >
                  <FaPlusCircle size={24} />
                </button>
              )}
            </>
          )}
        </div>
      </div>


      {/* <div className="w-full rounded-xl p-5"> */}
      <div className="w-full rounded-xl">
        <CustomTable
          columns={columnsAnt}
          data={dataTableData}
          loading={loading}
          totalRows={totalRows}
          currentPage={currentPage}
          onPageChange={onChange}
        />
      </div>
    </div>
  );
};

const CustomTable: React.FC<{
  columns: any[];
  data: any[];
  loading: boolean;
  totalRows: number;
  currentPage: number;
  onPageChange: (page: number, pageSize: number) => void;
}> = ({ columns, data, loading, totalRows, currentPage, onPageChange }) => {
  const [pageSize, setPageSize] = useState(10);

  const handlePageChange = (page: number) => {
    onPageChange(page, pageSize);
  };

  const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = parseInt(event.target.value, 10);
    setPageSize(newSize);
    onPageChange(1, newSize); // Reset to page 1 when page size changes
  };

  const totalPages = Math.ceil(totalRows / pageSize);

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      {/* Desktop Table */}
      <table className="w-full hidden sm:table">
        <thead className="bg-muted/50">
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                className="text-left p-2 sm:p-4 font-medium text-muted-foreground text-xs sm:text-sm"
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length} className="text-center ">
                Loading...
              </td>
            </tr>
          ) : data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-t border-border hover:bg-muted/30"
              >
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="p-2 sm:p-4 text-xs sm:text-sm text-foreground"
                  >
                    {col.render ? col.render(row[col.dataIndex], row) : row[col.dataIndex]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center p-10 ">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {/* Mobile List View */}
      <div className="sm:hidden">
        {loading ? (
          <div className="text-center py-6">Loading...</div>
        ) : data.length > 0 ? (
          <ul className="flex flex-col gap-4 py-2">
            {data.map((row, rowIndex) => (
              <li key={rowIndex} className="bg-white rounded-lg shadow p-4 border border-border">
                <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                  {columns.map((col, colIndex) => (
                    <React.Fragment key={colIndex}>
                      <div className="text-xs font-semibold text-muted-foreground flex items-center">
                        {col.title}
                      </div>
                      <div className="text-sm text-foreground flex items-center">
                        {col.render ? col.render(row[col.dataIndex], row) : row[col.dataIndex]}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-10">No data available</div>
        )}
      </div>
      {/* Footer with pagination */}
      <div className="flex flex-col border-t-8 gap-4 mt-6 p-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
          <span>Entries per page</span>
          <select
            value={pageSize}
            onChange={handlePageSizeChange}
            className="border border-border rounded px-2 py-1 text-foreground bg-background text-xs sm:text-sm"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
        <div className="flex items-center justify-center gap-1 sm:gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="text-xs sm:text-sm px-2 py-1 border rounded flex items-center gap-1 bg-transparent"
          >
            <FaChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
            <span className="hidden sm:inline">Previous</span>
            <span className="sm:hidden">Prev</span>
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-6 h-6 sm:w-8 sm:h-8 p-0 border rounded text-xs sm:text-sm ${page === currentPage ? 'bg-brand text-white' : ''}`}
              >
                {page}
              </button>
            ))}
            {totalPages > 3 && (
              <>
                <span className="px-1 sm:px-2 text-muted-foreground text-xs sm:text-sm">...</span>
                <button
                  onClick={() => handlePageChange(totalPages)}
                  className={`w-6 h-6 sm:w-8 sm:h-8 p-0 border rounded text-xs sm:text-sm ${currentPage === totalPages ? 'bg-brand text-white' : ''}`}
                >
                  {totalPages}
                </button>
              </>
            )}
          </div>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="text-xs sm:text-sm px-2 py-1 border rounded flex items-center gap-1 bg-transparent"
          >
            <span className="hidden sm:inline">Next</span>
            <span className="sm:hidden">Next</span>
            <FaChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;