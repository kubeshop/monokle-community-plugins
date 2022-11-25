import { defineRule } from "@monokle/plugin-toolkit";
import {
  Deployment,
  isDeployment,
} from "../schemas/__generated__/deployment.apps.v1.js";
import { isService } from "../schemas/__generated__/service.v1.js";
import {
  isStatefulSet,
  StatefulSet,
} from "../schemas/__generated__/statefulset.apps.v1.js";

export const noPortMismatch = defineRule({
  id: 2,
  description: "The target port should match any container port.",
  help: "Change to target port to a port that matching a container's port.",
  validate({ resources }, { getRelated, report }) {
    resources.filter(isService).forEach((service) => {
      const resources = getRelated(service).filter(
        (r): r is Deployment | StatefulSet =>
          isDeployment(r) || isStatefulSet(r)
      );

      const validPorts = resources.flatMap((d) =>
        d.spec?.template.spec?.containers.flatMap((c) =>
          c.ports?.flatMap((p) => p.containerPort)
        )
      );

      const servicePorts = service.spec?.ports ?? [];
      servicePorts.forEach((port, index: number) => {
        if (!validPorts.includes(Number(port.targetPort))) {
          report(service, { path: `spec.ports.${index}.targetPort` });
        }
      });
    });
  },
});
