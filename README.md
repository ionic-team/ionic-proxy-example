# Purpose

This project is primarily set up to show you how to access API's without CORS using the Ionic proxy server.

There are two parts to this project:

* The Api Server hosted at `http://localhost:3000` - `node server.js`
* The Ionic web server hosted at `http://localhost:8100` - `ionic serve`

We want to make requests to the Api server at `localhost:3000` from the Ionic server at `localhost:8100` via an AJAX request. This will require CORS and fail due to the Api server not allowing the origin `localhost:8100` if we use `ionic serve` or `ionic run -l`:

`XMLHttpRequest cannot load http://localhost:3000/api/endpoint. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8100' is therefore not allowed access.`

# Points of reference

See `ionic.project` for configuring the proxy server. Notice how we set the `path` to `/api` - signifying any request to the Ionic server `http://localhost:8100/api` will retrieve requests to the `proxyUrl` at `http://localhost:3000/api/endpoint`.

See `www/js/app.js` for setting up the Api Endpoint as an AngularJS constant. Notice here the address is pointed at the Ionic server.

See `www/js/services.js` for using the AngularJS constant.

See `www/js/controllers.js` for using the AngularJS service.

See `gulpfile.js` to see how the gulp tasks are set up to replace your URL's in your files.

# Getting started

Run the following commands, the last two may require another console/terminal window:

`npm install`
`npm nodeserver`
`npm ionicserver`
