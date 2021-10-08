import React, { useState, useEffect } from "react";
import UserNav from "../../components/nav/UserNav";
import { toast } from "react-toastify";
import { getSubject, updateSubject } from "../../functions/subject";
import SubjectForm from "../../components/forms/SubjectForm";
const SubjectUpdate = ({ history, match }) => {
	const [name, setName] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		loadSubject();
		// eslint-disable-next-line
	}, [match.params.id]);

	const loadSubject = () =>
		getSubject(match.params.id)
			.then((s) => {
				setError(false);
				setName(s.data.data.name);
			})

			.catch((err) => {
				setError(true);
			});

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(name);
		setLoading(true);
		updateSubject(match.params.id, { name })
			.then((res) => {
				setName("");
				toast.success(`Record has been updated`);
				history.push("/subject");
			})
			.catch((err) => {
				toast.error(err.response.data.message);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-2">
					<UserNav />
				</div>
				{error ? (
					"Not able to load the subject"
				) : (
					<div className="col">
						{loading ? (
							<h4 className="text-danger">Loading..</h4>
						) : (
							<h4>Update Subject</h4>
						)}
						<SubjectForm
							handleSubmit={handleSubmit}
							name={name}
							setName={setName}
						/>
						<hr />
					</div>
				)}
			</div>
		</div>
	);
};

export default SubjectUpdate;
