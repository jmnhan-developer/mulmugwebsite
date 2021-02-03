var mongoose = require('mongoose')

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect('mongodb+srv://dbUserMulmug:azerty@cluster0.gi60w.mongodb.net/MULMUG?retryWrites=true&w=majority',
    options,
    function(err){
        if (err) {
            console.log(`error, failed to connect to the database because --> ${err}`);
          } else {
            console.info('*** Database Mulmug connection : Success ***');
          }
    }
)

module.exports = mongoose