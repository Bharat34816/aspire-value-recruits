# Design System & Guidelines
## Aspire Value Recruits (AVR)

---

### 1. Brand Aesthetic & Visual Direction

The visual language of **Aspire Value Recruits** projects **enterprise credibility, precision calibration, and modern technological agility**. It avoids dated corporate imagery and generic recruiter templates in favor of a clean, intentional, editorial aesthetic inspired by top global tech consultancies.

---

### 2. Color Palette

#### Primary Accent: Sapphire Tech Blue
- **Primary Accent (`primary`):** `#2563EB` (Tailwind `blue-600`) — Drives primary actions, links, and focal highlights.
- **Primary Hover (`primary-hover`):** `#1D4ED8` (Tailwind `blue-700`) — Interactive feedback for primary elements.
- **Subtle Surface (`primary-subtle`):** `#EFF6FF` (Tailwind `blue-50`) — Background tint for badges, selected filters, and callout boxes.

#### Trust & Verification Accent: Emerald Green
- **Trust Accent (`emerald`):** `#059669` (Tailwind `emerald-600`) — Used for verified SLAs, replacement guarantees, success states, and the WhatsApp channel badge (`#25D366`).

#### Neutral Scale: Deep Slate & Clean Canvas
- **Background (`canvas`):** `#FFFFFF` (Pure White) and `#F8FAFC` (Slate-50) for crisp section contrast.
- **Card Background:** `#FFFFFF` with hairline borders (`#E2E8F0` / Slate-200).
- **Text Dominant (`text-primary`):** `#0F172A` (Slate-900) — Deep contrast for razor-sharp readability.
- **Text Secondary (`text-muted`):** `#475569` (Slate-600) — Descriptive metadata, supporting paragraphs, and timestamps.
- **Borders & Dividers:** `#E2E8F0` (Slate-200) / `#F1F5F9` (Slate-100).

---

### 3. Typography & Font Pairing

#### Heading Font: Plus Jakarta Sans
- **Role:** H1, H2, H3, display banners, metric callouts.
- **Characteristics:** Clean geometric structure, modern warmth, executive presence.
- **Font Weights:** `600` (SemiBold) for section headings, `700` (Bold) for hero statements and key metrics.

#### Body Font: Inter
- **Role:** Body text, UI controls, navigation items, job descriptions, form inputs.
- **Characteristics:** Exceptional readability across high-DPI screens and low-resolution mobile devices; optimized letter-spacing.
- **Font Weights:** `400` (Regular) for paragraphs, `500` (Medium) for labels and buttons, `600` (SemiBold) for highlights.

#### Type Scale (Mobile-First):
- **Hero Title (H1):** `text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900`
- **Section Title (H2):** `text-2xl sm:text-3xl font-bold tracking-tight text-slate-900`
- **Card Title (H3):** `text-lg sm:text-xl font-semibold text-slate-900`
- **Body Large:** `text-lg text-slate-600 leading-relaxed`
- **Body Regular:** `text-base text-slate-600 leading-relaxed`
- **Caption / Meta:** `text-xs sm:text-sm text-slate-500 font-medium`

---

### 4. Tone of Voice & Copywriting Rules

| Do | Don't |
|---|---|
| "Calibrated shortlists delivered in 72 hours" | "We find you top rockstar talent" |
| "Consultative GCC staffing tailored to Hyderabad and Bengaluru tech ecosystems" | "We do everything for everyone everywhere" |
| "Zero candidate charges. Compliant with India's DPDP Act." | "Free jobs for all" |
| "High-velocity talent acquisition backed by a 90-day replacement guarantee" | "We are the best recruitment firm in India" |

- **Empathetic & Direct:** Respect candidate and employer time; show compensation ranges and technical requirements transparently.
- **Authoritative & Measured:** Speak with the confidence of specialized talent consultants who understand modern cloud, AI, and enterprise tech stacks.

---

### 5. UI Component Style & Design Primitives

#### 1. Dual-Hero CTAs
- **Employer CTA (Primary):** Solid Sapphire Blue (`bg-blue-600 text-white hover:bg-blue-700 shadow-sm rounded-lg px-6 py-3 font-medium`).
- **Candidate CTA (Secondary / Co-Equal):** Refined Dark Slate (`bg-slate-900 text-white hover:bg-slate-800 rounded-lg px-6 py-3 font-medium`) or High-Contrast Outline (`border border-slate-300 text-slate-900 hover:bg-slate-100`).

#### 2. Job Card Primitives
- Clean white card (`bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-500 hover:shadow-md transition-all`).
- Clear visual hierarchy:
  - Top row: Role title + Published date badge.
  - Middle: Company / Department (confidential if marked) + Location badge (e.g. `Hyderabad (Hitec City) - Hybrid`) + Experience badge (`5-8 Yrs`).
  - Bottom: Salary benchmark tag (`₹28L - ₹40L PA`) + 1-Click "Apply Now" button.

#### 3. Forms & Accessibility
- Visible focus rings with high contrast (`focus:ring-2 focus:ring-blue-500 focus:outline-none`).
- Floating or distinct labels with clear helper text.
- Form inputs styled with `rounded-lg border-slate-300 px-4 py-2.5 text-slate-900`.
- Validation errors rendered clearly in red (`text-rose-600 text-xs mt-1`).
- Mandatory DPDP Act consent checkbox clearly visible with clickable links to the privacy policy.

#### 4. Responsive Breakpoint Guarantees
- **Mobile (360px - 480px):** Full-width touch targets (minimum 44px height), stacked buttons, simplified filter sheet.
- **Tablet (768px):** 2-column grids for jobs and service pillars, expandable navigation sheet.
- **Desktop (1024px - 1280px+):** Sidebar search filter layout, 3-column feature grids, dual navigation headers.
