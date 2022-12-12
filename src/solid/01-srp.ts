(() => {
  // Fuente: https://gist.github.com/Klerith/644f0dc4c898370308e029f15224f4f0

  interface Product {
    id: number;
    name: string;
  }

  // Clase para manejar los request http
  class ProductService {
    private httpAdapter: Object = new Object();

    getProduct(id: number) {
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      console.log("Guardando en base de datos", product);
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    private productService: ProductService;
    private mailer: Mailer;

    // Sirve para mantener la SRP de las clases ProductService y Mailer
    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(["cliente@example.com"], "to-clients");
    }
  }

  class Mailer {
    private masterEmail: string = "test@example.com";

    sendEmail(emailList: string[], template: "to-clients" | "to-admin") {
      console.log("Destinatarios: ", emailList);
      console.log("Enviando correo a los clientes", template);
    }
  }

  class CartBloc {
    private itemsInCart: Object[] = [];

    // No hay una relación directa con la gestión de un producto
    addToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }

  const productService = new ProductService();
  const mailer = new Mailer();

  // Al hacer pruebas de la clase ProductBloc, ya no vamos a probar la consulta al servidor porque esa responsabilidad ya no la tiene la clase ProductBloc
  // Haremos un mock (clase ficticia para facilitar el testing) del ProductService y del Mailer

  const productBloc = new ProductBloc(productService, mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.addToCart(10);
})();
