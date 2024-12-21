import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

config({ path: "./config.env" });


app.use(
  cors({
    origin:process.env.FRONTEND_URL || 'http://localhost:5173', 
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

router.post("/send/mail", async (req, res, next) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return next(
      res.status(400).json({
        success: false,
        message: "Please provide all details",
      })
    );
  }

  try {
    await sendEmail({
      email: "rajrohan9955@gmail.com",
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email,
    });
    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } 
  catch (error) {
    res.status(500).json({
      success: false,
      message: " Internal Server Error",
    });
  }
});



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});

