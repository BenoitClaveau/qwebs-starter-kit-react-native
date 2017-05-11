/*!
 * quactus
 * Copyright(c) 2017 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */
"use strict";

class UserRoute {
    constructor() {
        this.users = [];
        for(let i = 1; i <= 50; i++) {
            this.users.push({ login: `user${i}@exemple.com` });
        }
    };
    
    list(request, response) {
        const stream = Readable({objectMode: true}); 
		stream._read = () => {};                     
		
        setTimeout(() => {
            for(let i = 1; i <= 50; i++) {
                stream.push(this.users[1])
            }
            stream.push(null);
        }, 100);
        
        return response.send({ request: request, stream: stream });
    };

    getById(request, response) {
        let id = parseInt(request.params.id) - 1;
        let user = this.users[id];
        return response.send({ request: request, content: user });
    };
};

exports = module.exports = UserRoute;