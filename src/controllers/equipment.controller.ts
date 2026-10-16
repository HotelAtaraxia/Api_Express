import { Request, Response } from 'express';

export class EquipmentController {
  public static createEquipment = (req: Request, res: Response): void => {
    res.status(501).json({ success: false, message: 'Registro de equipo pendiente.' });
  };
  public static getEquipments = (req: Request, res: Response): void => {
    res.status(501).json({ success: false, message: 'Listado/filtrado de equipos pendiente.' });
  };
  public static patchEquipment = (req: Request, res: Response): void => {
    res.status(501).json({ success: false, message: `Actualización parcial (PATCH) de equipo ${req.params.id} pendiente.` });
  };
}