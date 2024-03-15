const router = require('express').Router();

// All the routes for Google Service
const Routes = [
    {
        name: "Google",
        path: "/",
        type: "GET",
        description: "This is the Google auth handler.",
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
    name: "Google",
    services: [],

    router: router,
    routes: Routes
}