const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema(
  {
    restaurant_id: String,
    name: String,
    cuisine: String,
    city: String,

    address: {
      building: String,
      street: String,
      zipcode: String
    }
  },
  { collection: "restaurants" }
);

module.exports = mongoose.model("Restaurant", RestaurantSchema);
