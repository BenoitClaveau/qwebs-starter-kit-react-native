/*!
 * Copyright(c) 2017 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */
"use strict";

const Readable = require("stream").Readable;

class UserRoute {
    constructor() {
        this.users = [];
        for(let i = 0; i < 50; i++) {
            this.users.push({ login: `user${i+1}@exemple.com` });
        }
    };
    
    list(request, response) {
        const stream = Readable({objectMode: true}); 
		stream._read = () => {};                     
        
        let skip = parseInt(request.query.skip);
        setTimeout(() => {
            for(let i = skip; i < (skip + 8); i++) {
                console.log({ login: `user${i+1}@exemple.com` })
                stream.push({ login: `user${i+1}@exemple.com` })
            }
            stream.emit("end"); //equals as stream.push(null);    
        }, 100);
        console.log("----------------")
        return response.send({ request: request, stream: stream });
    };

    getById(request, response) {
        let id = parseInt(request.params.id) - 1;
        let user = this.users[id];
        return response.send({ request: request, content: user });
    };

    connect(request, response) {
        let content = {
            token: "1234",
            login: request.body.login
        }
        return response.send({ request: request, content: content });
    }
};

exports = module.exports = UserRoute;