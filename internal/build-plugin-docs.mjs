#!/usr/bin/env zx
// @ts-nocheck

import path from "path";
import Mustache from "mustache";
import {paramCase} from "change-case";
import * as child_process from "child_process";

// start by finding all plugins and building them
const pluginFolders = await glob(["validation/*/package.json"]);
for( const pluginFolder of pluginFolders ){
    const folder = path.join(process.cwd(), pluginFolder.substring(0, pluginFolder.length-"/package.json".length));
    console.log("Building plugin in " + folder);
    console.log( child_process.execSync( "npm run build", {cwd: folder}).toLocaleString());
}

// now find the built plugins and import them
const plugins = [];
const pluginPaths = await glob(["validation/*/dist/plugin.js"]);

console.log("Creating plugins.md from " + pluginPaths.length + " plugins");
for (const pluginPath of pluginPaths) {
    const absPath = path.join(process.cwd(), pluginPath);
    console.log("Adding plugin at " + absPath);
    try {
        const plugin = await import( absPath )
        plugins.push(
            {
                ...plugin.default,
                refName: plugin.default.displayName.toLowerCase().replaceAll(' ', '-'),
                rules: toRulesArray(plugin.default)
            });
    } catch (e) {
        console.error("Failed to load plugin ", e);
    }
}

// pass plugin metadata to Mustache template
const template = await fs.readFile("internal/plugins-template.md", "utf-8")
fs.writeFile("plugins.md", Mustache.render(template, plugins))

function toRulesArray(plugin) {
    return Object.entries(plugin.rules).map(([name, r]) => {
        return {
            name: paramCase(name),
            description: r.description || r.fullDescription || "- missing -"
        };
    });
}

