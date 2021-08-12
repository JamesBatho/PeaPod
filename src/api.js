import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 *
 */

class PeaPodApi {
  // the token for interacting with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //pass the authorization token in the header.

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${PeaPodApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /**  Get list of members by search term */
  static async getMembers(name) {
    let res = await this.request("users", { name });
    return res.users;
  }

  // Get the current user
  static async getCurrUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  // POD API

  // create a pod

  static async createPod(data) {
    const { name, userId0 } = data;
    let res = await this.request("pods", { name, userId0 }, "post");
    return res.pod;
  }

  // add member to pod

  static async addMember(data) {
    const { name } = data;
    let res = await this.request(`pods/${name}`, data, "patch");
    return res;
  }

  // APPOINTMENT API

  static async createAppointment(
    isHost,
    description,
    childSlots,
    startTime,
    endTime,
    creatorId,
    podId
  ) {
    let res = await this.request(
      "appointments",
      { isHost, description, childSlots, startTime, endTime, creatorId, podId },
      "post"
    );

    return res.appointment;
  }

  // CHILD API

  static async createChild({ name, age, allergies, likes, parentId }) {
    age = +age;
    let res = await this.request(
      "child",
      { name, age, allergies, likes, parentId },
      "post"
    );

    return res.child;
  }

  // USER API

  // get list of users to add members to pod

  // Get list of users
  static async getUsers() {
    let res = await this.request("users");
    return res.users;
  }

  // Log the user in

  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  // Sign the user up
  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

  // save updates to the users profile page
  static async saveProfile(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }
}

export default PeaPodApi;
