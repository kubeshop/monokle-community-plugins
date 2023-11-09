import { defineRule } from "@monokle/plugin-toolkit";
import { isFeatureFlagConfiguration } from "../schemas/__generated__/featureflagconfiguration.core.openfeature.dev.v1alpha1.js";

export const noInvalidDefaultVariant = defineRule({
  id: 2,
  description: "Require a valid default variant",
  fullDescription:
    "Require the default variant to be one of the defined variants.",
  help: "Change `spec.featureFlagSpec.flags.xyz.defaultVariant` to a valid option.",
  validate({ resources }, { report }) {
    resources.filter(isFeatureFlagConfiguration).forEach((config) => {
      const spec = config.spec?.featureFlagSpec as any; // hack because schema is incorrect
      const flags = typeof spec === "object" ? spec["flags"] : undefined;

      if (!flags) {
        return;
      }

      for (const [flag, c] of Object.entries(flags)) {
        if (!c || typeof c !== "object") {
          continue;
        }

        const conf = c as any;
        const allVariants = Object.keys(conf.variants ?? {});
        const defaultVariant = conf.defaultvariant;

        const valid = allVariants.includes(defaultVariant);

        if (valid) {
          continue;
        }

        report(config, {
          path: `spec.featureFlagSpec.flags.${flag}.defaultVariant`,
        });
      }
    });
  },
});
