// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

//TODO clean this up, comment better, confirm correct foreignKey's for your own sanity

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id", //?
  onDelete: "", //?
});

// Categories have many Products
Category.hasMany(Product, {
  // foreignKey: "product_id", //?
  foreignKey: "category_id", //?
  onDelete: "", //?
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id", //?
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id", //?
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
