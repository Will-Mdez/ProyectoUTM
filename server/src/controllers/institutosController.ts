import { Request,Response } from "express";
import pool from '../database';

class InstitutosController
{
    public async list(req: Request,res: Response): Promise<void>{
        const respuesta = await pool.query('SELECT * FROM usuarios ORDER BY idUsuarios');
        res.json(respuesta);
        return;
    }
     public async listOne(req: Request,res: Response): Promise<void>{
         const {id} = req.params;
         const respuesta= await pool.query('SELECT * FROM usuarios WHERE idUsuarios = ?',[id]);
         if(respuesta.length>0){
            res.json(respuesta[0]);
            return;
         }
         res.status(404).json({'mensaje':'Instituto no encontrado'});
     }       
    public async existe (req:Request, res:Response): Promise<void>{
        const {correo,password}= req.params;    
        const respuesta = await pool.query("SELECT idUsuarios FROM usuarios WHERE correo = ? AND password = ?",[correo,password]);
        if (respuesta.length>0){
            res.json(respuesta[0]);
            return;
        }
        res.json(-1);
        return;
        
    }
    //PROFESORES

    public async existeProfesor (req:Request, res:Response): Promise<void>{
        const {idProfesor}= req.params;    
        const respuesta = await pool.query("SELECT * FROM Profesores WHERE idProfesor = ?",[idProfesor]);
        console.log(respuesta);
      
        if (respuesta.length>0){
            res.json(respuesta[0]);
            return;
        }
        res.json(-1);
        return;
        
    }
    public async listProfesores (req:Request, res:Response): Promise<void>{
        const {idInstituto}= req.params;    
        const respuesta = await pool.query("SELECT * FROM Profesores ");
        console.log(respuesta);
      
        if (respuesta.length>0){
            res.json(respuesta);
            return;
        }
        res.json(-1);
        return;
        
    }
    public async listProfesoresPorInstituto (req:Request, res:Response): Promise<void>{
        const {idInstituto}= req.params;    
        const respuesta = await pool.query("SELECT * FROM Profesores WHERE idInstituto =? ",[idInstituto]);
        console.log(respuesta);
      
        if (respuesta.length>0){
            res.json(respuesta);
            return;
        }
        res.json(-1);
        return;
        
    }
    ///INSTITUTOS!!!
    public async listInstitutos (req:Request, res:Response): Promise<void>{ 
        const respuesta = await pool.query("SELECT * FROM Institutos ");
        console.log(respuesta);
      
        res.json(respuesta);
        return;
        
    }
    public async listOneInstituto(req: Request,res: Response): Promise<void>{
        const {idInstituto} = req.params;
        const respuesta= await pool.query('SELECT * FROM Institutos WHERE idInstitutos = ?',[idInstituto]);
        if(respuesta.length>0){
           res.json(respuesta[0]);
           return;
        }
        res.json(-1);
        return;
    } 
    public async create(req: Request, res: Response): Promise<void> {
        let nuevo = {"nombreInstituto":req.body.nombreInstituto,"codigoInstituto":req.body.codigoInstituto};
        console.log(nuevo);
        const resp = pool.query("INSERT INTO Institutos set ?", [nuevo]);
        res.json(resp);
    }

    ////CARRERAS!
    public async listCarreras (req:Request, res:Response): Promise<void>{ 
        const respuesta = await pool.query("SELECT * FROM Carreras ");
        console.log(respuesta);
      
        res.json(respuesta);
        return;
        
    }
    public async listCarrerasPorInstituto (req:Request, res:Response): Promise<void>{ 
        const {idInstituto}= req.params;   
        const respuesta = await pool.query("SELECT * FROM Carreras WHERE idInstituto =? ",[idInstituto]);
        console.log(respuesta);
        if (respuesta.length>0){
            res.json(respuesta);
            return;
        }
        res.json(-1);
        return;
        
    }
    public async listOneCarrera (req:Request, res:Response): Promise<void>{
        const {idCarrera}= req.params;    
        const respuesta = await pool.query("SELECT * FROM Carreras WHERE idCarrera = ?",[idCarrera]);
        console.log(respuesta);
      
        if (respuesta.length>0){
            res.json(respuesta[0]);
            return;
        }
        res.json(-1);
        return;
        
    }

    //ARTICULOS
    public async listArticulos(req:Request, res:Response): Promise<void>{ 
        const respuesta = await pool.query("SELECT * FROM articulos ");
        console.log(respuesta);
      
        res.json(respuesta);
        return;
        
    }
    public async listOneArticulo (req:Request, res:Response): Promise<void>{
        const {idarticulo}= req.params;    
        const respuesta = await pool.query("SELECT * FROM articulos WHERE idarticulo = ?",[idarticulo]);
        console.log(respuesta);
      
        if (respuesta.length>0){
            res.json(respuesta[0]);
            return;
        }
        res.json(-1);
        return;
        
    }

