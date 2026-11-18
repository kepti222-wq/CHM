//вся фигня в начале чтобы всё законектилось,работало и 67//
const express = require('express');
const app = express();

app.use(express.static('public'));

app.use((req, res, next) => {
    res.locals.currentPath = req.path; 
    next();
});

app.set('view engine', 'ejs');
app.set(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));
//сылки на страницы//



app.get ('/', (req, res) => {
    res.render('index');  
});

app.get ('/about', (req, res) => {
    res.render('about');  
});

app.get ('/rules', (req, res) => {
    res.render('rules');  
});

app.get ('/map', (req, res) => {
    res.render('map');  
});
        
//порт и всё такое чтобы всё работало XD//
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});