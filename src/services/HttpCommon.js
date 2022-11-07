import axios from "axios";

export default axios.create({
	baseURL: "http://localhost/common/",
	headers: {
		"Content-type": "application/json"
	}
});