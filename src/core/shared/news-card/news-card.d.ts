import { ReactNode } from 'react';

export interface NewsCardProps {
    id: number | string;
    image: string;
    title: string;
    description: string;
    date: string;
    slug: string; 
}