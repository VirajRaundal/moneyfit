const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const DataSchema = new Schema ({
  transacName: {type: String},
  transacAmt: {type: Number},
  transacBankAcc: {type: String},
  transacType: {type: String},
  transacID: {type: String}
})

const date = new Date;
const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const currMonth = date.getMonth();
const currDate = date.getDate();

const collectionName = `${currDate}-${monthArr[currMonth]}`

const ArticleSchema = new Schema ({
  heading: {type: String},
  description: {type: String},
  link: {type: String},
  color: {type: String}
})

const Data = mongoose.model(`${collectionName}`, DataSchema)
const PaymentHistory = mongoose.model(`Payment Historhy`, DataSchema);
const Article = mongoose.model("Articles", ArticleSchema);

module.exports = { Data, Article }