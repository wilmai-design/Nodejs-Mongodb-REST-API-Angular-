import mongoose from 'mongoose';

(async () => {
    const db = await mongoose.connect('mongodb://localhost/tasksapi', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Database connected to:', db.connection.name);
})();

