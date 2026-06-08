declare namespace VacancyModels {
  export interface DepartmentData {
    id: number;
    name: string;
    langCode: string;
  }

  export interface Item {
    id: number;
    langCode: string;
    title: string;
    slug: string;
    description: string;
    requirements: string;
    departmentId: number;
    department: DepartmentData;
    headerImageUrl: string;
    status: 'Draft' | 'Active' | 'Closed' | 'Archived';
    applicationStart: string;
    applicationEnd: string;
    createdAt: string;
  }

  export interface CollectionPaginated {
    items: Item[];
    page: number;
    pageSize: number;
    totalCount: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  }
}