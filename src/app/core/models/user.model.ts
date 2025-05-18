
export enum UserRole {
  ADMIN = 'admin',
  RECRUITER = 'recruiter',
  CANDIDATE = 'candidate'
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  createdAt: string;
}

export interface AdminUser extends User {
  role: UserRole.ADMIN;
}

export interface RecruiterUser extends User {
  role: UserRole.RECRUITER;
  company?: string;
  position?: string;
}

export interface CandidateUser extends User {
  role: UserRole.CANDIDATE;
  skills?: string[];
  experience?: string;
  resumeUrl?: string;
}
