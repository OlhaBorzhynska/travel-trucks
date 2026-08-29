"use client";

import { useCamper } from "@/hooks/useCamper";
import CamperGallery from "@/components/CamperGallery/CamperGallery";
import CamperInfo from "@/components/CamperInfo/CamperInfo";
import CamperFeatures from "@/components/CamperFeatures/CamperFeatures";
import CamperReviews from "@/components/CamperReviews/CamperReviews";
import BookingForm from "@/components/BookingForm/BookingForm";
import css from "./CamperPageContent.module.css";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { EmptyState } from "../EmptyState/EmptyState";
import axios from "axios";

interface CamperPageContentProps {
  camperId: string;
}

export default function CamperPageContent({
  camperId,
}: CamperPageContentProps) {
  const {
    data: camper,
    isLoading,
    isError,
    refetch,
    error,
  } = useCamper(camperId);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return (
        <EmptyState
          title="Camper not found"
          text={
            <>
              We couldn&apos;t find the camper you&apos;re looking for.
              <br />
              Try returning to the catalog and choosing another camper.
            </>
          }
          buttonText="Go to catalog"
          href="/catalog"
        />
      );
    }

    return <ErrorMessage onRetry={() => refetch()} />;
  }

  if (!camper) {
    return null;
  }

  return (
    <main className={css.page}>
      <div className="container">
        <div className={css.topSection}>
          <CamperGallery gallery={camper.gallery} />

          <div className={css.infoSection}>
            <CamperInfo camper={camper} />

            <CamperFeatures camper={camper} />
          </div>
        </div>

        <div className={css.bottomSection}>
          <CamperReviews camperId={camper.id} />

          <BookingForm camperId={camper.id} />
        </div>
      </div>
    </main>
  );
}
