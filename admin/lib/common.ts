import { toast } from 'react-toastify';

// Common error handler for axios errors
export function handleAxiosError(error: any) {
    console.error("Axios Error:", error.response?.data);

    if (error?.response) {
        // Handle validation errors (object of arrays)
        const data = error.response.data?.data;
        if (data && typeof data === "object" && !Array.isArray(data)) {
            // Get first error message from object
            const firstKey = Object.keys(data)[0];
            const firstMsgArr = data[firstKey];
            if (Array.isArray(firstMsgArr) && firstMsgArr.length > 0) {
                toast.error(firstMsgArr[0]);
                return;
            }
        }
        toast.error(error.response.data.message || "Failed to create.");
    } else if (error?.request) {
        toast.error("Please check your internet connection.");
     
    } else if (error.response?.data?.data) {
        toast.error(error.response.data?.data.message || "An unexpected error occurred.");
    } 
    
    else {
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
