import mongoose from "mongoose";

const IssuerSchema = mongoose.Schema({
  username: String,
  password: String,
  walletAddr: String,
});

const Issuer = mongoose.model("Issuer", IssuerSchema);

export default Issuer;
