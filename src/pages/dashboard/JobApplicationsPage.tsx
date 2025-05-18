
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const applications = [
  {
    id: '1',
    company: 'TechCorp',
    position: 'Senior Frontend Developer',
    appliedDate: '2025-05-05',
    status: 'Interview Scheduled',
    nextStep: 'Technical Interview on May 20, 2025',
    progress: 60
  },
  {
    id: '2',
    company: 'InnovateCo',
    position: 'Product Manager',
    appliedDate: '2025-05-10',
    status: 'Application Submitted',
    nextStep: 'Waiting for review',
    progress: 20
  },
  {
    id: '3',
    company: 'DevFirm',
    position: 'Software Engineer',
    appliedDate: '2025-05-12',
    status: 'Technical Assessment',
    nextStep: 'Complete coding challenge by May 19, 2025',
    progress: 40
  },
  {
    id: '4',
    company: 'CodeMasters',
    position: 'Frontend Developer',
    appliedDate: '2025-05-15',
    status: 'Application Submitted',
    nextStep: 'Waiting for review',
    progress: 20
  },
  {
    id: '5',
    company: 'DataTech',
    position: 'Full Stack Developer',
    appliedDate: '2025-04-28',
    status: 'Interview Complete',
    nextStep: 'Waiting for decision',
    progress: 80
  }
];

const JobApplicationsPage = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">My Applications</h1>
        <p className="text-muted-foreground">
          Track and manage your job applications.
        </p>
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search applications..." className="pl-8" />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Job Applications</CardTitle>
          <CardDescription>Track the progress of your job applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {applications.map((app) => (
              <div key={app.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium text-lg">{app.position}</h3>
                    <p className="text-muted-foreground">{app.company}</p>
                  </div>
                  <Badge className={app.status.includes('Interview') ? 'bg-blue-100 text-blue-800 hover:bg-blue-100' : 
                               app.status.includes('Assessment') ? 'bg-purple-100 text-purple-800 hover:bg-purple-100' : 
                               app.status.includes('Complete') ? 'bg-green-100 text-green-800 hover:bg-green-100' :
                               'bg-gray-100 text-gray-800 hover:bg-gray-100'}>
                    {app.status}
                  </Badge>
                </div>
                <div className="space-y-1 mt-4">
                  <div className="flex justify-between text-xs">
                    <span>Application Progress</span>
                    <span>{app.progress}%</span>
                  </div>
                  <Progress value={app.progress} className="h-2" />
                </div>
                <div className="mt-4 flex justify-between items-end">
                  <div>
                    <p className="text-sm font-medium">Next Step</p>
                    <p className="text-sm text-muted-foreground">{app.nextStep}</p>
                    <p className="text-xs text-muted-foreground mt-1">Applied on {app.appliedDate}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    View Details
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

export default JobApplicationsPage;
