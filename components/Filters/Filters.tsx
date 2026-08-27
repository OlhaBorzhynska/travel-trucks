"use client";

import css from "./Filters.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Filters() {
  const [location, setLocation] = useState("");
  const [form, setForm] = useState("");
  const [engine, setEngine] = useState("");
  const [transmission, setTransmission] = useState("");

  const router = useRouter();

  const filters = {
    location,
    form,
    engine,
    transmission,
  };

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (filters.location) {
      params.set("location", filters.location);
    }

    if (filters.form) {
      params.set("form", filters.form);
    }

    if (filters.engine) {
      params.set("engine", filters.engine);
    }

    if (filters.transmission) {
      params.set("transmission", filters.transmission);
    }

    router.push(`/catalog?${params.toString()}`);
  };

  return (
    <aside className={css.filters}>
      <div className={css.locationSection}>
        <label htmlFor="location" className={css.locationLabel}>
          Location
        </label>

        <div className={css.locationInputWrapper}>
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            className={`${css.locationIcon} ${
              location ? css.locationIconActive : ""
            }`}
          >
            <use href={`../icons/sprite.svg#icon-Map`} />
          </svg>

          <input
            id="location"
            type="text"
            placeholder="Kyiv"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className={css.locationInput}
          />
        </div>
      </div>

      <p className={css.filtersLabel}>Filters</p>

      <div className={css.filterWrapper}>
        <fieldset className={css.filterGroup}>
          <legend className={css.filterTitle}>Camper form</legend>

          <label className={css.radioLabel}>
            <input
              type="radio"
              name="form"
              value="alcove"
              checked={form === "alcove"}
              onChange={(event) => setForm(event.target.value)}
            />
            Alcove
          </label>

          <label className={css.radioLabel}>
            <input
              type="radio"
              name="form"
              value="panelTruck"
              checked={form === "panelTruck"}
              onChange={(event) => setForm(event.target.value)}
            />
            Panel Van
          </label>

          <label className={css.radioLabel}>
            <input
              type="radio"
              name="form"
              value="integrated"
              checked={form === "integrated"}
              onChange={(event) => setForm(event.target.value)}
            />
            Integrated
          </label>

          <label className={css.radioLabel}>
            <input
              type="radio"
              name="form"
              value="semiIntegrated"
              checked={form === "semiIntegrated"}
              onChange={(event) => setForm(event.target.value)}
            />
            Semi Integrated
          </label>
        </fieldset>

        <fieldset className={css.filterGroup}>
          <legend className={css.filterTitle}>Engine</legend>

          <label className={css.radioLabel}>
            <input
              type="radio"
              name="engine"
              value="diesel"
              checked={engine === "diesel"}
              onChange={(event) => setEngine(event.target.value)}
            />
            Diesel
          </label>

          <label className={css.radioLabel}>
            <input
              type="radio"
              name="engine"
              value="petrol"
              checked={engine === "petrol"}
              onChange={(event) => setEngine(event.target.value)}
            />
            Petrol
          </label>

          <label className={css.radioLabel}>
            <input
              type="radio"
              name="engine"
              value="hybrid"
              checked={engine === "hybrid"}
              onChange={(event) => setEngine(event.target.value)}
            />
            Hybrid
          </label>

          <label className={css.radioLabel}>
            <input
              type="radio"
              name="engine"
              value="electric"
              checked={engine === "electric"}
              onChange={(event) => setEngine(event.target.value)}
            />
            Electric
          </label>
        </fieldset>

        <fieldset className={css.filterGroup}>
          <legend className={css.filterTitle}>Transmission</legend>

          <label className={css.radioLabel}>
            <input
              type="radio"
              name="transmission"
              value="automatic"
              checked={transmission === "automatic"}
              onChange={(event) => setTransmission(event.target.value)}
            />
            Automatic
          </label>

          <label className={css.radioLabel}>
            <input
              type="radio"
              name="transmission"
              value="manual"
              checked={transmission === "manual"}
              onChange={(event) => setTransmission(event.target.value)}
            />
            Manual
          </label>
        </fieldset>
      </div>

      <div className={css.actions}>
        <button
          type="button"
          className={css.searchButton}
          onClick={handleSearch}
        >
          Search
        </button>

        <button type="button" className={css.clearButton}>
          <svg
            aria-hidden="true"
            width="12"
            height="12"
            className={css.btnIcon}
          >
            <use href={`../icons/sprite.svg#icon-Close`} />
          </svg>
          Clear filters
        </button>
      </div>
    </aside>
  );
}
