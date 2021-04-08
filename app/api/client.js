import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://192.168.1.7:9090/api",
});

export default apiClient;
