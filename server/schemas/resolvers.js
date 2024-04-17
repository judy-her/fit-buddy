// const Exercise = require('../models/Exercise');

// const resolvers = {
// 	Query: {
// 		exercises: async () => {
// 			return Exercise.find();
// 		},

// 		exercise: async (parent, { exerciseId }) => {
// 			return Exercise.findOne({ _id: exerciseId });
// 		},
// 	},

// 	Mutation: {
// 		addExercise: async (parent, { exerciseTitle, exerciseAuthor }) => {
// 			return Exercise.create({ exerciseTitle, exerciseAuthor });
// 		},

// 		removeExercise: async (parent, { exerciseId }) => {
// 			return Exercise.findOneAndDelete({ _id: exerciseId });
// 		},
// 	},
// };

// module.exports = resolvers;


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const SECRET_KEY = process.env.SECRET_KEY || 'FIT_BUDDY';

const resolvers = {
	Query: {
		
	},
	
	Mutation: {
		createUser: async (_, { username, email, password }) => {
			const existingUser = await User.findOne({ username });
			console.log(username, email, password);
			if(existingUser){
				console.log('User already exists!');
				throw new Error('User already exists!');
			}
			const hashedPassword = await bcrypt.hash(password, 12);

			const user = new User({
				username,
				email,
				password: hashedPassword
			});

			const result = await user.save();
			const token = jwt.sign(
								{ userId: result.id },
								SECRET_KEY,
								{ expiresIn: '1h' }
							);

			return { 
				userId: result.id, 
				token, msg: 
				"Signup Success!" 
			}
		},

		login: async(_, { username, password }) => {
			const user = await User.findOne({ username });
			if(!user || !await bcrypt.compare(password, user.password)){
				throw new Error("Invalid credentials");
			}

			const token = jwt.sign(
								{ userId: user.id },
								SECRET_KEY,
								{ expiresIn: '1h'}
							);
			return { 
				userId : user.id,
				token,
				msg: "Signin Success!"
			}
		}
	}
}

module.exports = resolvers;