import { AnneeScolaire } from "./annee";

export interface PlanificationClasse {
  id?: number;
  libelle: string;
  niveau: string;
  classeId: number;
  anneeScolaireId: number;
  }
  