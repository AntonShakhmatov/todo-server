import mongoose from 'mongoose';

mongoose
.connect('mongodb://localhost:5000', {
	useNewUrlParser: true,
	useUnifieldTopology: true
})
.then(() => console.log('connected to database...'))
.catch(err => console.log('Refuse to connect...', err));