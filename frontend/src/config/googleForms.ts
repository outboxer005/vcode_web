/**
 * Debugging & Defend Google Form configuration
 */
export const DEBUGGING_FORM_SUBMIT_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSea0JvRs_S7Pro3krEb9_IOvdC6mk_l69MhFbzqRA4H1AvXeQ/formResponse";

export const DEBUGGING_FORM_ENTRIES = {
  member1Name: "entry.118147828",
  regno1: "entry.1946971121",
  email1: "entry.373381375",
  mobile1: "entry.1986927716",
  year1: "entry.134734037",
  section1: "entry.879840264",
  member2Name: "entry.109092656",
  regno2: "entry.202560722",
  email2: "entry.1888213613",
  mobile2: "entry.448344595",
  year2: "entry.984386208",
  section2: "entry.516174737",
  member3Name: "entry.1003593596",
  regno3: "entry.445940735",
  email3: "entry.684201959",
  mobile3: "entry.566125213",
  year3: "entry.273730245",
  section3: "entry.224749384",
} as const;

/**
 * Code Hunt Google Form configuration
 */
export const CODE_HUNT_FORM_SUBMIT_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc9y0LnmjC2MQWj3cJwyYlRMicU8EQYJf4OWtFDMVtdJQOwIg/formResponse";

export const CODE_HUNT_FORM_ENTRIES = {
  member1Name: "entry.823797018",
  regno1: "entry.646615959",
  email1: "entry.595810653",
  mobile1: "entry.1143723946",
  year1: "entry.1764757786",
  section1: "entry.1139628140",
  member2Name: "entry.490302841",
  regno2: "entry.1595187398",
  email2: "entry.1812949764",
  mobile2: "entry.940326146",
  year2: "entry.2073986191",
  section2: "entry.636005069",
  member3Name: "entry.1457268848",
  regno3: "entry.674682031",
  email3: "entry.418463944",
  mobile3: "entry.86100749",
  year3: "entry.342164880",
  section3: "entry.1585014941",
  member4Name: "entry.1635391229",
  regno4: "entry.1651997207",
  email4: "entry.1922084739",
  mobile4: "entry.285278981",
  year4: "entry.1695786273",
  section4: "entry.1873681923",
} as const;

/**
 * Coding Contest Google Form configuration
 */
export const CODING_CONTEST_FORM_SUBMIT_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe14_bIdrR0ZRUtj_MjGtDozj-ZMGqU9UU4mjW_PSkilD0SvA/formResponse";

export const CODING_CONTEST_FORM_ENTRIES = {
  name: "entry.1296270398",
  registrationNo: "entry.200121814",
  email: "entry.1829939690",
  phone: "entry.523965956",
  year: "entry.733034057",
  section: "entry.252049230",
} as const;

/**
 * Technical Quiz Google Form configuration
 */
export const TECHNICAL_QUIZ_FORM_SUBMIT_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfEG0dBn7osVqkIopu8_9H5qGhFjeDWCX4LuoRkaNWGkMYM7A/formResponse";

/** Technical Quiz Form entry IDs (from Google Form URL). */
export const TECHNICAL_QUIZ_FORM_ENTRIES = {
  member1Name: "entry.2125396394",
  regno1: "entry.1942767765",
  email1: "entry.132518256",
  mobile1: "entry.22492783",
  year1: "entry.286673766",
  section1: "entry.1442058906",
  member2Name: "entry.906110348",
  regno2: "entry.1453190835",
  email2: "entry.930591111",
  mobile2: "entry.232027668",
  year2: "entry.469922168",
  section2: "entry.153179868",
  member3Name: "entry.1118124165",
  regno3: "entry.1533969903",
  email3: "entry.959001602",
  mobile3: "entry.2007513038",
  year3: "entry.202183163",
  section3: "entry.1715637606",
  member4Name: "entry.1531374712",
  regno4: "entry.1437045471",
  email4: "entry.1088035620",
  mobile4: "entry.2121375043",
  year4: "entry.397408646",
  section4: "entry.1269248029",
} as const;

/** Direct Google Form URL for Technical Quiz registration. */
export const TECHNICAL_QUIZ_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfEG0dBn7osVqkIopu8_9H5qGhFjeDWCX4LuoRkaNWGkMYM7A/viewform?usp=pp_url";
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
