import React from "react";
import ImageUpload from "@/components/common/image-upload";

type Item = { title: string; description: string; icon: string };
type Props = {
  requiredDocuments: Item[];
  onChange: (idx: number, field: "title" | "description" | "icon", value: string) => void;
  onAdd: () => void;
  onRemove: (idx: number) => void;
  uploading: boolean;
  setUploading: (val: boolean) => void;
};

const RequiredDocuments: React.FC<Props> = ({
  requiredDocuments,
  onChange,
  onAdd,
  onRemove,
  uploading,
  setUploading,
}) => (
  <div className="mb-4">
    <label className="block font-medium mb-1">Required Documents:</label>
    {requiredDocuments.map((item, idx) => (
      <div key={idx} className="flex gap-2 mb-2 items-center">
        <div className="flex flex-col gap-2 w-full">
          <input
            type="text"
            value={item.title}
            onChange={e => onChange(idx, "title", e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder={`Document ${idx + 1} Title`}
          />
          <input
            type="text"
            value={item.description}
            onChange={e => onChange(idx, "description", e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder={`Document ${idx + 1} Description`}
          />
          <ImageUpload
            value={item.icon}
            preview={item.icon}
            onChange={(imgUrl, previewUrl) => {
              const image = Array.isArray(imgUrl) ? imgUrl[0] : imgUrl;
              onChange(idx, "icon", image);
            }}
            uploading={uploading}
            setUploading={setUploading}
            type="required_document_icon"
          />
        </div>
        <button
          type="button"
          onClick={() => onRemove(idx)}
          disabled={requiredDocuments.length === 1}
          className="text-white px-3 py-2 rounded-xl bg-brand"
        >
          Remove
        </button>
      </div>
    ))}
    <button
      type="button"
      onClick={onAdd}
      className="text-white px-3 py-2 rounded-xl bg-brand"
    >
      Add Document
    </button>
  </div>
);

export default RequiredDocuments;
