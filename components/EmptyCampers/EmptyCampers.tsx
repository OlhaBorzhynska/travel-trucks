import Image from "next/image";
import css from "./EmptyCampers.module.css";

interface EmptyCampersProps {
  onReset: () => void;
}

export function EmptyCampers({ onReset }: EmptyCampersProps) {
  return (
    <div className={css.container}>
      <Image
        src="/images/empty-campers.webp"
        alt="No campers found"
        width={488}
        height={463}
        className={css.image}
      />

      <h2 className={css.title}>No campers found</h2>

      <p className={css.text}>
        We couldn&apos;t find any campers that match your filters.
        <br />
        Try adjusting your search or clearing some filters.
      </p>

      <div className={css.actions}>
        <button type="button" className={css.clearButton} onClick={onReset}>
          <svg
            aria-hidden="true"
            width="12"
            height="12"
            className={css.btnIcon}
          >
            <use href={`/icons/sprite.svg#icon-Close`} />
          </svg>
          Clear filters
        </button>
        <button type="button" onClick={onReset} className={css.viewAllButton}>
          View all campers
        </button>
      </div>
    </div>
  );
}
