import {defineRule} from "@monokle/plugin-toolkit";
import {isConfigMap} from "../schemas/__generated__/configmap.v1.js";

// see see https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/#atomic-configuration
const CONFIGMAP_NAMES: string[] = ["argocd-cm", "argocd-cmd-params-cm", "argocd-rbac-cm", "argocd-tls-certs-cm", "argocd-ssh-known-hosts-cm"];

/**
 * Check that ArgoCD ConfigMaps have the required label
 */
export const argoConfigMaps = defineRule({
    id: 1,
    description: "Check that ArgoCD ConfigMaps have required label",
    help: "Add app.kubernetes.io/part-of: argocd label to this ConfigMap for ArgoCD to use it",
    validate({resources}, {report}) {
        resources
            .filter(resource => isConfigMap(resource))
            .filter(resource => CONFIGMAP_NAMES.includes(resource.metadata?.name))
            .forEach((resource) => {
                const labels = resource.metadata?.labels ?? {};

                if (labels["app.kubernetes.io/part-of"] !== "argocd") {
                    report(resource, {path: "metadata.labels"});
                }
            });
    },
});
