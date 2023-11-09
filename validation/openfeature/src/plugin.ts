import { definePlugin } from "@monokle/plugin-toolkit";
import { noInvalidState } from "./rules/1-feature-state.js";
import { noInvalidDefaultVariant } from "./rules/2-default-variant.js";

export default definePlugin({
  id: "OFD",
  name: "openfeature",
  displayName: "Open Feature",
  description: "Vendor-agnostic, community-driven API for feature flagging!",
  rules: {
    noInvalidState,
    noInvalidDefaultVariant,
  },
});
