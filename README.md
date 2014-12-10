Meteor-Winston-Airbrake
===============
A wrapper around [winston-airbrake](https://github.com/jkaan/winston-airbrake) for using [Airbrake](https://airbrake.io) transport with [winston](https://github.com/flatiron/winston.git) for use on [Meteor](http://meteor.com) :)

##Install
meteor add joeykaan:meteor-winston-airbrake

##Usage

Winston is available as the global variable named: `Winston`

The Winston Airbrake transport is available as the global variable named: `Winston_Airbrake`

Example configuration looks like this:

``` js
var options = {
    "level": "error", // Default is info, but probably don't want all your logs to be send to Airbrake
    "apiKey": "YOUR_API_KEY",
    "host": "YOUR_HOST", // Host which will show up when viewing the error in Airbrake-related service.
    "serviceHost": "YOUR_SERVICE_HOST", // The host to send the errors to.
    "protocol": "https",
    "handleExceptions": true
};


Winston.add(Winston_Airbrake, airbrakeOptions);

Winston.error("Hit teh airbrakes!");

```

See winston-airbrake [documentation](https://github.com/jkaan/winston-airbrake) for more details.
