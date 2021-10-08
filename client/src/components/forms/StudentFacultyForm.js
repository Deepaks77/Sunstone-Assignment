import React from "react";
import { Select } from "antd";

const { Option } = Select;

const StudentFacultyForm = ({
	handleSubmit,
	handleChange,
	setValues,
	values,
}) => {
	// destructure
	const { subjects, name, age, subjectOptions } = values;

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<label>Name</label>
				<input
					type="text"
					name="name"
					className="form-control"
					value={name}
					onChange={handleChange}
				/>
			</div>

			<div className="form-group">
				<label>Age</label>
				<input
					type="text"
					name="age"
					className="form-control"
					value={age}
					onChange={handleChange}
				/>
			</div>

			<div>
				<label>Subjects</label>
				<Select
					mode="multiple"
					style={{ width: "100%" }}
					placeholder="Please select"
					value={subjects}
					onChange={(value) =>
						setValues({ ...values, subjects: value })
					}
				>
					{subjectOptions.length &&
						subjectOptions.map((s) => (
							<Option key={s._id} value={s._id}>
								{s.name}
							</Option>
						))}
				</Select>
			</div>

			<br />
			<button className="btn btn-outline-info">Save</button>
		</form>
	);
};

export default StudentFacultyForm;
