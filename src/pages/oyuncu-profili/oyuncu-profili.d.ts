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

interface PlayerDetailProps {
  player?: {
    id: number;
    fullName: string;
    dateOfBirth: string;
    nationality: string;
    jerseyNumber: number;
    positionId: number;
    positionName: string; 
    photoUrl: string;     
    heightCm: number;
    weightKg: number;
    preferredFoot: string;
    contractStartDate: string;
    contractEndDate: string;
    clubDebutDate: string;
    transferFee: number;
    isActive: boolean;
    isCaptain: boolean;
    birthPlace: string;
    bio: string;
  };
}