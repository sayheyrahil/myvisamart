import { useCallback, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/lib/axios-instance"
import { handleAxiosError, handleAxiosSuccess } from "@/lib/common";
const useCrudOperations = (baseUrl: string, endpoints: { delete: string; changeStatus: string; get: string }) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const deleteItem = async (id: any, refreshCallback: () => void) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                setLoading(true);
                try {
                    await axiosInstance.delete(`${endpoints.delete}?id=${id}`);
                    handleAxiosSuccess({ message: "Deleted successfully!" });
                    refreshCallback();
                } catch (error: any) {
                    if (error.response) handleAxiosError(error);
                } finally {
                    setLoading(false);
                }
            }
        });
    };

    const changeStatus = async (id: number, is_active: any, refreshCallback: () => void) => {
        setLoading(true);
        try {
            const data: any = {
                id: id,
                is_active: is_active,
            };
            const response = await axiosInstance.post(`${endpoints.changeStatus}`, data);

            console.log("Change status response:", response);
            handleAxiosSuccess(response);
            refreshCallback();
        } catch (error: any) {
            if (error.response) handleAxiosError(error);
        } finally {
            setLoading(false);
        }
    };

    const editItem = (id: any, pageTitle: string) => {
        router.push(`/${pageTitle}/manage/${id}`);
    };


    const fetchData = useCallback(
        async (
            options: any,
            setDataCallback: (data: any) => void,
            setTotalCallback: (total: number) => void
        ) => {
            setLoading(true);
            try {
                axiosInstance.post(endpoints.get, options)
                    .then((response: any) => {
                        if (response?.data?.data) {

                            console.log("Fetched data:", response?.data?.data);
                            setDataCallback(response?.data?.data?.desc);
                            setTotalCallback(response?.data?.data?.total);
                        }
                        return response;
                    })
                    .catch((error: any) => {
                        handleAxiosError(error);
                    })
                    .finally(() => {
                        setLoading(false);
                    });



            } catch (error: any) {
                if (error.response) handleAxiosError(error);
            } finally {
                setLoading(false);
            }
        },
        [baseUrl, endpoints.get]
    );

    const showRowDataModal = (tableRows: { label: string; value: any; isImage?: boolean }[]) => {
        const modalContent = `
            <div class="overflow-x-auto">
                <table class="w-full border-collapse border text-sm text-left"
                    style="background-color: var(--background, #fff); color: var(--foreground, #222);">
                    <tbody>
                        ${tableRows.map((row, index) => {
            let displayValue = row.value;
            if (Array.isArray(row.value)) {
                // If array of objects, try to stringify nicely
                if (row.value.length > 0 && typeof row.value[0] === "object") {
                    displayValue = row.value.map((v: any) =>
                        typeof v === "object"
                            ? JSON.stringify(v)
                            : String(v)
                    ).join(", ");
                } else {
                    displayValue = row.value.join(", ");
                }
            } else if (typeof row.value === "object" && row.value !== null) {
                displayValue = JSON.stringify(row.value);
            }
            return `
                                <tr key=${index} style="background-color: var(--background, transparent);">
                                    <td class="border px-4 py-2 font-bold" style="width:30%; background-color: var(--background, #f3f4f6);">${row.label}</td>
                                    ${row.isImage
                    ? `<td class="border px-4 py-2" style="width:70%; background-color: var(--background, #fff);"><Image src="${displayValue}" alt="${row.label}" /></td>`
                    : `<td class="border px-4 py-2" style="width:70%; background-color: var(--background, #fff);">${displayValue}</td>`
                }
                                </tr>
                            `;
        }).join("")}
                    </tbody>
                </table>
            </div>
        `;

        Swal.fire({
            title: "Details",
            html: modalContent,
            width: "600px",
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText: "Close",
        });

    };

    return { deleteItem, changeStatus, editItem, loading, fetchData, showRowDataModal };
};

export default useCrudOperations;