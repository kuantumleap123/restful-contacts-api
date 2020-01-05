const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes');
app.use('/',routes);

app.use(express.static( "resource" ));
app.set('view engine', 'ejs');

app.listen(port, () => console.log(`App listening on port ${port}!`));