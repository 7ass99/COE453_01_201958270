const express = require('express');
const app = express();
app.get('/', (req, res) => {
 res.send('Hello World! docker is cool!. COE453-HW2. By Hassan Abuqurain');
 }
);
app.listen(3000, () => {
 console.log('Server is up on 3000');
 }
);
