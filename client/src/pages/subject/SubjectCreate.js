import React, { useState, useEffect } from "react";
import UserNav from "../../components/nav/UserNav";
import { toast } from "react-toastify";
import {
	createSubject,
	getSubjects,
	removeSubject,
} from "../../functions/subject";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import LocalSearch from "../../components/forms/LocalSearch";
import SubjectForm from "../../components/forms/SubjectForm";
const SubjectCreate = () => {
	const [name, setName] = useState("");
	const [loading, setLoading] = useState(false);
	const [subject, setSubjects] = useState([]);
	const [keyword, setKeyword] = useState("");

	useEffect(() => {
		loadSubjects();
	}, []);
	const loadSubjects = () =>
		getSubjects().then((s) => {
			setSubjects(s.data.data);
		});

	const searched = (keywords) => (c) =>
		c.name.toLowerCase().includes(keywords);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		createSubject({ name })
			.then((res) => {
				setName("");
				toast.success(`Record has been created`);
				loadSubjects();
			})
			.catch((err) => {
				toast.error(err.response.data.message);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const handleRemove = async (slug, name) => {
		// let answer = window.confirm("Delete?");
		// console.log(answer, slug);
		if (window.confirm(`Delete record ${name}?`)) {
			setLoading(true);
			removeSubject(slug)
				.then((res) => {
					setLoading(false);
					toast.error(`Record deleted`);
					loadSubjects();
				})
				.catch((err) => {
					setLoading(false);
					toast.error("Selected Subject could not be deleted");
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
						<h4 className="text-danger">Loading..</h4>
					) : (
						<h4>Create Subject</h4>
					)}
					<SubjectForm
						handleSubmit={handleSubmit}
						name={name}
						setName={setName}
					/>
					{/* step 2 and step 3 */}
					<LocalSearch keyword={keyword} setKeyword={setKeyword} />

					{/* step5 */}
					{subject.filter(searched(keyword)).map((c) => (
						<div className="alert alert-secondary" key={c._id}>
							{c.name}
							<span
								onClick={() => handleRemove(c._id, c.name)}
								className="btn btn-sm float-right"
							>
								<DeleteOutlined className="text-danger" />
							</span>
							<Link to={`/subject/${c._id}`}>
								<span className="btn btn-sm float-right">
									<EditOutlined className="text-warning" />
								</span>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SubjectCreate;
