'use client';
import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Select from "react-select";
import { allCountries as countryRegionData } from "country-region-data";
import { axiosInstance } from "@/utils/axios-instance";
import { handleAxiosError, handleAxiosSuccess } from "@/utils/common";
import { useRouter } from "next/navigation";
import ProfileImageUpload from "@/components/ProfileImageUpload";
import { ENDPOINTS } from "@/utils/constants";

export default function Page() {
    const [userData, setUserData] = React.useState<any>(null);
    const [countries, setCountries] = React.useState<{ label: string; value: string }[]>([]);
    const [regions, setRegions] = React.useState<{ label: string; value: string }[]>([]);
    const [selectedCountry, setSelectedCountry] = React.useState<any>(null);
    const [selectedRegion, setSelectedRegion] = React.useState<any>(null);

    // Form fields
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [street, setStreet] = React.useState("");
    const [pan, setPan] = React.useState("");
    const [aadhaar, setAadhaar] = React.useState("");
    const [gst, setGst] = React.useState("");
    const [imageUpload, setImageUpload] = React.useState<{
        image_url: string | null;
        store_url: string | null;
    }>({
        image_url: null,
        store_url: null,
    });

    const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState<string | null>(null);
    const router = useRouter();

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            const localUser = JSON.parse(localStorage.getItem("userData") || "{}");
            setUserData(localUser);
            setName(localUser?.name || "");
            setPhone(localUser?.phone || "");
            setEmail(localUser?.email || "");
        }
    }, []);

    React.useEffect(() => {
        // Populate all countries
        const countryOptions = countryRegionData.map((c: any) => {
            if (Array.isArray(c) && typeof c[0] === "string" && Array.isArray(c[2])) {
                return {
                    label: c[0],
                    value: c[1],
                    regions: c[2].map((r: any) => ({
                        label: r[0],
                        value: r[1] || r[0],
                    })),
                };
            }
            return {
                label: c.countryName,
                value: c.countryShortCode,
                regions: (c.regions || []).map((r: any) => ({
                    label: r.name,
                    value: r.shortCode || r.name,
                })),
            };
        });
        setCountries(countryOptions.map(({ label, value }) => ({ label, value })));
    }, []);

    React.useEffect(() => {
        if (selectedCountry) {
            const country: any =
                countryRegionData.find((c: any) =>
                    (Array.isArray(c) && c[1] === selectedCountry.value) ||
                    (c.countryShortCode === selectedCountry.value)
                );
            let regions: { label: string; value: string }[] = [];
            if (country) {
                if (Array.isArray(country) && Array.isArray(country[2])) {
                    regions = country[2].map((r: any) => ({
                        label: r[0],
                        value: r[1] || r[0],
                    }));
                } else if (country.regions && country.regions.length > 0) {
                    regions = country.regions.map((r: any) => ({
                        label: r.name,
                        value: r.shortCode || r.name,
                    }));
                }
            }
            setRegions(regions);
            setSelectedRegion(null);
        } else {
            setRegions([]);
            setSelectedRegion(null);
        }
    }, [selectedCountry]);

 

    // Form validation
    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!name.trim()) newErrors.name = "Full Name is required";
        if (!phone) newErrors.phone = "Phone is required";
        if (!email) newErrors.email = "Email is required";
        if (!street.trim()) newErrors.street = "Street is required";
        if (!selectedCountry) newErrors.country = "Country is required";
        if (!selectedRegion) newErrors.region = "State/District/Region is required";
        if (!pan.trim()) newErrors.pan = "Pan Card is required";
        if (!aadhaar.trim()) newErrors.aadhaar = "Aadhaar Card is required";
        if (!gst.trim()) newErrors.gst = "GST No. is required";
        // profilePic is optional
        return newErrors;
    };

    // Submit handler
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSuccess(null);
        const newErrors = validate();
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        setLoading(true);
        try {
  
            // Prepare payload as a plain object (not FormData)
            const payload = {
                name,
                phone,
                email,
                street,
                country: selectedCountry?.label || "",
                state: selectedRegion?.label || "",
                panNumber:pan,
                aadharNumber:aadhaar,
                gstNumber:gst,
                profile_pic: imageUpload.store_url || "",
                user_id: userData?.id || null,
            };

            await axiosInstance.post(ENDPOINTS.update_profile, payload)
                .then((response) => {
                    handleAxiosSuccess(response, payload);
                })
                .catch((err) => {
                    handleAxiosError(err);
                })
                .finally(() => {
                    setLoading(false);
                    localStorage.removeItem("userData");
                    router.push('/agent/signin');

                });

        } catch (err: any) {
            setSuccess(null);
            handleAxiosError(err);
            setErrors({ api: err?.response?.data?.message || "Failed to update profile" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-white">
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
                <div className="w-full md:w-1/2 flex flex-col px-4 sm:px-8 md:px-16 py-6 md:py-10 relative  ">
                    <div className="w-full max-w-xs sm:max-w-sm md:w-[50%] mx-auto">
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit} encType="multipart/form-data">
                            {/* Title */}
                            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Create Profile</h2>
                            {/* Profile Picture Upload */}
                            <ProfileImageUpload imageUpload={imageUpload} setImageUpload={setImageUpload} />
                            {/* Full Name */}
                            <input
                                className={`w-full border border-blue-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-200 outline-none text-base ${errors.name ? "border-red-500" : ""}`}
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Full Name"
                            />
                            {errors.name && <div className="text-red-500 text-xs">{errors.name}</div>}
                            {/* Mobile Number with Country Flag */}
                            <div className={`w-full border border-blue-300 rounded-lg px-4 py-3 flex gap-2 items-center ${errors.phone ? "border-red-500" : ""}`}>
                                <PhoneInput
                                    international
                                    defaultCountry="IN"
                                    value={phone}
                                    className="w-full"
                                    onChange={(value) => setPhone(value || "")}
                                    countrySelectProps={{
                                        searchable: 'true',
                                    }}
                                />
                            </div>
                            {errors.phone && <div className="text-red-500 text-xs">{errors.phone}</div>}
                            {/* Email */}
                            <input
                                className={`w-full border border-blue-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-200 outline-none text-base ${errors.email ? "border-red-500" : ""}`}
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Email"
                            />
                            {errors.email && <div className="text-red-500 text-xs">{errors.email}</div>}
                            {/* Street */}
                            <input
                                className={`w-full border border-blue-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-200 outline-none text-base ${errors.street ? "border-red-500" : ""}`}
                                type="text"
                                value={street}
                                onChange={e => setStreet(e.target.value)}
                                placeholder="Street"
                            />
                            {errors.street && <div className="text-red-500 text-xs">{errors.street}</div>}
                            {/* Country & District/Region */}
                            <div className="flex gap-2">
                                <div className="w-1/2 border-blue-300 ">
                                    <Select
                                        options={countries}
                                        value={selectedCountry}
                                        onChange={setSelectedCountry}
                                        placeholder="Country"
                                        classNamePrefix="react-select border-blue-300 "
                                    />
                                    {errors.country && <div className="text-red-500 text-xs">{errors.country}</div>}
                                </div>
                                <div className="w-1/2 border-blue-300 ">
                                    <Select
                                        options={regions}
                                        value={selectedRegion}
                                        onChange={setSelectedRegion}
                                        placeholder="State / District "
                                        classNamePrefix="react-select border-blue-300 "
                                        isDisabled={!selectedCountry}
                                    />
                                    {errors.region && <div className="text-red-500 text-xs">{errors.region}</div>}
                                </div>
                            </div>
                            {/* Pan Card & Aadhaar Card */}
                            <div className="flex gap-2">
                                <div className="relative w-1/2">
                                    <input
                                        className={`w-full border border-blue-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-200 outline-none text-base ${errors.pan ? "border-red-500" : ""}`}
                                        type="text"
                                        value={pan}
                                        onChange={e => setPan(e.target.value)}
                                        placeholder="Pan Card"
                                    />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 cursor-pointer">
                                        {/* ...existing code... */}
                                    </span>
                                    {errors.pan && <div className="text-red-500 text-xs">{errors.pan}</div>}
                                </div>
                                <div className="relative w-1/2">
                                    <input
                                        className={`w-full border border-blue-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-200 outline-none text-base ${errors.aadhaar ? "border-red-500" : ""}`}
                                        type="text"
                                        value={aadhaar}
                                        onChange={e => setAadhaar(e.target.value)}
                                        placeholder="Aadhaar Card"
                                    />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 cursor-pointer">
                                        {/* ...existing code... */}
                                    </span>
                                    {errors.aadhaar && <div className="text-red-500 text-xs">{errors.aadhaar}</div>}
                                </div>
                            </div>
                            {/* GST No. */}
                            <input
                                className={`w-full border border-blue-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-200 outline-none text-base ${errors.gst ? "border-red-500" : ""}`}
                                type="text"
                                value={gst}
                                onChange={e => setGst(e.target.value)}
                                placeholder="GST No."
                            />
                            {errors.gst && <div className="text-red-500 text-xs">{errors.gst}</div>}
                            {/* API Error */}
                            {errors.api && <div className="text-red-500 text-xs">{errors.api}</div>}
                            {/* Success */}
                            {success && <div className="text-green-600 text-xs">{success}</div>}
                            {/* Save Button */}
                            <button
                                className="w-full bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-full font-medium transition text-base mt-2"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? "Saving..." : "Save"}
                            </button>
                        </form>
                    </div>
                    {/* Responsive image: static and centered on mobile, absolute on md+ */}
                    <div className="w-16 h-16 mx-auto mt-6 md:w-28 md:h-28 md:absolute md:bottom-14 md:right-0 md:mt-0 md:mx-0">
                        <img
                            src="/sidebgBg.png"
                            alt="Signup Visual"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}
