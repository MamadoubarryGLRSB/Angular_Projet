import { Cours } from "./cours";

export interface Semestre {
    id: number;
    libelle: string;
    coursList: Cours[];
  }
  