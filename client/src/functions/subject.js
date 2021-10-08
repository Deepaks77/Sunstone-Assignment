import axios from "axios";

export const getSubjects = async () =>
	await axios.get(`${process.env.REACT_APP_API}/subjects`);

export const getSubject = async (slug) =>
	await axios.get(`${process.env.REACT_APP_API}/subject/${slug}`);

export const removeSubject = async (slug) =>
	await axios.delete(`${process.env.REACT_APP_API}/subject/${slug}`);
export const updateSubject = async (id, subject) =>
	await axios.put(`${process.env.REACT_APP_API}/subject/${id}`, subject);

export const createSubject = async (subject) =>
	await axios.post(`${process.env.REACT_APP_API}/subject`, subject);
