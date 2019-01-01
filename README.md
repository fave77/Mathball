# Introduction

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![](https://github.com/pbiswas101/Mathball/blob/master/assets/mathball-logo.png)

**Mathball** is an npm package for competitive programming in [JavaScript][1] with a focus on common mathematical utilities being implemented in relevant algorithms & data structures for optimized performance!

JavaScript was never built while keeping competitive coding in mind; let us all agree on that. But, the stuff that we build with it today was not something it was built for either! Back in 1995, [Brendan Eich][2] designed JS only for adding interactivity to web pages; and now with it, we can build *web servers*, *microservices*, *games*, *mobile apps*, *IoT apps*, *ML in the browser*, and so on. Based on the notion - **JS is everywhere!** I also believe that maybe its time to motivate people who are well versed with this language to finally consider it in the realm of competitive programming.

## Installation

You can download the package in your working directory by simply typing in the **terminal** (for Mac/Linux users) or **command prompt** (for Windows users):

```
$ npm install mathball --save
```

## Features

- **Number Checkers**
	- isArmstrong()
	- isAutomorphic()
	- isNeon()
	- isPalindrome()
	- isPrime()

- **Find nth Number**
	- fibonacci()
	- magic()

- **Mathematical Utilities**
	- gcd()
	- isEven()
	- isOdd()
	- lcm()
	- length()
	- max()
	- min()
	- sort()
	- sum()

## Examples

You can access all the utilities via **mathball** object, `M` (or whatever you end up calling it) like so:

```
let M = require('mathball');

console.log(M.isPalindrome(1551))       //true
console.log(M.isEven(7))		//false
console.log(M.sum([4, 5, 9]))		//18
```

Or, you can directly access the function given you only care about an individual component as given below:

```
let gcd = require('mathball/gcd');

console.log(gcd([12, 18, 24]));		//6
```

## Contribution

1. Fork the project. :grey_exclamation:
2. Fix issues & add changes. :wrench:
3. Follow the guidelines given in [CONTRIBUTING.md][3]. :star2:
4. Make a PR. :bowtie:
5. Mission Acomplished! :tada:

## License

The MIT License 2018 - [Priyabrata Biswas][4].

[1]: https://developer.mozilla.org/bm/docs/Web/JavaScript
[2]: https://en.wikipedia.org/wiki/Brendan_Eich
[3]: https://github.com/pbiswas101/Mathball/blob/master/CONTRIBUTING.md
[4]: https://github.com/pbiswas101
