# Hyperapp IIFE bug

[Hyperapp](https://github.com/jorgebucaran/hyperapp) `2.0.0-beta.2`-`2.0.0-beta.4` include a [change to the bundle that outputs an IIFE](https://github.com/jorgebucaran/hyperapp/commit/c6d17a4b5de51ec4853929cc0057d5b2c4ab0083) instead of the previous UMD build. This change breaks importing `h` and `app` with Jest for tests. To see this failure, clone this repo and run:

```console
npm i
```

To see it works with a UMD build, either change the `package.json` to use `hyperapp@2.0.0-beta.1` or use `npm run hyperapp:umd` to rebuild the current version as UMD.
