import { definePlugin } from "@monokle/plugin-toolkit";
import { noEmptyAnnotations } from "./rules/noEmptyAnnotations.js";
import { noPortMismatch } from "./rules/noPortMismatch.js";

export default definePlugin({
  id: "ANN",
  name: "annotations",
  displayName: "Annotations",
  description:
    "An example custom plugin which checks existence of annotations.",
  rules: {
    noEmptyAnnotations,
    noPortMismatch,
  },
});
