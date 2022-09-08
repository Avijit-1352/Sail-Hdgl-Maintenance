const mongoose = require('mongoose');

const connectDB= async ()=>{
    try {
        await mongoose.connect('mongodb+srv://avijit:avi123@cluster0.mlh6tti.mongodb.net/?retryWrites=true&w=majority'),
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        }
        console.log('Database connection successful');
    } catch (error) {
        console.log(error);
    }
};


module.exports=connectDB;