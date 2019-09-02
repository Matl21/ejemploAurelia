// Importamos nuestra clase cliente para usar en app
import { Cliente } from "./cliente";

export class App {
  constructor(){

    //Encabezado que se pondra
    this.titulo="Gerente de Personal";
    // Un arreglo para los clientes
    this.clientes=[];

    //Campo para los datos de la clase cliente
    this.nombresCliente="";
    this.emailCliente="";
    this.edadCliente="";

  }

  // Metodo que agrega un cliente a la tabla
  addCliente(){
    // Verifico los campo no esten vacios
    if (this.nombresCliente && this.emailCliente && this.edadCliente) {
      
      this.clientes.push(new Cliente(this.nombresCliente, this.emailCliente,
        this.edadCliente));
      
        // Limpieza de campos
        this.nombresCliente="";
        this.emailCliente="";
        this.edadCliente="";
    }
  }


  // Metodo que se encargara de remover un cliente de la tabla recibe un cliente
  removeCliente(cliente){
    let index = this.clientes.indexOf(cliente);
    if (index !== -1) {
      this.clientes.splice(index, 1)
    }
  }

  
}
