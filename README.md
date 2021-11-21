# Semantic Frontend App

### How to prevent publishing to npm registry? 

```bash
✖  Failed step "verifyConditions" of plugin "@semantic-release/npm"
✖  ENONPMTOKEN No npm token specified.
```
To prevent that you have to set the project to **private** in your package.json:
```json
{
  "private": true
}
```

[semantic-release/faq](https://semantic-release.gitbook.io/semantic-release/support/faq#why-is-the-package.jsons-version-not-updated-in-my-repository)



