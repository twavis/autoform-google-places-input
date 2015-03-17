Package.describe({
  name: 'abdj:autoform-google-places-input',
  version: '0.0.1',
  summary: 'Quick geocomplete input field setup with an export to a customizable address SimpleSchema',
  git: 'https://github.com/abdj/autoform-google-places-input',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use([
    'templating@1.0.11', 
    'aldeed:autoform@5.0.2', 
    'dburles:google-maps@1.0.8', 
    'reactive-var'
  ], 'client');

  api.imply('dburles:google-maps@1.0.8');
  
  api.addFiles([
    'lib/geocomplete/1.6.5/jquery.geocomplete.js',
    'lib/client/abdj:autoform-google-places-input.html',
    'lib/client/abdj:autoform-google-places-input.css',
    'lib/client/abdj:autoform-google-places-input.js'
    ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('abdj:autoform-google-places-input');
  api.addFiles('abdj:autoform-google-places-input-tests.js');
});