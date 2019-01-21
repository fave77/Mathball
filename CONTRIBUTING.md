# Contributing is fun! :green_heart:

With your help, we can create a comprehensive mathematical tool that will help millions of people who want to do competitive programming in JavaScript for years to come. So, to make a hassle-free environment I implore you all (*while contributing*) to follow the guidelines mentioned below.

## Table of Contents :page_with_curl:

- [Cloning Locally](#cloning-locally) :cd:
- [Running Locally](#running-locally) :cyclone:
- [Guidelines](#guidelines) :white_check_mark:

## Cloning Locally

- Fork this repository :fork_and_knife:

- Copy it to your local machine by running the following command in the terminal:
```
$ git clone https://github.com/<YOUR-GITHUB-USERNAME>/Mathball.git
```

- Navigate to the project directory:
```
$ cd Mathball/
```

- Add a remote upstream so git knows where the official **Mathball** repository is located by running the following command:
```
$ git remote add upstream https://github.com/pbiswas101/Mathball.git
```

- Create a new branch for your work - `$ git checkout -b <NEW-BRANCH-NAME>`.

## Running Locally

- Make sure to have **Node.js** and **npm** installed on your machine beforehand.

- Install all the *dev-dependencies* by running the command:
```
$ npm install --dev
```

- For working on the project you can run the following script:
```bash
# testing locally
$ npm run test

# building locally
$ npm run build
```

## Guidelines

Being an open-source contributor is awesome :star: but along with that awesomeness comes responsibility. So, the responsibility of what you may ask! Well, you certainly don't want to make a PR that breaks the codebase itself, or for that matter instead of fixing bugs, it creates more. So, here are some curated guidelines one should follow in order for their PR getting merged: :pizza:

- First raise an issue regarding any feature enhancements or bugs found, before making a PR.
- While raising an issue, please follow the **ISSUE_TEMPLATE.md** guidelines.
- Write your code adhered to [Airbnb style guide][1] as much as possible.
- Make sure your editor supports the preferences from the **.editorconfig** file.
- When adding a new feature, also make sure to include the corresponding unit tests.
- Always squash your commits for cleaner commit history.
- While making a PR, please follow the **PULL_REQUEST_TEMPLATE.md** guidelines.
- When making a PR, mention the issue you are solving, like so - `Fixed #2`.
- Your PR must pass the [Travis CI][2] checks for it to be merged.
- Do not shy away from using ES6+ syntax!
- Do not review others' PR!

**HAPPY CONTRIBUTING** :slightly_smiling_face:

------------

[1]: https://github.com/airbnb/javascript
[2]: https://travis-ci.org/
