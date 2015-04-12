Package.describe({
  name: 'flowkey:boundarizr',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Show your layout boundries in a simple and fast way - Dev Package',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/flowkey/boundarizr.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('boundarizr.js', 'client');
});
