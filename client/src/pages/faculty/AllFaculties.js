import React, { useEffect, useState } from "react";
import UserNav from "../../components/nav/UserNav";
import { getFaculties, removeFaculty } from "../../functions/faculty";
import StudentFacultyCard from "../../components/cards/StudentFacultyCard";

import { toast } from "react-toastify";

const AllFaculties = () => {
	const [faculties, setFaculties] = useState([]);
	const [loading, setLoading] = useState(false);
	// redux

	useEffect(() => {
		loadFaculties();
	}, []);

	const loadFaculties = () => {
		setLoading(true);
		getFaculties()
			.then((res) => {
				setFaculties(res.data.data);
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
			removeFaculty(slug)
				.then((res) => {
					loadFaculties();
					toast.error(`Record has been deleted`);
				})
				.catch((err) => {
					toast.error("Unable to delete Faculty");
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
						<h4>All Faculties</h4>
					)}
					<div className="row">
						{faculties.map((faculty) => (
							<div key={faculty._id} className="col-md-4 pb-3">
								<StudentFacultyCard
									form="faculty"
									details={faculty}
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

export default AllFaculties;
