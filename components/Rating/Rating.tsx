import css from "./Rating.module.css";

interface RatingProps {
  rating: number;
}

export default function Rating({ rating }: RatingProps) {
  return (
    <div className={css.ratingWrapper}>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index}>
          {index < rating ? (
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              className={css.ratingIconYellow}
            >
              <use href="../icons/sprite.svg#icon-Rating" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              width="17"
              height="17"
              className={css.ratingIcon}
            >
              <use href="../icons/sprite.svg#icon-Star" />
            </svg>
          )}
        </span>
      ))}
    </div>
  );
}
