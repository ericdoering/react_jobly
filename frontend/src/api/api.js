import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
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

  // Individual API routes

  /** Get details on a company by handle. */
  // static async getJob() {
  //   let res = await this.request(`jobs/${title}`)
  //   return res.jobs;
  // }

  static async getJobs() {
    let res = await this.request(`jobs`)
    return res.jobs;
  }

  static async getCompanies() {
    let res = await this.request(`companies`)
    return res.companies;
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  // obviously, you'll add a lot here ...

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