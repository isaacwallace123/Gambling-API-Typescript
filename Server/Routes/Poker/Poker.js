const router = require('express').Router();

const Routes = [
    {
        name: "Root Poker",
        path: "/",
        type: "GET",
        description: "This is the poker handler.",
        example: {
            result: 400,
        },

        callback: (req, res) => {
            res.json({
                result: 400
            });
        },
    }
]

Routes.map((Service) => {
    router[Service.type.toLowerCase()](Service.path, Service.callback);
});

module.exports = {
    name: "Poker",
    services: [],

    router: router,
    routes: Routes
}