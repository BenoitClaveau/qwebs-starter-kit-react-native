/*!
 * Copyright(c) 2017 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */
"use strict";

import Expo from 'exponent-server-sdk';
import { DataError } from 'qwebs';

const expo = new Expo();

class Notification {
    constructor() {
        this._users = {};
    };
    
    attach(request, response) {
        let token = request.body.token;
        let user = request.body.user;

        this._users[user.login] = token;
    }

    send(login) {

        let pushToken = this._users[login];
        let isPushToken = Expo.isExponentPushToken(pushToken);

        if (!isPushToken) throw new DataError({ message: "Token is not a push token"});

        return expo.sendPushNotificationsAsync([{
            to: pushToken,
            sound: 'default',
            body: 'This is a test notification',
            data: {withSome: 'data'},
        }]);
    }
};

exports = module.exports = Notification;