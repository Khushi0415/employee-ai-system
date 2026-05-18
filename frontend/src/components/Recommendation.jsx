import axios from "axios";
import { useState } from "react";

function Recommendation() {

  const [response, setResponse] = useState("");

  const getAIRecommendation = async () => {

    const employee = {
      name: "Aman",
      performanceScore: 90,
      skills: ["React", "Node"]
    };

    try {

      const res = await axios.post(
        "https://employee-ai-system-981j.onrender.com/api/ai/recommend",
        employee
      );

      setResponse(res.data.content);

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <button onClick={getAIRecommendation}>
        Generate AI Recommendation
      </button>

      <p>{response}</p>

    </div>
  );
}

export default Recommendation;