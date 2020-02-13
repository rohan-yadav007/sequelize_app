
const app = require('../app');

const port = parseInt(process.env.PORT, 10) ||3000;
app.set('port',port);


app.listen(port)