    //ARTICULOS Y PROFESORES
    public async listArticulosYProfesores(req:Request, res:Response): Promise<void>{ 
        const {idarticulo}= req.params;
        const respuesta = await pool.query("SELECT * FROM profesorYarticulo WHERE idarticulo =",[idarticulo]);
        console.log(respuesta);
        if (respuesta.length>0){
            res.json(respuesta);
            return;
        }
      
        res.json(respuesta);
        return;
        
    }

    public async listProfesoresDeArticulos (req:Request, res:Response): Promise<void>{
        const {idprofesor,inicio,final}= req.params;    
        const respuesta = await pool.query("SELECT * FROM profesorYarticulo WHERE idprofesor = ?"+idprofesor+"AND fechaedicion>='"+inicio+"' AND fechaedicion<='"+final+"' ORDER BY fechaedicion");
        console.log(respuesta);
        if (respuesta.length>0){
            res.json(respuesta);
            return;
        }
        res.json(-1);
        return;
        
    }

    ////Articulos

    public async listaArticulosIniFin(req: Request, res: Response): Promise <void>{
        console.log("listaArticulosIniFin");
        const {idProfesor,ini,fin} =  req.params;
        let consulta='SELECT A.idarticulo,A.titulo, date_format(A.fechaedicion, "%d-%m-%Y") as fecha from Articulos A INNER JOIN profesorYarticulo PA ON PA.idarticulo = A.idarticulo INNER JOIN Profesores P ON P.idProfesor=PA.idprofesor WHERE P.idProfesor = '+[idProfesor]+' AND fechaedicion>="'+[ini]+ '" AND fechaedicion<="'+[fin]+'" ORDER BY fechaedicion';
        const respuesta = await pool.query(consulta);
        for(let data of respuesta)
        {
            let consultaAutores='SELECT PA.idprofesor, P.nombreProfesor, P.apellidoPaterno, P.apellidoMaterno, PA.idarticulo, PA.pos, PA.validado FROM Articulos A INNER JOIN profesorYarticulo PA ON A.idarticulo=PA.idarticulo INNER JOIN Profesores P ON P.idProfesor=PA.idprofesor WHERE PA.idarticulo='+[data.idarticulo]+'ORDER BY PA.pos';
            const respuestaAutores = await pool.query(consultaAutores);
            data.autores=respuestaAutores;
        }
        res.json(respuesta);
        return;
    }

    public async listByidProfesorIniFin(req: Request, res: Response): Promise <void>{
        console.log("listByidProfesorIniFin");
        const {idProfesor,ini,fin} =  req.params;
        let consulta='SELECT A.idArticulo,A.tipoCRL,A.tipoNI,A.titulo, date_format(A.fechaEdicion, "%d-%m-%Y") as fecha  from Articulos A INNER JOIN profesorYarticulo PA ON PA.idArticulo = A.idArticulo INNER JOIN Profesores P ON P.idProfesor=PA.idProfesor WHERE  P.idProfesor = '+idProfesor+' AND fechaedicion>="'+ini+ '" AND fechaedicion<="'+fin+'" ORDER BY fechaedicion';
        const respuesta = await pool.query(consulta);
        for(let data of respuesta)
        {
            let consultaAutores='SELECT PA.idProfesor, P.nombreProfesor, P.apellidoPaterno, P.apellidoMaterno, PA.idArticulo, PA.pos, PA.validado FROM Articulos A  INNER JOIN profesorYarticulo PA ON A.idArticulo=PA.idArticulo  INNER JOIN Profesores P ON P.idProfesor=PA.idProfesor WHERE PA.idArticulo='+data.idArticulo+" ORDER BY PA.pos";
            const respuestaAutores = await pool.query(consultaAutores);
            data.autores=respuestaAutores;
        }
        res.json(respuesta);
    }


    //POST

    public async createProfesor(req: Request, res: Response): Promise <void>{
        //let password = req.body.password as any;
        //vas salt = bcrypt.getSaltSync(10);
        //bcrypt.hash(password,salt).then(function(nuevoPassword)
        //{
            //req.body.password=nuevoPassword;
            const resp= pool.query("INSERT INTO Profesores set ?",[req.body]);
            res.json(resp);
        //})
    }

    //ACTUALIZAR Y ELIMINAR

    public async eliminarProfesor(req:Request,res:Response):Promise<void>{
        const{idP}=req.params;
        const respuesta=await pool.query('DELETE FROM Profesores WHERE idProfesor=?',[idP]);
        if(respuesta.length>0){
            res.json(respuesta[0]);
            return;
        }
        res.status(200).json({'mensaje':'Eliminado'})
    }

    public async actualizarProfesor(req:Request,res:Response):Promise<void>{
        const{idP}=req.params;
        const respuesta=await pool.query('UPDATE Profesores SET ? WHERE idProfesor=?',[req.body,idP]);
        if(respuesta.length>0){
            res.json(respuesta[0]);
            return;
        }
        res.status(200).json({'mensaje':'Actualizado'})
    }
    //  Viscerector, Rector, Director de Instituto, Maestro


    

}

export const institutosController = new InstitutosController();