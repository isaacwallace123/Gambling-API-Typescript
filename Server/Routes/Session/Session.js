const router = require('express').Router();

const Routes = [
    {
        name: "Root Session",
        path: "/",
        type: "GET",
        description: "This is the session handler.",
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
    name: "Session",
    services: [],
    
    router: router,
    routes: Routes
}