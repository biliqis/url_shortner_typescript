const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema({
  urlPath: String,
  longUrl: String,
  shortUrl: String,
  Hits: {
    type:Number,
    default:0},
  usersVisited: {
    type:Array,
    default:[]
  },
  lastAccessedOn: Date,
});
export const urlModel = mongoose.model("url", urlSchema);
