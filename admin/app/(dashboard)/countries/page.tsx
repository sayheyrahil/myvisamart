"use client";
import DataTable from "@/components/DataTable";
import useCrudOperations from "@/components/useCrudOperations";
import { API_URL, ENDPOINTS, WEB_URL } from "@/lib/constants";
import React, { useState, useEffect, useCallback } from "react";
import ActionButtons from "@/components/ActionButtons";
import { FaEye } from "react-icons/fa";
import { FaEarDeaf } from "react-icons/fa6";
import Link from "next/link";
const pageTitleName = "countries";
import Swal from "sweetalert2";
import parse from "html-react-parser";

// Main Page
const Page = () => {
  const [dataTableData, setDataTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [filterText, setFilterText] = useState("");
  const [modalImage, setModalImage] = useState<string | null>(null);

  const { deleteItem, changeStatus, editItem, fetchData, showRowDataModal } =
    useCrudOperations(API_URL, {
      delete: ENDPOINTS.countries_delete,
      changeStatus: ENDPOINTS.countries_change_status,
      get: ENDPOINTS.countries_get,
    });

  useEffect(() => {
    getData(1, 10, "createdAt", "desc");
  }, []);
  const openVideoSwal = (videoUrl: string) => {
    Swal.fire({
      title: "Video Preview",
      html: `
      <video 
        src="${videoUrl}" 
        controls 
        autoplay 
        style="width:100%; border-radius:8px;"
      ></video>
    `,
      width: "800px",
      showCloseButton: true,
      showConfirmButton: false,
      focusConfirm: false,
      didOpen: () => {
        const video = Swal.getPopup()?.querySelector("video");
        video?.play();
      },
      willClose: () => {
        const video = Swal.getPopup()?.querySelector("video");
        video?.pause();
      },
    });
  };

  const getData = useCallback(
    (
      page = 1,
      perPage = 10,
      sortField = "createdAt",
      sortDirection = "desc"
    ) => {
      const queryParams = {
        page,
        per_page: perPage,
        sort_direction: sortDirection,
        sort_field: sortField,
        search: filterText,
      };
      setLoading(true);
      fetchData(
        queryParams,
        (data: any) => {
          setDataTableData(data);
          setLoading(false);
        },
        setTotalRows
      );
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
      title: "Visa Process Time",
      dataIndex: "visa_process_time",
      sorter: true,
    },
    {
      title: "Service Fee Now",
      dataIndex: "service_fee_now",
      sorter: true,
    },
    {
      title: "slug",
      dataIndex: "slug",
      sorter: true,
    },

    {
      title: <div className="flex justify-center">Media</div>,
      dataIndex: "video",
      align: "center",
      render: (_: any, row: any) => {
        const mediaUrl = WEB_URL + row.video;

        return (
          <video
            src={mediaUrl}
            className="w-full h-28 object-cover rounded-md cursor-pointer"
            muted
            playsInline
            onClick={() => openVideoSwal(mediaUrl)}
          />
        );
      },
    },
    {
      title: <div className="flex justify-center">Description</div>,
      dataIndex: "description",
      sorter: true,
      render: (text: string) => (
        <div className="flex justify-center max-h-28 h-28 overflow-y-auto whitespace-pre-line break-words w-80">
          {parse(text)}
        </div>
      ),
    },

    {
      title: <div className="flex justify-center">Image</div>,
      dataIndex: "image",
      align: "center",
      render: (text: any, row: any) => (
        <>
          <img
            src={WEB_URL + row.image}
            alt={row.name}
            className="w-28 h-28 object-cover rounded-md m-auto   cursor-pointer"
            onClick={() => setModalImage(WEB_URL + row.image)}
          />
        </>
      ),
    },

    {
      title: <div className="flex justify-center">Review</div>,
      dataIndex: "id",
      align: "center",
      render: (text: any, row: any) => (
        <Link
          href={`/countries/${row.slug}/reviews`}
          className="text-brand hover:underline"
        >
          View Reviews
        </Link>
      ),
    },
    {
      title: <div className="flex justify-center">Faq</div>,
      dataIndex: "id",
      align: "center",
      render: (text: any, row: any) => (
        <Link
          href={`/faq?country_name=${row.slug}`}
          className="text-white  px-3 py-2 rounded-xl bg-brand"
        >
          Faq
        </Link>
      ),
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
      title: "",
      dataIndex: "id",
      render: (text: any, row: any) => (
        <ActionButtons
          row={row}
          showRowDataModal={() =>
            showRowDataModal([
              { label: "Id", value: row.id },
              { label: "Name", value: row.name },
              { label: "Description", value: row.description },
              { label: "Image", value: WEB_URL + row.image, isImage: true },
              { label: "Icon", value: row.icon },
              { label: "Video", value: WEB_URL + row.video, isVideo: true },
              { label: "Dail Code", value: row.dail_code },
              { label: "Detail", value: row.detail },
              { label: "Visa Process Time", value: row.visa_process_time },
              { label: "Created At", value: row.createdAt },
              { label: "Updated At", value: row.updatedAt },
              { label: "Is Active", value: row.is_active ? "Yes" : "No" },
              { label: "Is Deleted", value: row.is_deleted ? "Yes" : "No" },
              { label: "Slug", value: row.slug },
              {
                label: "Is Top Destination",
                value: row.is_top_destination ? "Yes" : "No",
              },
              { label: "Is Popular", value: row.is_popular ? "Yes" : "No" },
              { label: "Countries", value: row.countries },
              { label: "Subtitle", value: row.subtitle },
              { label: "Rating", value: row.rating },
              { label: "Continent", value: row.continent },
              {
                label: "Required Documents",
                value: row.required_documents,
                isTable: true,
              },
              {
                label: "Visa Information",
                value: row.visa_information,
                isTable: true,
              },
              {
                label: "Transit Timeline",
                value: row.transit_timeline,
                isTable: true,
              },
              { label: "Visa Fee Now", value: row.visa_fee_now },
              { label: "Service Fee Now", value: row.service_fee_now },
              { label: "Visa Fee Later", value: row.visa_fee_later },
              { label: "Service Fee Later", value: row.service_fee_later },
              {
                label: "Documents Required Process",
                value: row.documents_required_process,
                isTable: true,
              },
              {
                label: "Partners We Work With",
                value: row.partners_we_work_with,
                isImage: true,
              },
              {
                label: "Rejection Reasons",
                value: row.rejection_reasons,
                isTable: true,
              },
              {
                label: "Chances of Approval For This",
                value: row.chances_of_approval_for_this,
              },
              {
                label: "Chances of Approval For Other",
                value: row.chances_of_approval_for_other,
              },
              {
                label: "How We Reviewed This Page Sources",
                value: row.how_we_reviewed_this_page_sources,
              },
              {
                label: "How We Reviewed This Page History",
                value: row.how_we_reviewed_this_page_history,
              },
              {
                label: "Get a Guaranteed Visa On",
                value: row.get_a_guaranteed_visa_on,
              },
              {
                label: "Check Appointment Availability",
                value: row.check_appointment_availability,
              },
              {
                label: "Statistics on Visa Processing Time",
                value: row.statistics_on_visa_processing_time,
              },
              {
                label: "Statistics on Visa Approval Rating",
                value: row.statistics_on_visa_approval_rating,
              },
              {
                label: "Visa Approval Comparison",
                value: row.visa_approval_comparison,
                isTable: true,
              },
              { label: "What You Get", value: row.what_you_get, isImage: true },
              { label: "Why", value: row.why, isTable: true },
            ])
          }
          editButtonClick={() => editItem(row.id, pageTitleName)}
          requestManagerChangeStatus={() =>
            changeStatus(row.id, row.is_active ? 0 : 1, getData)
          }
          deleteButtonClick={() => deleteItem(row.id, getData)}
        />
      ),
    },
  ];
  const [filterModalOpen, setFilterModalOpen] = useState(false);

  return (
    <div className="rounded-sm border shadow-default p-1 bg-white">
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative bg-white rounded shadow-lg p-2"
            style={{ maxWidth: "90vw", maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute m-2 right-2 text-black bg-white rounded-full p-3 shadow"
              onClick={() => setModalImage(null)}
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt="Large"
              className="max-w-[80vw] max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
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
