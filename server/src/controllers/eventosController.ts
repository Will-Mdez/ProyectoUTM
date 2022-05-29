import { Request,Response } from "express";
import pool from '../database';

class EventosController
{
    public async listEventosdeProfesor(req: Request,res: Response): Promise<void>{
        const {idProfesor} = req.params;
        const respuesta = await pool.query('SELECT * FROM eventos WHERE idProfesor=?',[idProfesor]);
        res.json(respuesta);
        return;
    }
    public async listOneEvento(req: Request,res: Response): Promise<void>{
         const {id} = req.params;
         const respuesta= await pool.query('SELECT * FROM eventos WHERE id = ?',[id]);
         if(respuesta.length>0){
            res.json(respuesta[0]);
            return;
         }
         res.status(404).json({'mensaje':'Evento no encontrado'});
    }

    public async createEvento(req: Request, res: Response): Promise <void>{
        //let password = req.body.password as any;
        //vas salt = bcrypt.getSaltSync(10);
        //bcrypt.hash(password,salt).then(function(nuevoPassword)
        //{
            //req.body.password=nuevoPassword;
            const resp= pool.query("INSERT INTO eventos set ?",[req.body]);
            res.json(resp);
        //})
    }

    public async eliminarEvento(req:Request,res:Response):Promise<void>{
        const{idP}=req.params;
        const respuesta=await pool.query('DELETE FROM eventos WHERE id=?',[idP]);
        if(respuesta.length>0){
            res.json(respuesta[0]);
            return;
        }
        res.status(200).json({'mensaje':'Eliminado'})
    }

    public async actualizarEvento(req:Request,res:Response):Promise<void>{
        const{idP}=req.params;
        const respuesta=await pool.query('UPDATE eventos SET ? WHERE id=?',[req.body,idP]);
        if(respuesta.length>0){
            res.json(respuesta[0]);
            return;
        }
        res.status(200).json({'mensaje':'Actualizado'})
    }


    

}

export const eventosController = new EventosController();