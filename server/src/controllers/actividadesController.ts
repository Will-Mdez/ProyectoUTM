import { Request,Response } from "express";
import pool from '../database';

class ActividadesController
{
    public async listActividadesdeProfesor(req: Request,res: Response): Promise<void>{
        const {id} = req.params;
        const respuesta = await pool.query('SELECT * FROM actividades WHERE idProfesor=?',[id]);
        res.json(respuesta);
        return;
    }
    public async listOneActividad(req: Request,res: Response): Promise<void>{
         const {id} = req.params;
         const respuesta= await pool.query('SELECT * FROM actividades WHERE idActividad = ?',[id]);
         if(respuesta.length>0){
            res.json(respuesta[0]);
            return;
         }
         res.status(404).json({'mensaje':'actividad no encontrado'});
    }

    public async createActividad(req: Request, res: Response): Promise <void>{
        //let password = req.body.password as any;
        //vas salt = bcrypt.getSaltSync(10);
        //bcrypt.hash(password,salt).then(function(nuevoPassword)
        //{
            //req.body.password=nuevoPassword;
            const resp= pool.query("INSERT INTO actividades set ?",[req.body]);
            res.json(resp);
        //})
    }

    public async eliminarActividad(req:Request,res:Response):Promise<void>{
        const{idP}=req.params;
        const respuesta=await pool.query('DELETE FROM actividades WHERE idActividad=?',[idP]);
        if(respuesta.length>0){
            res.json(respuesta[0]);
            return;
        }
        res.status(200).json({'mensaje':'Eliminado'})
    }

    public async actualizarActividad(req:Request,res:Response):Promise<void>{
        const{idP}=req.params;
        const respuesta=await pool.query('UPDATE actividades SET ? WHERE idActividad=?',[req.body,idP]);
        if(respuesta.length>0){
            res.json(respuesta[0]);
            return;
        }
        res.status(200).json({'mensaje':'Actualizado'})
    }
    


    

}

export const actividadesController = new ActividadesController();