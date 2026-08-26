import { useMutation } from "@tanstack/react-query";

import { createBooking } from "@/lib/api/bookings";
import type { BookingRequest } from "@/types/booking";

interface BookingVariables {
  camperId: string;
  bookingData: BookingRequest;
}

export const useBooking = () => {
  return useMutation({
    mutationFn: ({ camperId, bookingData }: BookingVariables) =>
      createBooking(camperId, bookingData),
  });
};
