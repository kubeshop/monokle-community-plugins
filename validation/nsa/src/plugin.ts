import { definePlugin } from "@monokle/plugin-toolkit";
import { noElevatedProcess } from "./rules/1-noElevatedProcess.js";
import { noAutomountServiceAccountToken } from "./rules/10-noAutomountServiceAccountToken.js";
import { noLowUserId } from "./rules/2-noLowUserId.js";
import { noWritableFs } from "./rules/3-noWritableFs.js";
import { noLowGroupId } from "./rules/4-noLowGroupId.js";
import { noHostMountedPath } from "./rules/5-noHostMountedPath.js";
import { noPodExecute } from "./rules/6-noPodExecute.js";
import { noPodCreate } from "./rules/7-noPodCreate.js";
import { noHostPortAccess } from "./rules/8-noHostPortAccess.js";
import { runAsNonRoot } from "./rules/9-runAsNonRoot.js";

export default definePlugin({
  id: "NSA",
  name: "nsa",
  displayName: "NSA",
  description: "Validates guidelines from the NSA Kubernetes Hardening guide.",
  rules: {
    noElevatedProcess,
    noLowUserId,
    noWritableFs,
    noLowGroupId,
    noHostMountedPath,
    noPodExecute,
    noPodCreate,
    noHostPortAccess,
    runAsNonRoot,
    noAutomountServiceAccountToken,
  },
});
