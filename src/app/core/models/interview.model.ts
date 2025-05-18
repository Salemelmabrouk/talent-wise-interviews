
export enum InterviewStatus {
  SCHEDULED = 'scheduled',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}

export enum InterviewType {
  TECHNICAL = 'technical',
  BEHAVIORAL = 'behavioral',
  MIXED = 'mixed',
  PRACTICE = 'practice'
}

export interface Interview {
  id: string;
  title: string;
  description?: string;
  jobId?: string;
  candidateId: string;
  recruiterId?: string;
  scheduledAt: string; // ISO string date
  duration: number; // in minutes
  status: InterviewStatus;
  type: InterviewType;
  questions?: InterviewQuestion[];
  feedback?: InterviewFeedback;
  createdAt: string;
}

export interface InterviewQuestion {
  id: string;
  content: string;
  category?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface InterviewFeedback {
  id: string;
  interviewId: string;
  technicalScore?: number;
  behavioralScore?: number;
  overallScore?: number;
  strengths?: string[];
  improvements?: string[];
  notes?: string;
  recommendation?: 'hire' | 'consider' | 'reject';
  createdAt: string;
}
