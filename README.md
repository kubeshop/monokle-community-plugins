<p align="center">
  <img src="docs/images/large-icon-256.png" alt="Monokle Logo" width="128" height="128"/>
</p>

<p align="center">
Awesome Monokle plugins for validation and templating
</p>

<p align="center">
  <a href="https://github.com/kubeshop/monokle-core/tree/main/packages/validation">
    <img title="mit licence" src="https://img.shields.io/badge/License-MIT-yellow.svg"/>
  </a>
</p>

## Welcome to Monokle community plugins

Monokle community plugins is the home for all our publicly available plugins.

## Loading a community plugin

### Using the user interface

You can enter it within Monokle Cloud and Desktop's validation pane.

Afterwards
you can get an overview of all the rules within the user interface and explore then
in real-time.

### Using the Monokle Configuration file

Simply add the name of the validator to your Monokle Configuration file.

We will take care of the rest!

```
# monokle.validation.yaml
plugins:
  my-custom-plugin: true
rules:
  my-custom-plugin/my-custom-rule: "err"
```

Or

## Bootstrapping your first plugin

> Prerequisites: we recommend to use NPM >v7 and NodeJs LTS.

All community plugins are located within this repository.

The reason is that safety of our users is important to us.
Validation plugins can execute arbitrary code.
For this reason we'll manually review third-party code running on your browser and servers.

**1. Fork the repository**

**2. Skaffold plugin directory**

You can now generate a plugin with our easy to skaffolding tool.
It will prompt you for the name and plugin type and variant, .

```
npm create monokle-plugin
```

**3. Develop your plugin**

The skaffolding tool gives instructions on how to continue.

You can also check the README additional instructions for that type of plugin.

**3. Create a pull request**

We'll review the code as soon as possible.

It will afterwards be published on plugins.monokle.com and become available for everyone to load.
