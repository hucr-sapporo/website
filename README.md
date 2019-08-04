# Home Page of Hokkaido University Cetacean Research Sapporo

URL: http://hucrsapporo.php.xdomain.jp/

## Requirements

- Nodejs >= 10.15
- PHP >= 7.0

## Build

```console
$ cd <project root directory>
$ yarn install
$ yarn run build
```

Then the hole project source will be bundled and you can see the results in the dist/ directory.

## Contribution

If you want to be a contributor, It is convenient to launch the development server.

```console
$ cd <project root directory>
$ yarn install
$ yarn run serve
```

Then the browser opens automarically.

With the project rendered on the browser, HMR (Hot Module Replacement) should work and your changes will applieded to your browser soon.

```console
$ yarn run lint
```

## License

MIT License

2019 Ryohei Machida <machida_mn@complex.ist.hokudai.ac.jp>
