# Dogs && Forecasts
## with an EVIL server

![screenshot](screenshot.png)

This simple web app has very similar client-side (browser side) code from the [fetch](https://github.com/net-art-uchicago/web-app-demos/tree/fetch) example, as well as it's own custom server similar to the one I made in the [custom-server](https://github.com/net-art-uchicago/web-app-demos/tree/custom-server) example, except that this server maliciously tracks it's visitors using [browser fingerprinting](https://blog.mozilla.org/firefox/how-to-block-fingerprinting-with-firefox/) methods.

Our client (the index page) uses various browser APIs to collect identifiable information about the visitor and then sends that data to a custom REST API endpoint we setup on our server to collect that data and convert it into a "fingerprint" (by cryptographically hashing it) and storing that fingerprint along with a time stamp in a database (a simple json file) on our server.
