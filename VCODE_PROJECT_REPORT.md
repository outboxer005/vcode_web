# VCode Fest – Deep Project Report

**Purpose:** Understanding the existing VCode fest website (previous year) for designing the new website that uses **Google Forms** for registration/input instead of a custom backend.

---

## 1. Project Overview

- **What it is:** Full-stack event website for **VCode** – a technical fest by **Vignan University CSE Department**.
- **Current version:** VCode 2025 (date references: April 16, 2025; schema dates Sept 2025).
- **Deployment:** Frontend + Backend on **Render** (`vcode-m6ni.onrender.com`).
- **Repo reference:** README points to `VCODE_2025` on GitHub.

---

## 2. Tech Stack

### Frontend
| Item | Details |
|------|--------|
| Framework | React 19 + TypeScript |
| Build | Vite 6 |
| Routing | react-router-dom 7 |
| Styling | Tailwind CSS 4 |
| UI | Radix (Dialog, Label, Slot), Framer Motion, tsparticles, lucide-react |
| HTTP | axios |
| Feedback | react-hot-toast, react-spinners |
| Lazy loading | All main pages/components lazy-loaded |

### Backend
| Item | Details |
|------|--------|
| Runtime | Node.js (≥16) |
| Framework | Express |
| Database | MongoDB (mongoose) |
| File upload | multer + **Cloudinary** (multer-storage-cloudinary) |
| Env | dotenv, cors |

### External Services
- **Render** – Hosting (frontend + backend).
- **MongoDB** – Event registrations + Hackathon teams.
- **Cloudinary** – Logo, favicon, event images, hackathon participant photos (`dcalf4l66`).

---

## 3. Site Structure & Routes

| Route | Page/Component | Purpose |
|-------|----------------|--------|
| `/` | Home | Landing: Main (Vortex hero), TimelineDemo (schedule), PhotoGallery |
| `/events` | Events | Event grid (GlowingEffectDemo) – 5 events with Register + Info |
| `/register/:event` | DynamicRegister | Event-specific form: poster, coding, quiz, codehunt, hackathon |
| `/contact` | Contact | Event-wise volunteer contacts (Code Hunt, Coding Arena, Technical Quiz, Poster, Hackathon) |
| `/hackathon` | HackathonForm | Full hackathon submission (team + photos → backend + Cloudinary) |
| `/team` | TeamDashboard | List hackathon teams (paginated + search by reg no) |
| `/hackathonboard` | HackathonBoard | Carousel of hackathon teams for “board” display |
| `*` | NotFound | 404 |

**Note:** `TeamCard` (update team) route is commented out in `App.tsx`.

---

## 4. Events & Registration Logic

### 4.1 Event Definitions (Backend + Frontend)

Backend `eventParticipants` in `backend/src/routes/register.ts`:

| Event Name | Team Size |
|------------|-----------|
| Coding Challenge | 1 |
| Hackathon | 5 |
| Poster Presentation | 1 |
| Technical Quiz | 4 |
| Code Hunt | 3 |

Frontend event cards (GlowingEffectDemo) and event details (levels, venue, payment, etc.) are in `GlowingEffectDemo.tsx` (`eventDetails`).

### 4.2 Registration Flows (Current – Backend)

1. **Coding Challenge** – `CodingForm.tsx`  
   - 1 participant: name, email, registrationNo, phoneNo, section, year  
   - POST `https://vcode-m6ni.onrender.com/api/register`  
   - Body: `{ eventName: "Coding Challenge", participants: [formData] }`

2. **Poster Presentation** – `PosterForm.tsx`  
   - 1 participant (same fields)  
   - Same API, `eventName: "Poster Presentation"`

3. **Technical Quiz** – `QuizForm.tsx`  
   - 4 participants (same fields each)  
   - Same API, `eventName: "Technical Quiz"`

4. **Code Hunt** – `CodeHuntForm.tsx`  
   - 3 participants (same fields each)  
   - Same API, `eventName: "Code Hunt"`

