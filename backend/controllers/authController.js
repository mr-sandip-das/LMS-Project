import bcrypt from "bcryptjs";
import User from "../models/User.js";

const registerUser = async (req,resp)=>{
try {
    const {name,email,password,domain}=req.body;

    if(!name || !email || !password || !domain ){
        return resp.status(400).json({
            message:"All fields are required",
            success:false
        });
    }
    
    const exixtUser=await User.findOne({
        email:email.trim().toLowerCase()
    });

    if(exixtUser){
        return resp.status(400).json({
            message:"Email already registered",
            success:false
        })
    }

    const convertPassword=await bcrypt.hash(password,8);

    const newUser=await User.create({
        name,email,password:convertPassword,domain
    });

    return resp.status(201).json({
        success:true,
        message:"Registration successful",
        user:{
            id:newUser._id,
            name:newUser.name,
            email:newUser.email,
            domain:newUser.domain,
            createdAt:newUser.createdAt
        }
    });

    console.error("Registration error:", error.message);

    return resp.status(500).json({
      success: false,
      message: "Internal server error",
    });
    

} catch (error) {
    
}
};

const loginUser=async (req,resp)=>{
    try {
        const {email,password}=req.body;
        if (!email || !password){
            return resp.status(400).json({
                success:false,
                message:"Email and password are required"
            });
        }

        const user=await User.findOne({
            email:email.trim().toLowerCase()
        });

        if(!user){
            return resp.status(400).json({
                success:false,
                message:"Invalid email or password"
            });
        }

        const rightPassword=await bcrypt.compare(password,user.password);
        if (!rightPassword){
            return resp.status(400).json({
                success:false,
                message:"Invalid password"
            });
        }

        return resp.status(200).json({
            success:true,
            message:"Login successful",
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                domain:user.domain
            }
        });
    } catch (error) {
        return resp.status(500).json({
            success:false,
            message:"Login failed"
        });
    }
}

export {registerUser,loginUser};