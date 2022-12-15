import { defineRule } from "@monokle/plugin-toolkit";
import { isApplication } from "../schemas/__generated__/application.argoproj.io.v1alpha1.js";

export const appDestination = defineRule({
  id: 2,
  description: "Argo Application's destination are mutually exclusive",
  help: "Either use 'server' or 'name', but not both.",
  validate({ resources }, { report }) {
    resources.filter(isApplication).forEach((app) => {
      const hasName = app.spec.destination.name !== undefined;
      const hasServer = app.spec.destination.server !== undefined;
      const isValid = (!hasName && hasServer) || (hasName && !hasServer);
      if (isValid) return;
      report(app, { path: "spec.destination" });
    });
  },
});
