import Navbar from "./components/Navbar";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import Recommendation from "./components/Recommendation";

function App() {
  return (
    <div>
      <Navbar />

      <h1 style={{ textAlign: "center" }}>
        Employee AI System
      </h1>

      <EmployeeForm />

      <EmployeeList />

      <Recommendation />
    </div>
  );
}

export default App;