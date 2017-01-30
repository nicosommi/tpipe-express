<!-- ph replacements -->
<!-- name, /tpipe-express/g, tpipe-express
namePascal, /TPipe\ Express/g, TPipe Express -->
<!-- endph -->
<!-- ph ignoringStamps -->
<!--  -->
<!-- endph -->
<!-- ph title -->
# TPipe Express [![npm version](https://img.shields.io/npm/v/tpipe-express.svg)](https://www.npmjs.com/package/tpipe-express) [![license type](https://img.shields.io/npm/l/tpipe-express.svg)](https://github.com/nicosommi/tpipe-express.git/blob/master/LICENSE) [![npm downloads](https://img.shields.io/npm/dm/tpipe-express.svg)](https://www.npmjs.com/package/tpipe-express) ![ECMAScript 6 & 5](https://img.shields.io/badge/ECMAScript-6%20/%205-red.svg) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
<!-- endph -->

<!-- ph description -->
TPipe Express is a common express tpipe mapping set. So you can easily pipe your express handlers.

<!-- endph -->

<!-- ph usagesAndExamples -->
```javascript
import piper from 'tpipe-express'
import expressPipeSet from 'tpipe-express-express'

 // piper returns an object with a pipe inside to be injected in express
const { pipe } = piper(
    input =>
      (
        {
          parameters: {
            view: 'index'
          },
          body: {
            ...input.body
          }
        }
      )
  )
.incorporate(expressPipeSet) //put the mappings around the handler and prepare methods for express (getHandler)

this.app.get('/myRoute', pipe.getHandler());
```

<!-- endph -->
<!-- ph howItWorks -->
<!-- endph -->
<!-- ph qualityAndCompatibility -->
# Quality and Compatibility

[![Build Status](https://travis-ci.org/nicosommi/tpipe-express.png?branch=master)](https://travis-ci.org/nicosommi/tpipe-express) [![Coverage Status](https://coveralls.io/repos/nicosommi/tpipe-express/badge.svg)](https://coveralls.io/r/nicosommi/tpipe-express)  [![bitHound Score](https://www.bithound.io/github/nicosommi/tpipe-express/badges/score.svg)](https://www.bithound.io/github/nicosommi/tpipe-express)  [![Dependency Status](https://david-dm.org/nicosommi/tpipe-express.png?theme=shields.io)](https://david-dm.org/nicosommi/tpipe-express?theme=shields.io) [![Dev Dependency Status](https://david-dm.org/nicosommi/tpipe-express/dev-status.svg)](https://david-dm.org/nicosommi/tpipe-express?theme=shields.io#info=devDependencies)

*Every build and release is automatically tested on the following platforms:*

![node 5.x](https://img.shields.io/badge/node-5.x-brightgreen.svg)
![node 6.x](https://img.shields.io/badge/node-6.x-brightgreen.svg)
<!-- endph -->
<!-- ph installation -->
# Installation

Copy and paste the following command into your terminal to install TPipe Express:

```
npm install tpipe-express --save
```

<!-- endph -->
<!-- stamp contribute -->
# How to Contribute

You can submit your ideas through our [issues system](https://github.com/nicosommi/tpipe-express/issues), or make the modifications yourself and submit them to us in the form of a [GitHub pull request](https://help.github.com/articles/using-pull-requests/).

<!-- endstamp -->
<!-- stamp runningtests -->
## Running Tests

It's easy to run the test suite locally, and *highly recommended* if you're using tpipe-express on a platform we aren't automatically testing for.

```
npm test
```
<!-- endstamp -->
