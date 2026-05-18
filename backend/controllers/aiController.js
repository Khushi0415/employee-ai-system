const axios = require("axios");

exports.getRecommendation = async (req, res) => {

    const employee = req.body;

    try {

        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "openai/gpt-3.5-turbo",

                messages: [
                    {
                        role: "user",
                        content:
                        `Give promotion and training recommendation for:
                        ${JSON.stringify(employee)}`
                    }
                ]
            },

            {
                headers: {
                    Authorization:
                    `Bearer ${process.env.OPENROUTER_API_KEY}`,

                    "Content-Type": "application/json"
                }
            }
        );

        res.json(
            response.data.choices[0].message
        );

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};