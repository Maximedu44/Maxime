import http from "../http-common";

class PersonneDataService {
  getAll() {
    return http.get("/entree");
  }

  get(id) {
    return http.get(`/entree/${id}`);
  }

  create(data) {
    return http.post("/entree", data);
  }

  // A COMPLETER

  update(data) {
    return http.put("/entree", data);
  
  delete(id) {
    return http.delete("/entree", data);
  }

  
}

export default new PersonneDataService();
