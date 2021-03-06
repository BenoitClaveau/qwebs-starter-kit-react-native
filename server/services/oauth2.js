/*!
 * qwebs-oauth2
 * Copyright(c) 2017 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */

"use strict";

const OAuth2Service = require("qwebs-oauth2");
const DataError = require("qwebs").DataError;
const OAuth2Options = require("qwebs-oauth2").OAuth2MemoryOptions;
const uuid = require("uuid/v4");

class OAuth2 extends OAuth2Service {
    constructor() {
        super(new OAuth2Options());
    }

    signin(request, response) {
        if (!request.query.client_id) throw new DataError({ message: "The query string client_id is not defined."});
        if (!request.query.redirect_uri) throw new DataError({ message: "The query string redirect_uri is not defined."});
        response.send({ request: request, statusCode: 200, headers: { "Content-Type": "text/html"}, content: `<!DOCTYPE html>
<html>
    <body>
        <h1>SSO</h1>
        <form method="POST">
            <p>Login</p>
            <input type="text" name="login" />
            <input type="password" name="password" />
            <input type="submit" value="Login" />
            <input type="hidden" name="client_id" value="${request.query.client_id}" />
            <input type="hidden" name="redirect_uri" value="${request.query.redirect_uri}" />
        </form>
    </body>
</html>`});
    }

    signinPost(request, response) {
        //if (!request.body.client_id) throw new DataError({ message: "client_id is not defined."})
        //if (!request.body.redirect_uri) throw new DataError({ message: "redirect_uri is not defined."})

        //return this._generateToken();

        response.redirect({ url: `http://10.0.0.23:3000/callback?code=${uuid()}` });
    }

    callback(request, response) {
        response.send({ request: request, statusCode: 200, headers: { "Content-Type": "text/html"}, content: `<!DOCTYPE html>
<html>
    <body>
    </body>
</html>`});
    }
}

exports = module.exports = OAuth2;