import type { Camper } from "@/types/camper";
import css from "./CamperCard.module.css";
import Image from "next/image";
import { formatText } from "@/lib/utils/formatText";
import Link from "next/link";

interface CamperCardProps {
  camper: Camper;
}

export function CamperCard({ camper }: CamperCardProps) {
  return (
    <li className={css.card}>
      <div className={css.imageWrapper}>
        <Image
          className={css.image}
          src={camper.coverImage}
          alt={camper.name}
          width="219"
          height="240"
        />
      </div>

      <div className={css.content}>
        <div className={css.header}>
          <h2 className={css.title}>{camper.name}</h2>

          <p className={css.price}>€{camper.price}</p>
        </div>

        <div className={css.meta}>
          <div className={css.rating}>
            <svg
              aria-hidden="true"
              width="15"
              height="15"
              className={css.ratingIcon}
            >
              <use href={`../icons/sprite.svg#icon-Rating`} />
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

        <p className={css.description}>{camper.description}</p>

        <ul className={css.features}>
          <li className={css.feature}>
            <span className={css.featureSpan}>
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                className={css.featureIcon}
              >
                <use href={`../icons/sprite.svg#icon-Petrol`} />
              </svg>
              {formatText(camper.engine)}
            </span>
          </li>

          <li className={css.feature}>
            <span className={css.featureSpan}>
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                className={css.featureIcon}
              >
                <use href={`../icons/sprite.svg#icon-Automatic`} />
              </svg>
              {formatText(camper.transmission)}
            </span>
          </li>

          <li className={css.feature}>
            <span className={css.featureSpan}>
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                className={css.featureIcon}
              >
                <use href={`../icons/sprite.svg#icon-Alcove`} />
              </svg>
              {formatText(camper.form)}
            </span>
          </li>
        </ul>

        <Link href={`/catalog/${camper.id}`} className={css.showMoreButton}>
          Show more
        </Link>
      </div>
    </li>
  );
}
