import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type: String, // ✅ Capital "S" in String
        required: [true,"Username is required"],
        unique: true
    },
    email:{
        type: String, // ✅ Capital "S" in String
        required:[true, "Email is required"],
        unique: true
    },
    password:{
        type: String, // ✅ Capital "S" in String
        required: [true, "Please enter your password"]
    },
    // confirmPassword: {
    //     type: String, // ✅ Capital "S" in String
    //     required: [true, "Confirm your password"]
    //   },    
    isVerified:{
        type: Boolean,
        default: false
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})

        // check if user already exist or a new user
    const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;