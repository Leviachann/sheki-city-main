import { ILang } from "../assets/lang/lang";

export interface ILanguage {
  id: number;
  label: string;
  value: string;
}

export interface IUser {
  id: number;
  full_name: string;
  email: string;
  avatar_url: string | null;
  preferred_lang: string;
}

export interface IStore {
  loader: boolean;
  sideMenu: boolean;
  languages: ILanguage[];
  locale: Record<string, string>;
  user: IUser | null;
}

