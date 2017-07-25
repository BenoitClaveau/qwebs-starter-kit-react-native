import axios from "axios";
const config = require("../config.json");

//Override setter to lazy load axios

const handler = {
    get: (target, name) => {
        let item = target[name];
        if(item) return item;

        return target[name] = item = axios.create({
            baseURL: `${config.api.url}/${name}`
        });
    }
};

export default new Proxy({}, handler);
