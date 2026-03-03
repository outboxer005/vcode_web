/**
 * Google Form / Formfacade configuration for VCode registration.
 */

/** Google Form submission endpoint (POST target). */
export const GOOGLE_FORM_SUBMIT_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfwOwr2aLAeUeJNJLKX-rkyq03cjUCSz5M1o607GZlVywzVgQ/formResponse";

/** Form entry IDs (from Google Form URL). */
export const GOOGLE_FORM_ENTRIES = {
  registrationNo: "entry.677842607",
  name: "entry.206267871",
  email: "entry.628457264",
  phone: "entry.949060927",
  year: "entry.380744502",
  section: "entry.912294457",
} as const;

/** Direct Google Form URL for registration (Typing Test & general). */
export const GOOGLE_FORM_REGISTRATION_URL =
  import.meta.env.VITE_GOOGLE_FORM_URL ||
  "https://docs.google.com/forms/d/e/1FAIpQLSfwOwr2aLAeUeJNJLKX-rkyq03cjUCSz5M1o607GZlVywzVgQ/viewform?usp=pp_url";

/** Formfacade embed URL — from Formfacade add-on: "Embed in React App" (optional). */
export const FORMFACADE_TYPING_TEST_URL =
  import.meta.env.VITE_FORMFACADE_TYPING_TEST_URL || "";
