import { Request, Response } from 'express';

export class IncidentController {
  public static createIncident = (req: Request, res: Response): void => {
    res.status(501).json({ success: false, message: 'Creación de novedad pendiente.' });
  };
  public static getAllIncidents = (req: Request, res: Response): void => {
    res.status(501).json({ success: false, message: 'Historial de incidencias pendiente.' });
  };
  public static patchIncident = (req: Request, res: Response): void => {
    res.status(501).json({ success: false, message: `Actualización parcial (PATCH) de novedad ${req.params.id} pendiente.` });
  };
}