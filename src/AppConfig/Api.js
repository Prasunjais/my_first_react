const dev = {
    base_url: "https://jsonplaceholder.typicode.com" //"https://optacreditapip2.doodlebluedemo.in" //"http://optacreditapi.doodlebluedemo.in" //"http://192.168.10.173:3000"
};

const staging = {
    base_url: "http://optacreditapi.doodlebluedemo.in"
};

const uat = {
    base_url: "http://api.doodlebluedemo.in"
}

const production = {
    base_url: "https://apiv2.optacredit.com"
}

let configVariables = {
    ...dev
};

//Change the config for production and development
switch (process.env.REACT_APP_BUILD_ENV) {
    case "staging":
        configVariables = {
            ...staging
        };
        break;
    case "uat":
        configVariables = {
            ...uat
        };
        break;
    case "production":
        configVariables = {
            ...production
        };
        break;
    default:
        configVariables = {
            ...dev
        };
        break;

}

export default {
    ...configVariables
}
