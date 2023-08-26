const PORT = 8000;
import express from "express";
import cors from "cors";
import fetch from "node-fetch"; // Import fetch for Node.js

const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = "removed/but will be entered";

app.post("/completions", async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: "how are you?",
        },
      ],
      max_tokens: 100,
    }),
  };

  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

app.listen(PORT, () => console.log("Your server is running on PORT " + PORT));
