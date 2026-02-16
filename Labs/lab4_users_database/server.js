const express = require("express"); 
const mongoose = require("mongoose"); 
const cors = require("cors"); 

const app = express(); 
app.use(express.json()); 
app.use(cors()); 


mongoose
  .connect(
    "mongodb+srv://FullStackLabs:02041974@cluster0.e7hee1g.mongodb.net/users?retryWrites=true&w=majority",
    {
      autoIndex: true, 
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err.message));




const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
const cityRegex = /^[A-Za-z\s]+$/; 
const zipRegex = /^\d{5}-\d{4}$/; 
const phoneRegex = /^\d-\d{3}-\d{3}-\d{4}$/; 
const urlRegex = /^https?:\/\/.+/; 


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"], 
  },

  username: {
    type: String,
    required: [true, "Username is required"],
    minlength: [4, "Username must be at least 4 characters"],
    maxlength: [100, "Username must be at most 100 characters"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true, 
    match: [emailRegex, "Email must be a valid email address"],
  },

  address: {
    street: { type: String, required: [true, "Street is required"] },
    suite: { type: String, required: [true, "Suite is required"] },
    city: {
      type: String,
      required: [true, "City is required"],
      match: [cityRegex, "City must contain only alphabets and spaces"],
    },
    zipcode: {
      type: String,
      required: [true, "Zipcode is required"],
      match: [zipRegex, "Zipcode must be in format 12345-1234"],
    },
  },

  phone: {
    type: String,
    required: [true, "Phone is required"],
    match: [phoneRegex, "Phone must be in format 1-123-123-1234"],
  },

  website: {
    type: String,
    required: [true, "Website is required"],
    match: [urlRegex, "Website must start with http:// or https://"],
  },

  company: {
    name: { type: String, required: [true, "Company name is required"] },
    catchPhrase: { type: String, required: [true, "CatchPhrase is required"] },
    bs: { type: String, required: [true, "Company bs is required"] },
  },
});


userSchema.index({ email: 1 }, { unique: true });
const User = mongoose.model("User", userSchema);

app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body); 
    const savedUser = await user.save(); 
    res.status(201).json(savedUser); 
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Validation Error",
        error: "Email must be unique",
      });
    }

    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({
        message: "Validation Error",
        error: errors, 
      });
    }

    res.status(400).json({
      message: "Error",
      error: error.message,
    });
  }
});


app.listen(8081, () => {
  console.log("Server running on port 8081");
});
