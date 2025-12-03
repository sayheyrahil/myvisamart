import React, { useState } from 'react';
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaPaperPlane, FaPlusCircle, FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { FaFilter } from "react-icons/fa";

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
  extraHeaderButtons?: React.ReactNode; // <-- Add this line

  // Add these for filter modal control
  filterModalOpen?: boolean;
  setFilterModalOpen?: (open: boolean) => void;
  pendingFilterText?: string;
  setPendingFilterText?: (text: string) => void;
  filterLocation?: string;
  setFilterLocation?: (location: string) => void;
  filterOnboardDate?: string;
  setFilterOnboardDate?: (date: string) => void;
  filterSubscriptionExpiry?: string;
  setFilterSubscriptionExpiry?: (date: string) => void;
  filterFranchiseStatus?: string;
  setFilterFranchiseStatus?: (status: string) => void;
  handleFilter?: () => void;
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
  extraHeaderButtons, // <-- Add this line
  filterModalOpen,
  setFilterModalOpen,
  pendingFilterText,
  setPendingFilterText,
  filterLocation,
  setFilterLocation,
  filterOnboardDate,
  setFilterOnboardDate,
  filterSubscriptionExpiry,
  setFilterSubscriptionExpiry,
  filterFranchiseStatus,
  setFilterFranchiseStatus,
  handleFilter,
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

          <div>
            <button
              className="flex items-center text-sm gap-2 px-8 h-[36px] rounded-lg  transition  border border-gray-300"
              onClick={() => setFilterModalOpen && setFilterModalOpen(true)}
              type="button"
              // style={{ minWidth: "140px", minHeight: "36px" }}
            >
             <FaFilter />

             Advanced Filters 
            </button>
            {/* Custom Modal instead of AntdModal */}
            {setFilterModalOpen && filterModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6 relative">
                  <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={() => setFilterModalOpen(false)}
                    aria-label="Close"
                    type="button"
                  >
                    &times;
                  </button>
                  <h2 className="text-lg font-semibold mb-4">Filter Restaurants</h2>
                  <div className="flex flex-col gap-4">
                    <input
                      type="text"
                      placeholder="Search by name"
                      value={pendingFilterText}
                      onChange={e => setPendingFilterText && setPendingFilterText(e.target.value)}
                      className="w-full h-[42px] border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 text-gray-700"
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      value={filterLocation}
                      onChange={e => setFilterLocation && setFilterLocation(e.target.value)}
                      className="w-full h-[42px] border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 text-gray-700"
                    />
                    <input
                      type="date"
                      placeholder="Onboard Date"
                      value={filterOnboardDate}
                      onChange={e => setFilterOnboardDate && setFilterOnboardDate(e.target.value)}
                      className="w-full h-[42px] border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-gray-700"
                    />
                    <input
                      type="date"
                      placeholder="Subscription Expiry"
                      value={filterSubscriptionExpiry}
                      onChange={e => setFilterSubscriptionExpiry && setFilterSubscriptionExpiry(e.target.value)}
                      className="w-full h-[42px] border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-gray-700"
                    />
                    <select
                      value={filterFranchiseStatus}
                      onChange={e => setFilterFranchiseStatus && setFilterFranchiseStatus(e.target.value)}
                      className="w-full h-[42px] border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-gray-700"
                      style={{ minHeight: "42px" }}
                    >
                      <option value="">Franchise Status</option>
                      <option value="1">Franchise</option>
                      <option value="0">Non-Franchise</option>
                    </select>
                    <button
                      className="flex items-center justify-center gap-2 px-6 h-[42px] bg-neutral-600 hover:bg-neutral-700 text-white rounded-lg shadow transition font-semibold mt-2 w-full"
                      onClick={() => {
                        handleFilter && handleFilter();
                        setFilterModalOpen(false);
                      }}
                      type="button"
                      style={{ minHeight: "42px" }}
                    >
                      <svg className="w-5 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                      </svg>
                      Apply Filter
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Add Button for mobile */}
          {!hideAddButton && (
            <>
              {/* Make sure this is not hidden by parent flex or overflow styles */}

              {!onAddClick && (
                <Link
                  href={`/${pageTitleName}/manage/`}
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