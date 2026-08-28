import type { CamperDetails } from "@/types/camper";
import css from "./CamperInfo.module.css";

interface CamperInfoProps {
  camper: CamperDetails;
}

export default function CamperInfo({ camper }: CamperInfoProps) {
  return (
    <section className={css.sectionCamperInfo}>
      <h2 className={css.title}>{camper.name}</h2>

      <div className={css.meta}>
        <div className={css.rating}>
          <svg
            aria-hidden="true"
            width="15"
            height="15"
            className={css.ratingIcon}
          >
            <use href={`/icons/sprite.svg#icon-Rating`} />
          </svg>

          <span className={css.metaText}>
            {camper.rating} ({camper.totalReviews} Reviews)
          </span>
        </div>

        <div className={css.location}>
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            className={css.locationIcon}
          >
            <use href="/icons/sprite.svg#icon-Map" />
          </svg>

          <span className={css.metaText}>{camper.location}</span>
        </div>
      </div>

      <p className={css.price}>€{camper.price}</p>

      <p className={css.description}>{camper.description}</p>
    </section>
  );
}
