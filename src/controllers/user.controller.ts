import { Request, Response } from 'express';

export class UserController {
  public static getAllUsers = (req: Request, res: Response): void => {
    res.status(501).json({ success: false, message: 'Listado de usuarios pendiente de implementar.' });
  };
  public static createUser = (req: Request, res: Response): void => {
    res.status(501).json({ success: false, message: 'Creación de usuario pendiente de implementar.' });
  };
  public static getUserById = (req: Request, res: Response): void => {
    res.status(501).json({ success: false, message: `Consulta de usuario ${req.params.id} pendiente.` });
  };
  public static patchUser = (req: Request, res: Response): void => {
    res.status(501).json({ success: false, message: `Actualización parcial (PATCH) de usuario ${req.params.id} pendiente.` });
  };
  public static deleteUser = (req: Request, res: Response): void => {
    res.status(501).json({ success: false, message: `Eliminación lógica de usuario ${req.params.id} pendiente.` });
  };
}