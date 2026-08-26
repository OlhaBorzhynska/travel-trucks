import { useQuery } from "@tanstack/react-query";

import { getCamperById } from "@/lib/api/campers";

export const useCamper = (camperId: string) => {
  return useQuery({
    queryKey: ["camper", camperId],

    queryFn: () => getCamperById(camperId),

    enabled: Boolean(camperId),
  });
};
