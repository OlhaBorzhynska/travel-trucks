import { api } from "./axios";
import type { BookingRequest, BookingResponse } from "@/types/booking";

export const createBooking = async (
  camperId: string,
  bookingData: BookingRequest,
): Promise<BookingResponse> => {
  const { data } = await api.post<BookingResponse>(
    `/campers/${camperId}/booking-requests`,
    bookingData,
  );

  return data;
};
