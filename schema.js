const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const DataSchema = new Schema ({
  transacName: {type: String},
  transacAmt: {type: Number},
  transacBankAcc: {type: String},
  transacType: {type: String},
  transacID: {type: String},
  transacTime: {type: String},
  transacDate: {type: String}
})


const ArticleSchema = new Schema ({
  heading: {type: String},
  description: {type: String},
  link: {type: String},
  color: {type: String}
})

const date = new Date;

// date & month retrieval
const dateString = date.toLocaleDateString("en-GB", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
})

const timeString = date.toLocaleTimeString("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
})

const Data = mongoose.model(`${dateString}`, DataSchema)
const PaymentHistory = mongoose.model(`Payment History`, DataSchema);
const Article = mongoose.model("Articles", ArticleSchema);

module.exports = { Data, Article, PaymentHistory }