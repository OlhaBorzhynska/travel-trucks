import { api } from "./axios";
import type { CampersResponse, CamperDetails } from "@/types/camper";
import type { CampersParams } from "@/types/filters";
import type { Review } from "@/types/review";

export const getCampers = async (
  params: CampersParams,
): Promise<CampersResponse> => {
  const { data } = await api.get<CampersResponse>("/campers", {
    params,
  });

  return data;
};

export const getCamperById = async (
  camperId: string,
): Promise<CamperDetails> => {
  const { data } = await api.get<CamperDetails>(`/campers/${camperId}`);

  return data;
};

export const getCamperReviews = async (camperId: string): Promise<Review[]> => {
  const { data } = await api.get<Review[]>(`/campers/${camperId}/reviews`);

  return data;
};
