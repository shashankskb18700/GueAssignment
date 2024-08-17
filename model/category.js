const mongoose = require("mongoose");
const SubCategory = require("./subCategory");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  taxApplicability: {
    type: Boolean,
  },
  tax: {
    type: Number,
  },
  subCategory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
    },
  ],
});

const Category = mongoose.model("category", categorySchema);

module.exports = Category;
