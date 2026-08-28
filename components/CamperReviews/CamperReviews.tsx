import { useReviews } from "@/hooks/useReviews";
import Rating from "@/components/Rating/Rating";
import css from "./CamperReviews.module.css";

interface CamperReviewsProps {
  camperId: string;
}

export default function CamperReviews({ camperId }: CamperReviewsProps) {
  const { data: reviews, isLoading, isError } = useReviews(camperId);

  if (isLoading) {
    return <p>Loading reviews...</p>;
  }

  if (isError) {
    return <p>Something went wrong while loading reviews.</p>;
  }

  if (!reviews || reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }

  return (
    <section>
      <h2 className={css.title}>Reviews</h2>

      <ul className={css.reviews}>
        {reviews.map((review) => (
          <li key={review.id} className={css.review}>
            <div className={css.avatarRatingWrapper}>
              <div className={css.avatarName}>
                {review.reviewer_name.charAt(0).toUpperCase()}
              </div>

              <div className={css.nameRatingWrapper}>
                <h3 className={css.name}>{review.reviewer_name}</h3>

                <Rating rating={review.reviewer_rating} />
              </div>
            </div>

            <p className={css.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
