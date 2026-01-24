# Mock UI SOP

## Prime Directive
Mock UI must communicate system quality and operational credibility, not feature quantity.

## What Mock UI Is / Is Not
Mock UI is a controlled, minimal representation of product behavior used to signal trust, clarity, and execution readiness.

Mock UI is not a product preview, feature tour, roadmap artifact, or usability prototype.

## Canonical Mock UI Types
- Primary Dashboard (mandatory)
- Workflow Screen (optional)
- Detail View (optional)

Rule: never more than 1–2 mock UI screens per LP.

## Global Design Laws
- Visual restraint: minimal chrome, limited color, no decorative noise.
- Density: realistic information density; avoid empty, overly airy layouts.
- Typography: use system type tokens; no bespoke sizes or typefaces.
- Data realism: no lorem ipsum; use realistic IDs, timestamps, states, and names.

## Content Rules
What must always be shown:
- Navigation or context header
- Primary metric or state indicator
- At least one real-looking record or row
- Clear status or progress state

What must never be shown:
- Empty states as the sole view
- Placeholder text, lorem ipsum, or fake copy patterns
- Conflicting system states (e.g., "Failed" and "Complete" for the same item)
- Unbounded tables or infinite lists

## Layout Blueprint
Canonical structure:
1) Top bar with product name and global action area.
2) Left rail or top nav with 3–6 items.
3) Primary content area containing one focused module:
   - Dashboard: summary cards + compact table or timeline.
   - Workflow: step list + current step detail.
   - Detail: header + key fields + activity log.

## Visual Authenticity QA Checklist
- Realistic record IDs, timestamps, and names
- Single, coherent state per record
- Balanced density with visible grouping
- Readable hierarchy without oversized headings
- No speculative features or beta labels
- Consistent spacing and alignment

## Allowed Output Formats
- Static image
- Static React component
- Locked Figma frame

## LP Placement Rules
Mock UI may appear in:
- Hero media area
- Feature deep dive
- Use-case block

Maximum allowed instances: 2 per LP.

## GTM Rationale
Mock UI bridges the trust gap between narrative copy and product reality by showing credible operational states without implying unbuilt features.

## Final Law
If mock UI removal does not reduce conversion, it failed.

