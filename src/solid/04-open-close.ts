// import axios from "axios";

// Esta clase me permite cambiar de librería sin tener que cambiar el código
// Se conoce como el patrón Adaptador el cual nos permite gestionar una librería de terceros
export class HttpClient {
  // async get(url: string) {
  //   const {data, status} = await axios.get(url);
  //   return { data, status };
  // }

  async get(url: string) {
    const response = await fetch(url);
    const data = await response.json();

    return { data, status: response.status };
  }
}
