import { ReactNode } from 'react';

export interface ForumCategory {
  id: number;
  icon: ReactNode;
  title: string;
  desc: string;
  path: string; 
}

export interface ForumCardProps {
  category: ForumCategory;
}