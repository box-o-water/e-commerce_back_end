const router = require("express").Router();
const { Tag, Product } = require("../../models");

// The `/api/tags` endpoint

// get all tags
router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one tag
router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!tagData) {
      res.status(404).json({ message: "No tag found with that id!" });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new tag
router.post("/", (req, res) => {
  // create a new tag
  /* req.body should look like this...
    {
      tag_name: "purple",
    }
  */
  Tag.create(req.body)
    .then((createdTag) => res.status(200).json(createdTag))
    .catch((err) => {
      res.status(400).json(err);
    });
});

// update tag
router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  /* req.body should look like this...
    {
      tag_name: "purple",
    }
  */
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedTag) => res.status(200).json(updatedTag))
    .catch((err) => res.status(400).json(err));
});

// delete a tag
router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedTag) => {
      res.status(200).json(deletedTag);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
