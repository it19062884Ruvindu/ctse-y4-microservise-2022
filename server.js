const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

//my micro service rout
const SiteRoute = require('./src/routes/route.site');



dotenv.config();
const app = express();
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

/**
 * Get MONGODB_URI from .env
 */

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect('mongodb+srv://user-123:user-123@construction-management.sk0gl.mongodb.net/constructionManager?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (error) => {
    if (error) {
        console.log('Database Error:', error.message);
        console.log('######################################################');
    }
});

mongoose.connection.once('open', () => {
    console.log('Database Connected...');
    console.log('######################################################');
});

app.route('/').get((req, res) => {
    res.send('MicroService-01, __Product Distributing Site Managemt Backend__* Running with all Configurations !! (Pipe line, GIT, GCP, Docker, Kubernets )');
  //  res.send('Git updated, Pipeline fired, docarizing, containarizing , loded on GCP, Genarated by Public IP with Kubernet \n');
  //  res.send('(Backend by :- Ruvindu Kaushalya , CTSE Assignmet-03)');

  });


app.use('/site', SiteRoute());

app.listen(PORT, () => {
    console.log('######################################################');
    console.log(`Server is ON and running on PORT : ${PORT}`);
    console.log('...Wait DB connecting...');
});