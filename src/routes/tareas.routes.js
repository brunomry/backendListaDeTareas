import { Router } from "express";
import { listarTareas, crearTarea, obtenerTarea, editarTarea, borrarTarea } from "../controllers/tareas.controllers.js";

const enrutador = Router();

enrutador.route("/tareas").get(listarTareas).post(crearTarea);
enrutador.route("/tarea/:id").get(obtenerTarea).put(editarTarea).delete(borrarTarea);

export default enrutador;