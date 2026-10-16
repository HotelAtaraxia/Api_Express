import { Request, Response } from 'express';

export class DashboardController {
  public static getSummary = (req: Request, res: Response): void => {
    res.status(501).json({ success: false, message: 'Resumen del dashboard pendiente de implementar.' });
  };
}
