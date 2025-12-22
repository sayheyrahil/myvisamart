import React from "react";
import ImageUpload from "@/components/common/image-upload";

type WhyReason = {
  icon: string;
  title: string;
  description: string;
};

type Props = {
  whyReasons: WhyReason[];
  onChange: (idx: number, field: "icon" | "title" | "description", value: string) => void;
  onAdd: () => void;
  onRemove: (idx: number) => void;
  uploading: boolean;
  setUploading: (val: boolean) => void;
};

const WhyReasons: React.FC<Props> = ({
  whyReasons,
  onChange,
  onAdd,
  onRemove,
  uploading,
  setUploading,
}) => (
  <div>
    <label className="block font-medium mb-2">Why Reasons</label>
    {whyReasons.map((item, idx) => (
      <div key={idx} className="mb-4 border rounded p-3 bg-gray-50">
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">Icon:</label>
          <ImageUpload
            value={item.icon}
            preview={item.icon}
            onChange={(imgUrl, previewUrl) => {
              const image = Array.isArray(imgUrl) ? imgUrl[0] : imgUrl;
              onChange(idx, "icon", image);
            }}
            uploading={uploading}
            setUploading={setUploading}
            type="countries/extra/why_reasons"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">Title:</label>
          <input
            type="text"
            value={item.title}
            onChange={e => onChange(idx, "title", e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">Description:</label>
          <textarea
            value={item.description}
            onChange={e => onChange(idx, "description", e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter description"
          />
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onRemove(idx)}
      className="text-white px-3 py-2 rounded-xl bg-brand"
            disabled={whyReasons.length === 1}
          >
            Remove
          </button>
          {idx === whyReasons.length - 1 && (
            <button
              type="button"
              onClick={onAdd}
      className="text-white px-3 py-2 rounded-xl bg-brand"
            >
              Add
            </button>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default WhyReasons;
