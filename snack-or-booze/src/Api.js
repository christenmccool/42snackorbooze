import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server provides CRUD endpoints on snacks and drinks.
  Supply the type to get all items of that type.
  Types: snacks, drinks
*/

class SnackOrBoozeApi {

  static async getItems(type) {
    const result = await axios.get(`${BASE_API_URL}/${type}`);
    return result.data;
  }

  static async postItem(type, item) {
    const result = await axios.post(`${BASE_API_URL}/${type}`, item);
    console.log(result);
    return result.data;
  }


}

export default SnackOrBoozeApi;
