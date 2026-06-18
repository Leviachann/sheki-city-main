export interface BackendSizeOption {
    id: number;
    sortOrder: number;
    name: string;
}

export interface ProductVariant {
    id: number;
    stockQty: number;
    productSize?: {
        name: string;
    };
}

export interface SizeSelectorProps {
    variants: ProductVariant[];
    selectedVariantId: number | null;
    onSelectVariant: (id: number) => void;
}