// Require all environment variables from .env file

require('dotenv').config();

// Set ENV's to const's

const PORT = process.env.PORT || 80;
const ADDRESS = process.env.DOMAIN_ADDRESS || "http://localhost";

// Get all required dependencies

const Express = require('express');
const BodyParser = require('body-parser');
const Path = require('path');

// Start express application

const App = Express();

// Set the settings for express

App.set("view engine", "ejs");
App.use(BodyParser.json({ extended: true }));
App.use(require('cors')());
App.use(Express.static(Path.join(__dirname, 'public')));
App.use(Express.urlencoded({ extended: true }));

// Create status for all routes

App.use('*', (req, res, next) => {
    res.status(200);
    next();
});

// List of API usage

let API_DATA = [];

// Create all middleware routes

const MiddleWare = {
    Poker: require('./Routes/Poker/Poker'),
    Deck: require('./Routes/Deck/Deck'),
    Session: require('./Routes/Session/Session'),
    Auth: require('./Routes/Auth/Auth'),
    Docs: require('./Routes/Docs/Docs')
}

// Push data into API_DATA Array

for(const [Service, Data] of Object.entries(MiddleWare)) {
    App.use(`/${Service.toLowerCase()}`, Data.router);

    API_DATA.push(Data);
}

let PassedData = {};

const HandleService = (Master, Service, Route) => {
    Service.routes.map((Methods) => {
        let Data = {
            name: Methods.name,
            path: `${Route}${Methods.path}`,
            type: Methods.type,
            description: Methods.description,
            example: JSON.stringify(Methods.example, null, 3)
        }

        if (!PassedData[Master.name]) {
            PassedData[Master.name] = [];
        }

        PassedData[Master.name].push(Data);
    })

    if(Service.services.length > 0) {
        Service.services.map((SubService) => {
            HandleService(Master, SubService, `${Route}/${SubService.name}`);
        })
    }
}

API_DATA.map((Service) => {
    HandleService(Service, Service, `/${Service.name}`);
});

MiddleWare.Docs.SetPassedData(PassedData);

// Create root middleware (Last since priority is specific middlewares)
// Give API status
App.get('/', (req, res) => res.sendStatus(200));

// API documentation
App.get('*', (req, res) => {
    res.redirect('/');
});

// Start listening to requests on PORT

App.listen(PORT, () => console.log("\u001b[31m" + `[SERVER] API is running on ${ADDRESS}:${PORT}/`));