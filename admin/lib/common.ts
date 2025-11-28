// Common error handler for axios errors
export function handleAxiosError(toast: any, error: any) {
    if (error.response) {
        // Server responded with a status other than 2xx
        toast({
            variant: "destructive",
            title: "Error",
            description: error.response.data.message || "Failed to create .",
        })
    } else if (error.request) {
        // Request was made but no response received
        toast({
            variant: "destructive",
            title: "Network Error",
            description: "Please check your internet connection.",
        })
    } else {
        // Something happened in setting up the request
        toast({
            variant: "destructive",
            title: "Error",
            description: error.message || "An unexpected error occurred.",
        })
    }
}

// Common success handler for axios responses
export function handleAxiosSuccess(
    toast: any,
    response: any,
    form?: any,
    title = "Success",
    description = "Operation completed successfully."
) {
    toast({
        title,
        description,
    })
    if (form && typeof form.reset === "function") {
        form.reset()
    }
    return response.data;
}
