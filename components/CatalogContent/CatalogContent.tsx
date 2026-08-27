"use client";

import { useCampers } from "@/hooks/useCampers";
import { useSearchParams } from "next/navigation";

export function CatalogContent() {
  const searchParams = useSearchParams();

  const filters = {
    location: searchParams.get("location") || "",
    form: searchParams.get("form") || "",
    engine: searchParams.get("engine") || "",
    transmission: searchParams.get("transmission") || "",
  };

  const { data, isLoading, isError } = useCampers({});

  console.log(filters);
  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong.</p>;
  }

  return <div>Campers will be here</div>;
}
