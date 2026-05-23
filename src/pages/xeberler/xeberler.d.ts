export interface IAuthor {
    id: number;
    email: string;
    fullName: string;
    isActive: boolean;
}

export interface IXeberCategory {
    id: number;
    sortOrder: number;
    name: string;
    slug: string | null;
}

export interface ITag {
    id: number;
    langCode: string;
    name: string;
    slug: string;
}

export interface IXeber {
    id: number;
    categoryId: number;
    authorId: number;
    coverImageUrl: string;
    langCode: string;
    title: string;
    slug: string;
    excerpt: string;
    body: string;
    publishedAt: string;
    viewCount: number;
    createdAt: string;
    updatedAt: string;
    author: IAuthor;
    category: IXeberCategory;
    tags: ITag[];
}

export interface IXeberlerResponse {
    items: IXeber[];
    page: number;
    pageSize: number;
    totalCount: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}