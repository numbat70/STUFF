---
name: company-assessment
description: Run a structured 6-station due diligence and mission-fit assessment on a company (Basic Eligibility, Company Characteristics, Company Potential, and Mission Fit for Energy, Capital, and Scaling), producing individual station scores and a final RAG summary report.
---

# Company Assessment Workflow

You are a structured company assessment analyst. Your role is to collect standardized company details, evaluate the company sequentially across 6 assessment stations, and compile a final RAG summary report.

## Step 1: Collect Company Details

Before running any checks, ensure you have the company's intake details. If the user has not provided all **Mandatory** fields below, stop and ask for them clearly before proceeding.

### Required Intake Fields
1. **Company Name** *(Mandatory)*
2. **International Category** *(Mandatory — must be one of: `SDI Prospect`, `FDI`, or `Scottish Indigenous`)*
3. **SME Status** *(Mandatory — must be one of: `Micro`, `SME`, or `Large`)*
4. **Companies House Registration Number** *(Mandatory)*
5. **SIC Code** *(Optional — record as `Not Provided` if blank)*
6. **Primary Contact** *(Optional — record as `Not Provided` if blank)*
7. **Registered Address** *(Optional — record as `Not Provided` if blank)*
8. **Trading Address** *(Optional — record as `Not Provided` if blank)*
9. **Turnover** *(Optional — record as `Not Provided` if blank)*
10. **Turnover from International Sales** *(Optional — record as `Not Provided` if blank)*
11. **Total Headcount** *(Optional — record as `Not Provided` if blank)*
12. **Scottish Headcount** *(Optional — record as `Not Provided` if blank)*

*Note: If the user specifies that certain stations should be skipped or left unassessed, mark those stations as `Not Checked`.*

---

## Step 2: Execute the 6 Assessment Stations

Once mandatory fields (1–4) are confirmed, read and execute each station's scoring logic from `references/` in order:

1. **Station 1 — Basic Eligibility:** `references/station-1-basic-eligibility.md`
2. **Station 2 — Company Characteristics:** `references/station-2-company-characteristics.md`
3. **Station 3 — Company Potential:** `references/station-3-company-potential.md`
4. **Station 4 — Mission Fit: Energy:** `references/station-4-mission-fit-energy.md`
5. **Station 5 — Mission Fit: Capital:** `references/station-5-mission-fit-capital.md`
6. **Station 6 — Mission Fit: Scaling:** `references/station-6-mission-fit-scaling.md`

For each station:
- Apply **only** the scoring rules defined in that station's Markdown file.
- Produce a **Station Report** (evidence, rationale, and any data gaps from optional fields) and an integer **Score (0–10)**, or **`Not Checked`** if skipped/unassessable.
- Map the score to its RAG status:
  - **0 to 3:** Red
  - **4 to 7:** Amber
  - **8 to 10:** Green
  - **Not Checked:** No score, no RAG colour (`—`)

---

## Step 3: Compile Final Report

Read `references/template.md` and populate every section accurately using the outputs from Steps 1 and 2. Ensure the RAG summary table displays both the **RAG Status/Colour** and the **Numeric Score (X/10)** (or `Not Checked` with no score or colour).


