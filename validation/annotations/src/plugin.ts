import { definePlugin } from "@monokle/validation/custom";
import { noEmptyAnnotations } from "./rules/noEmptyAnnotations.js";

export default definePlugin({
  id: "ANN",
  name: "annotations",
  displayName: "Annotations",
  description:
    "An example custom plugin which checks existence of annotations.",
  rules: {
    noEmptyAnnotations,
  },
});
