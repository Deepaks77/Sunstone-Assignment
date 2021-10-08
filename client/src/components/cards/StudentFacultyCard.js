import React from "react";
import { Card } from "antd";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Meta } = Card;

const StudentFacultyCard = ({ details, handleRemove, form }) => {
	// destructure
	const { _id, name, subjects } = details;
	const subjectNames = subjects.map((subject) => subject.name).join(",");
	console.log("SubjectNames", subjectNames);

	return (
		<Card
			actions={[
				<Link to={`/${form}/${_id}`}>
					<EditOutlined className="text-warning" />
				</Link>,
				<DeleteOutlined
					onClick={() => handleRemove(_id, name)}
					className="text-danger"
				/>,
			]}
		>
			<Meta title={name} description={subjectNames} />
		</Card>
	);
};

export default StudentFacultyCard;
