import type { CamperDetails } from "@/types/camper";

interface CamperFeaturesProps {
  camper: CamperDetails;
}

export default function CamperFeatures({ camper }: CamperFeaturesProps) {
  return (
    <section>
      <h2>Features</h2>

      <ul>
        {camper.amenities.map((amenity) => (
          <li key={amenity}>{amenity}</li>
        ))}
      </ul>

      <h2>Vehicle details</h2>

      <ul>
        <li>Form: {camper.form}</li>
        <li>Length: {camper.length}</li>
        <li>Width: {camper.width}</li>
        <li>Height: {camper.height}</li>
        <li>Tank: {camper.tank}</li>
        <li>Consumption: {camper.consumption}</li>
        <li>Transmission: {camper.transmission}</li>
        <li>Engine: {camper.engine}</li>
      </ul>
    </section>
  );
}
