import { defineRule } from "@monokle/validation/custom";
import { isServiceAccount } from "../schemas/__generated__/serviceaccount.v1.js";
import { validatePodSpec } from "../utils.js";

export const noAutomountServiceAccountToken = defineRule({
  id: 10,
  description: "Disallow automounting the service account token",
  fullDescription:
    "Most often secret tokens are unnecessarily mounted during runtime as there is no need to access the Kubernetes API server.",
  help: "Disable automatically mounting the service account token.",
  validate({ resources }, { report, getRelated }) {
    validatePodSpec(resources, (resource, pod, prefix) => {
      const podNotAutomounted = pod.automountServiceAccountToken === false;
      if (podNotAutomounted) return;

      const serviceAccounts = getRelated(resource).filter(isServiceAccount);
      const saNotAutomounted = serviceAccounts.some(
        (sa) => sa.automountServiceAccountToken === false
      );
      if (saNotAutomounted) return;

      report(resource, {
        path: `${prefix}.automountServiceAccountToken`,
      });
    });
  },
});
