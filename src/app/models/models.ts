export interface UserI{

    nombre : string ;
    apellido : string ; 
    correo: string; 
    password: string; 
    uid: string; 
    telefono : string ; 

    perfil : 'visitante'| 'visitante2'|'admin',
}

export interface Proyecto{

    nombreP: string;
    fechaI: string;
    fechaF:string;
    encargadoP:string;
    maquinas:'mano de gato'|'tractor'|'cravmex';



}

export interface Gastos{

    descripcion: string ;
    monto: string; 

}