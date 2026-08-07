import { TarotCard78 } from '../data/tarotCards78';

/**
 * Normalizes a tarot card name to standard kebab-case filename.
 * Examples:
 *  - "The Fool" -> "the-fool.webp"
 *  - "The High Priestess" -> "the-high-priestess.webp"
 *  - "Queen of Cups" -> "queen-of-cups.webp"
 *  - "Ten of Swords" -> "ten-of-swords.webp"
 */
export function normalizeTarotFilename(cardName: string): string {
  if (!cardName) return 'unknown.webp';
  const cleanName = cardName
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `${cleanName}.webp`;
}

/**
 * Returns the expected local asset path for a tarot card image.
 * Major Arcana: /assets/tarot/cards/major/{filename}.webp
 * Minor Arcana: /assets/tarot/cards/minor/{filename}.webp
 */
export function getTarotCardImageUrl(card: TarotCard78): string {
  const filename = normalizeTarotFilename(card.name);
  const isMajor = card.arcana === 'Major';
  const folder = isMajor ? 'major' : 'minor';
  return `/assets/tarot/cards/${folder}/${filename}`;
}

/**
 * Generates a full list of expected image paths for all 78 tarot cards.
 * Useful for manifest verification and documentation.
 */
export function getAllExpectedTarotImagePaths(cards: TarotCard78[]): Array<{
  id: string;
  name: string;
  arcana: string;
  suit: string;
  expectedFilename: string;
  expectedFullPath: string;
}> {
  return cards.map((card) => {
    const filename = normalizeTarotFilename(card.name);
    const fullPath = getTarotCardImageUrl(card);
    return {
      id: card.id,
      name: card.name,
      arcana: card.arcana,
      suit: card.suit,
      expectedFilename: filename,
      expectedFullPath: fullPath,
    };
  });
}
