export interface Cours {
  id: number;
  nbreHeures: number;
  raisonAnnulation: string;
  etat: string;
  nom: string;
  annule: boolean;
  semestreId: number;
  }