import React from "react";

type Row = {
  title: string;
  atlys_text: string;
  atlys_status: string;
  other_text: string;
  other_status: string;
};

type Comparison = {
  atlys_percentage: string | number;
  overall_percentage: string | number;
  rows: Row[];
};

type Props = {
  value: Comparison;
  onChange: (val: Comparison) => void;
};

const VisaApprovalComparisonForm: React.FC<Props> = ({ value, onChange }) => {
  const handleFieldChange = (field: keyof Comparison, val: any) => {
    onChange({ ...value, [field]: val });
  };

  const handleRowChange = (idx: number, field: keyof Row, val: string) => {
    const rows = value.rows ? [...value.rows] : [];
    rows[idx] = { ...rows[idx], [field]: val };
    onChange({ ...value, rows });
  };

  const handleAddRow = () => {
    const rows = value.rows ? [...value.rows] : [];
    rows.push({
      title: "",
      atlys_text: "",
      atlys_status: "",
      other_text: "",
      other_status: "",
    });
    onChange({ ...value, rows });
  };

  const handleRemoveRow = (idx: number) => {
    const rows = value.rows ? value.rows.filter((_, i) => i !== idx) : [];
    onChange({ ...value, rows });
  };

  return (
    <div className="bg-white rounded shadow p-4 border">
      <h2 className="text-lg font-semibold mb-2">Visa Approval Comparison</h2>
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="block font-medium mb-1">Atlys Approval %</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="100"
            value={value.atlys_percentage || ""}
            onChange={(e) =>
              handleFieldChange("atlys_percentage", e.target.value)
            }
            className="w-full px-3 py-2 border rounded"
            placeholder="e.g. 96.7"
          />
        </div>
        <div className="flex-1">
          <label className="block font-medium mb-1">Overall Approval %</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="100"
            value={value.overall_percentage || ""}
            onChange={(e) =>
              handleFieldChange("overall_percentage", e.target.value)
            }
            className="w-full px-3 py-2 border rounded"
            placeholder="e.g. 75.3"
          />
        </div>
      </div>
      <div>
        <label className="block font-medium mb-2">Comparison Rows</label>
        {value.rows &&
          value.rows.map((row, idx) => (
            <div key={idx} className="mb-3 border rounded p-2 bg-gray-50">
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={row.title}
                  onChange={(e) =>
                    handleRowChange(idx, "title", e.target.value)
                  }
                  className="flex-1 px-2 py-1 border rounded"
                  placeholder="Title"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveRow(idx)}
                  className="text-white px-3 py-2 rounded-xl bg-brand"
                  disabled={value.rows.length === 1}
                >
                  Remove
                </button>
              </div>
              <div className="flex gap-2 mb-1">
                <input
                  type="text"
                  value={row.atlys_text}
                  onChange={(e) =>
                    handleRowChange(idx, "atlys_text", e.target.value)
                  }
                  className="flex-1 px-2 py-1 border rounded"
                  placeholder="Atlys Text"
                />
                <select
                  value={row.atlys_status === "true" ? "true" : "false"}
                  onChange={e =>
                    handleRowChange(idx, "atlys_status", e.target.value)
                  }
                  className="w-32 px-2 py-1 border rounded"
                >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={row.other_text}
                  onChange={(e) =>
                    handleRowChange(idx, "other_text", e.target.value)
                  }
                  className="flex-1 px-2 py-1 border rounded"
                  placeholder="Other Text"
                />
                <select
                  value={row.other_status === "true" ? "true" : "false"}
                  onChange={e =>
                    handleRowChange(idx, "other_status", e.target.value)
                  }
                  className="w-32 px-2 py-1 border rounded"
                >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
            </div>
          ))}
        <button
          type="button"
          onClick={handleAddRow}
          className="text-white px-3 py-2 rounded-xl bg-brand"
        >
          Add Row
        </button>
      </div>
    </div>
  );
};

export default VisaApprovalComparisonForm;
