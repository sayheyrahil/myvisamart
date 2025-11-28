import { toast } from 'react-toastify';

// Common error handler for axios errors
export function handleAxiosError(error: any) {

    console.error("Axios Error:", error?.response);
    if (error?.response) {

        console.error("Response Data:", error.response.data.message);
        // Server responded with a status other than 2xx
        toast.error(error.response.data.message || "Failed to create.");
    } else if (error?.request) {
        // Request was made but no response received
        toast.error("Please check your internet connection.");
    } else {
        // Something happened in setting up the request
        toast.error(error.message || "An unexpected error occurred.");
    }
}

// Common success handler for axios responses
export function handleAxiosSuccess(
    response: any,
    form?: any,
    description: string = "Successfully created."
) {
    toast.success(response?.data?.message || description);
    if (form && typeof form.reset === "function") {
        form.reset();
    }
    return response.data;
}
