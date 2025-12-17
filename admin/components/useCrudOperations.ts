import { useCallback, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/lib/axios-instance"
import { handleAxiosError, handleAxiosSuccess } from "@/lib/common";
import { WEB_URL } from "@/lib/constants";


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
                    await axiosInstance.post(`${endpoints.delete}`, { id });
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

    const showRowDataModal = (tableRows: { label: string; value: any; isImage?: boolean; isTable?: boolean }[]) => {
        const modalContent = `
            <div class="overflow-x-auto">
                <table class="w-full border-collapse border text-sm text-left"
                    style="background-color: var(--background, #fff); color: var(--foreground, #222);">
                    <tbody>
                        ${tableRows.map((row, index) => {
            // Table rendering for arrays/objects
            if (row.isTable && (Array.isArray(row.value) || typeof row.value === "object")) {
                let arr = Array.isArray(row.value) ? row.value : [row.value];
                if (arr.length === 0 || (arr.length === 1 && Object.keys(arr[0] || {}).length === 0)) {
                    return `
                        <tr key=${index}>
                            <td class="border px-4 py-2 font-bold" style="width:30%; background-color: var(--background, #f3f4f6);">${row.label}</td>
                            <td class="border px-4 py-2" style="width:70%; background-color: var(--background, #fff);">No Data</td>
                        </tr>
                    `;
                }
                // Get all unique keys for table headers
                const allKeys = Array.from(
                    arr.reduce((set, obj) => {
                        if (obj && typeof obj === "object") {
                            Object.keys(obj).forEach(k => set.add(k));
                        }
                        return set;
                    }, new Set<string>())
                );
                return `
                    <tr key=${index}>
                        <td class="border px-4 py-2 font-bold align-top" style="width:30%; background-color: var(--background, #f3f4f6);">${row.label}</td>
                        <td class="border px-4 py-2" style="width:70%; background-color: var(--background, #fff);">
                            <div class="overflow-x-auto">
                                <table class="min-w-full border text-xs">
                                    <thead>
                                        <tr>
                                            ${allKeys.map(k => `<th class="border px-2 py-1 bg-gray-100">${k}</th>`).join("")}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${arr.map((obj, i) => `
                                            <tr key=${i}>
                                                ${allKeys.map((k:any) => {
                                                    // If the key is 'icon', prepend WEB_URL if not already present
                                                    if (k === "icon" && obj[k]) {
                                                        const iconUrl = obj[k].startsWith("http") ? obj[k] : (typeof window !== "undefined" && WEB_URL ? WEB_URL : "/") + obj[k];
                                                        return `<td class="border px-2 py-1"><img src="${iconUrl}" alt="icon" style="max-width:40px;max-height:40px;border-radius:6px;" /></td>`;
                                                    }
                                                    return `<td class="border px-2 py-1">${obj && obj[k] !== undefined ? (typeof obj[k] === "object" ? JSON.stringify(obj[k]) : obj[k]) : ""}</td>`;
                                                }).join("")}
                                            </tr>
                                        `).join("")}
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
                `;
            }
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
                    ? `<td class="border px-4 py-2" style="width:70%; background-color: var(--background, #fff);"><img style="border-radius: 8px; max-width: 120px; max-height: 120px;" src="${displayValue}" alt="${row.label}" /></td>`
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