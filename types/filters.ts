import type { CamperEngine, CamperForm, CamperTransmission } from "./camper";

export interface CamperFilters {
  location?: string;
  form?: CamperForm;
  transmission?: CamperTransmission;
  engine?: CamperEngine;
}

export interface CampersParams extends CamperFilters {
  page?: number;
  perPage?: number;
}
