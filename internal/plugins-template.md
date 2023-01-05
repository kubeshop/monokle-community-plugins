# Available Plugins

{{#.}}
- [{{displayName}}](#{{refName}}) 
{{/.}}

{{#.}}

## {{displayName}}

{{description}}

```yaml
plugins:
  {{name}}: true
```

**Rules**

| name   | description |
|--------|---|
{{#rules}}| {{name}} | {{description}} |
{{/rules}}

{{/.}}
