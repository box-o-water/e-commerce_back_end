const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// get all categories
router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Product data
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one category
router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Product data
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({
        message: "No category found with that id!",
      });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new category
router.post("/", (req, res) => {
  // create a new category
  /* req.body should look like this...
    {
      category_name: "Pants",
    }
  */
  Category.create(req.body)
    .then((createdCategory) => res.status(200).json(createdCategory))
    .catch((err) => {
      res.status(400).json(err);
    });
});

// update category
router.put("/:id", (req, res) => {
  // update a category by its `id` value
  /* req.body should look like this...
    {
      category_name: "Pants",
    }
  */
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedCategory) => res.status(200).json(updatedCategory))
    .catch((err) => res.status(400).json(err));
});

// delete a category
router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      res.status(200).json(deletedCategory);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
