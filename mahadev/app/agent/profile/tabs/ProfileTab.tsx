import React, { useEffect, useState } from "react";
import { axiosInstance } from "@/utils/axios-instance";
import { ENDPOINTS } from "@/utils/constants";
import { handleAxiosError, handleAxiosSuccess } from "@/utils/common";

type AgencyProfile = {
    agencyName: string;
    email: string;
    phone: string;
    country: string;
    accountType: string;
    gstNumber: string;
    panNumber: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zipCode: string;
    aadharName: string;
    aadharNumber: string;
    aadharAddress: string;
};

const defaultProfile: AgencyProfile = {
    agencyName: "",
    email: "",
    phone: "",
    country: "",
    accountType: "",
    gstNumber: "",
    panNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    aadharName: "",
    aadharNumber: "",
    aadharAddress: "",
};

export default function ProfileTab() {
    const [profile, setProfile] = useState<AgencyProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [edit, setEdit] = useState(false);
    const [form, setForm] = useState<AgencyProfile>(defaultProfile);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        axiosInstance.post(ENDPOINTS.get_profile)
            .then((response: any) => {
                const userData = response?.data?.data;
                if (userData) {
                    setProfile(userData);
                    setForm(userData);
                } else {
                    setProfile(null);
                }
            })
            .catch((err: any) => {
                handleAxiosError(err);
                setProfile(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            const res = await axiosInstance.post(ENDPOINTS.update_profile, form);
            handleAxiosSuccess(res, form);
            setProfile(form);
            setEdit(false);
        } catch (err) {
            handleAxiosError(err);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="max-w-6xl mx-auto px-4 py-20 text-center text-lg text-gray-500">
                Loading profile...
            </div>
        );
    }

    // If no profile, allow entry
    if (!profile || edit) {
        return (
            <>
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 mb-8 px-4">
                    <div className="flex-1 bg-white rounded-xl shadow p-4 flex flex-col gap-1">
                        <div className="text-xs text-gray-400">Contact Us at</div>
                        <input
                            className="font-medium text-[#101828] border-b border-blue-200 outline-none"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                        />
                        <input
                            className="text-[#101828] text-sm border-b border-blue-200 outline-none"
                            name="phone"
                            placeholder="Phone"
                            value={form.phone}
                            onChange={handleChange}
                        />
                        <div className="text-xs text-gray-400 mt-2">
                            Please only call if it’s a real emergency or escalation. For everything else, please create a support ticket.
                        </div>
                    </div>
                    <div className="flex-1 bg-white rounded-xl shadow p-4 flex flex-col justify-center items-center">
                        <div className="text-[#101828] text-base mb-2">Have questions about the product?</div>
                        <button className="px-6 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold shadow hover:bg-blue-100 transition text-sm">
                            Join Demo Call
                        </button>
                    </div>
                </div>

                {/* Agency Information */}
                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow p-8 mb-8 px-4">
                    <div className="text-2xl font-semibold mb-6">Agency Information</div>
                    <form className="flex flex-col gap-6" onSubmit={handleSave}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                className="border border-blue-200 rounded-lg px-4 py-3 text-base"
                                name="agencyName"
                                placeholder="Agency Name"
                                value={form.agencyName}
                                onChange={handleChange}
                            />
                            <input
                                className="border border-blue-200 rounded-lg px-4 py-3 text-base"
                                name="accountType"
                                placeholder="Account Type"
                                value={form.accountType}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                className="border border-blue-200 rounded-lg px-4 py-3 text-base"
                                name="country"
                                placeholder="Country"
                                value={form.country}
                                onChange={handleChange}
                            />
                            <input
                                className="border border-blue-200 rounded-lg px-4 py-3 text-base"
                                name="gstNumber"
                                placeholder="GST Number"
                                value={form.gstNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                className="border border-blue-200 rounded-lg px-4 py-3 text-base"
                                name="panNumber"
                                placeholder="PAN Number"
                                value={form.panNumber}
                                onChange={handleChange}
                            />
                            <input
                                className="border border-blue-200 rounded-lg px-4 py-3 text-base"
                                name="phone"
                                placeholder="Your mobile number"
                                value={form.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <input
                            className="border border-blue-200 rounded-lg px-4 py-3 text-base"
                            name="addressLine1"
                            placeholder="Address Line 1*"
                            value={form.addressLine1}
                            onChange={handleChange}
                        />
                        <input
                            className="border border-blue-200 rounded-lg px-4 py-3 text-base"
                            name="addressLine2"
                            placeholder="Address Line 2"
                            value={form.addressLine2}
                            onChange={handleChange}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <input
                                className="border border-blue-200 rounded-lg px-4 py-3 text-base"
                                name="city"
                                placeholder="City"
                                value={form.city}
                                onChange={handleChange}
                            />
                            <input
                                className="border border-blue-200 rounded-lg px-4 py-3 text-base"
                                name="state"
                                placeholder="State"
                                value={form.state}
                                onChange={handleChange}
                            />
                            <input
                                className="border border-blue-200 rounded-lg px-4 py-3 text-base"
                                name="zipCode"
                                placeholder="Zip Code"
                                value={form.zipCode}
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            className="w-32 mt-2 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-full font-medium transition text-base"
                            type="submit"
                            disabled={saving}
                        >
                            {saving ? "Saving..." : "Save"}
                        </button>
                    </form>
                </div>

                {/* Aadhar Details */}
                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow p-8 mb-8 px-4">
                    <div className="text-2xl font-semibold mb-6">Aadhar details</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <input
                            className="border border-blue-200 rounded-lg px-4 py-3 text-base"
                            name="aadharName"
                            placeholder="Name as per Aadhar"
                            value={form.aadharName}
                            onChange={handleChange}
                        />
                        <input
                            className="border border-blue-200 rounded-lg px-4 py-3 text-base"
                            name="aadharNumber"
                            placeholder="Aadhar number"
                            value={form.aadharNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <input
                        className="border border-blue-200 rounded-lg px-4 py-3 text-base mb-4"
                        name="aadharAddress"
                        placeholder="Address"
                        value={form.aadharAddress}
                        onChange={handleChange}
                    />
                </div>

                {/* Office Photo */}
                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow p-8 px-4">
                    <div className="text-2xl font-semibold mb-6">Office Photo</div>
                    <label className="flex items-center border border-blue-200 rounded-lg px-4 py-3 cursor-pointer bg-white w-full max-w-xl opacity-60">
                        <span className="flex-1 text-gray-500">Office photo</span>
                        <svg width="20" height="20" fill="none" stroke="#bdbdbd" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M16 16v6H8v-6M12 12V2m0 10l-4-4m4 4l4-4" />
                        </svg>
                        <input type="file" className="hidden" disabled />
                    </label>
                </div>
            </>
        );
    }

    // If profile exists and not editing, show as read-only
    return (
        <>
            {/* Info Cards */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 mb-8 px-4">
                <div className="flex-1 bg-white rounded-xl shadow p-4 flex flex-col gap-1">
                    <div className="text-xs text-gray-400">Contact Us at</div>
                    <div className="font-medium text-[#101828]">{profile.email}</div>
                    <div className="text-[#101828] text-sm">{profile.phone}</div>
                    <div className="text-xs text-gray-400 mt-2">
                        Please only call if it’s a real emergency or escalation. For everything else, please create a support ticket.
                    </div>
                </div>
                <div className="flex-1 bg-white rounded-xl shadow p-4 flex flex-col justify-center items-center">
                    <div className="text-[#101828] text-base mb-2">Have questions about the product?</div>
                    <button className="px-6 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold shadow hover:bg-blue-100 transition text-sm">
                        Join Demo Call
                    </button>
                </div>
            </div>

            {/* Agency Information */}
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow p-8 mb-8 px-4">
                <div className="flex justify-between items-center mb-6">
                    <div className="text-2xl font-semibold">Agency Information</div>
                    <button
                        className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium shadow hover:bg-blue-100 transition text-sm"
                        onClick={() => setEdit(true)}
                    >
                        Edit
                    </button>
                </div>
                <form className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input className="border border-blue-200 rounded-lg px-4 py-3 text-base" value={profile.agencyName} disabled placeholder="Agency Name" />
                        <input className="border border-blue-200 rounded-lg px-4 py-3 text-base" value={profile.accountType} disabled placeholder="Account Type" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input className="border border-blue-200 rounded-lg px-4 py-3 text-base" value={profile.country} disabled placeholder="Country" />
                        <input className="border border-blue-200 rounded-lg px-4 py-3 text-base" value={profile.gstNumber} disabled placeholder="GST Number" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input className="border border-blue-200 rounded-lg px-4 py-3 text-base" value={profile.panNumber} disabled placeholder="PAN Number" />
                        <input className="border border-blue-200 rounded-lg px-4 py-3 text-base" value={profile.phone} disabled placeholder="Your mobile number" />
                    </div>
                    <input className="border border-blue-200 rounded-lg px-4 py-3 text-base" value={profile.addressLine1} disabled placeholder="Address Line 1*" />
                    <input className="border border-blue-200 rounded-lg px-4 py-3 text-base" value={profile.addressLine2} disabled placeholder="Address Line 2" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <input className="border border-blue-200 rounded-lg px-4 py-3 text-base" value={profile.city} disabled placeholder="City" />
                        <input className="border border-blue-200 rounded-lg px-4 py-3 text-base" value={profile.state} disabled placeholder="State" />
                        <input className="border border-blue-200 rounded-lg px-4 py-3 text-base" value={profile.zipCode} disabled placeholder="Zip Code" />
                    </div>
                    <button className="w-32 mt-2 bg-blue-700 text-white py-3 rounded-full font-medium transition text-base opacity-60 cursor-not-allowed" type="button" disabled>
                        Save
                    </button>
                </form>
            </div>

            {/* Aadhar Details */}
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow p-8 mb-8 px-4">
                <div className="text-2xl font-semibold mb-6">Aadhar details</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <input className="border border-blue-200 rounded-lg px-4 py-3 text-base" value={profile.aadharName} disabled placeholder="Name as per Aadhar" />
                    <input className="border border-blue-200 rounded-lg px-4 py-3 text-base" value={profile.aadharNumber} disabled placeholder="Aadhar number" />
                </div>
                <input className="border border-blue-200 rounded-lg px-4 py-3 text-base mb-4" value={profile.aadharAddress} disabled placeholder="Address" />
            </div>

            {/* Office Photo */}
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow p-8 px-4">
                <div className="text-2xl font-semibold mb-6">Office Photo</div>
                <label className="flex items-center border border-blue-200 rounded-lg px-4 py-3 cursor-pointer bg-white w-full max-w-xl opacity-60">
                    <span className="flex-1 text-gray-500">Office photo</span>
                    <svg width="20" height="20" fill="none" stroke="#bdbdbd" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M16 16v6H8v-6M12 12V2m0 10l-4-4m4 4l4-4" />
                    </svg>
                    <input type="file" className="hidden" disabled />
                </label>
            </div>
        </>
    );
}
