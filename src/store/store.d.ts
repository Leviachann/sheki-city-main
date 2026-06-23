import { ILang } from "../assets/lang/lang";

export interface ILanguage {
  id: number;
  label: string;
  value: string;
}

export interface IUser {
  id: number;
  fullName: string;     
  email: string;
  avatarUrl: string | null;
  role: string;
  preferredLang: string; 
  isActive: boolean;
  accessToken?: string;  
}

export interface IStore {
  loader: boolean;
  sideMenu: boolean;
  languages: ILanguage[];
  locale: Record<string, string>;
  user: IUser | null;
  authModal: boolean;   
}