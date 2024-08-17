const Category = require("../model/category");
const SubCategory = require("../model/subCategory");
const Item = require("../model/item");

const AppRouter = (app) => {
  app.post("/categories", async (req, res) => {
    const { name, image, description, taxApplicability, tax } = req.body;
    const category = new Category({
      name,
      image,
      description,
      taxApplicability,
      tax,
    });
    await category.save();
    res.status(201).json(category);
  });

  app.post("/categories/:categoryId/subcategories", async (req, res) => {
    const { categoryId } = req.params;
    const { name, image, description, taxApplicability, tax } = req.body;
    const subCategory = new SubCategory({
      name,
      image,
      description,
      taxApplicability,
      tax,
      categoryId,
    });
    await subCategory.save();

    await Category.findByIdAndUpdate(categoryId, {
      $push: { subCategory: subCategory._id },
    });

    res.status(201).json(subCategory);
  });

  app.post("/item", async (req, res) => {
    const {
      name,
      image,
      description,
      taxApplicability,
      tax,
      baseAmount,
      discount,
      subCategoryId,
      categoryId,
    } = req.body;
    const item = new Item({
      name,
      image,
      description,
      taxApplicability,
      tax,
      baseAmount,
      discount,
      subCategoryId,
      categoryId,
    });
    await item.save();

    await SubCategory.findByIdAndUpdate(subCategoryId, {
      $push: { item: item._id },
    });

    res.status(201).json(item);
  });

  app.get("/categories", async (req, res) => {
    const categories = await Category.find().populate("subCategory");
    res.json(categories);
  });

  app.get("/categories/:id", async (req, res) => {
    const { id } = req.params;
    const category = await Category.findById(id).populate("subCategory");
    res.json(category);
  });

  app.get("/subcategories", async (req, res) => {
    const subCategories = await SubCategory.find().populate("item");
    res.json(subCategories);
  });

  app.get("/items", async (req, res) => {
    const items = await Item.find();
    res.json(items);
  });

  app.get("/categories/:categoryId/items", async (req, res) => {
    const { categoryId } = req.params;
    const items = await Item.find({ categoryId });
    res.json(items);
  });

  app.get("/subcategories/:subCategoryId/items", async (req, res) => {
    const { subCategoryId } = req.params;
    const items = await Item.find({ subCategoryId });
    res.json(items);
  });

  app.put("/categories/:id", async (req, res) => {
    const { id } = req.params;
    const category = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(category);
  });

  app.put("/subcategories/:id", async (req, res) => {
    const { id } = req.params;
    const subCategory = await SubCategory.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(subCategory);
  });

  app.put("/items/:id", async (req, res) => {
    const { id } = req.params;
    const item = await Item.findByIdAndUpdate(id, req.body, { new: true });
    res.json(item);
  });

  app.get("/items/search/:name", async (req, res) => {
    const { name } = req.params;
    const items = await Item.find({ name });
    res.json(items);
  });
};

module.exports = AppRouter;
