import { Server as IOServer } from "socket.io";

declare namespace Express {
  export interface Locals {
    io: IOServer;
  }
}
