const mongoose = require("mongoose");

const Item = require("./item");

const subCategorySchema = new mongoose.Schema({
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
    default: () => this.tax,
  },
  tax: {
    type: Number,
    default: () => {},
  },

  item: [
    {
      type: "ObjectId",
      ref: "Item",
    },
  ],

  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

const SubCategory = mongoose.model("SubCategory", subCategorySchema);

module.exports = SubCategory;
