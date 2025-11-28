'use client';
import { axiosInstance } from "@/utils/axios-instance";
import { handleAxiosError, handleAxiosSuccess } from "@/utils/common";
import React from "react";
import { useRouter } from "next/navigation"
import { ENDPOINTS } from "@/utils/constants";


export default function Page() {
    const [maskedContact, setMaskedContact] = React.useState<string>("");
    const router = useRouter()
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);
    const [success, setSuccess] = React.useState<string | null>(null);
    const [otp, setOtp] = React.useState<string>("");

    // Helper to handle OTP input change
    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
        let value = e.target.value.replace(/[^0-9]/g, "");
        if (value.length > 1) value = value.slice(-1);
        let otpArr = otp.split("");
        otpArr[idx] = value;
        const newOtp = otpArr.join("").padEnd(4, "");
        setOtp(newOtp);

        // Move to next input if value entered
        if (value && e.target.nextElementSibling) {
            (e.target.nextElementSibling as HTMLInputElement).focus();
        }
    };

    // Helper to render OTP inputs
    const renderOtpInputs = () => {
        const otpArr = otp.padEnd(4, "").split("");
        return Array.from({ length: 4 }).map((_, idx) => (
            <input
                key={idx}
                type="text"
                maxLength={1}
                value={otpArr[idx] || ""}
                onChange={e => handleOtpChange(e, idx)}
                className="w-14 h-14 border border-blue-300 rounded-lg text-center text-2xl focus:outline-none focus:border-brand"
                inputMode="numeric"
                autoComplete="one-time-code"
            />
        ));
    };

    const [forgetPasswordData, setForgetPasswordData] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            setForgetPasswordData(localStorage.getItem("forgetPasswordData"));
        }
    }, []);




    const handleContinue = async () => {
        setError(null);
        setSuccess(null);
        setLoading(true);
        try {
            let payload: any = {
                otp: otp,
                email: forgetPasswordData ? JSON.parse(forgetPasswordData).email : undefined,
                phone: forgetPasswordData ? JSON.parse(forgetPasswordData).phone : undefined
            };

            await axiosInstance.post(ENDPOINTS.forget_password_otp_verify, payload)
                .then((response) => {
                    setSuccess("OTP sent successfully.");
                    handleAxiosSuccess(response, { identifier: "" });
                     localStorage.setItem("resetPasswordToken", response.data.data.token);

                })
                .catch((err) => {
                    setError("Failed to send OTP.");
                    handleAxiosError(err);
                })
                .finally(() => {
                    setLoading(false);
                    router.push('/agent/set-password');
                });

        } catch (err: any) {
            setError("Failed to send OTP.");
        } finally {
            setLoading(false);
        }
    };

    // Resend OTP handler
    const handleResend = async () => {
        setError(null);
        setSuccess(null);
        setLoading(true);
        try {
            let payload: any = {};
            const parsedData = forgetPasswordData ? JSON.parse(forgetPasswordData) : {};
            if (parsedData.phone) {
                payload = { phone: parsedData.phone };
            } else if (parsedData.email) {
                payload = { email: parsedData.email };
            }
            await axiosInstance.post(ENDPOINTS.forget_password, payload)
                .then((response) => {
                    setSuccess("OTP resent successfully.");
                    handleAxiosSuccess(response, { identifier: parsedData.email || parsedData.phone });
                })
                .catch((err) => {
                    setError("Failed to resend OTP.");
                    handleAxiosError(err);
                })
                .finally(() => {
                    setLoading(false);
                    router.push('/agent/forget-password-otp');
                });
        } catch (err: any) {
            setError("Failed to resend OTP.");
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
                                Code has been sent to {forgetPasswordData ? JSON.parse(forgetPasswordData).email || JSON.parse(forgetPasswordData).phone : ""}
                            </p>
                            <form className="w-full flex flex-col items-center">
                                <div className="flex gap-4 mb-6">
                                    {/* OTP Inputs */}
                                    {renderOtpInputs()}
                                </div>
                                <div className="mb-8 text-gray-500 text-sm flex justify-start gap-1">
                                    Didn't receive code?{" "}
                                    <div
                                        className="text-brand font-medium hover:underline"
                                        onClick={() => handleResend()}
                                    >
                                        Resend again.
                                    </div>
                                </div>


                                <button
                                    className="w-full bg-brand hover:bg-brand-dark text-white py-3 rounded-full font-medium transition text-base"
                                    type="button"
                                    onClick={handleContinue}
                                    disabled={loading}
                                >
                                    {loading ? "Sending..." : "Verify"}
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
