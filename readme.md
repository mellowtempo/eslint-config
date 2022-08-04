# eslint-config-config

[eslint config](http://eslint.org/docs/developer-guide/shareable-configs.html)

## Environments
nodejs mode:

```json
{
  "eslintConfig": {
    "extends": "config/node",
    "rules": {
      "rule": "off"
    }
  }
}
```

browser mode:

```json
{
  "eslintConfig": {
    "extends": "config/browser",
    "rules": {
      "rule": "off"
    }
  }
}
```
