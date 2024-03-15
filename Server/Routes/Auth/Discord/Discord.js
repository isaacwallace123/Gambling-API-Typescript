const router = require('express').Router();

// All the routes for Discord Service
const Routes = [
    {
        name: "Discord",
        path: "/",
        type: "GET",
        description: "This is the Discord auth handler.",
        example: {
            result: 400
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
    name: "Discord",
    services: [],

    router: router,
    routes: Routes
}