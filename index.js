const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Olá! Meu primeiro deploy no Azure!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);  
});
