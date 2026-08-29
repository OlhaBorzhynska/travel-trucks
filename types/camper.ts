export type CamperForm =
  | "alcove"
  | "panel_van"
  | "integrated"
  | "semi_integrated";

export type CamperTransmission = "automatic" | "manual";

export type CamperEngine = "diesel" | "petrol" | "hybrid" | "electric";

export type CamperAmenity =
  | "ac"
  | "bathroom"
  | "kitchen"
  | "tv"
  | "radio"
  | "refrigerator"
  | "microwave"
  | "gas"
  | "water";

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  totalReviews: number;
  location: string;
  form: CamperForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: CamperTransmission;
  engine: CamperEngine;
  amenities: CamperAmenity[];
  coverImage: string;
  description: string;
}

export interface CamperGalleryImage {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}

export interface CamperDetails extends Camper {
  gallery: CamperGalleryImage[];
  createdAt: string;
  updatedAt: string;
}

export interface CampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}
