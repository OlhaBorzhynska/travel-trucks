import { useInfiniteQuery } from "@tanstack/react-query";

import { getCampers } from "@/lib/api/campers";
import type { CamperFilters } from "@/types/filters";

const PER_PAGE = 4;

export const useCampers = (filters: CamperFilters) => {
  return useInfiniteQuery({
    queryKey: ["campers", filters],

    queryFn: ({ pageParam }) =>
      getCampers({
        page: pageParam,
        perPage: PER_PAGE,
        ...filters,
      }),

    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }

      return undefined;
    },
  });
};
