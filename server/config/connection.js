const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  // removed useFindModify: false, (see at bottom of file in case needed later)
});

module.exports = mongoose.connection;

// useFindAndModify: false,
