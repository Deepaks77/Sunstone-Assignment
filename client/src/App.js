import React from "react";
import Header from "./components/nav/Header";
import { ToastContainer } from "react-toastify";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SubjectCreate from "./pages/subject/SubjectCreate";
import SubjectUpdate from "./pages/subject/SubjectUpdate";
import StudentCreate from "./pages/student/StudentCreate";
import FacultyCreate from "./pages/faculty/FacultyCreate";
import AllStudents from "./pages/student/AllStudents";
import AllFaculties from "./pages/faculty/AllFaculties";
import StudentUpdate from "./pages/student/StudentUpdate";
import FacultyUpdate from "./pages/faculty/FacultyUpdate";
function App() {
	return (
		<>
			<Header />

			<ToastContainer />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/subject" component={SubjectCreate} />
				<Route exact path="/subject/:id" component={SubjectUpdate} />
				<Route exact path="/student" component={StudentCreate} />
				<Route exact path="/student/:slug" component={StudentUpdate} />
				<Route exact path="/students" component={AllStudents} />
				<Route exact path="/faculty" component={FacultyCreate} />
				<Route exact path="/faculty/:slug" component={FacultyUpdate} />
				<Route exact path="/faculties" component={AllFaculties} />
			</Switch>
		</>
	);
}

export default App;
