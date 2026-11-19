# Station 1: Basic Eligibility

## Objective
Verify statutory standing, Scottish footprint/intent, and foundational eligibility criteria.

## Primary Inputs Evaluated
- Company Name (Field 1)
- International Category (Field 2: SDI Prospect, FDI, or Scottish Indigenous)
- SME Status (Field 3: Micro, SME, or Large)
- Companies House Registration Number (Field 4)
- Registered & Trading Addresses (Fields 7 & 8)
- Scottish Headcount vs. Total Headcount (Fields 11 & 12)

## Scoring Logic (0–10)
*Replace or refine the criteria below with your exact organizational rules:*

- **0–3 (Red — Ineligible / High Risk):**
  - Invalid, dissolved, or non-existent Companies House registration, OR
  - Fails core category/footprint rules (e.g., `Scottish Indigenous` with no Scottish registered/trading address and 0 Scottish headcount).
- **4–7 (Amber — Conditional / Partial Eligibility):**
  - Active Companies House record, meets basic category definition, but key footprint or operational evidence (e.g., Scottish trading presence or headcount) is unconfirmed or pending inward investment (`SDI Prospect` / `FDI`).
- **8–10 (Green — Fully Eligible):**
  - Verified active Companies House status, clear alignment with `International Category` and `SME Status`, and confirmed Scottish operational presence or validated inward investment pipeline.
- **Not Checked:**
  - Use only if explicitly instructed to skip Station 1.

## Output Requirements
1. **Score:** Integer `0–10` (or `Not Checked`).
2. **Report:** Concise paragraph covering registration verification, category/footprint alignment, and any missing optional fields affecting certainty.


