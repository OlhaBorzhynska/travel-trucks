"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useBooking } from "@/hooks/useBooking";
import css from "./BookingForm.module.css";
import { toast } from "react-hot-toast";

interface BookingFormProps {
  camperId: string;
}

interface BookingFormValues {
  name: string;
  email: string;
}

const BookingSchema = Yup.object({
  name: Yup.string()
    .required("Name is required.")
    .matches(/[A-Za-zА-Яа-яІіЇїЄєҐґ]/, "Name cannot contain only numbers.")
    .test("full-name", "Please enter your full name.", (value) => {
      if (!value) return false;

      const words = value.trim().split(/\s+/);

      return words.length >= 2 && words.every((word) => word.length >= 2);
    })
    .max(64, "Name must be no more than 64 characters."),
  email: Yup.string()
    .required("Email is required.")
    .email("Invalid email.")
    .max(64, "Email must be no more than 64 characters."),
});

const initialValues: BookingFormValues = { name: "", email: "" };

export default function BookingForm({ camperId }: BookingFormProps) {
  const { mutate, isPending } = useBooking();

  const handleSubmit = (
    values: BookingFormValues,
    { resetForm }: { resetForm: () => void },
  ) => {
    mutate(
      { camperId, bookingData: values },
      {
        onSuccess: (data) => {
          toast.success(data.message);
          resetForm();
        },
        onError: () => {
          toast.error("Something went wrong. Please try again.");
        },
      },
    );
  };

  return (
    <section className={css.booking}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={BookingSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.fieldWrapper}>
            <div className={css.field}>
              <div className={css.inputWrapper}>
                <Field
                  type="text"
                  name="name"
                  placeholder="Name*"
                  className={css.input}
                />
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  className={css.errorIcon}
                >
                  <use href="/icons/sprite.svg#icon-Error" />
                </svg>
              </div>
              <ErrorMessage
                name="name"
                component="span"
                className={css.error}
              />
            </div>
            <div className={`${css.field} ${css.emailField}`}>
              <div className={css.inputWrapper}>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className={css.input}
                />
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  className={css.errorIcon}
                >
                  <use href="/icons/sprite.svg#icon-Error" />
                </svg>
              </div>
              <ErrorMessage
                name="email"
                component="span"
                className={css.error}
              />
            </div>
          </div>
          <button type="submit" disabled={isPending} className={css.btnSubmit}>
            {isPending ? "Sending..." : "Send"}
          </button>
        </Form>
      </Formik>
    </section>
  );
}
