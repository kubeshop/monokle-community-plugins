import { definePlugin } from "@monokle/plugin-toolkit";
import {argoConfigMaps} from "./rules/1-argoConfigMaps.js";

export default definePlugin({
  id: "ARGOCD",
  name: "ArgoCD Validation plugin",
  description: "Validation rules related to ArgoCD",
  rules: {
    argoConfigMaps,
  },
});
