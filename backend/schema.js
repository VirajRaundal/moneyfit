const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  transacName: { type: String },
  transacAmt: { type: Number },
  transacBankAcc: { type: String },
  transacType: { type: String },
  transacID: { type: String },
  transacTime: { type: String },
  transacDate: { type: String },
});

const ArticleSchema = new Schema({
  heading: { type: String },
  description: { type: String },
  link: { type: String },
  color: { type: String },
});

const PaymentHistory = mongoose.model(`Payment History`, DataSchema);
const Article = mongoose.model("Articles", ArticleSchema);

module.exports = { Data, Article, PaymentHistory };
