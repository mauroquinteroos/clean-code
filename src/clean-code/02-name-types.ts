(() => {
  // Fuente: https://gist.github.com/Klerith/7599f1637cc683ef59a03fd1c40d53d0

  // Arreglo de temperaturas celsius
  const celsiusTemperatures = [33.6, 12.34];

  // Dirección ip del servidor
  const serverIp = "123.123.123.123";

  // Listado de usuarios
  const users = [
    { id: 1, email: "fernando@google.com" },
    { id: 2, email: "juan@google.com" },
    { id: 3, email: "melissa@google.com" },
  ];

  // Listado de emails de los usuarios
  const userEmails = users.map((user) => user.email);

  // Variables booleanas de un video juego
  const canJump = false;
  const canRun = true;
  const hasItems = true;
  const isLoading = false;

  // Otros ejercicios
  // tiempo inicial
  const initialTime = new Date().getTime();
  //....
  // 3 doritos después
  //...
  // Tiempo al final
  const endTime = new Date().getTime() - initialTime;

  // Funciones
  // Obtiene los libros
  function getBooks() {
    throw new Error("Function not implemented.");
  }

  // obtiene libros desde un URL
  function getBooksByUrl(url: string) {
    console.log(url);
    throw new Error("Function not implemented.");
  }

  // obtiene el área de un cuadrado basado en sus lados
  function getSquareArea(side: number) {
    console.log(side);
    throw new Error("Function not implemented.");
  }

  // imprime el trabajo
  function printJob() {
    throw new Error("Function not implemented.");
  }
})();