5. **Hackathon** – two different flows:
   - **Registration-only (no team submission):**  
     - `TabsDemo` → SecondYear (2 members) / ThirdYear (3 members) / SecondThird (5 members)  
     - All POST to `/api/register` with `eventName: "Hackathon"` and `participants` array.
   - **Full team submission (with photos):**  
     - `HackathonForm.tsx`  
     - POST `https://vcode-m6ni.onrender.com/api/hackathon` (multipart/form-data)  
     - Fields: teamName, teamNo, problemStatement, gitHubLink, deploedLink, status, uiux, backend, frontend, deployed, participants (JSON), images (up to 6)  
     - Images uploaded to Cloudinary (`hackathon_uploads`), URLs stored in MongoDB with participants.

### 4.3 Backend Validation (Register API)

- Event name must be one of the five above.
- Participant count must match `eventParticipants[eventName]` (Hackathon allows 5).
- Each participant: name, email, registrationNo, phoneNo, section, year required.
- phoneNo and registrationNo: exactly 10 digits.

---

## 5. Data Models

### 5.1 Event Registration (MongoDB)

**Model:** `EventRegistration`  
**Collection:** eventregistrations (default Mongoose naming)

- `eventName`: string (required)
- `participants`: array of  
  - name, email, registrationNo, phoneNo, section, year
- `registeredAt`: date (default now)

No `contactEmail` in schema despite interface.

### 5.2 Hackathon (MongoDB)

**Model:** `Hackathon`  
**Collection:** hackathons

- teamName (unique), teamNo, problemStatement  
- participants: name, registrationNo, phoneNo, section, year, img (Cloudinary URL)  
- gitHubLink, deploedLink  
- uiux, backend, frontend, deployed (numbers, default 0)

Used for: team submission with photos, TeamDashboard list, HackathonBoard carousel, search by registration no.

---

## 6. Backend API Summary

| Method | Path | Purpose |
|--------|------|--------|
| GET | `/` | Health |
| POST | `/api/register` | Event registration (all events including Hackathon “registration”) |
| GET | `/api/hackathon` | List teams (query: page, limit) |
| POST | `/api/hackathon` | Create team (multipart: JSON + images) |
| GET | `/api/hackathon/forBoard` | All teams for board carousel |
| GET | `/api/hackathon/reg/:regno` | Team by participant registration number |
| * | `/*` | 404 |

---

## 7. Frontend Details Relevant for New Site

### 7.1 Shared Participant Fields (All Events)

- name, email, registrationNo, phoneNo, section, year  
- Section options depend on year (2nd year: A–S, 3rd year: A–I).

### 7.2 Hardcoded / Config

- **API base URL:** `https://vcode-m6ni.onrender.com` in 11+ files (no env variable).
- **Contact:** Volunteers and emails in `Contact.tsx` (event-wise).
- **Event copy:** Descriptions and rules in `GlowingEffectDemo.tsx` (`eventDetails`).
- **Footer:** Date “April 16, 2025”, venue “Near H-block”, Instagram, Quick Links.
- **SEO:** `index.html` – title “Vcode”, meta description, OG/Twitter, JSON-LD (Event schema).

### 7.3 Assets

- Logo, favicon, event images: Cloudinary (`dcalf4l66`) and one `dxs1ivzaa`.
- Main hero background: external wallpaper URL.

### 7.4 Known Issues / Inconsistencies

- Backend typo: `MONNGO_URL` in README and `app.ts`.
- TeamCard.tsx: API URL has double slash `api/hackathon//${id}`.
- QuizForm heading says “Coding Challenge (Team of 3)” but event is Technical Quiz (team of 4).
- Mobile menu: “Register” and “Events” both link to `/events`; “for-board” hidden on mobile.
- TeamDashboard: `totalPages` hardcoded to 6 instead of derived from API.

---

## 8. What the New Website Needs (Google Forms Approach)

### 8.1 Remove / Simplify

- **Backend:** No Node/Express/MongoDB for registration.
- **Registration API calls:** No axios POST to `/api/register` or `/api/hackathon`.
- **Hackathon team submission with photos:** No Cloudinary or backend; either drop or replace (e.g. form that only collects links + one Form for team info, or file upload in Google Form if needed).

### 8.2 Replace With Google Forms

- **One Form per event (or one Form with “Event” dropdown):**  
  - Create Google Forms with fields matching current participant data (name, email, registration no, phone, section, year) and event-specific fields (e.g. team name for hackathon).
