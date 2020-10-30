const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
})

// Define routes
app.use('/users', require('./routes/users'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));






// app.get('/', (req, res) => {
//     res.render('index', { text : 'hello'});
// })


// app.get('/', (req, res) => res.render('index'));