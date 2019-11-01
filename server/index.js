const path = require('path');
const express = require('express');


const app = express();

const pages = ['strategy',
               'tothehead',
               'directions',
               'crop-production',
               'livestock',
               'sales',
               'investments',
               "existing-projects",
               "perspective-projects",
               'career',
               'vacancies',
               'contacts',
               'office',
               'plots',
               'media'
];

app.use('/css', express.static(path.resolve(__dirname, '../src/css')));
app.use('/images', express.static(path.resolve(__dirname, '../src/images')));
app.use('/js', express.static(path.resolve(__dirname, '../src/js')));
app.use('/fonts', express.static(path.resolve(__dirname, '../src/fonts')));

// app.set('view engine', 'pug')
// app.use(express.static(__dirname + '../src/pug'))

// app.get('/', function (req, res) {
//   res.render('about')
// })

app.get('/', function (req, res) {

  // res.cookie('lang', 'ua');
  // console.log(res.__('Hello i18n'));
  // // res.setLocale(req.cookies.lang);
  // res.__('Hello i18n')
  res.sendFile(path.resolve(__dirname, '../src/html/index.html'))
})

// app.get('/strategy', function (req, res) {
//   res.sendFile(path.resolve(__dirname, '../src/html/strategy.html'))
// })

pages.forEach(item => {
  app.get('/' + item, function (req, res) {
    res.sendFile(path.resolve(__dirname, `../src/html/` + item + '.html'))
  })
})

app.listen(process.env.PORT || 8080);
