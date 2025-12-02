"use client";
import React, { useState } from "react";
 import ProfileTab from "./tabs/ProfileTab";
import TransactionsTab from "./tabs/TransactionsTab";
import WalletTab from "./tabs/WalletTab";
import OverstayTab from "./tabs/OverstayTab";
import TrainingTab from "./tabs/TrainingTab";
import ChangePasswordModal from "./tabs/ChangePasswordModal";
import SupportTicketModal from "./tabs/SupportTicketModal";
import { axiosInstance } from "@/utils/axios-instance";
import { ENDPOINTS } from "@/utils/constants";
import { useRouter } from "next/navigation";

export default function Page() {
 
 
    const [activeTab, setActiveTab] = useState<"profile" | "transactions" | "wallet" | "overstay" | "training" | "password" | "signout">("profile");
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [showSupportTicket, setShowSupportTicket] = useState(false);
    const [changePasswordForm, setChangePasswordForm] = useState({
        current: "",
        next: "",
    });
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNext, setShowNext] = useState(false);
    const router = useRouter();

    // Dummy transaction data
    const transactions: {
        date: string;
        description: string;
        application: string;
        type: string;
        amount: string;
        balance: string;
    }[] = [];

    const handleSignOut = async () => {
        try {
            await axiosInstance.post(ENDPOINTS.logout);
        } catch (e) {
            // ignore error, proceed with logout
        }
        if (typeof window !== "undefined") {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            router.push("/home");
        }
    };

    return (
        <div className="min-h-screen w-full bg-[#f6fafd] py-10">
            {/* Header */}
            <div className="max-w-6xl mx-auto flex flex-col items-start gap-4 mb-8 px-4">
                <div className="flex items-center gap-4 mb-10">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-3xl">
                        <img src="/img/user-avatar.png" alt="Avatar" className="w-full h-full rounded-full object-cover" />
                    </div>
                    <div>
                        <div className="text-2xl font-semibold text-[#101828]">Platinum Tours & Travels</div>
                        <div className="text-gray-500 text-base">info@platinumyatra.com</div>
                    </div>
                </div>
                {/* Tabs */}
                <div className="flex gap-6 mt-4 md:mt-0 text-[#667085] text-base font-medium border-b border-gray-200 w-full md:w-auto">
                    <button
                        className={`pb-2 px-2 ${activeTab === "profile" ? "border-b-2 border-blue-700 text-blue-700" : ""}`}
                        onClick={() => setActiveTab("profile")}
                    >Profile</button>
                    <button
                        className={`pb-2 px-2 ${activeTab === "transactions" ? "border-b-2 border-blue-700 text-blue-700" : ""}`}
                        onClick={() => setActiveTab("transactions")}
                    >Transactions</button>
                    <button
                        className={`pb-2 px-2 ${activeTab === "wallet" ? "border-b-2 border-blue-700 text-blue-700" : ""}`}
                        onClick={() => setActiveTab("wallet")}
                    >Load Wallet</button>
                    <button
                        className={`pb-2 px-2 ${activeTab === "overstay" ? "border-b-2 border-blue-700 text-blue-700" : ""}`}
                        onClick={() => setActiveTab("overstay")}
                    >Overstay</button>
                    <button
                        className={`pb-2 px-2 ${activeTab === "training" ? "border-b-2 border-blue-700 text-blue-700" : ""}`}
                        onClick={() => setActiveTab("training")}
                    >Training</button>
                    <button
                        className={`pb-2 px-2 ${activeTab === "password" ? "border-b-2 border-blue-700 text-blue-700" : ""}`}
                        onClick={() => {
                            setActiveTab("password");
                            setShowChangePassword(true);
                        }}
                    >Change Password</button>
                    <button
                        className={`pb-2 px-2 ${activeTab === "signout" ? "border-b-2 border-blue-700 text-blue-700" : ""}`}
                        onClick={handleSignOut}
                    >Sign Out</button>
                </div>
            </div>

            {/* Tab Content */}
            {activeTab === "profile" && <ProfileTab />}
            {activeTab === "transactions" && <TransactionsTab transactions={transactions} />}
            {activeTab === "wallet" && <WalletTab />}
            {activeTab === "overstay" && <OverstayTab />}
            {activeTab === "training" && <TrainingTab />}
            {/* Modals */}
            {showChangePassword && (
                <ChangePasswordModal
                    showCurrent={showCurrent}
                    setShowCurrent={setShowCurrent}
                    showNext={showNext}
                    setShowNext={setShowNext}
                    changePasswordForm={changePasswordForm}
                    setChangePasswordForm={setChangePasswordForm}
                    onClose={() => {
                        setShowChangePassword(false);
                        setActiveTab("profile");
                    }}
                />
            )}
            {showSupportTicket && (


                <SupportTicketModal onClose={() => setShowSupportTicket(false)} />
            )}
        </div>
    );
}
