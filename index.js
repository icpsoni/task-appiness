const app = require('./src/app');
const mongoose = require('mongoose');

//Port for Server
let port = process.env.PORT || 3000;

// Connecting to MongoDB Database
mongoose.connect('mongodb://casaone-user:casaone123@ds057568.mlab.com:57568/casaone', { useNewUrlParser: true}).then(() => {
  console.log(":::: MongoDB Connected");
},(err)=>{
  console.log("Mongo Error", err);
});

// Starting Express Server
app.listen(port, () => {
  console.log(":::: Backend APIs are up and running on PORT = ", port);
});
