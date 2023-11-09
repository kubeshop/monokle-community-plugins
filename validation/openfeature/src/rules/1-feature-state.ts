import { defineRule } from "@monokle/plugin-toolkit";
import { isFeatureFlagConfiguration } from "../schemas/__generated__/featureflagconfiguration.core.openfeature.dev.v1alpha1.js";

const VALID_STATE = ["ENABLED", "DISABLED"];

export const noInvalidState = defineRule({
  id: 1,
  description: "Require valid feature flag state",
  fullDescription:
    "Feature must be in a correct state. Valid options are 'ENABLED' and 'DISABLED'",

  help: "Change `spec.featureFlagSpec.flags.xyz.state` to a valid option.",
  validate({ resources }, { report }) {
    resources.filter(isFeatureFlagConfiguration).forEach((config) => {
      const spec = config.spec?.featureFlagSpec as any; // hack because schema is incorrect
      const flags = typeof spec === "object" ? spec["flags"] : undefined;

      if (!flags) {
        return;
      }

      for (const [flag, c] of Object.entries(flags)) {
        const state = c && typeof c === "object" ? (c as any).state : undefined;

        if (!state) {
          continue;
        }

        const valid = VALID_STATE.includes(state);

        if (valid) {
          continue;
        }

        report(config, {
          path: `spec.featureFlagSpec.flags.${flag}.state`,
        });
      }
    });
  },
});
