import { defineRule } from "@monokle/validation/custom";
import { validatePodSpec } from "../utils.js";

export const noLowGroupId = defineRule({
  id: 4,
  description: "Disallow running with a low group ID",
  help: "Set 'containers[].securityContext.runAsGroup' to an integer > 10000.",
  validate({ resources }, { report }) {
    validatePodSpec(resources, (resource, pod, prefix) => {
      const podRunAsGroup = pod.securityContext?.runAsGroup;
      const podValid = podRunAsGroup && podRunAsGroup > 10000;

      pod.initContainers?.forEach((container, index) => {
        const runAsGroup = container.securityContext?.runAsGroup;
        const valid = runAsGroup ? runAsGroup > 10000 : podValid;
        if (valid) return;

        report(resource, {
          path: `${prefix}.initContainers.${index}.securityContext.runAsGroup`,
        });
      });

      pod.containers.forEach((container, index) => {
        const runAsGroup = container.securityContext?.runAsGroup;
        const valid = runAsGroup ? runAsGroup > 10000 : podValid;
        if (valid) return;

        report(resource, {
          path: `${prefix}.containers.${index}.securityContext.runAsGroup`,
        });
      });
    });
  },
});
