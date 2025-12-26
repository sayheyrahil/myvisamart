"use client";
import React, { createContext, useReducer, ReactNode } from "react";

type NoOption = {
  name: string;
  relation: string;
  phone?: string;
  email?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  country?: string;
  zip?: string;
  schengenVisa?: string;
  maritalStatus?: string;
  employmentType?: string;
  companyName?: string;
  photo?: File | null;
  passportFile?: File | null;
  firstName?: string;
  lastName?: string;
  fatherName?: string;
  motherName?: string;
  dob?: string;
  gender?: string;
  passportNumber?: string;
  passportPlace?: string;
  passportValidTill?: string;
};

type FormData = {
  selectedSponsor: "self" | "other";
  noOptions: NoOption[];
  selected: "yes" | "no" | null;
  user_id?: number;
  country_id?: number;
};

type Action =
  | { type: "SET_FIELD"; key: keyof FormData; value: any }
  | { type: "ADD_NO_OPTION" }
  | { type: "REMOVE_NO_OPTION"; idx: number }
  | {
      type: "UPDATE_NO_OPTION";
      idx: number;
      field: "name" | "relation";
      value: string;
    }
  | { type: "SET_NO_OPTION_AT_INDEX"; idx: number; value: NoOption };

const initialState: FormData = {
  selectedSponsor: "self",
  noOptions: [{ name: "", relation: "self" }],
  selected: null,
  user_id: 45,
  country_id: 1,
};

function reducer(state: FormData, action: Action): FormData {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.key]: action.value };
    case "ADD_NO_OPTION":
      return {
        ...state,
        noOptions: [...state.noOptions, { name: "", relation: "" }],
      };
    case "REMOVE_NO_OPTION":
      return {
        ...state,
        noOptions: state.noOptions.filter((_, i) => i !== action.idx),
      };
    case "UPDATE_NO_OPTION":
      return {
        ...state,
        noOptions: state.noOptions.map((opt, i) =>
          i === action.idx ? { ...opt, [action.field]: action.value } : opt
        ),
      };
    case "SET_NO_OPTION_AT_INDEX":
      return {
        ...state,
        noOptions: state.noOptions.map((opt, i) =>
          i === action.idx ? { ...action.value } : opt
        ),
      };
    default:
      return state;
  }
}

export const FormDataContext = createContext<{
  formData: FormData;
  dispatch: React.Dispatch<Action>;
}>({
  formData: initialState,
  dispatch: () => {},
});

export function FormDataProvider({ children }: { children: ReactNode }) {
  const [formData, dispatch] = useReducer(reducer, initialState);
  return (
    <FormDataContext.Provider value={{ formData, dispatch }}>
      {children}
    </FormDataContext.Provider>
  );
}
