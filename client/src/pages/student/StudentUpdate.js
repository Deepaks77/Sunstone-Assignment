import React, { useState, useEffect } from "react";
import UserNav from "../../components/nav/UserNav";
import { toast } from "react-toastify";

import { getStudent, updateStudent } from "../../functions/student";
import StudentFacultyUpdateForm from "../../components/forms/StudentFacultyUpdateForm";
import { getSubjects } from "../../functions/subject";

const initialState = {
	name: "",
	age: 0,
	subjects: [],
};

const StudentUpdate = ({ match }) => {
	const [values, setValues] = useState(initialState);
	const [subjectOptions, setSubjectOptions] = useState([]);
	const [error, setError] = useState(false);

	const { slug } = match.params;
	useEffect(() => {
		loadStudent();
		loadSubject();
		// eslint-disable-next-line
	}, [slug]);

	const loadStudent = () => {
		getStudent(slug)
			.then(
				({
					data: {
						data: { name, age, subjects },
					},
				}) => {
					setError(false);
					const subjectIdArr = subjects.map((s) => s._id);
					setValues({ ...values, name, age, subjects: subjectIdArr });
				}
			)
			.catch((err) => {
				setError(true);
			});
	};

	const loadSubject = () =>
		getSubjects().then((c) => setSubjectOptions(c.data.data));

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		updateStudent(slug, values)
			.then((res) => {
				console.log(res);
				window.alert(`Record has been updated`);
				window.location.reload();
			})
			.catch((err) => {
				console.log(err);
				// if (err.response.status === 400) toast.error(err.response.data);
				toast.error("Unable to update record");
			});
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-2">
					<UserNav />
				</div>
				{error ? (
					<div>Could not fetch record</div>
				) : (
					<div className="col-md-10">
						<h4>Update Student Record</h4>

						<hr />

						<StudentFacultyUpdateForm
							handleSubmit={handleSubmit}
							handleChange={handleChange}
							setValues={setValues}
							values={values}
							subjectOptions={subjectOptions}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default StudentUpdate;
