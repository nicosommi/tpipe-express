/* ph replacements */
/* name, /'name': 'tpipe-express'/g, 'name': 'tpipe-express'
version, /'version': '\bv?(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?\b'/ig, 'version': '0.0.1'
description, /'description': 'a\ gdd\ utility'/g, 'description': 'piper'
main, /'main': '[a-zA-Z\.\/]+'/ig, 'main': './dist/lib/mappers.js'
license, /MIT/g, MIT */
/* endph */
/* ph ignoringStamps */
/* webapp_scripts, service_scripts, webapp_dependencies, service_dependencies, webapp_devDependencies, service_devDependencies, graph_dependencies, rdbms */
/* endph */

module.exports =
{
  'name': 'tpipe-express',
  'version': '0.0.1',
  'description': 'tpipe common mappings for express',
  'main': './dist/lib/mappers.js',
  'nyc': {
    'lines': 60,
    'statements': 60,
    'functions': 60,
    'branches': 60,
    'sourceType': 'module',
    'include': [
      'source/**/*.js'
    ],
    'exclude': [
      'spec/**/*.spec.js'
    ],
    'reporter': [
      'lcov',
      'text'
    ],
    'require': [
      'babel-register',
      './spec/mocha.setup.js'
    ],
    'extension': [
      '.js'
    ],
    'cache': true,
    'all': true,
    'check-coverage': true,
    'report-dir': './.coverage'
  },
  'standard': {
    'globals': [
      'describe',
      'context',
      'before',
      'beforeEach',
      'after',
      'afterEach',
      'it',
      'xit',
      'expect'
    ]
  },
  /* ph bin */
  /* endph */
  'scripts': {
    /* ph componentScripts */
    /* endph */
    /* stamp webapp_scripts */
    /* endstamp */
    /* stamp lib_scripts */
    /* endstamp */
    /* stamp service_scripts */
    /* endstamp */
    'pretest': 'gddify refresh',
    'test': 'nyc --reporter=text-summary mocha \'spec/**/*.spec.js\'',
    'posttest': 'npm run build-dev',
    'watch': 'watch \'nyc --reporter=text-summary mocha "spec/**/*.spec.js"\' source spec',
    'build': 'rimraf dist && babel source --out-dir dist',
    'build-dev': 'rimraf dist && babel source --out-dir dist --source-maps inline',
    'coverage': 'nyc mocha \'spec/**/*.spec.js\''
  },
  'author': 'nicosommi',
  'license': 'MIT',
  'dependencies': {
    /* ph componentDependencies */
    'block-js': '0.0.2',
    'regex-parser': '^2.2.1',
    'semver': '^5.1.0',
    'fs-extra': '^0.26.7',
    /* endph */
    /* stamp webapp_dependencies */
    /* endstamp */
    /* stamp lib_dependencies */
    'incognito': '^0.1.4',
    /* endstamp */
    /* stamp service_dependencies */
    /* endstamp */
    /* stamp rdbms_dependencies */
    /* endstamp */
    /* stamp graph_dependencies */
    /* endstamp */
    'cuid': '^1.3.8',
    'bluebird': '^3.3.5',
    'debug': '^2.2.0'
  },
  'devDependencies': {
    /* ph componentDevDependencies */
    'standard': '^7.1.2',
    /* endph */
    /* stamp webapp_devDependencies */
    /* endstamp */
    /* stamp lib_devDependencies */
    /* endstamp */
    /* stamp service_devDependencies */
    /* endstamp */
    'nyc': '^8.4.0',
    'rimraf': '^2.5.2',
    'sinon': '^1.17.3',
    'should': '^8.2.2',
    'mocha': '^2.2.5',
    'babel': '^6.5.2',
    'babel-cli': '^6.18.0',
    'babel-core': '^6.6.4',
    'babel-plugin-rewire': '^1.0.0-rc-1',
    'babel-preset-es2015': '^6.6.0',
    'babel-preset-stage-3': '^6.5.0',
    'coveralls': '^2.11.2',
    'watch': '^1.0.1'
  },
  /* ph repository */
  'repository': {
    'type': 'git',
    'url': 'git+https://github.com/nicosommi/tpipe-express.git'
  },
  /* endph */
  /* ph extra */
  /* endph */
  'readmeFilename': 'README.md',
  /* ph contributors */
  'contributors': [],
  /* endph */
  /* ph homepage */
  'homepage': 'https://github.com/nicosommi/tpipe-express'
  /* endph */
}
