import React, { useState, useEffect } from "react";
import UserNav from "../../components/nav/UserNav";
import { toast } from "react-toastify";

import { createStudent } from "../../functions/student";
import StudentFacultyForm from "../../components/forms/StudentFacultyForm";
import { getSubjects } from "../../functions/subject";

const initialState = {
	name: "",
	age: 0,
	subjects: [],
	subjectOptions: [],
};

const StudentCreate = () => {
	const [values, setValues] = useState(initialState);

	useEffect(() => {
		loadSubject();
		// eslint-disable-next-line
	}, []);

	const loadSubject = () =>
		getSubjects().then((c) =>
			setValues({ ...values, subjectOptions: c.data.data })
		);

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		createStudent(values)
			.then((res) => {
				window.alert(`Record is created`);
				window.location.reload();
			})
			.catch((err) => {
				console.log(err);
				toast.error("Unable to create Record");
			});
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-2">
					<UserNav />
				</div>

				<div className="col-md-10">
					<h4>Create Student Record</h4>

					<hr />

					<StudentFacultyForm
						handleSubmit={handleSubmit}
						handleChange={handleChange}
						setValues={setValues}
						values={values}
					/>
				</div>
			</div>
		</div>
	);
};

export default StudentCreate;
