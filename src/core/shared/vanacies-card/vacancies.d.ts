
export interface Vacancy {
  id: number;
  title: string;
  slug: string;
  description: string;
  requirements: string;
  departmentId: number;
  department: {
    id: number;
    name: string;
    langCode: string;
  };
  headerImageUrl: string;
  status: 'Draft' | 'Active' | 'Closed' | 'Archived';
  applicationStart: string;
  applicationEnd: string;
  createdAt: string;
}

interface VacancyCardProps {
  vacancy: Vacancy;
}