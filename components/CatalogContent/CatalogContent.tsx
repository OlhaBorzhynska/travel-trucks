"use client";

import css from "./CatalogContent.module.css";
import { useSearchParams, useRouter } from "next/navigation";
import { useCampers } from "@/hooks/useCampers";
import { CamperCard } from "@/components/CamperCard/CamperCard";

import type {
  CamperEngine,
  CamperForm,
  CamperTransmission,
} from "@/types/camper";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { EmptyState } from "../EmptyState/EmptyState";

const getForm = (value: string | null): CamperForm | undefined => {
  if (
    value === "alcove" ||
    value === "panel_van" ||
    value === "integrated" ||
    value === "semi_integrated"
  ) {
    return value;
  }

  return undefined;
};

const getEngine = (value: string | null): CamperEngine | undefined => {
  if (
    value === "diesel" ||
    value === "petrol" ||
    value === "hybrid" ||
    value === "electric"
  ) {
    return value;
  }

  return undefined;
};

const getTransmission = (
  value: string | null,
): CamperTransmission | undefined => {
  if (value === "automatic" || value === "manual") {
    return value;
  }

  return undefined;
};

export function CatalogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleReset = () => {
    router.push("/catalog");
  };

  const filters = {
    location: searchParams.get("location") || undefined,
    form: getForm(searchParams.get("form")),
    engine: getEngine(searchParams.get("engine")),
    transmission: getTransmission(searchParams.get("transmission")),
  };

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useCampers(filters);

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage onRetry={() => refetch()} />;
  }

  if (campers.length === 0) {
    return (
      <EmptyState
        title="No campers found"
        text={
          <>
            We couldn&apos;t find any campers that match your filters. <br />{" "}
            Try adjusting your search or clearing some filters.{" "}
          </>
        }
        buttonText="View all campers"
        onClick={handleReset}
      />
    );
  }

  return (
    <>
      <ul className={css.catalogList}>
        {campers.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </ul>

      {hasNextPage && (
        <button
          type="button"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className={css.btnLoadMore}
        >
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </button>
      )}
    </>
  );
}
