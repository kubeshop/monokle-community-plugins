import {definePlugin} from "@monokle/plugin-toolkit";
import {argoConfigMaps} from "./rules/1-argoConfigMaps.js";
import {appDestination} from "./rules/2-appDestination.js";

export default definePlugin({
    id: "ARGO",
    name: "argo",
    displayName: "ArgoCD Validation plugin",
    description: "Validation rules related to ArgoCD",
    rules: {
        argoConfigMaps,
        appDestination,
    },
});
