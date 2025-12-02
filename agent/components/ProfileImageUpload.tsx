// filepath: /Users/macbookpro/Documents/project/myvisamart/mahadev/components/ProfileImageUpload.tsx
import { axiosInstance } from "@/utils/axios-instance";
import { handleAxiosError } from "@/utils/common";
import { ENDPOINTS } from "@/utils/constants";
import axios from "axios";
import React from "react";

interface Props {
    imageUpload: { image_url: string | null; store_url: string | null };
    setImageUpload: (data: { image_url: string | null; store_url: string | null }) => void;
}

const ProfileImageUpload: React.FC<Props> = ({ imageUpload, setImageUpload }) => {
    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append("files", file);

            try {
                await axios.post(
                    ENDPOINTS.image_upload + '?type=profile_picture', // append query param to URL, not to formData
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                )
                    .then((response) => {
                        setImageUpload(response.data.data);
                        console.log("Upload response:", response.data.data);
                    })
                    .catch((err) => {
                        handleAxiosError(err);
                    })
                    .finally(() => {});
            } catch (err) {
                console.error("Upload error:", err);
            }
        }
    };

    return (
        <div className="flex flex-col items-center mb-2">
            <div className="relative">
                <label className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-4xl overflow-hidden cursor-pointer border-2 border-dashed border-gray-300 hover:border-blue-400 transition-all duration-150">
                    {imageUpload?.image_url ? (
                        <img src={imageUpload.image_url} alt="Profile Preview" className="w-full h-full object-cover rounded-full" />
                    ) : (
                        <span className="text-center text-xs text-gray-400 px-2">Click to upload image here</span>
                    )}
                    <input type="file" className="hidden" onChange={handleChange} />
                </label>
            </div>
            <span className="text-gray-500 text-sm mt-2">Add your profile picture</span>
        </div>
    );
};

export default ProfileImageUpload;