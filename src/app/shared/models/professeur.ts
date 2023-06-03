export interface ProfesseurDTO {
    id: number;
    username: string;
    password: string;
    specialites: string;
    grades: string;
    nomComplet: string;
    roles: AppRole[];
    
  }
  
  export interface AppRole {
    id: number;
    roleName: string;
  }