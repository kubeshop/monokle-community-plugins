import { defineRule } from "@monokle/validation/custom";
import { validatePodSpec } from "../utils.js";

export const runAsNonRoot = defineRule({
  id: 9,
  description: "Requires the container to runs as non root user",
  help: "Set 'containers[].securityContext.runAsNonRoot' to true.",
  validate({ resources }, { report }) {
    validatePodSpec(resources, (resource, pod, prefix) => {
      const podRunAsNonRoot = pod.securityContext?.runAsNonRoot;
      const podValid = podRunAsNonRoot === true;

      pod.initContainers?.forEach((container, index) => {
        const runAsNonRoot = container.securityContext?.runAsNonRoot;
        const valid =
          runAsNonRoot !== undefined ? runAsNonRoot === true : podValid;
        if (valid) return;

        report(resource, {
          path: `${prefix}.initContainers.${index}.securityContext.runAsNonRoot`,
        });
      });

      pod.containers.forEach((container, index) => {
        const runAsNonRoot = container.securityContext?.runAsNonRoot;
        const valid =
          runAsNonRoot !== undefined ? runAsNonRoot === true : podValid;
        if (valid) return;

        report(resource, {
          path: `${prefix}.containers.${index}.securityContext.runAsNonRoot`,
        });
      });
    });
  },
});
