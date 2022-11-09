import { definePlugin } from "@monokle/validation/custom";
import { noEmptyAnnotations } from "./rules/noEmptyAnnotations.js";

export default definePlugin({
  id: "EXB",
  name: "example-b",
  description: "Validates your annotations",
  rules: {
    noEmptyAnnotations,
  },
});
