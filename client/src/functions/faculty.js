import axios from "axios";

export const getFaculties = async () =>
	await axios.get(`${process.env.REACT_APP_API}/faculties`);

export const getFaculty = async (slug) =>
	await axios.get(`${process.env.REACT_APP_API}/faculty/${slug}`);

export const removeFaculty = async (slug) =>
	await axios.delete(`${process.env.REACT_APP_API}/faculty/${slug}`);

export const updateFaculty = async (slug, faculty) =>
	await axios.put(`${process.env.REACT_APP_API}/faculty/${slug}`, faculty);

export const createFaculty = async (faculty) =>
	await axios.post(`${process.env.REACT_APP_API}/faculty`, faculty);
