import { ReactNode } from 'react';

export interface IPageHeaderProps {
    title?: string;
    count?: number;
    current?:string;
    onBack?: () => void;  
    search?: {
        placeholder: string;
        onSearch: (value: string) => void;
        onChange?: (value: string) => void;
    };
    filters?: Array<{
        label: string;
        options: Array<{ label: string; value: string | number }>;
        defaultValue?: string | number;
        onChange: (value: string | number) => void;
    }>;
    breadcrumbs?: Array<{
        label: string;
        path?: string;
    }>;
}