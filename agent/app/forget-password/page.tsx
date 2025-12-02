'use client';
import { axiosInstance } from "@/utils/axios-instance";
import { handleAxiosError, handleAxiosSuccess } from "@/utils/common";
import React from "react";
import { useRouter } from "next/navigation"
import { ENDPOINTS } from "@/utils/constants";

export default function Page() {
    const [forgetPasswordData, setForgetPasswordData] = React.useState<string | null>(null);
    const [selected, setSelected] = React.useState<"sms" | "email" | null>(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);
    const [success, setSuccess] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            setForgetPasswordData(localStorage.getItem("forgetPasswordData"));
        }
    }, []);

    const router = useRouter()

    if (!forgetPasswordData) {
        return (
            <div className="h-full w-full flex items-center justify-center bg-white">
                <p className="text-gray-500 text-lg">No data found. Please initiate the password reset process again.</p>
            </div>
        );
    }

    const parsedData = JSON.parse(forgetPasswordData);
    // Helper functions to mask phone and email
    const maskPhone = (phone: string) => {
        if (!phone) return "";
        // Show last 2 digits, mask rest (keep country code)
        const match = phone.match(/^(\+\d{1,3})-(\d+)(\d{2})$/);
        if (match) {
            const country = match[1];
            const masked = "*".repeat(match[2].length) + match[3];
            return `${country}-${masked}`;
        }
        // fallback: mask all but last 2
        return phone.replace(/.(?=..)/g, "*");
    };

    const maskEmail = (email: string) => {
        if (!email) return "";
        const [name, domain] = email.split("@");
        if (!name || !domain) return email;
        // Show first char, mask rest, show last char before @
        const maskedName =
            name.length <= 2
                ? name[0] + "*"
                : name[0] + "*".repeat(name.length - 2) + name[name.length - 1];
        // Show last 4 chars of domain
        const maskedDomain =
            domain.length <= 4
                ? domain
                : "*".repeat(domain.length - 4) + domain.slice(-4);
        return `${maskedName}@${maskedDomain}`;
    };

    const handleContinue = async () => {
        setError(null);
        setSuccess(null);
        if (!selected) {
            setError("Please select an option.");
            return;
        }
        setLoading(true);
        try {
            let payload: any = {};
            if (selected === "sms") {
                payload = { phone: parsedData?.phone };
            } else if (selected === "email") {
                payload = { email: parsedData?.email };
            }
            await axiosInstance.post(ENDPOINTS.forget_password, payload)
                .then((response) => {
                    setSuccess("OTP sent successfully.");
                    handleAxiosSuccess(response, { identifier: parsedData?.email || parsedData?.phone });
                })
                .catch((err) => {
                    setError("Failed to send OTP.");
                    handleAxiosError(err);
                })
                .finally(() => {
                    setLoading(false);
                    router.push('/agent/forget-password-otp');
                });

        } catch (err: any) {
            setError("Failed to send OTP.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-full w-full flex items-center justify-center bg-white">
            <div className="flex flex-col md:flex-row w-full  shadow-none md:shadow-xl rounded-none md:rounded-lg overflow-hidden">
                {/* LEFT SIDE IMAGE */}
                <div className="hidden md:block md:w-1/2 relative">
                    <img
                        src="/Frame427321840.png"
                        alt="Signup Visual"
                        className="w-full h-screen object-cover"
                    />
                    <h1 className="absolute top-10 left-10 text-4xl font-bold text-white drop-shadow-lg">
                        Welcome to Visamart
                    </h1>
                </div>

                {/* RIGHT SIDE FORM */}
                <div className="w-full md:w-1/2 flex flex-col px-4 sm:px-8 md:px-16 py-6 md:py-12 relative justify-center items-center">



                    <div className="h-full w-full flex items-center justify-center bg-white">
                        <div className="w-full max-w-md mx-auto flex flex-col items-center">
                            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Forgot Password</h2>
                            <p className="text-gray-500 text-sm mb-8 text-center">
                                Select which contact details should we use to reset your password
                            </p>
                            <div className="w-full flex flex-col gap-4 mb-8">
                                {/* SMS Option */}
                                <button
                                    type="button"
                                    onClick={() => setSelected("sms")}
                                    className={`flex items-center w-full border rounded-lg px-4 py-4 gap-4 transition ${selected === "sms"
                                        ? "border-brand bg-blue-50"
                                        : "border-blue-200 bg-white"
                                        }`}
                                >
                                    <img
                                        src="/image8.png"
                                        alt="sms"
                                        className="w-8 h-8"
                                    />
                                    <div className="flex flex-col items-start">
                                        <span className="text-gray-700 font-medium">Via SMS</span>
                                        <span className="text-gray-500 text-sm">{maskPhone(parsedData?.phone)}</span>
                                    </div>
                                </button>
                                {/* Email Option */}
                                <button
                                    type="button"
                                    onClick={() => setSelected("email")}
                                    className={`flex items-center w-full border rounded-lg px-4 py-4 gap-4 transition ${selected === "email"
                                        ? "border-brand bg-blue-50"
                                        : "border-blue-200 bg-white"
                                        }`}
                                >
                                    <img
                                        src="/image8.png"
                                        alt="email"
                                        className="w-8 h-8"
                                    />
                                    <div className="flex flex-col items-start">
                                        <span className="text-gray-700 font-medium">Via Email</span>
                                        <span className="text-gray-500 text-sm">{maskEmail(parsedData?.email)}</span>
                                    </div>
                                </button>
                            </div>
                            <button
                                className="w-full bg-brand hover:bg-brand-dark text-white py-3 rounded-full font-medium transition text-base"
                                type="button"
                                onClick={handleContinue}
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Continue"}
                            </button>
                            {error && <div className="text-red-500 text-xs mt-2">{error}</div>}
                            {success && <div className="text-green-600 text-xs mt-2">{success}</div>}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
