import React from "react";
import Editor from "@/components/common/Editor";

type Item = { title: string; description: string };
type Props = {
  documentsRequiredProcess: Item[];
  onChange: (idx: number, field: "title" | "description", value: string) => void;
  onAdd: () => void;
  onRemove: (idx: number) => void;
};

const DocumentsRequiredProcess: React.FC<Props> = ({
  documentsRequiredProcess,
  onChange,
  onAdd,
  onRemove,
}) => (
  <div className="mb-4">
    <label className="block font-medium mb-1">Documents Required &amp; Process:</label>
    {documentsRequiredProcess.map((item, idx) => (
      <div key={idx} className="flex gap-2 mb-2 items-center">
        <div className="flex flex-col gap-2 w-full">
          <input
            type="text"
            value={item.title}
            onChange={e => onChange(idx, "title", e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder={`Document ${idx + 1} Title`}
          />
          <Editor
            value={item.description}
            onChange={value => onChange(idx, "description", value)}
          />
        </div>
        <button
          type="button"
          onClick={() => onRemove(idx)}
          disabled={documentsRequiredProcess.length === 1}
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

export default DocumentsRequiredProcess;
