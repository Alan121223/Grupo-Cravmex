export interface UserI {
    nombre: string;
    apellido: string;
    correo: string;
    password: string;
    uid: string;
    telefono:string;
status:string;
    perfil:string;
 

    // perfil: 'visitante'| 'admin',
  }

export interface Proyecto{

    nombreP: string;
    fechaI: string;
    fechaF:string;
    encargadoP:string;
    maquinasT:string;
    monto:string;
    direccion:string;
    status: 'Activo' |'Terminado'; 
     id:string;
}




export const statusO = ['Activo', 'Terminado']

export interface Gastos{
  nombrePr:Proyecto;
  semana:string;
  fechaE:string;
  fechaF:string;
  id:string;

}
export interface GatosDiarios{
 
  descripcion: string ;
  monto: string ;
  fecha:string;
  foto:string;
  id:string;


}

export interface Aditivo{
  nombrePr:Proyecto;
  material:'Si'|'No';
  renta:'Si'|'No';
  trabajo:'Si'|'No';
  costoT:string;
  id:string;
}

export const materialM = ['Si', 'No']
export const rentaM = ['Si', 'No']
export const trabajoM = ['Si', 'No']


export interface Avances{
nombrePr:Proyecto;
avance:string;
id:string;

}

export interface AvancesDiarios{
  porcentaje:string;
  fechaI:string;
  id:string;
}
