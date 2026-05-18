import axios from "axios";
import { useState } from "react";

function EmployeeForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    skills: "",
    performanceScore: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...formData,

      skills: formData.skills.split(","),
    };

    try {

      await axios.post(
        "https://employee-ai-system-981j.onrender.com/api/employees",
        data
      );

      alert("Employee Added");

    } catch (error) {

      console.log(error);

      alert("Error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        margin: "20px auto",
        gap: "10px",
      }}
    >

      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        type="text"
        name="department"
        placeholder="Department"
        onChange={handleChange}
      />

      <input
        type="text"
        name="skills"
        placeholder="Skills"
        onChange={handleChange}
      />

      <input
        type="number"
        name="performanceScore"
        placeholder="Performance Score"
        onChange={handleChange}
      />

      <input
        type="number"
        name="experience"
        placeholder="Experience"
        onChange={handleChange}
      />

      <button type="submit">
        Add Employee
      </button>

    </form>
  );
}

export default EmployeeForm;