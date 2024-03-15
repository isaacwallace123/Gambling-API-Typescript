const router = require('express').Router();

// All the routes for Facebook Service
const Routes = [
    {
        name: "Facebook",
        path: "/",
        type: "GET",
        description: "This is the Facebook auth handler.",
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
    name: "Facebook",
    services: [],

    router: router,
    routes: Routes
}