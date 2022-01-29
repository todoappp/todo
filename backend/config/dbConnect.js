const mongoose = require("mongoose");
const dbConnect = async () => {
  try {
    const connected = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`mongodb connected`);
  } catch (err) {
    console.log("here", err);
  }
};


module.exports = { dbConnect };
