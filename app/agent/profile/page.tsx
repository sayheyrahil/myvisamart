"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import ProfileTab from "./tabs/ProfileTab";
import TransactionsTab from "./tabs/TransactionsTab";
import WalletTab from "./tabs/WalletTab";
import OverstayTab from "./tabs/OverstayTab";
import TrainingTab from "./tabs/TrainingTab";

export default function Page() {
    const [form, setForm] = useState({
        identifier: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [activeTab, setActiveTab] = useState<"profile" | "transactions" | "wallet" | "overstay" | "training" | "password" | "signout">("profile");
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [showSupportTicket, setShowSupportTicket] = useState(false);
    const [changePasswordForm, setChangePasswordForm] = useState({
        current: "",
        next: "",
    });
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNext, setShowNext] = useState(false);

    // Dummy transaction data
    const transactions: {
        date: string;
        description: string;
        application: string;
        type: string;
        amount: string;
        balance: string;
    }[] = [];

    return (
        <div className="min-h-screen w-full bg-[#f6fafd] py-10">
            {/* Header */}
            <div className="max-w-6xl mx-auto flex flex-col items-start gap-4 mb-8 px-4">
                <div className="flex items-center gap-4 mb-10">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-3xl">
                        <img src="/user-avatar.png" alt="Avatar" className="w-full h-full rounded-full object-cover" />
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
                        onClick={() => {
                            setActiveTab("signout");
                            setShowSupportTicket(true);
                        }}
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
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                    <div className="relative bg-[#f6fafd] rounded-3xl shadow-xl p-8 w-full max-w-md mx-auto">
                        {/* Close Button */}
                        <button
                            className="absolute -right-8 top-4 w-12 h-12 rounded-full bg-[#174ea6] flex items-center justify-center text-white text-2xl"
                            onClick={() => setShowChangePassword(false)}
                            aria-label="Close"
                        >
                            <FaTimes />
                        </button>
                        <div className="mb-8 mt-2 text-3xl font-semibold text-[#101828]">Change Password</div>
                        <form className="flex flex-col gap-6">
                            {/* Current Password */}
                            <div className="relative">
                                <input
                                    type={showCurrent ? "text" : "password"}
                                    className="w-full border border-blue-300 rounded-xl px-4 py-5 text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                                    placeholder="Current Password"
                                    value={changePasswordForm.current}
                                    onChange={e => setChangePasswordForm(f => ({ ...f, current: e.target.value }))}
                                />
                                <button
                                    type="button"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-500"
                                    onClick={() => setShowCurrent(v => !v)}
                                    tabIndex={-1}
                                >
                                    {showCurrent ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {/* New Password */}
                            <div className="relative">
                                <input
                                    type={showNext ? "text" : "password"}
                                    className="w-full border border-blue-300 rounded-xl px-4 py-5 text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                                    placeholder="New Password"
                                    value={changePasswordForm.next}
                                    onChange={e => setChangePasswordForm(f => ({ ...f, next: e.target.value }))}
                                />
                                <button
                                    type="button"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-500"
                                    onClick={() => setShowNext(v => !v)}
                                    tabIndex={-1}
                                >
                                    {showNext ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            <button
                                type="button"
                                className="w-full mt-2 py-4 rounded-full bg-[#174ea6] text-white text-lg font-semibold shadow hover:bg-[#0a53b7] transition"
                                // onClick={...} // Add your submit handler here
                            >
                                Change Password
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Support Ticket Modal */}
            {showSupportTicket && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                    <div className="relative bg-[#f6fafd] rounded-3xl shadow-xl p-8 w-full max-w-4xl mx-auto">
                        {/* Close Button */}
                        <button
                            className="absolute -right-8 top-4 w-12 h-12 rounded-full bg-[#174ea6] flex items-center justify-center text-white text-2xl"
                            onClick={() => setShowSupportTicket(false)}
                            aria-label="Close"
                        >
                            <FaTimes />
                        </button>
                        <div className="mb-8 mt-2 text-3xl font-semibold text-[#101828]">Generate Support Ticket</div>
                        <form className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <select className="border border-blue-300 rounded-lg px-4 py-4 text-base focus:outline-none">
                                    <option>Visa Type</option>
                                    <option>Tourist</option>
                                    <option>Business</option>
                                </select>
                                <input className="border border-blue-300 rounded-lg px-4 py-4 text-base" placeholder="Internal ID" />
                                <input className="border border-blue-300 rounded-lg px-4 py-4 text-base" placeholder="Group Name" />
                            </div>
                            <label className="flex items-center border border-blue-300 rounded-lg px-4 py-4 bg-white cursor-pointer relative">
                                <span className="flex-1 text-gray-400">Drag and Drop Files Here or Click to Upload</span>
                                <svg width="22" height="22" fill="none" stroke="#174ea6" strokeWidth="2" viewBox="0 0 24 24" className="absolute right-4">
                                    <path d="M16 16v6H8v-6M12 12V2m0 10l-4-4m4 4l4-4"/>
                                </svg>
                                <input type="file" className="hidden" />
                            </label>
                            <textarea
                                className="border border-blue-300 rounded-lg px-4 py-4 text-base min-h-[120px] resize-none"
                                placeholder="Write Something"
                            />
                            <div className="flex">
                                <button
                                    type="button"
                                    className="px-10 py-4 rounded-full bg-[#174ea6] text-white font-semibold text-lg shadow hover:bg-[#0a53b7] transition"
                                >
                                    Create Ticket
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
