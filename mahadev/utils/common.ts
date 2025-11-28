import { toast } from 'react-toastify';

// Common error handler for axios errors
export function handleAxiosError(error: any) {
    if (error?.response) {
        toast.error(error.response.data.message || "Failed to create.");
    } else if (error?.request) {
        toast.error("Please check your internet connection.");
    } else {
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
