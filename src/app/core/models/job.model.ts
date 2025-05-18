
export interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
  requirements: string[];
  location: string;
  salary?: {
    min?: number;
    max?: number;
    currency: string;
  };
  recruiterId: string;
  status: 'draft' | 'published' | 'closed';
  applicantCount?: number;
  createdAt: string;
}
