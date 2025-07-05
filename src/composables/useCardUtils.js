import { useI18n } from 'vue-i18n';
import allTraits from '../data/ocw_traits.json';

/**
 * A composable for card-related utility functions.
 */
export function useCardUtils() {
  const { locale } = useI18n();

  /**
   * Gets the deployment cost of a card.
   * Uses the predefined 'cost' if available, otherwise calculates it.
   * @param {object} card The card object.
   * @returns {number} The deployment cost.
   */
  const getDeploymentCost = (card) => {
    if (card.cost !== undefined) {
      return card.cost;
    }
    // cost = round((0.7 * card['hp'] / 10) + (1.2 * card['atk'] / 4) + (0.8 * card['def'] / 1))
    return Math.round((0.7 * card.hp / 10) + (1.2 * card.atk / 4) + (0.8 * card.def));
  };

  /**
   * Gets the translated name for a trait code.
   * @param {string} traitCode The code of the trait (e.g., 'marksman').
   * @returns {string} The translated trait name.
   */
  const getTraitName = (traitCode) => {
    if (!traitCode) return '';
    const trait = allTraits.find(t => t.code === traitCode);
    return trait && trait.name[locale.value] ? trait.name[locale.value] : traitCode;
  };

  /**
   * Gets the URL for a card's image.
   * @param {object} card The card object.
   * @returns {string} The image URL.
   */
  const getCardImageUrl = (card) => {
    if (!card.universe || !card.set || !card.number || !card.version) return '';
    const imageName = `${card.universe}-${card.set}${card.number}-${card.version}-${locale.value}.jpg`;
    return new URL(`../assets/cards/${card.universe}/${imageName}`, import.meta.url).href;
  };

  return { getDeploymentCost, getTraitName, getCardImageUrl };
}