import { definePlugin } from "@monokle/validation/custom";
import { noEmptyAnnotations } from "./rules/noEmptyAnnotations.js";
import { noExternalUrl } from "./rules/noExternalUrl.js";

export default definePlugin({
  id: "EXA",
  name: "example-a",
  description: "Validates your annotations",
  rules: {
    noEmptyAnnotations,
    noExternalUrl,
  },
});
