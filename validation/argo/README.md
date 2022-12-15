# Monokle custom validator for ArgoCD

This plugin currently has the following rules

| ruleId           | description                                                                     |
|------------------|---------------------------------------------------------------------------------|
| `argo-config-maps` | Check that ArgoCD ConfigMaps have required label - see [ArgoCD Documentation](https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/#atomic-configuration) |

Use with the Monokle CLI by adding this plugin to your `monokle.validation.yaml` file as follows:

```
plugins:
  argo: true
  ...
rules:
  argo/argo-config-maps: "err"
  ...
```

Read more about the CLI at https://github.com/kubeshop/monokle-core/tree/main/packages/cli
