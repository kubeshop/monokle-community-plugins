import { defineRule } from "@monokle/validation/custom";
import { validatePodSpec } from "../utils.js";

export const noHostMountedPath = defineRule({
  id: 5,
  description: "Disallow mounting hostPath volumes",
  help: "Do not set 'spec.volumes[*].hostPath'.",
  validate({ resources }, { report }) {
    validatePodSpec(resources, (resource, pod, prefix) => {
      pod.volumes?.forEach((volume, index) => {
        const isValid = volume.hostPath === undefined;
        if (isValid) return;
        report(resource, {
          path: `${prefix}.volumes.${index}.hostPath`,
        });
      });
    });
  },
});
