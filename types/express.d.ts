// types/express.d.ts (atau bisa dinamai types/custom.d.ts)
import { Request } from "express";

export interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    username: string;
    name?: string;
    email: string;
  };
}
