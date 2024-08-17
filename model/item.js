const { url } = require("inspector");
const mongoose = require("mongoose");
const { type } = require("os");

const itemSchema = new mongoose.Schema({
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

  baseAmount: {
    type: Number,
  },
  discount: {
    type: Number,
  },

  totalAmount: {
    type: Number,
    default: () => {
      this.baseAmount - this.discount;
    },
    immutable: true,
  },
  subCategoryId: { type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
