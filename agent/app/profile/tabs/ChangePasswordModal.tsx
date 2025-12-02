import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { axiosInstance } from "@/utils/axios-instance";
import { ENDPOINTS } from "@/utils/constants";
import { handleAxiosError, handleAxiosSuccess } from "@/utils/common";
import { useRouter } from "next/navigation";

export default function ChangePasswordModal({
  showCurrent,
  setShowCurrent,
  showNext,
  setShowNext,
  changePasswordForm,
  setChangePasswordForm,
  onClose,
}: {
  showCurrent: boolean;
  setShowCurrent: (v: boolean) => void;
  showNext: boolean;
  setShowNext: (v: boolean) => void;
  changePasswordForm: { current: string; next: string };
  setChangePasswordForm: React.Dispatch<React.SetStateAction<{ current: string; next: string }>>;
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const payload = {
      currentPassword: changePasswordForm.current,
      newPassword: changePasswordForm.next,
    };

    await axiosInstance.post(ENDPOINTS.change_password, payload)
      .then((response) => {
        handleAxiosSuccess(response, {});
        setChangePasswordForm({ current: "", next: "" });
        onClose();
      })
      .catch((err) => {
        setError("Failed to change password.");
        handleAxiosError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="relative bg-[#f6fafd] rounded-3xl shadow-xl p-8 w-full max-w-md mx-auto">
        {/* Close Button */}
        <button
          className="absolute -right-8 top-4 w-12 h-12 rounded-full bg-[#174ea6] flex items-center justify-center text-white text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          <FaTimes />
        </button>
        <div className="mb-8 mt-2 text-3xl font-semibold text-[#101828]">Change Password</div>
        <form className="flex flex-col gap-6" onSubmit={handleChangePassword}>
          {/* Current Password */}
          <div className="relative">
            <input
              type={showCurrent ? "text" : "password"}
              className="w-full border border-blue-300 rounded-xl px-4 py-5 text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Current Password"
              value={changePasswordForm.current}
              onChange={e => setChangePasswordForm(f => ({ ...f, current: e.target.value }))}
              required
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-500"
              onClick={() => setShowCurrent(!showCurrent)}
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
              required
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-500"
              onClick={() => setShowNext(!showNext)}
              tabIndex={-1}
            >
              {showNext ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full mt-2 py-4 rounded-full bg-[#174ea6] text-white text-lg font-semibold shadow hover:bg-[#0a53b7] transition"
            disabled={loading}
          >
            {loading ? "Changing..." : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
