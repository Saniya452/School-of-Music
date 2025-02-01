import { dbConnect } from '@/dbConnection/dbConfig';
import User from '@/models/userModel';
import { sendEmail } from '@/helpers/mailHelper';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

dbConnect();

export async function POST(request: NextRequest) {

  try {
    const reqBody = await request.json();
    const { email, password, username, confirmPassword } = reqBody;

    // Validation
    if (!email || !password || !username) {
      return NextResponse.json({ error: 'Please fill all fields' }, { status: 400 });
    }
    // if (password !== confirmPassword) {
    //   return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 });
    // }

    console.log(reqBody);
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
      username,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    // Send verification email
    await sendEmail({
      email,
      emailType:'verify',
      userId: savedUser._id,
    });

    return NextResponse.json({
      message: 'User registered successfully',
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
