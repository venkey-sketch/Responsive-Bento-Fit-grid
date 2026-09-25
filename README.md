# Kinetic Bio-Lab — Responsive Bento Grid Dashboard

A modern, responsive Bento Grid dashboard built strictly using **HTML5 and CSS Grid & Flexbox**. 
Designed as a high-performance **Athletic & Bio-Performance Hub** (with an alternate **Apex Pro Gamer Profile** theme), matching the exact geometric proportions of the Frontend Mentor Bento Grid challenge.

---

## 🔗 Live Previews & References
- **Standalone HTML & CSS (0% JavaScript)**: Open `standalone.html` in any browser.
- **Vite React Interactive Preview**: Run `npm run dev` and open `http://localhost:3000`.
- **Desktop Layout Reference**: [Frontend Mentor Desktop Layout](https://shorturl.at/Yol8d)
- **Mobile Layout Reference**: [Frontend Mentor Mobile Layout](https://shorturl.at/Jv6ic)

---

## 📐 Layout Architecture & Grid Specifications

### 1. Desktop Layout (≥ 1024px)
The desktop layout uses a **4-column by 3-row CSS Grid** (`grid-template-columns: repeat(4, 1fr)`) with a total of 12 tessellated cells:

```
+------------------+------------------------------------+------------------+
|                  |                                    |                  |
|  CARD 1          |         CARD 2 (Hero)              |  CARD 3          |
|  (Adaptive       |         (Peak VO2 Max 10x Faster)  |  (Circadian      |
|   Strength)      |         [Col 2 / span 2, Row 1]    |   Recovery)      |
|  [Col 1,         +-----------------+------------------+  [Col 4,         |
|   Row 1 / span 2]|  CARD 5         |  CARD 6          |   Row 1 / span 2]|
|                  |  (Biometric     |  (Training Zones |                  |
|                  |   Sync)         |   Polarity)      |                  |
|                  |  [Col 2, Row 2] |  [Col 3, Row 2]  |                  |
+------------------+-----------------+------------------+------------------+
|  CARD 4          |  CARD 7         |  CARD 8                             |
|  (Precision      |  (+68.4%        |  (Milestone PR Breakthroughs)       |
|   Macro Fueling) |   Lactate Delta)|                                     |
|  [Col 1, Row 3]  |  [Col 2, Row 3] |  [Col 3 / span 2, Row 3]            |
+------------------+-----------------+-------------------------------------+
```

#### CSS Grid Rules:
```css
@media (min-width: 1024px) {
  .bento-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto auto auto;
    gap: 1.5rem;
  }
  .card-1 { grid-column: 1 / 2; grid-row: 1 / 3; } /* Left Tall (2 rows) */
  .card-2 { grid-column: 2 / 4; grid-row: 1 / 2; } /* Hero Center (2 cols) */
  .card-3 { grid-column: 4 / 5; grid-row: 1 / 3; } /* Right Tall (2 rows) */
  .card-5 { grid-column: 2 / 3; grid-row: 2 / 3; } /* Mid Left */
  .card-6 { grid-column: 3 / 4; grid-row: 2 / 3; } /* Mid Right */
  .card-4 { grid-column: 1 / 2; grid-row: 3 / 4; } /* Left Bottom */
  .card-7 { grid-column: 2 / 3; grid-row: 3 / 4; } /* Bottom Mid 1 */
  .card-8 { grid-column: 3 / 5; grid-row: 3 / 4; } /* Bottom Wide (2 cols) */
}
```

---

### 2. Tablet Layout (640px – 1023px)
Adapts into a balanced 2-column grid (`grid-template-columns: repeat(2, 1fr)`):
- **Hero Card (Card 2)**: Spans both columns for prominent visual focus (`grid-column: 1 / 3`).
- **Cards 1, 3, 5, 6, 7, 4**: Arranged in pairs.
- **Bottom Wide (Card 8)**: Spans both columns at the base (`grid-column: 1 / 3`).

---

### 3. Mobile Layout (< 640px)
Collapses into a single column (`grid-template-columns: 1fr`) with **CSS `order` visual priority** matching the reference experience:
1. `Card 2` (Hero VO2 Max highlight) &rarr; `order: 1`
2. `Card 5` (Unified Biometric Sync) &rarr; `order: 2`
3. `Card 6` (Training Zones Polarity) &rarr; `order: 3`
4. `Card 3` (Circadian HRV & Sleep Architecture) &rarr; `order: 4`
5. `Card 8` (Milestone PR Streaks) &rarr; `order: 5`
6. `Card 7` (+68.4% Lactate Clearance Metric) &rarr; `order: 6`
7. `Card 1` (Adaptive Progressive Overload) &rarr; `order: 7`
8. `Card 4` (AI Precision Fueling & Macro Synthesis) &rarr; `order: 8`

---

## 🚀 How to Push to GitHub & Submit Your Repo Link

Follow these quick steps in your terminal to push this project to your GitHub account:

```bash
# 1. Initialize git (if not already initialized)
git init -b main

# 2. Stage and commit all files
git add .
git commit -m "feat: complete responsive bento grid (HTML & CSS)"

# 3. Create a new empty repository on your GitHub (e.g., https://github.com/<username>/bento-grid)
# 4. Link your remote and push:
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
git branch -M main
git push -u origin main
```

Once pushed, submit your GitHub repository link:
`https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>`

---

## 🎨 Design Constitution Compliance
- **Zero-Pill Discipline**: Metadata uses clean, unboxed text with `·` typographic separators.
- **Top Bar Contract**: Exactly 3 zones (Brand wordmark, clean text navigation links, primary action).
- **Tabular Figures**: Tabular alignment on all numbers via `font-variant-numeric: tabular-nums` and `JetBrains Mono`.
- **Zero External Fragile Images**: All graphs, dials, radial gauges, and curves are authored in pure inline SVG with accessible paths and gradient fills.
- **Strict Color Harmony**: 60% neutral obsidian dark canvas (`#07090E`), 30% structural surfaces (`#0E131F`), 10% high-intent emerald & cyan accents (`#10B981` / `#06B6D4`).
