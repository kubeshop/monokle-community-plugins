#!/usr/bin/env zx
// @ts-nocheck

const plugins = [];
const packages = await glob(["validation/*/package.json"]);

for (const pkg of packages) {
  const bar = await fs.readJson(pkg);
  const pluginName = bar["name"];
  if (!pluginName) continue;
  plugins.push(pluginName);
}

const catalog = {
  plugins,
};

console.log(JSON.stringify(catalog, null, 2));
