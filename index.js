const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const app = express();
app.use(express.json())

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening to port ${port}`))

// for CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-auth-token'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

dotenv.config({ path: "./config.env" })
const dbURi = process.env.DATABASE;

mongoose.connect(dbURi)
  .then(() => console.log(`Connected to database...`))
  .catch(err => console.log(`Error encountered while connecting to db: ${err}`))

const { Data, Article } = require("./schema");

app.get("/", (req, res) => {
  res.send("Redirect to /xyz")
})

app.post("/payment-history", (req, res) => {
  const data = new Data(req.body);
  res.json(data);
  data.save()
    .then(() => console.log(`Payment history saved`))
    .catch(err => console.error(`Error while saving payment history: ${err}`))
})

app.get("/payment-history", (req, res) => {
  Data.find()
    .then(response => res.send(response))
    .catch(err => console.log(`Error while getting payment history: ${err}`))
})

app.post("/article-publish", (req, res) => {
  const data = new Article(req.body);
  res.json(data);
  data.save()
    .then(() => console.log('Article published'))
    .catch(err => console.error(`Error while publishing article: ${err}`))
})

app.get("/article-publish", (req,res) => {
  Article.find()
    .then(response => res.send(response))
    .catch(err => console.error(`Error while displaying articles: ${err}`))
})