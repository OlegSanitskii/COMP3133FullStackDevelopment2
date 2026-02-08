const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

// GET /restaurants  (all columns)
router.get("/", async (req, res) => {
  try {
    const { sortBy } = req.query;

    if (sortBy) {
      const sortOrder = sortBy === "DESC" ? -1 : 1;

      const restaurants = await Restaurant.find(
        {},
        { _id: 1, cuisine: 1, name: 1, city: 1, restaurant_id: 1 }
      ).sort({ restaurant_id: sortOrder });

      return res.json(restaurants);
    }

    const restaurants = await Restaurant.find({});
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /restaurants/cuisine/Japanese
router.get("/cuisine/:cuisine", async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ cuisine: req.params.cuisine });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /restaurants/Delicatessen
router.get("/Delicatessen", async (req, res) => {
  try {
    const restaurants = await Restaurant.find(
      { cuisine: "Delicatessen", city: { $ne: "Brooklyn" } },
      { _id: 0, cuisine: 1, name: 1, city: 1 }
    ).sort({ name: 1 });

    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
