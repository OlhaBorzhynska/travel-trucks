import type { CamperDetails } from "@/types/camper";
import css from "./CamperFeatures.module.css";
import { formatText, formatValue } from "@/lib/utils/formatText";

interface CamperFeaturesProps {
  camper: CamperDetails;
}

export default function CamperFeatures({ camper }: CamperFeaturesProps) {
  return (
    <section className={css.sectionCamperFeatures}>
      <h2 className={css.title}>Vehicle details</h2>

      <ul className={css.features}>
        {camper.amenities.map((amenity) => (
          <li key={amenity} className={css.feature}>
            {formatText(amenity)}
          </li>
        ))}
      </ul>

      <hr className={css.line} />

      <ul className={css.details}>
        <ul className={css.details}>
          <li className={css.detail}>
            <span>Form</span>
            <span>{formatText(camper.form)}</span>
          </li>

          <li className={css.detail}>
            <span>Length</span>
            <span>{formatValue(camper.length)}</span>
          </li>

          <li className={css.detail}>
            <span>Width</span>
            <span>{formatValue(camper.width)}</span>
          </li>

          <li className={css.detail}>
            <span>Height</span>
            <span>{formatValue(camper.height)}</span>
          </li>

          <li className={css.detail}>
            <span>Tank</span>
            <span>{formatValue(camper.tank)}</span>
          </li>

          <li className={css.detail}>
            <span>Consumption</span>
            <span>{formatValue(camper.consumption)}</span>
          </li>
        </ul>
      </ul>
    </section>
  );
}
