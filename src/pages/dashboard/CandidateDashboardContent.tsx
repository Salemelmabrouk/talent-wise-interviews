
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const jobApplications = [
  {
    company: 'TechCorp',
    position: 'Senior Developer',
    status: 'Interview Scheduled',
    date: '2025-05-20',
    progress: 60
  },
  {
    company: 'InnovateCo',
    position: 'Product Manager',
    status: 'Application Submitted',
    date: '2025-05-15',
    progress: 20
  },
  {
    company: 'DevFirm',
    position: 'Software Engineer',
    status: 'Technical Assessment',
    date: '2025-05-12',
    progress: 40
  },
  {
    company: 'CodeMasters',
    position: 'Frontend Developer',
    status: 'Application Submitted',
    date: '2025-05-10',
    progress: 20
  },
  {
    company: 'DataTech',
    position: 'Full Stack Developer',
    status: 'Initial Screening',
    date: '2025-05-05',
    progress: 30
  }
];

const CandidateDashboardContent = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming Interviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Practice Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">7</div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="text-green-500">+3</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Job Applications</CardTitle>
              <CardDescription>Track your active job applications</CardDescription>
            </div>
            <Button size="sm">
              <Search className="h-4 w-4 mr-2" />
              Find Jobs
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {jobApplications.map((job, index) => (
                <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{job.position}</h3>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      job.status.includes('Interview') ? 'bg-blue-100 text-blue-800' : 
                      job.status.includes('Assessment') ? 'bg-purple-100 text-purple-800' : 
                      job.status.includes('Screening') ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {job.status}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>Application Progress</span>
                      <span>{job.progress}%</span>
                    </div>
                    <Progress value={job.progress} className="h-2" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Applied on {job.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Interview Schedule</CardTitle>
            <CardDescription>Upcoming and recent interviews</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0">
                  <div>
                    <p className="font-medium">
                      {['Technical Interview', 'Behavioral Interview', 'Technical Practice', 'Full Interview'][i]}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {['Senior Developer at TechCorp', 'Product Manager at InnovateCo', 'Practice Session', 'Software Engineer at DevFirm'][i]}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">
                      {i === 0 ? 'Tomorrow' : i === 1 ? 'In 3 days' : i === 2 ? 'In 5 days' : '1 week ago'}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {['10:00 AM', '2:30 PM', '11:00 AM', '9:00 AM'][i]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CandidateDashboardContent;
