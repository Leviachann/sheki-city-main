export interface IProductImage {
    id: number;
    imageUrl: string;
    productId: number;
    sortOrder: number;
    isPrimary: boolean;
    langCode: string;
    altText?: string;
}

export interface ICategory {
    id: number;
    sortOrder: number;
    langCode: string;
    slug: string;
    name: string;
}

export interface IVariant {
    id: number;
    productId: number;
    sizeId: number;
    sku: string;
    stockQty: number;
    priceOverride?: number;
}

export interface IProduct {
    id: number;
    categoryId: number;
    basePrice: number;
    discountPrice?: number;
    currency: string;
    isAvaible: boolean;
    langCode: string;
    name: string;
    slug: string;
    description?: string;
    variants: IVariant[];
    images: IProductImage[];
    category: ICategory;
}

export interface IProductsResponse {
    items: IProduct[];
    page: number;
    pageSize: number;
    totalCount: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}
