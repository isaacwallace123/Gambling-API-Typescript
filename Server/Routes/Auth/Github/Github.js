const router = require('express').Router();

// All the routes for Github Service
const Routes = [
    {
        name: "Github",
        path: "/",
        type: "GET",
        description: "This is the Github auth handler.",
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
    name: "Github",
    services: [],

    router: router,
    routes: Routes
}