import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


class JoblyApi {

  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const token = localStorage.getItem('auth-token');
    const headers = { Authorization: `Bearer ${token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }


  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async getJobs(title) {
    let res = await this.request(`jobs`, { title });
    return res.jobs;
  }

  static async getCompanies(name) {
    let res = await this.request("companies", { name });
    return res.companies;
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async applyToJob(username, id) {
    await this.request(`users/${username}/jobs/${id}`, {}, "post");
  }



  static async signup(username, password, firstName, lastName, email) {
    const payload = {username, password, firstName, lastName, email};
    let res = await this.request('auth/register', payload, "post")
    return res.token;
  }

  static async edit(username, firstName, lastName, email) {
    const payload = {firstName, lastName, email};
    let res = await this.request(`users/${username}`, payload, "patch")
    return res.token;
  }

  static async login(username, password) {
    const payload = {username, password};
    let res = await this.request('auth/token', payload, "post")
    return res.token;
  }
}

    export default JoblyApi;