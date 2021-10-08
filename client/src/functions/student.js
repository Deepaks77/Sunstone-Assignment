import axios from "axios";

export const getStudents = async () =>
	await axios.get(`${process.env.REACT_APP_API}/students`);

export const removeStudent = async (id) =>
	await axios.delete(`${process.env.REACT_APP_API}/student/${id}`);

export const getStudent = async (slug) =>
	await axios.get(`${process.env.REACT_APP_API}/student/${slug}`);

export const updateStudent = async (slug, student) =>
	await axios.put(`${process.env.REACT_APP_API}/student/${slug}`, student);

export const createStudent = async (student) =>
	await axios.post(`${process.env.REACT_APP_API}/student`, student);
