export class Offer {
  id: string;
  url: string;
  precio_actual: string;
  precio_habitual: string;
  gastos_envio: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  fecha: string;
  votos: number;

  constructor(
    id: string,
    url: string,
    precio_actual: string,
    precio_habitual: string,
    gastos_envio: string,
    titulo: string,
    descripcion: string,
    imagen: string,
    fecha: string,
    votos?: number,
    voteUp?: boolean,
    voteDown?: boolean) {
      this.id = id;
      this.url = url;
      this.precio_actual = precio_actual;
      this.precio_habitual = precio_habitual;
      this.gastos_envio = gastos_envio;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.imagen = imagen;
      this.fecha = fecha;
      this.votos = votos || 0;
  }

  voteUp(): void {
    this.votos += 1;
  }

  voteDown(): void {
    this.votos -= 1;
  }

}
