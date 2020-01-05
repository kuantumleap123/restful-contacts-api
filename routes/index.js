const routes = require("express").Router();
const contactRouter = require("./contactRouter");

routes.use('/contacts', contactRouter);

routes.get('*', (req,res) => {
    res.sendStatus(404);
});

module.exports = routes;