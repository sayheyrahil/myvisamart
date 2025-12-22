import * as React from "react";
import Editor from "@/components/common/Editor";

type Props = {
  countryOptions: any[];
  countries: string[];
  onCountriesChange: (selected: string[]) => void;
  howWeReviewedSources: string;
  onHowWeReviewedSourcesChange: (value: string) => void;
  howWeReviewedHistory: string;
  onHowWeReviewedHistoryChange: (value: string) => void;
};

const CountrySelectionSection: React.FC<Props> = ({
  countryOptions,
  countries,
  onCountriesChange,
  howWeReviewedSources,
  onHowWeReviewedSourcesChange,
  howWeReviewedHistory,
  onHowWeReviewedHistoryChange,
}) => {
  function handleSelectChange(
    e: React.ChangeEvent<HTMLSelectElement>
  ) {
    const options = e.target.options;
    const selected: string[] = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) selected.push(options[i].value);
    }
    onCountriesChange(selected);
  }
 

   return (
    <div className="mb-4">
      <label className="block font-medium mb-1">
        Country Name:
        <select
          name="countrys"
          multiple
          value={countries}
          onChange={handleSelectChange}
          className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-brand"
          // size={5}
        >
          {countryOptions.map((country: any) => (
            <option
              key={country.id}
              value={String(country.id)}
            >
              {country.name}
            </option>
          ))}
        </select>
      </label>
      <div className="mt-4">
        <label className="block font-medium mb-1">
          How we reviewed this page (Sources):
        </label>
        <Editor
          value={howWeReviewedSources}
          onChange={onHowWeReviewedSourcesChange}
        />
      </div>
      <div className="mt-4">
        <label className="block font-medium mb-1">
          How we reviewed this page (History):
        </label>
        <Editor
          value={howWeReviewedHistory}
          onChange={onHowWeReviewedHistoryChange}
        />
      </div>
    </div>
  );
};

export default CountrySelectionSection;
