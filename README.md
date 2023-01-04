<p align="center">
  <img src="docs/images/large-icon-256.png" alt="Monokle Logo" width="128" height="128"/>
</p>

<p align="center">
Monokle plugins to supercharge your workflows
</p>

<p align="center">
  <a href="https://github.com/kubeshop/monokle-core/tree/main/packages/validation">
    <img title="mit licence" src="https://img.shields.io/badge/License-MIT-yellow.svg"/>
  </a>
</p>

## Welcome to Monokle community plugins

Monokle community plugins contains all our public validation plugins. 

Plugins are written in Typescript (see example below) and can currently be used in the 
[Monokle CLI](https://github.com/kubeshop/monokle-core/tree/main/packages/cli) and Monokle Cloud (see below).

## Using community plugins

### With the Monokle CLI

Simply add the name of the validator to your Monokle-CLI [configuration file](https://github.com/kubeshop/monokle-core/blob/main/packages/cli/README.md#configuration).

We will take care of the rest!

```yaml
# monokle.validation.yaml
plugins:
  my-custom-plugin: true
rules:
  my-custom-plugin/my-custom-rule: "err"
```

note: currently this always requires network connectivity to download the plugins. Please consider reaching out for us if you have use 
cases where you need the validators to be cached for offline usage.

### With the Monokle GitHub Action

Simply make sure your plugin is configured as described for the Monokle CLI above and the configuration is
committed to GitHub. The [Monokle GitHub Action](https://github.com/marketplace/actions/monokle-validation) will use this
configuration and your plugin accordingly.

### In Monokle Cloud

[Monokle Cloud](https://app.monokle.com) is a free web application where you can explore community plugins directly on public GitHub repositories.

Simply go the validation activity in the left sidebar and select any community plugin within the dropdown. Afterwards all rules and descriptions 
will appear in your application, toggle them to see their impact on your resources in real-time.

![Monokle Cloud Community Plugins](docs/images/monokle-cloud.png)

## Creating Validation Plugins

Validation plugins are currently written in Typescript (other formats may be supported in the future).

Head over to the [Custom Plugin Documentation](https://github.com/kubeshop/monokle-core/blob/main/packages/validation/docs/custom-plugins.md) to 
learn how to easily create your own validation plugins that you can either use locally or share with other users 
as described below.

## Contribute your own plugins

Plugins contributed to this repository will automatically be available to any user of Monokle CLI or Monokle Cloud.

Contribute to this repo as follows:

1. Fork this repository
2. Create a new plugin as described in the [Custom Plugin Documentation](https://github.com/kubeshop/monokle-core/blob/main/packages/validation/docs/custom-plugins.md)
   in the `/validation` folder 
3. Create a pull-request back to the main repository, we'll review the code as soon as possible.
4. Once approved and merged it will be published on plugins.monokle.com and become available for any user of
Monokle CLI or Monokle Cloud - well done! Thank you for your time to make Kubernetes easier to use!

## Get in touch!

Have questions or issues? Either open an issue in this repo or head over to the `#monokle-general` channel on our
[Discord Server](https://discord.com/channels/884464549347074049/885184274528075796) to get in touch.
