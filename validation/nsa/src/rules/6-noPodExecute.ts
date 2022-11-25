import { defineRule } from "@monokle/validation/custom";
import { Role, ClusterRole } from "kubernetes-types/rbac/v1.js";
import { isClusterRole } from "../schemas/__generated__/clusterrole.rbac.authorization.k8s.io.v1.js";
import { isRole } from "../schemas/__generated__/role.rbac.authorization.k8s.io.v1.js";

export const noPodExecute = defineRule({
  id: 6,
  description: "Disallow permissions to exec on pods",
  help: "Do not include 'pods/exec' in 'spec.rules[x].resourcess",
  validate({ resources }, { report }) {
    resources.filter(isTarget).forEach((role, index) => {
      role.rules?.forEach((rule) => {
        const isValid = rule.resources?.includes("pods/exec");
        if (isValid) return;
        report(role, { path: `spec.rules.${index}.resources` });
      });
    });
  },
});

function isTarget(r: any): r is Role | ClusterRole {
  return isRole(r) || isClusterRole(r);
}