- **Frontend:**  
  - Instead of custom forms that POST to your API, use either:
    - **Links:** “Register” buttons open the corresponding Google Form in a new tab, or
    - **Embed:** `<iframe>` embedding the Google Form on the same page (embed URL from Form “Send” → “<>”).
- **Hackathon “team submission” (if kept):**  
  - Separate Form for team + problem statement + links; photo upload can be done in Google Form (Drive storage) or omitted.

### 8.3 What Can Stay (Frontend-Only)

- **Static site:** Same React + Vite + Tailwind stack, or simplify (e.g. fewer dependencies).
- **Pages:** Home, Events, Contact, optional Team/Board if you keep a separate way to show teams (e.g. manual list or public sheet).
- **Content:** Event list, event details, volunteer contact, schedule, gallery, SEO meta and JSON-LD (update year and dates).
- **Navigation:** Header, Footer, same route plan with “Register” pointing to Google Form links or embed pages.

### 8.4 Data You Currently Store (for Google Forms Design)

- **Per event:** eventName, participants[] (name, email, registrationNo, phoneNo, section, year).
- **Hackathon-only (team submission):** teamName, teamNo, problemStatement, gitHubLink, deploedLink, participants (with optional photo URL). For Forms you can collect text + links; photos via Form file upload or separate process.

---

## 9. Recommendations for New Site

1. **Centralize config**  
   Put event names, team sizes, Form URLs (and optional embed URLs) in one config file or constants (e.g. `eventsConfig.ts`). Use it for Events page, Register links, and any “Register” buttons.

2. **One Form per event**  
   Easier to manage and to match current “event-specific” UX. Alternatively, one Form with “Event” as first question and section logic if Google Forms supports it.

3. **Update copy and SEO**  
   Replace 2025 with 2026 (or current year), fix event dates in Footer and JSON-LD, and correct any headings (e.g. Quiz form).

4. **Contact page**  
   Keep structure; update volunteer names/emails/phones as needed. No backend required.

5. **Hackathon “Teams” / “Board”**  
   If you don’t have a backend, either remove these pages or replace with:
   - Static “Registered teams” list you update manually from a Google Sheet, or
   - Public Google Sheet embed (if you use a Sheet linked to the Form).

6. **Fix small bugs**  
   Correct API URL typo in TeamCard if that route is re-used; fix QuizForm heading; fix totalPages if you keep pagination elsewhere.

7. **Optional: env for base URL**  
   If you keep any backend later (e.g. for board only), use `import.meta.env.VITE_API_URL` and one constant in frontend.

---

## 10. File Checklist for “New Site with Google Forms”

| Area | Action |
|------|--------|
| **Backend** | Omit or archive; not needed for registration. |
| **CodingForm, QuizForm, PosterForm, CodeHuntForm** | Replace submit handler with “Open Google Form” link or embed. |
| **SecondYear, ThirdYear, SecondThird, TabsDemo** | Same: link/embed to Hackathon registration Form(s). |
| **HackathonForm** | Replace with link/embed to Hackathon team Form (and optionally remove photo upload or use Form’s file upload). |
| **TeamDashboard, HackathonBoard** | Remove or replace with static/Sheet-driven content. |
| **Header, Footer, Events (GlowingEffectDemo)** | Keep; change Register targets to Form URLs; update date/year. |
| **Home, Contact, Timeline, PhotoGallery** | Keep; update content and assets. |
| **App routes** | Remove or redirect `/team`, `/hackathonboard` if not used. |
| **index.html** | Update year, dates, and meta. |
| **Config** | Add `eventsConfig.ts` (or similar) with event names and Form URLs. |

---

## 11. Summary

- **Current site:** React frontend + Express/MongoDB backend; registration and hackathon team submission (with Cloudinary) via REST API.
- **New site (your plan):** Same or refreshed frontend; **no registration backend**; **Google Forms** for all event and hackathon inputs.
- **Practical steps:** Add a small config for Form URLs, replace all form submit logic with “Open Form” links (or embeds), update year/dates/SEO, and optionally remove or simplify Team/Board pages. This report and the checklist above are enough to develop the new website on top of the existing codebase.
