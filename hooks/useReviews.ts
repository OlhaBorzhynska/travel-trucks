import { useQuery } from "@tanstack/react-query";

import { getCamperReviews } from "@/lib/api/campers";

export const useReviews = (camperId: string) => {
  return useQuery({
    queryKey: ["reviews", camperId],

    queryFn: () => getCamperReviews(camperId),

    enabled: Boolean(camperId),
  });
};
