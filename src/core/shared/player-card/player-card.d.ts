export interface Player {
  id: number;
  fullName: string;
  jerseyNumber: number;
  positionId: number;
  positionName: string; 
  photoUrl: string;     
  isActive: boolean;
  isCaptain: boolean;
  nationality: string;
}

export interface Position {
  id: number;
  name: string;
  sortOrder: number;
}