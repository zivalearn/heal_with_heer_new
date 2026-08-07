# Authentic Tarot Card Asset Manifest

This directory houses high-resolution, authentic tarot card images used for the **Heal With Heer Tarot Certification & Reading Platform**.

## Asset Directory Structure

```
public/
  assets/
    tarot/
      cards/
        major/      <-- Major Arcana cards (0 - 21)
          the-fool.webp
          the-magician.webp
          the-high-priestess.webp
          ...
        minor/      <-- Minor Arcana cards (Wands, Cups, Swords, Pentacles)
          ace-of-cups.webp
          two-of-cups.webp
          queen-of-cups.webp
          ...
```

---

## Technical Specifications for Card Assets

1. **Format**: WebP (`.webp`) for lightweight, high-performance web rendering.
2. **Aspect Ratio**: Standard Tarot 2:3 ratio (e.g. `600px × 900px` or `800px × 1200px`).
3. **Color Space**: sRGB, optimized for dark mystical UI themes with crisp gold border contrast.
4. **Naming Convention**: Lowercase kebab-case (e.g., `the-fool.webp`, `queen-of-cups.webp`, `ace-of-wands.webp`).

---

## Complete List of 78 Expected Image Filenames

### Major Arcana (22 Cards) -> `public/assets/tarot/cards/major/`
- `the-fool.webp` (0)
- `the-magician.webp` (I)
- `the-high-priestess.webp` (II)
- `the-empress.webp` (III)
- `the-emperor.webp` (IV)
- `the-hierophant.webp` (V)
- `the-lovers.webp` (VI)
- `the-chariot.webp` (VII)
- `strength.webp` (VIII)
- `the-hermit.webp` (IX)
- `wheel-of-fortune.webp` (X)
- `justice.webp` (XI)
- `the-hanged-man.webp` (XII)
- `death.webp` (XIII)
- `temperance.webp` (XIV)
- `the-devil.webp` (XV)
- `the-tower.webp` (XVI)
- `the-star.webp` (XVII)
- `the-moon.webp` (XVIII)
- `the-sun.webp` (XIX)
- `judgement.webp` (XX)
- `the-world.webp` (XXI)

### Minor Arcana - Suit of Wands (14 Cards) -> `public/assets/tarot/cards/minor/`
- `ace-of-wands.webp`
- `two-of-wands.webp`
- `three-of-wands.webp`
- `four-of-wands.webp`
- `five-of-wands.webp`
- `six-of-wands.webp`
- `seven-of-wands.webp`
- `eight-of-wands.webp`
- `nine-of-wands.webp`
- `ten-of-wands.webp`
- `page-of-wands.webp`
- `knight-of-wands.webp`
- `queen-of-wands.webp`
- `king-of-wands.webp`

### Minor Arcana - Suit of Cups (14 Cards) -> `public/assets/tarot/cards/minor/`
- `ace-of-cups.webp`
- `two-of-cups.webp`
- `three-of-cups.webp`
- `four-of-cups.webp`
- `five-of-cups.webp`
- `six-of-cups.webp`
- `seven-of-cups.webp`
- `eight-of-cups.webp`
- `nine-of-cups.webp`
- `ten-of-cups.webp`
- `page-of-cups.webp`
- `knight-of-cups.webp`
- `queen-of-cups.webp`
- `king-of-cups.webp`

### Minor Arcana - Suit of Swords (14 Cards) -> `public/assets/tarot/cards/minor/`
- `ace-of-swords.webp`
- `two-of-swords.webp`
- `three-of-swords.webp`
- `four-of-swords.webp`
- `five-of-swords.webp`
- `six-of-swords.webp`
- `seven-of-swords.webp`
- `eight-of-swords.webp`
- `nine-of-swords.webp`
- `ten-of-swords.webp`
- `page-of-swords.webp`
- `knight-of-swords.webp`
- `queen-of-swords.webp`
- `king-of-swords.webp`

### Minor Arcana - Suit of Pentacles (14 Cards) -> `public/assets/tarot/cards/minor/`
- `ace-of-pentacles.webp`
- `two-of-pentacles.webp`
- `three-of-pentacles.webp`
- `four-of-pentacles.webp`
- `five-of-pentacles.webp`
- `six-of-pentacles.webp`
- `seven-of-pentacles.webp`
- `eight-of-pentacles.webp`
- `nine-of-pentacles.webp`
- `ten-of-pentacles.webp`
- `page-of-pentacles.webp`
- `knight-of-pentacles.webp`
- `queen-of-pentacles.webp`
- `king-of-pentacles.webp`

---

## Lazy Loading Infrastructure

The application frontend only loads images on-demand when a card is selected and flipped during the "✨ Unveil the Wisdom" ceremony. No image preloading occurs for unselected cards, ensuring maximum loading speed and minimal data overhead.
