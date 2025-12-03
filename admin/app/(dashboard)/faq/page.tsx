"use client";
import DataTable from "@/components/DataTable";
import useCrudOperations from "@/components/useCrudOperations";
import { API_URL, ENDPOINTS, WEB_URL } from "@/lib/constants";
import React, { useState, useEffect, useCallback } from "react";
import ActionButtons from "@/components/ActionButtons";
import { FaEye } from "react-icons/fa";
import { FaEarDeaf } from "react-icons/fa6";

const pageTitleName = "faq";

// Main Page
const Page = () => {
  const [dataTableData, setDataTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [filterText, setFilterText] = useState("");
  const [modalImage, setModalImage] = useState<string | null>(null);

  const { deleteItem, changeStatus, editItem, fetchData, showRowDataModal } = useCrudOperations(API_URL, {
    delete: ENDPOINTS.faq_delete,
    changeStatus: ENDPOINTS.faq_change_status,
    get: ENDPOINTS.faq_get,
  });

  useEffect(() => {
    getData(1, 10, "createdAt", "desc");
  }, []);

  const getData = useCallback(
    (page = 1, perPage = 10, sortField = "createdAt", sortDirection = "desc") => {
      const queryParams = {
        page,
        per_page: perPage,
        sort_direction: sortDirection,
        sort_field: sortField,
        search: filterText,
      };
      setLoading(true);
      fetchData(queryParams, (data: any) => {
        setDataTableData(data);
        setLoading(false);
      }, setTotalRows);
    },
    [filterText, fetchData]
  );

  const filterComponentHandleChange = (event: any) => {
    const currentFilterText = event.target.value;
    setFilterText(currentFilterText);
    getData();
  };

  useEffect(() => {
    getData(1, 10, "createdAt", "desc");
    // eslint-disable-next-line
  }, [filterText, getData]);

  const columnsAnt = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: true,
    },
    {
      title: "Question",
      dataIndex: "question",
      sorter: true,
      render: (text: string) => (
        <div
          style={{
            maxHeight: "150px",
            height: "50px",
            overflowY: "auto",
            whiteSpace: "pre-line",
            wordBreak: "break-word",
            width: "100%",
          }}
        >
          {typeof text === "string"
            ? text
              .match(/.{1,150}/g)
              ?.map((chunk, idx) => (
                <span key={idx}>
                  {chunk}
                  {idx !== Math.ceil(text.length / 150) - 1 && <br />}
                </span>
              ))
            : ""}
        </div>
      ),
    },
    {
      title: "Answer",
      dataIndex: "answer",
      sorter: true,
      render: (text: string) => (
        <div
          style={{
            maxHeight: "150px",
            height: "50px",
            overflowY: "auto",
            whiteSpace: "pre-line",
            wordBreak: "break-word",
            width: "100%",
          }}
        >
          {typeof text === "string"
            ? text
              .match(/.{1,150}/g)
              ?.map((chunk, idx) => (
                <span key={idx}>
                  {chunk}
                  {idx !== Math.ceil(text.length / 150) - 1 && <br />}
                </span>
              ))
            : ""}
        </div>
      ),
    },
    {
      title: "Type",
      dataIndex: "type",
      sorter: true,
    },
    {
      title: "Slug",
      dataIndex: "slug",
      sorter: true,
    },
    {
      title: <div className="flex justify-center">Is Active</div>,
      dataIndex: "is_active",
      align: "center",
      render: (text: any, row: any) => (
        <div className="flex justify-center items-center w-10 m-auto bg-green-100 rounded-md p-2">
          {row.is_active ? (
            <FaEye className="text-green-600 text-lg" title="Active" />
          ) : (
            <FaEarDeaf className="text-red-600 text-lg" title="Inactive" />
          )}
        </div>
      ),
    },
    {
      title: '',
      dataIndex: 'id',
      render: (text: any, row: any) => (
        <ActionButtons
          row={row}
          showRowDataModal={() => showRowDataModal([
            { label: "Id", value: row.id },
            { label: "Name", value: row.name },
            { label: "Question", value: row.question },
            { label: "Answer", value: row.answer },
            { label: "Type", value: row.type },
            { label: "Slug", value: row.slug },
            {
              label: "Is Active",
              value: row.is_active ? "Yes" : "No"
            },
          ])}
          editButtonClick={() => editItem(row.id, pageTitleName)}
          requestManagerChangeStatus={() => changeStatus(row.id, row.is_active ? 0 : 1, getData)}
          deleteButtonClick={() => deleteItem(row.id, getData)}
        />
      ),
    },
  ];

  return (
    <div className="rounded-sm border shadow-default p-1 bg-white">
      <DataTable
        columnsAnt={columnsAnt}
        dataTableData={dataTableData}
        loading={loading}
        totalRows={totalRows}
        getData={getData}
        pageTitleName={pageTitleName}
        setFilterText={setFilterText}
        filterText={filterText}
        filterComponentHandleChange={filterComponentHandleChange}
      />
    </div>
  );
};

export default Page;