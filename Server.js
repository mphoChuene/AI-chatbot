import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = "kmaurPlmC1o6pggxuvKNT3BlbkFJTO1PWp4s3Rsd4Nez7wt3"; // Replace with your OpenAI API key

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

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
          content: message, // Use the user's message from the request
        },
      ],
    }),
  };

  try {
    const response = await fetch(
      "https://api.openai.com/v1/engines/gpt-3.5-turbo/completions",
      options
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Your server is running on PORT ${PORT}`));
