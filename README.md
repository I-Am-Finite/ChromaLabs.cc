# ChromaLabs.cc

**Geometric & Photonic Compute Architecture**

ChromaLabs is a research-backed defense and software compute startup prioritizing next-generation neural architectures and geometric processing. Supported by the National Science Foundation (NSF) I-Corps program, we focus on producing low Size, Weight, and Power (SWaP) footprint solutions for extreme edge-compute scenarios.

## Development

This platform is generated statically via pure Python using the Reflex framework. 

### Prerequisites
- Python 3.10+
- `uv` (Fast Python Package Installer & Resolver)

### Setup & Run
1. Install dependencies:
   ```bash
   uv pip install -r requirements.txt
   ```
2. Initialize local server:
   ```bash
   reflex run
   ```

## Architecture Notes
- **Hosting:** Static payload compiled via `reflex export --no-zip`.
- **Deployment:** Automated strictly through GitHub Actions to the `gh-pages` branch.
- **Styling constraints:** Dark-mode driven; emphasis on stark geometry and high-contrast vector motifs.
