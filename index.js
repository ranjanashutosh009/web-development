const express = require('express');
const app = express();

//app.use((req, res) => {
//    console.log("we have a new request");
//  res.send("this is the very first response");
//})

app.get('/cats', (req, res) => {
    res.send('meeoow');
})
app.listen(3000, () => {
    console.log("listening to port 3000");
})