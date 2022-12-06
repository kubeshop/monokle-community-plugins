import { definePlugin } from "@monokle/plugin-toolkit";
import { noEmptyAnnotations } from "./rules/noEmptyAnnotations.js";
import { noPrometheusAdmin } from "./rules/noPrometheusAdmin.js";

export default definePlugin({
  id: "ANN",
  name: "annotations",
  displayName: "Annotations",
  description:
    "An example custom plugin which checks existence of annotations.",
  rules: {
    noEmptyAnnotations,
    noPrometheusAdmin,
  },
});
