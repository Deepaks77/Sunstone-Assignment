import React, { useEffect, useState } from "react";
import UserNav from "../../components/nav/UserNav";
import { getStudents, removeStudent } from "../../functions/student";
import StudentFacultyCard from "../../components/cards/StudentFacultyCard";

import { toast } from "react-toastify";

const AllStudents = () => {
	const [students, setStudents] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		loadStudents();
	}, []);

	const loadStudents = () => {
		setLoading(true);
		getStudents()
			.then((res) => {
				setStudents(res.data.data);
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
			});
	};

	const handleRemove = (slug, name) => {
		// let answer = window.confirm("Delete?");
		if (window.confirm(`Delete record ${name}?`)) {
			// console.log("send delete request", slug);
			removeStudent(slug)
				.then((res) => {
					loadStudents();
					toast.error(`Record has been deleted`);
				})
				.catch((err) => {
					toast.error("Unable to delete Student");
					console.log(err);
				});
		}
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-2">
					<UserNav />
				</div>

				<div className="col">
					{loading ? (
						<h4 className="text-danger">Loading...</h4>
					) : (
						<h4>All Students</h4>
					)}
					<div className="row">
						{students.map((student) => (
							<div key={student._id} className="col-md-4 pb-3">
								<StudentFacultyCard
									form="student"
									details={student}
									handleRemove={handleRemove}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllStudents;
