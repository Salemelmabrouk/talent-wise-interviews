
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const candidates = [
  {
    id: '1',
    name: 'John Smith',
    position: 'Senior Frontend Developer',
    skills: ['React', 'TypeScript', 'NextJS'],
    experience: '5 years',
    status: 'Interview Scheduled',
    appliedDate: '2025-05-10'
  },
  {
    id: '2',
    name: 'Emily Johnson',
    position: 'Product Manager',
    skills: ['Product Strategy', 'Agile', 'User Research'],
    experience: '7 years',
    status: 'Technical Assessment',
    appliedDate: '2025-05-12'
  },
  {
    id: '3',
    name: 'Michael Chen',
    position: 'UX/UI Designer',
    skills: ['Figma', 'UI Design', 'User Testing'],
    experience: '4 years',
    status: 'Application Received',
    appliedDate: '2025-05-15'
  },
  {
    id: '4',
    name: 'Sarah Wilson',
    position: 'Backend Developer',
    skills: ['Node.js', 'Python', 'MongoDB'],
    experience: '3 years',
    status: 'Screening Call',
    appliedDate: '2025-05-14'
  },
  {
    id: '5',
    name: 'David Rodriguez',
    position: 'DevOps Engineer',
    skills: ['AWS', 'Docker', 'Kubernetes'],
    experience: '6 years',
    status: 'Interview Completed',
    appliedDate: '2025-05-08'
  },
];

const CandidatesPage = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Candidates</h1>
        <p className="text-muted-foreground">
          Review and manage candidates who have applied for your job postings.
        </p>
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search candidates..." className="pl-8" />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>All Candidates</CardTitle>
          <CardDescription>View and manage candidate applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {candidates.map((candidate) => (
              <div key={candidate.id} className="border rounded-lg p-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">{candidate.name}</h3>
                    <p className="text-sm text-muted-foreground">{candidate.position}</p>
                  </div>
                  <Badge className={
                    candidate.status.includes('Interview Scheduled') ? 'bg-blue-100 text-blue-800 hover:bg-blue-100' : 
                    candidate.status.includes('Technical') ? 'bg-purple-100 text-purple-800 hover:bg-purple-100' : 
                    candidate.status.includes('Completed') ? 'bg-green-100 text-green-800 hover:bg-green-100' :
                    candidate.status.includes('Screening') ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100' :
                    'bg-gray-100 text-gray-800 hover:bg-gray-100'
                  }>
                    {candidate.status}
                  </Badge>
                </div>
                <div className="mt-2">
                  <div className="flex flex-wrap gap-1 mt-2">
                    {candidate.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="bg-gray-100">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-muted-foreground">Experience: {candidate.experience}</p>
                    <p className="text-xs text-muted-foreground">Applied: {candidate.appliedDate}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default CandidatesPage;
