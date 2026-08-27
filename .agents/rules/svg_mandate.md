---
description: "Global Markdown Visual Standard: SVG Schematics"
activation: "When generating any system diagrams, logic flows, or architectural visual representations."
---

# THE SVG MANDATE

## 1. Absolute Prohibition of Mermaid.js
You are strictly forbidden from generating `mermaid` code blocks for architectural diagrams, logic flows, state machines, or geometric representations. Mermaid produces blocky, low-fidelity graphics that fail to capture physical rendering mechanics. 

## 2. Mandatory Use of Inline SVG
All visualizations must be natively written as inline HTML5 `<svg>` blocks directly inside the Markdown files. 
- You must leverage the exact professional stylesheet defined by the CHROMA project:
  - **Background:** Deep Dark Blue / Black (`#0B0F19`)
  - **Structural Grids/Borders:** Gray (`#1F2937` or `#9CA3AF`)
  - **Geometry (AABBs):** Transparent Blue (`rgba(59, 130, 246, 0.2)`), Transparent White (`rgba(255, 255, 255, 0.15)`).
  - **Vectors/Rays/Accents:** Glowing Gold (`#FFD700`)
- **Fidelity:** SVGs must visually represent the exact physical relationships (e.g., overlapping boxes must physically overlap in the SVG code).
- **Labels:** All SVGs must include clear text labels inside the graphic, and must be captioned in the markdown (e.g., `<b>Figure 1: [Description]</b>`). 

## 3. Physical Realism
Do not draw logical flowcharts. Draw physical space. If a Ray goes straight, draw a straight line. If two objects occupy the same space, their coordinates must intersect in the SVG.
