import { type StyleRule, layer } from "@vanilla-extract/css";

type LayerRules = NonNullable<NonNullable<StyleRule["@layer"]>[string]>;

const reset = layer();

/**
 * Create a style rule for the reset layer.
 *
 * @param rules style rule for the reset layer
 * @returns style rule wrapped with the reset layer
 */
export function resetLayer(rules: LayerRules): StyleRule {
  return { "@layer": { [reset]: rules } };
}
