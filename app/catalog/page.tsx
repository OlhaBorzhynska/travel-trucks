import css from "./catalog.module.css";
import { Filters } from "@/components/Filters/Filters";
import { CatalogContent } from "@/components/CatalogContent/CatalogContent";

export default function CatalogPage() {
  return (
    <main className={css.page}>
      <div className={css.container}>
        <Filters />

        <section className={css.catalog}>
          <CatalogContent />
        </section>
      </div>
    </main>
  );
}
