"use client";

import { useCamper } from "@/hooks/useCamper";
import CamperGallery from "@/components/CamperGallery/CamperGallery";
import CamperInfo from "@/components/CamperInfo/CamperInfo";
import CamperFeatures from "@/components/CamperFeatures/CamperFeatures";
import CamperReviews from "@/components/CamperReviews/CamperReviews";
import BookingForm from "@/components/BookingForm/BookingForm";
import css from "./CamperPageContent.module.css";

interface CamperPageContentProps {
  camperId: string;
}

export default function CamperPageContent({
  camperId,
}: CamperPageContentProps) {
  const { data: camper, isLoading, isError } = useCamper(camperId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong. Please try again later.</p>;
  }

  if (!camper) {
    return <p>Camper not found.</p>;
  }

  return (
    <main className={css.page}>
      <div className={css.container}>
        <div className={css.topSection}>
          <CamperGallery gallery={camper.gallery} />

          <div className={css.infoSection}>
            <CamperInfo camper={camper} />

            <CamperFeatures camper={camper} />
          </div>
        </div>

        <div className={css.bottomSection}>
          <CamperReviews />

          <BookingForm />
        </div>
      </div>
    </main>
  );
}
