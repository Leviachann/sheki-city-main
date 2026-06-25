export interface IXeber {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    body?: string;
    coverImageUrl: string;
    publishedAt: string;
    viewCount: number;
    categoryName: string;
    categorySlug: string;
    authorName?: string;
}

export class XeberModel implements IXeber {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    body?: string;
    coverImageUrl: string;
    publishedAt: string;
    viewCount: number;
    categoryName: string;
    categorySlug: string;
    authorName?: string;

    constructor(data: any) {
        this.id = data.id;
        this.title = data.title;
        this.slug = data.slug;
        this.excerpt = data.excerpt;
        this.body = data.body;
        this.coverImageUrl = data.cover_image_url ?? data.coverImageUrl;
        this.publishedAt = data.published_at ?? data.publishedAt;
        this.viewCount = data.view_count ?? data.viewCount;
        this.categoryName = data.category_name ?? data.categoryName;
        this.categorySlug = data.category_slug ?? data.categorySlug;
        this.authorName = data.author_name ?? data.authorName;
    }
}