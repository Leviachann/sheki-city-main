export interface Department {
  id: number;
  name: string;
  langCode: string;
}

export interface SingleVacancy {
  id: number;
  langCode: string;
  title: string;
  slug: string;
  description: string;
  requirements: string;
  departmentId: number;
  department: Department;
  headerImageUrl: string;
  status: 'Draft' | 'Active' | 'Closed' | 'Archived';
  applicationStart: string;
  applicationEnd: string;
  createdAt: string;
}

export interface VacancyQueryParams {
  page: number;
  pageSize?: number;
  departmentId?: number;
  vacancyStatus?: 'Draft' | 'Active' | 'Closed' | 'Archived';
}

export interface VacancyResponse {
  items: SingleVacancy[];
  page: number;
  pageSize: number;
  totalCount: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}