import { defineRule } from "@monokle/validation/custom";
import { validatePodSpec } from "../utils.js";

export const noHostPortAccess = defineRule({
  id: 8,
  description: "Disallow accessing the host ports",
  help: "Do not set spec.containers[*].ports[*].hostPort and spec.initContainers[*].ports[*].hostPort. Instead use a Service with type NodePort.",
  validate({ resources }, { report }) {
    validatePodSpec(resources, (resource, pod, prefix) => {
      pod.initContainers?.forEach((container, i) => {
        container.ports?.forEach((port, j) => {
          const isValid = port.hostPort === undefined;
          if (isValid) return;
          report(resource, {
            path: `${prefix}.initContainers.${i}.ports.${j}.hostPort`,
          });
        });
      });

      pod.containers?.forEach((container, i) => {
        container.ports?.forEach((port, j) => {
          const isValid = port.hostPort === undefined;
          if (isValid) return;
          report(resource, {
            path: `${prefix}.containers.${i}.ports.${j}.hostPort`,
          });
        });
      });
    });
  },
});
