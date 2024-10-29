import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import "./App.css";
import { useState } from "react";
const sampleEmployee = {
	name: {
		first: "Charlie",
		last: "Thompson",
	},
	email: "charlie.thompson@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
	},
};
function App() {
	const [employee, setEmployee] = useState(sampleEmployee);
	const getEmployee = () => {
		// Send the request
		fetch("http://localhost:3310/api/employees")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setEmployee(data.result[0]);
			});
	};
	return (
		<>
			<EmployeeCard employee={employee} />
			<button type="button" onClick={getEmployee}>
				Get employee
			</button>
		</>
	);
}

export default App;
