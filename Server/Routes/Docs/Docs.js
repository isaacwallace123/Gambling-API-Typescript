require('dotenv').config();

let PassedData = [];

const router = require('express').Router();

const Routes = [
    {
        name: "API website",
        path: "/",
        type: "GET",
        description: "This is the session handler.",
        example: "OK",

        callback: (req, res) => {
            res.render("index", {Data: PassedData});
        },
    },
    {
        name: "API service list",
        path: "/list",
        type: "GET",
        description: "This will get a list of all API services with their descriptions, paths, names, and example outputs.",
        example: "OK",

        callback: (req, res) => {
            res.json(PassedData);
        },
    },
]

Routes.map((Service) => {
    router[Service.type.toLowerCase()](Service.path, Service.callback);
});

router.get('*', (req, res) => res.redirect('/docs'));

const SetPassedData = (Passed) => {
    PassedData = Passed;
}

module.exports = {
    name: "Docs",
    hidden: true,
    services: [],
    
    router: router,
    routes: Routes,

    SetPassedData,
}