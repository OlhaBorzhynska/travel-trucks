import type { Metadata } from "next";
import css from "./catalog.module.css";
import { Filters } from "@/components/Filters/Filters";
import { CatalogContent } from "@/components/CatalogContent/CatalogContent";

export const metadata: Metadata = {
  title: "Camper Catalog | TravelTrucks",
  description:
    "Browse our camper catalog and find the perfect camper for your next adventure with TravelTrucks.",
};

export default function CatalogPage() {
  return (
    <main className={css.page}>
      <div className={`container ${css.content}`}>
        <Filters />

        <section className={css.catalog}>
          <CatalogContent />
        </section>
      </div>
    </main>
  );
}
