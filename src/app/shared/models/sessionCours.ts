export interface SessionCours  {
  id: number | null;
  date: Date | null;
  heureDebut: number;
  nbreHeures: number;
  etat: string; // Anciennement 'etat_session'
  etat_session: string;
  demandeAnnulation: boolean;
  coursId: number;
  salleId: number;
  moduleId: number;
  professeurId: number;
  classesId:number;
}
