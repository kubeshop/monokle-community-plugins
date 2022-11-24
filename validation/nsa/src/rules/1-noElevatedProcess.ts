import { defineRule } from "@monokle/validation/custom";
import { validatePodSpec } from "../utils.js";

export const noElevatedProcess = defineRule({
  id: 1,
  description: "Disallow the process from elevating its privileges.",
  help: "Set 'set containers[].securityContext.allowPrivilegeEscalation' to 'false'.",
  validate({ resources }, { report }) {
    validatePodSpec(resources, (resource, pod, prefix) => {
      pod.initContainers?.forEach((container, index) => {
        const allowPrivilegeEscalation =
          container.securityContext?.allowPrivilegeEscalation;

        if (allowPrivilegeEscalation === false) return;

        report(resource, {
          path: `${prefix}.initContainers.${index}.securityContext.allowPrivilegeEscalation`,
        });
      });

      pod.containers.forEach((container, index) => {
        const allowPrivilegeEscalation =
          container.securityContext?.allowPrivilegeEscalation;

        if (allowPrivilegeEscalation === false) return;

        report(resource, {
          path: `${prefix}.containers.${index}.securityContext.allowPrivilegeEscalation`,
        });
      });
    });
  },
});
