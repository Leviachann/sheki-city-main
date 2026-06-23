import { ReactNode } from 'react';

export interface HomeBannerTranslation {
    title: string;
    subtitle?: string;
    buttonText?: string;
}

export interface HomeBannerData {
    id: number;
    imageUrl: string;
    isActive: boolean;
    linkUrl?: string;
    translation: HomeBannerTranslation;
}

export interface HomeBannerProps {
    title?: ReactNode;
    subtitle?: ReactNode;
    buttonText?: string;
    onButtonClick?: () => void;
}