import React from "react";
import ImageUpload from "@/components/common/image-upload";

type Item = { icon: string; title: string; description: string };
type Props = {
  transitTimeline: Item[];
  onChange: (idx: number, field: "icon" | "title" | "description", value: string) => void;
  onAdd: () => void;
  onRemove: (idx: number) => void;
  uploading: boolean;
  setUploading: (val: boolean) => void;
};

const TransitTimeline: React.FC<Props> = ({
  transitTimeline,
  onChange,
  onAdd,
  onRemove,
  uploading,
  setUploading,
}) => (
  <div className="mb-4">
    <label className="block font-medium mb-1">Transit Timeline:</label>
    {transitTimeline.map((item, idx) => (
      <div key={idx} className="flex gap-2 mb-2 items-center">
        <div className="flex flex-col gap-2 w-full">
          <ImageUpload
            value={item.icon}
            preview={item.icon}
            onChange={(imgUrl, previewUrl) => {
              const image = Array.isArray(imgUrl) ? imgUrl[0] : imgUrl;
              onChange(idx, "icon", image);
            }}
            uploading={uploading}
            setUploading={setUploading}
            type="countries/extra/transit_timeline"
          />
          <input
            type="text"
            value={item.title}
            onChange={e => onChange(idx, "title", e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder={`Step ${idx + 1} Title`}
          />
          <input
            type="text"
            value={item.description}
            onChange={e => onChange(idx, "description", e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder={`Step ${idx + 1} Description`}
          />
        </div>
        <button
          type="button"
          onClick={() => onRemove(idx)}
          disabled={transitTimeline.length === 1}
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
      Add Step
    </button>
  </div>
);

export default TransitTimeline;
