
import { Request,Response } from "express";
import pool from '../database';

class TablaArticulos
{
    public async listaArticulosIni(req: Request, res: Response): Promise <void>{
        console.log("listaArticulosIniFin");
        const {idProfesor,ini,fin} =  req.params;
        let consulta='SELECT A.idarticulo,A.titulo, date_format(A.fechaedicion, "%d-%m-%Y") as fecha from articulos A INNER JOIN profesorYarticulo PA ON PA.idarticulo = A.idarticulo INNER JOIN Profesores P ON P.idProfesor=PA.idprofesor WHERE P.idProfesor = '+idProfesor+' AND fechaedicion>="'+ini+ '" AND fechaedicion<="'+fin+'" ORDER BY fechaedicion;'
        const respuesta = await pool.query(consulta);
        for(let data of respuesta)
        {
            let consultaAutores='SELECT PA.idprofesor, P.nombreProfesor, P.apellidoPaterno, P.apellidoMaterno, PA.idarticulo, PA.pos, PA.validado FROM articulos A INNER JOIN profesorYarticulo PA ON A.idarticulo=PA.idarticulo INNER JOIN Profesores P ON P.idProfesor=PA.idProfesor WHERE PA.idarticulo='+data.idArticulo+" ORDER BY PA.pos";
            const respuestaAutores = await pool.query(consultaAutores);
            data.autores=respuestaAutores;

 
        }
        res.json(respuesta);
    }
    
}

export const tablaArticulos = new TablaArticulos();