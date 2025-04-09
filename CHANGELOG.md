# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-04-09)

<section class="reverts">

### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#6499](https://github.com/stdlib-js/stdlib/issues/6499)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`c9cacbf`](https://github.com/stdlib-js/stdlib/commit/c9cacbfe7c80e80d5205c867b49bdeb199a76986) - **test:** add tests for IEEE 754-2019 compliance [(#6571)](https://github.com/stdlib-js/stdlib/pull/6571) _(by Karan Anand, stdlib-bot)_
-   [`630ddb7`](https://github.com/stdlib-js/stdlib/commit/630ddb777824b5f6e501fda6dadf4ce41dccb964) - **test:** replace equal with strictEqual _(by Karan Anand)_
-   [`5c0b04d`](https://github.com/stdlib-js/stdlib/commit/5c0b04d1e4d0e03a7364541658bada5f20f8e50c) - **chore:** address commit comments for commit bb378ff (issue #6499) [(#6565)](https://github.com/stdlib-js/stdlib/pull/6565) _(by PrathamBhamare)_
-   [`a1e230f`](https://github.com/stdlib-js/stdlib/commit/a1e230f29297caa89880e9c194c615a0400fb7bc) - **chore:** clean up cppcheck-suppress comments _(by Karan Anand)_
-   [`bb378ff`](https://github.com/stdlib-js/stdlib/commit/bb378ffa3c07f4acce9504440d26db9d2d97e091) - **docs:** replace manual `for` loop in examples [(#6472)](https://github.com/stdlib-js/stdlib/pull/6472) _(by Harsh)_
-   [`3a6a913`](https://github.com/stdlib-js/stdlib/commit/3a6a913fe41d3ffbbb4f73837fc6aa8396cdccce) - **bench:** update random value generation [(#6377)](https://github.com/stdlib-js/stdlib/pull/6377) _(by Harsh)_
-   [`a644ffe`](https://github.com/stdlib-js/stdlib/commit/a644ffeba579430f342444b80fa9d21cc4a635f4) - **chore:** remove obsolete accuracy and precision scripts [(#6435)](https://github.com/stdlib-js/stdlib/pull/6435) _(by Karan Anand)_
-   [`5b71452`](https://github.com/stdlib-js/stdlib/commit/5b71452bd40811341a2e4eaab018c3cc17c5feac) - **docs:** update related packages sections [(#4135)](https://github.com/stdlib-js/stdlib/pull/4135) _(by stdlib-bot, Athan Reines)_
-   [`ff25e13`](https://github.com/stdlib-js/stdlib/commit/ff25e1324e1507cc076078e82badce7fdf7915f6) - **docs:** remove excess whitespace _(by Philipp Burckhardt)_
-   [`b0e68c5`](https://github.com/stdlib-js/stdlib/commit/b0e68c5bc8ee985794eb2ea1791c9337cd15fbd0) - **chore:** update to modern benchmark Makefile _(by Philipp Burckhardt)_
-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - **revert:** chore: update to modern benchmark Makefile _(by Philipp Burckhardt)_
-   [`97a27cf`](https://github.com/stdlib-js/stdlib/commit/97a27cf2746042026c3e68416b7c5f9da2bb24d9) - **chore:** update to modern benchmark Makefile _(by Philipp Burckhardt)_
-   [`55ec8ed`](https://github.com/stdlib-js/stdlib/commit/55ec8edfeb7000bca7478af116e794f20560e922) - **docs:** remove comment _(by Athan Reines)_
-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 5 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Harsh
-   Karan Anand
-   Philipp Burckhardt
-   PrathamBhamare

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-07-27)

<section class="features">

### Features

-   [`ededcf6`](https://github.com/stdlib-js/stdlib/commit/ededcf66b226854367a99cb63f0f2d755f255114) - add C implementation for `math/base/special/log10` [(#743)](https://github.com/stdlib-js/stdlib/pull/743)

</section>

<!-- /.features -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#733](https://github.com/stdlib-js/stdlib/issues/733)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`8dceccc`](https://github.com/stdlib-js/stdlib/commit/8dceccc2c68a5a0beabd8a90329d7172bb33e8b9) - **refactor:** use signed integers for `math/base/special/log10` [(#2294)](https://github.com/stdlib-js/stdlib/pull/2294) _(by Gunj Joshi, Athan Reines)_
-   [`d3215eb`](https://github.com/stdlib-js/stdlib/commit/d3215eb50a3837122325f8db0415797f81d46128) - **refactor:** update `math/base/special/log10` to follow FreeBSD version `12.2.0` [(#2215)](https://github.com/stdlib-js/stdlib/pull/2215) _(by Gunj Joshi)_
-   [`7f9b5ef`](https://github.com/stdlib-js/stdlib/commit/7f9b5ef18df92bfb856d8f466dad0ef0419e00c7) - **chore:** update package meta data [(#2213)](https://github.com/stdlib-js/stdlib/pull/2213) _(by stdlib-bot, Athan Reines)_
-   [`ededcf6`](https://github.com/stdlib-js/stdlib/commit/ededcf66b226854367a99cb63f0f2d755f255114) - **feat:** add C implementation for `math/base/special/log10` [(#743)](https://github.com/stdlib-js/stdlib/pull/743) _(by Pranav Goswami, Athan Reines)_
-   [`0d3be2c`](https://github.com/stdlib-js/stdlib/commit/0d3be2ccda2d5490178836ea968e48dda9c0746d) - **chore:** update package meta data [(#2192)](https://github.com/stdlib-js/stdlib/pull/2192) _(by stdlib-bot, Athan Reines)_
-   [`65c3b27`](https://github.com/stdlib-js/stdlib/commit/65c3b274457f44d4fabc5fe48c63a7c17f3b5711) - **refactor:** update `math/base/special/log10` implementation [(#2176)](https://github.com/stdlib-js/stdlib/pull/2176) _(by Gunj Joshi, Athan Reines)_
-   [`41d41e9`](https://github.com/stdlib-js/stdlib/commit/41d41e959b4eaad3c631e6898e3144a4015a5458) - **test:** include trailing newlines in Julia-generated JSON fixtures _(by Philipp Burckhardt)_
-   [`9ed7d0e`](https://github.com/stdlib-js/stdlib/commit/9ed7d0e7d57edb5ad0dfb65c944bed87d475cbf3) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 4 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Gunj Joshi
-   Philipp Burckhardt
-   Pranav Goswami

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`215dfe6`](https://github.com/stdlib-js/stdlib/commit/215dfe690670731f044d09c92832081bc99372cc) - **docs:** update links _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Athan Reines

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2023-10-09)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-23)

<section class="features">

### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`a37ebe2`](https://github.com/stdlib-js/stdlib/commit/a37ebe2b277b2b54f00377b8582d309c65ec33ce) - **docs:** remove empty lines _(by Philipp Burckhardt)_
-   [`b734544`](https://github.com/stdlib-js/stdlib/commit/b734544a52783cb7f5cf1115f4355cabe46d0abe) - **refactor:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`c5da1f9`](https://github.com/stdlib-js/stdlib/commit/c5da1f9a22b1033d40115798acf13a09acf9410d) - **docs:** render equations via math code blocks _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

