import { defineRule } from "@monokle/validation/custom";
import { Role, ClusterRole } from "kubernetes-types/rbac/v1.js";
import { isClusterRole } from "../schemas/__generated__/clusterrole.rbac.authorization.k8s.io.v1.js";
import { isRole } from "../schemas/__generated__/role.rbac.authorization.k8s.io.v1.js";

export const noPodCreate = defineRule({
  id: 7,
  description: "Disallow permissions to create pods",
  help: "Do not include 'create' in 'spec.rules[x].verbs",
  validate({ resources }, { report }) {
    resources.filter(isTarget).forEach((role, index) => {
      role.rules?.forEach((rule) => {
        const isValid = rule.verbs?.includes("create");
        if (isValid) return;
        report(role, { path: `spec.rules.${index}.verbs` });
      });
    });
  },
});

function isTarget(r: any): r is Role | ClusterRole {
  return isRole(r) || isClusterRole(r);
}
