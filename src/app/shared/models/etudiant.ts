export interface Etudiant {
    id: number;
    username: string;
    password: string;
    matricule: string;
    nomComplet: string;
    roles: AppRole[];
    classe: string;
  }
  
  export interface AppRole {
    id: number;
    roleName: string;
  }
  