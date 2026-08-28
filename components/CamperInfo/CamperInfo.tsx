import type { CamperDetails } from "@/types/camper";

interface CamperInfoProps {
  camper: CamperDetails;
}

export default function CamperInfo({ camper }: CamperInfoProps) {
  return (
    <section>
      <h1>{camper.name}</h1>

      <p>
        Rating: {camper.rating} ({camper.totalReviews} reviews)
      </p>

      <p>{camper.location}</p>

      <p>{camper.price}</p>

      <p>{camper.description}</p>
    </section>
  );
}
