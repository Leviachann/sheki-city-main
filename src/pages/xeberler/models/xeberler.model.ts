export interface IXeber {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    body?: string;
    cover_image_url: string;
    published_at: string;
    view_count: number;
    category_name: string;
    category_slug: string;
    author_name?: string;
}

export class XeberModel implements IXeber {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    body?: string;
    cover_image_url: string;
    published_at: string;
    view_count: number;
    category_name: string;
    category_slug: string;
    author_name?: string;

    constructor(data: IXeber) {
        this.id = data.id;
        this.title = data.title;
        this.slug = data.slug;
        this.excerpt = data.excerpt;
        this.body = data.body;
        this.cover_image_url = data.cover_image_url;
        this.published_at = data.published_at;
        this.view_count = data.view_count;
        this.category_name = data.category_name;
        this.category_slug = data.category_slug;
        this.author_name = data.author_name;
    }
}