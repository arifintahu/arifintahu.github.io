# portofolio

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Deploy

- git subtree push --prefix dist origin gh-pages
- git push origin `git subtree split --prefix dist main`:gh-pages --force
