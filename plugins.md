# Available Plugins

- [Annotations](#annotations) 
- [ArgoCD Validation plugin](#argocd-validation-plugin) 
- [NSA](#nsa) 


## Annotations

An example custom plugin which checks existence of annotations.

```yaml
plugins:
  annotations: true
```

**Rules**

| name   | description |
|--------|---|
| no-empty-annotations | Require annotations as metadata. |
| no-prometheus-admin | Disallow the admin API for Prometheus instances. |


## ArgoCD Validation plugin

Validation rules related to ArgoCD

```yaml
plugins:
  argo: true
```

**Rules**

| name   | description |
|--------|---|
| argo-config-maps | Check that ArgoCD ConfigMaps have required label |
| app-destination | Argo Application&#39;s destination are mutually exclusive |


## NSA

Validates guidelines from the NSA Kubernetes Hardening guide.

```yaml
plugins:
  nsa: true
```

**Rules**

| name   | description |
|--------|---|
| no-elevated-process | Disallow the process from elevating its privileges. |
| no-low-user-id | Disallow running with a low user ID |
| no-writable-fs | Require a read-only root file system |
| no-low-group-id | Disallow running with a low group ID |
| no-host-mounted-path | Disallow mounting hostPath volumes |
| no-pod-execute | Disallow permissions to exec on pods |
| no-pod-create | Disallow permissions to create pods |
| no-host-port-access | Disallow accessing the host ports |
| run-as-non-root | Requires the container to runs as non root user |
| no-automount-service-account-token | Disallow automounting the service account token |

