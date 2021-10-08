import React, { useState, useEffect } from "react";
import UserNav from "../../components/nav/UserNav";
import { toast } from "react-toastify";

import { createFaculty } from "../../functions/faculty";
import StudentFacultyForm from "../../components/forms/StudentFacultyForm";
import { getSubjects } from "../../functions/subject";

const initialState = {
	name: "",
	age: 0,
	subjects: [],
	subjectOptions: [],
};

const FacultyCreate = () => {
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
		createFaculty(values)
			.then((res) => {
				console.log(res);
				window.alert(`Record has been created`);
				window.location.reload();
			})
			.catch((err) => {
				console.log(err);
				// if (err.response.status === 400) toast.error(err.response.data);
				toast.error("Unable to create Faculty Record");
			});
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-2">
					<UserNav />
				</div>

				<div className="col-md-10">
					<h4>Create Faculty Record</h4>

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

export default FacultyCreate;
