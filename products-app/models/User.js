const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema ({
   email: {
     type: String,
     required: [true, "You need to add an email address"],
     validate: {
       message: "Email address is already in use",
       validator: async (email) => {
        const items = await mongoose.models["User"].count({ email });
        return items < 1;
     },
    },
   },
   password: {
     type: String,
     required: [true, "You need to add a password"]
   }, 
   role: {
     type: String,
     default: "USER",
     enum: ["ADMIN", "USER"],
   }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema)