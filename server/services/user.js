/*!
 * quactus
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
		
        setTimeout(() => {
            for(let i = 0; i < 50; i++) {
                stream.push(this.users[i])
            }
            stream.emit("end"); //equals as stream.push(null);    
        }, 100);
        
        return response.send({ request: request, stream: stream });
    };

    getById(request, response) {
        let id = parseInt(request.params.id) - 1;
        let user = this.users[id];
        return response.send({ request: request, content: user });
    };

    connect(request, response) {
        console.log(request.body);
        let content = {
            token: "1234"
        }
        return response.send({ request: request, content: content });
    }
};

exports = module.exports = UserRoute;