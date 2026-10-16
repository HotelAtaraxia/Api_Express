import { Request, Response } from 'express';

export class RoomController {
  public static getAllRooms = (req: Request, res: Response): void => {
    res.status(501).json({ success: false, message: 'Listado de ambientes pendiente.' });
  };
  public static createRoom = (req: Request, res: Response): void => {
    res.status(501).json({ success: false, message: 'Creación de ambiente pendiente.' });
  };
  public static patchRoom = (req: Request, res: Response): void => {
    res.status(501).json({ success: false, message: `Actualización parcial (PATCH) de ambiente ${req.params.id} pendiente.` });
  };
}