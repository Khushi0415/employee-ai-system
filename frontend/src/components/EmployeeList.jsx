import axios from "axios";
import { useEffect, useState } from "react";

function EmployeeList() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {

    fetchEmployees();

  }, []);

  const fetchEmployees = async () => {

    try {

      const res = await axios.get(
        "https://employee-ai-system-981j.onrender.com/api/employees"
      );

      setEmployees(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>Employee List</h2>

      {
        employees.map((emp) => (

          <div
            key={emp._id}
            className="employee-card"
          >

            <h3>{emp.name}</h3>

            <p>Email: {emp.email}</p>

            <p>
              Department: {emp.department}
            </p>

            <p>
              Skills: {emp.skills.join(", ")}
            </p>

            <p>
              Score: {emp.performanceScore}
            </p>

          </div>
        ))
      }

    </div>
  );
}

export default EmployeeList;