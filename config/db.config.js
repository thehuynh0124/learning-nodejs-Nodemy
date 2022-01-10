const mongoose = require('mongoose')

const connectDB = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://thehuynh:th2401@cluster0.qvy2u.mongodb.net/db_Test?retryWrites=true&w=majority`,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		)

		console.log('MongoDB connected')
	} catch (error) {
		console.log(error.message)
		process.exit(1)
	}
}
module.exports = connectDB  