Package.describe({
  name: 'joeykaan:meteor-winston-airbrake',
  summary: 'Wrapper around winston-airbrake to use in projects using Meteor',
  version: '0.1.0',
  git: ''
});

Npm.depends({
  "winston": "0.7.2",
  "winston-airbrake-2": "0.1.0"
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');

  api.add_files('winston-airbrake.js', 'server');
  api.export('Winston_Airbrake');
});
