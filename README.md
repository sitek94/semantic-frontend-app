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
Secondly, disable publishing in `@semantic-release/npm` plugin:
```js
// release.config.js
module.exports = {
  branches: ['main'],
  plugins: ['@semantic-release/npm', { npmPublish: false }]
}
```

[Why is the package.json’s version not updated in my repository?](https://semantic-release.gitbook.io/semantic-release/support/faq#why-is-the-package.jsons-version-not-updated-in-my-repository)
[Can I skip the release to the npm registry?](https://semantic-release.gitbook.io/semantic-release/support/faq#can-i-skip-the-release-to-the-npm-registry)


