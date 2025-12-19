import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "@models/init";

interface CountriesAttributes {
  id?: number;
  name: string;
  description: string;
  image: string;
  flag: string;
  avatar: string;
  round_image: string;
  video?: string; // <-- add this line
  dail_code: string;
  detail: string;
  visa_process_time: string;
  createdAt?: Date;
  updatedAt?: Date;
  is_active?: boolean;
  is_deleted?: boolean;
  slug: string;
  is_top_destination?: boolean;
  is_popular?: boolean;
  countries?: string; // Store as comma-separated string or JSON string
  subtitle?: string;
  rating?: number;
  required_documents?: object[];
  visa_information?: object[];
  transit_timeline?: object[];
  continent?: string;
  visa_fee_now?: number;
  service_fee_now?: number;
  visa_fee_later?: number;
  service_fee_later?: number;
  documents_required_process?: object[]; // <-- add this line
  partners_we_work_with?: object[]; // <-- add this line
  rejection_reasons?: object[]; // <-- add this line
  chances_of_approval_for_this?: number; // <-- add this line
  chances_of_approval_for_other?: number; // <-- add this line
  how_we_reviewed_this_page_sources?: string; // <-- add this line
  how_we_reviewed_this_page_history?: string; // <-- add this line
  get_a_guaranteed_visa_on?: string; // <-- add this line
  check_appointment_availability?: string; // <-- add this line
  statistics_on_visa_processing_time?: string; // <-- add this line
  statistics_on_visa_approval_rating?: string; // <-- add this line
  visa_approval_comparison?: {
    atlys_percentage: number;
    overall_percentage: number;
    rows: object[];
  }; // <-- add this line
  what_you_get?: object[]; // <-- add this line
  why?: object[]; // <-- add this line to CountriesAttributes
}

type CountriesCreationAttributes = Optional<
  CountriesAttributes,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "is_active"
  | "is_deleted"
  | "is_top_destination"
  | "is_popular"
  | "countries"
  | "subtitle"
  | "rating"
  | "continent"
  | "visa_fee_now"
  | "service_fee_now"
  | "visa_fee_later"
  | "service_fee_later"
  | "documents_required_process" // <-- add this line
  | "video" // <-- add this line
  | "partners_we_work_with" // <-- add this line
  | "rejection_reasons" // <-- add this line
  | "chances_of_approval_for_this" // <-- add this line
  | "chances_of_approval_for_other" // <-- add this line
  | "how_we_reviewed_this_page_sources" // <-- add this line
  | "how_we_reviewed_this_page_history" // <-- add this line
  | "get_a_guaranteed_visa_on" // <-- add this line
  | "check_appointment_availability" // <-- add this line
  | "statistics_on_visa_processing_time" // <-- add this line
  | "statistics_on_visa_approval_rating" // <-- add this line
  | "visa_approval_comparison" // <-- add this line
  | "what_you_get" // <-- add this line
  | "why" // <-- add this line to CountriesCreationAttributes
>;

class Countries
  extends Model<CountriesAttributes, CountriesCreationAttributes>
  implements CountriesAttributes
{
  public id!: number;
  public name!: string;
  public description!: string;
  public image!: string;
  public flag!: string;
  public avatar!: string;
  public round_image!: string;
  public video!: string; // <-- add this line
  public dail_code!: string;
  public detail!: string;
  public visa_process_time!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public is_active!: boolean;
  public is_deleted!: boolean;
  public slug!: string;
  public is_top_destination!: boolean;
  public is_popular!: boolean;
  public countries!: string;
  public subtitle!: string;
  public rating!: number;
  public continent!: string;
  public required_documents!: object[];
  public visa_fee_now!: number;
  public service_fee_now!: number;
  public visa_fee_later!: number;
  public service_fee_later!: number;
  public documents_required_process!: object[]; // <-- add this line
  public partners_we_work_with!: object[]; // <-- add this line
  public rejection_reasons!: object[]; // <-- add this line
  public chances_of_approval_for_this!: number; // <-- add this line
  public chances_of_approval_for_other!: number; // <-- add this line
  public how_we_reviewed_this_page_sources!: string; // <-- add this line
  public how_we_reviewed_this_page_history!: string; // <-- add this line
  public get_a_guaranteed_visa_on!: string; // <-- add this line
  public check_appointment_availability!: string; // <-- add this line
  public statistics_on_visa_processing_time!: string; // <-- add this line
  public statistics_on_visa_approval_rating!: string; // <-- add this line
  public visa_approval_comparison!: {
    atlys_percentage: number;
    overall_percentage: number;
    rows: object[];
  }; // <-- add this line
  public what_you_get!: object[]; // <-- add this line
  public why!: object[]; // <-- add this line to Countries class
}

Countries.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    round_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    video: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    dail_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    visa_process_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      // Remove unique constraint here to avoid "Too many keys specified" error
      // unique: true,
      // If you still want uniqueness, create a unique index via migration or manually in DB
    },
    is_top_destination: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    is_popular: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    countries: {
      type: DataTypes.TEXT, // Store as comma-separated or JSON string
      allowNull: true,
      defaultValue: "",
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    required_documents: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: [],
    },
    visa_information: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: [],
    },
    transit_timeline: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: [],
    },
    visa_fee_now: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    service_fee_now: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    visa_fee_later: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    service_fee_later: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    documents_required_process: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: [],
    },
    partners_we_work_with: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: [],
    },
    rejection_reasons: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: [],
    },
    chances_of_approval_for_this: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    chances_of_approval_for_other: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    how_we_reviewed_this_page_sources: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "",
    },
    how_we_reviewed_this_page_history: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "",
    },
    get_a_guaranteed_visa_on: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "",
    },
    check_appointment_availability: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    statistics_on_visa_processing_time: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "",
    },
    statistics_on_visa_approval_rating: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "",
    },
    visa_approval_comparison: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: {
        atlys_percentage: 0,
        overall_percentage: 0,
        rows: []
      },
    },
    what_you_get: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: [],
    },
    why: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: [],
    },
  },
  {
    sequelize,
    tableName: "countries",
    modelName: "Countries",
    timestamps: true,
  }
);

export default Countries;
