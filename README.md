# Introduction

[![npm version](https://badge.fury.io/js/mathball.svg)](https://badge.fury.io/js/mathball) [![Build Status](https://travis-ci.org/pbiswas101/Mathball.svg?branch=master)](https://travis-ci.org/pbiswas101/Mathball) [![Known Vulnerabilities](https://snyk.io/test/github/pbiswas101/Mathball/badge.svg?targetFile=package.json)](https://snyk.io/test/github/pbiswas101/Mathball?targetFile=package.json) [![codecov](https://codecov.io/gh/pbiswas101/Mathball/branch/master/graph/badge.svg)](https://codecov.io/gh/pbiswas101/Mathball) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/1750f9ec92a14adea5593be4ad56d3a2)](https://www.codacy.com/app/pbiswas101/Mathball?utm_source=github.com&utm_medium=referral&utm_content=pbiswas101/Mathball&utm_campaign=Badge_Grade) ![](https://img.shields.io/github/issues/pbiswas101/Mathball.svg) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) ![](https://img.shields.io/github/stars/pbiswas101/Mathball.svg) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![](https://github.com/pbiswas101/Mathball/blob/master/assets/mathball-banner.png)

**Mathball** is a JavaScript library for competitive programming, implementing optimized algorithms for faster execution.

JavaScript was never built while keeping competitive coding in mind; let us all agree on that. Back in 1995, [Brendan Eich][1] developed JavaScript only for adding interactivity to web pages like handling a mouse click. Today, we can build _servers_, _games_, _mobile apps_, _IoT apps_ and even _machine learning_ in the browser is possible with JavaScript.

> "Any application that can be written in JavaScript, will eventually be written in JavaScript." -- Atwood's Law.

Hence, I believe maybe its time for people who are well versed with this particular language to finally consider using it in the realm of competitive programming as well.

## Installation

You can download the package in your working directory by simply typing in the **terminal** (for Mac/Linux users) or **command prompt** (for Windows users):

```bash
$ npm install mathball --save
```

## Features

- **Number Checkers** - [isArmstrong][3] - [isAutomorphic][4] - [isCarmichael][43] - [isDeficient][42] - [isKaprekar][23] - [isLucky][24] - [isNeon][5] - [isPalindrome][6] - [isPerfect][27] - [isPrime][7] - [isSmith][26] - [isHarshad][45]

- **Find nth Number** - [bell][32] - [catalan][22] - [factorial][21] - [fibonacci][8] - [magic][9] - [padovan][41] - [smart][25]

- **Range of Numbers** - [rangePrime][7] - [rangeFibonacci][8]

- **Mathematical Utilities** - [frequency][40] - [gcd][10] - [isEven][11] - [isOdd][12] - [lcm][13] - [length][14] - [max][15] - [min][16] - [modInv][39] - [sort][17] - [sum][18] - [pow][46] - [Complex][57]

- **Data Structures** - [priorityQueue][44]

- **Helper Methods** - [performance][28] - [pipe][29]

## Examples

You can access all the utilities via **mathball** object, `M` (or whatever you end up calling it) like so:

```js
let M = require('mathball');

console.log(M.isPalindrome(1551)); //true
console.log(M.isEven(7)); //false
console.log(M.sum([4, 5, 9])); //18
```

Or, you can directly access an individual function as given below:

```js
let gcd = require('mathball/lib/gcd');

console.log(gcd([12, 18, 24])); //6
```

## Contribution

1. Fork the project. :fork_and_knife:
2. Fix issues & add changes. :wrench:
3. Follow the guidelines given in [CONTRIBUTING.md][19]. :star2:
4. Make a PR. :hammer:
5. Mission Acomplished! :tada:

## Important Notice

> **Mathball** has been selected at [GirlScript Summer of Code 2019][30]!

![](https://cdn-images-1.medium.com/max/600/1*47hUn6EfnP5hZkHslmUsxQ.jpeg)

> **Mentors** - Neel Shah, Rishabh Malik, Mridul Aggarwal

## License

The MIT License 2019 - [Priyabrata Biswas][20].

[1]: https://en.wikipedia.org/wiki/Brendan_Eich
[3]: https://github.com/pbiswas101/Mathball/blob/master/src/armstrong/index.js
[4]: https://github.com/pbiswas101/Mathball/blob/master/src/automorphic/index.js
[5]: https://github.com/pbiswas101/Mathball/blob/master/src/neon/index.js
[6]: https://github.com/pbiswas101/Mathball/blob/master/src/palindrome/index.js
[7]: https://github.com/pbiswas101/Mathball/blob/master/src/prime/index.js
[8]: https://github.com/pbiswas101/Mathball/blob/master/src/fibonacci/index.js
[9]: https://github.com/pbiswas101/Mathball/blob/master/src/magic/index.js
[10]: https://github.com/pbiswas101/Mathball/blob/master/src/gcd/index.js
[11]: https://github.com/pbiswas101/Mathball/blob/master/src/isEven/index.js
[12]: https://github.com/pbiswas101/Mathball/blob/master/src/isOdd/index.js
[13]: https://github.com/pbiswas101/Mathball/blob/master/src/lcm/index.js
[14]: https://github.com/pbiswas101/Mathball/blob/master/src/length/index.js
[15]: https://github.com/pbiswas101/Mathball/blob/master/src/max/index.js
[16]: https://github.com/pbiswas101/Mathball/blob/master/src/min/index.js
[17]: https://github.com/pbiswas101/Mathball/blob/master/src/sort/index.js
[18]: https://github.com/pbiswas101/Mathball/blob/master/src/sum/index.js
[19]: https://github.com/pbiswas101/Mathball/blob/master/CONTRIBUTING.md
[20]: https://github.com/pbiswas101
[21]: https://github.com/pbiswas101/Mathball/blob/master/src/factorial/index.js
[22]: https://github.com/pbiswas101/Mathball/blob/master/src/catalan/index.js
[23]: https://github.com/pbiswas101/Mathball/blob/master/src/kaprekar/index.js
[24]: https://github.com/pbiswas101/Mathball/blob/master/src/lucky/index.js
[25]: https://github.com/pbiswas101/Mathball/blob/master/src/smart/index.js
[26]: https://github.com/pbiswas101/Mathball/blob/master/src/smith/index.js
[27]: https://github.com/pbiswas101/Mathball/blob/master/src/perfect/index.js
[28]: https://github.com/pbiswas101/Mathball/blob/master/src/performance/index.js
[29]: https://github.com/pbiswas101/Mathball/blob/master/src/pipe/index.js
[30]: https://www.gssoc.tech/
[32]: https://github.com/pbiswas101/Mathball/blob/master/src/bell/index.js
[39]: https://github.com/pbiswas101/Mathball/blob/master/src/modInv/index.js
[40]: https://github.com/pbiswas101/Mathball/blob/master/src/frequency/index.js
[41]: https://github.com/pbiswas101/Mathball/blob/master/src/padovan/index.js
[42]: https://github.com/pbiswas101/Mathball/blob/master/src/isDeficient/index.js
[43]: https://github.com/pbiswas101/Mathball/blob/master/src/carmichael/index.js
[44]: https://github.com/pbiswas101/Mathball/blob/master/src/PriorityQueue/index.js
[45]: https://github.com/pbiswas101/Mathball/blob/master/src/harshad/index.js
[46]: https://github.com/pbiswas101/Mathball/blob/master/src/pow/index.js
[57]: https://github.com/pbiswas101/Mathball/blob/master/src/complex/index.js
