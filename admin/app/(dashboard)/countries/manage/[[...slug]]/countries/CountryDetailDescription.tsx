import React from "react";
import Editor from "@/components/common/Editor";

type Props = {
  detail: string;
  description: string;
  onDetailChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onDescriptionChange: (value: string) => void;
};

const CountryDetailDescription: React.FC<Props> = ({
  detail,
  description,
  onDetailChange,
  onDescriptionChange,
}) => (
  <>
    <div className="mb-4">
      <label className="block font-medium mb-1">
        Detail:
        <textarea
          name="detail"
          value={detail}
          onChange={onDetailChange}
          placeholder="Enter detail"
          rows={3}
          className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-brand"
        />
      </label>
    </div>
    <div className="mb-4">
      <label className="block font-medium mb-1">
        Description:
        <Editor
          value={description}
          onChange={onDescriptionChange}
        />
      </label>
    </div>
  </>
);

export default CountryDetailDescription;
