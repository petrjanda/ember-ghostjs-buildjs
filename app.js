var base = require('build.js');

new base.Pipeline({
  input: 'src/',
  output: 'lib/application.js',
  pattern: '*.js',

  filters: [
    new GhostFilter(),
    new base.ConcatFilter({
      separator: '\n\n'
    })
  ]
})

new base.Pipeline({
  input: 'templates/',
  output: 'lib/application.templates.js',
  pattern: '*.handlebars',

  filters: [
    new base.HandlebarsCompileFilter(),
    new base.ConcatFilter({
      separator: '\n'
    })
  ]
})