import { defineRule } from "@monokle/validation/custom";
import { validatePodSpec } from "../utils.js";

export const noWritableFs = defineRule({
  id: 3,
  description: "Require a read-only root file system",
  help: "Change 'containers[].securityContext.readOnlyRootFilesystem' to 'true'.",
  validate({ resources }, { report }) {
    validatePodSpec(resources, (resource, pod, prefix) => {
      pod.initContainers?.forEach((container, index) => {
        const readOnlyRootFilesystem =
          container.securityContext?.readOnlyRootFilesystem;
        const valid = readOnlyRootFilesystem === true;
        if (valid) return;

        report(resource, {
          path: `${prefix}.initContainers.${index}.securityContext.readOnlyRootFilesystem`,
        });
      });

      pod.containers.forEach((container, index) => {
        const readOnlyRootFilesystem =
          container.securityContext?.readOnlyRootFilesystem;
        const valid = readOnlyRootFilesystem === true;
        if (valid) return;

        report(resource, {
          path: `${prefix}.containers.${index}.securityContext.readOnlyRootFilesystem`,
        });
      });
    });
  },
});
