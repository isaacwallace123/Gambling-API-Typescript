const router = require('express').Router();

// Services
const Google = require('./Google/Google');
const Discord = require('./Discord/Discord');
const Github = require('./Github/Github');
const Facebook = require('./Facebook/Facebook');

// Route from each service
router.use('/google', Google.router);

// All the routes for "Auth"
const Routes = [
    {
        name: "Oauth2",
        path: "/",
        type: "GET",
        description: "This is the Oath2 handler.",
        example: {Service: "oauth2"},

        callback: (req, res) => {
            res.json({Service: "oauth2"});
        },
    }
]

Routes.map((Service) => {
    router[Service.type.toLowerCase()](Service.path, Service.callback);
});

module.exports = {
    name: "Auth",
    services: [Google,Discord,Github,Facebook],
    
    router: router,
    routes: Routes
}