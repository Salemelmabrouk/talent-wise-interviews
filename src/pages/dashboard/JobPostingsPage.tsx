
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Search, Filter, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const jobPostings = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    applicants: 28,
    posted: '2025-05-01',
    status: 'Active'
  },
  {
    id: '2',
    title: 'Product Manager',
    department: 'Product',
    location: 'New York, NY',
    type: 'Full-time',
    applicants: 15,
    posted: '2025-05-05',
    status: 'Active'
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'San Francisco, CA',
    type: 'Contract',
    applicants: 12,
    posted: '2025-05-07',
    status: 'Active'
  },
  {
    id: '4',
    title: 'Backend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    applicants: 18,
    posted: '2025-05-10',
    status: 'Active'
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Austin, TX',
    type: 'Full-time',
    applicants: 7,
    posted: '2025-05-12',
    status: 'Paused'
  }
];

const JobPostingsPage = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Job Postings</h1>
        <p className="text-muted-foreground">
          Manage your job postings and view applicant statistics.
        </p>
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search job postings..." className="pl-8" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            New Job Posting
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Active Job Postings</CardTitle>
          <CardDescription>View and manage all your company's job listings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-8 bg-muted/50 p-3 text-sm font-medium">
              <div className="col-span-2">Position</div>
              <div>Department</div>
              <div>Location</div>
              <div>Type</div>
              <div>Applicants</div>
              <div>Status</div>
              <div className="text-right">Actions</div>
            </div>
            {jobPostings.map((job) => (
              <div key={job.id} className="grid grid-cols-8 items-center p-3 text-sm border-t">
                <div className="col-span-2 font-medium">{job.title}</div>
                <div>{job.department}</div>
                <div>{job.location}</div>
                <div>{job.type}</div>
                <div>{job.applicants}</div>
                <div>
                  <Badge variant={job.status === 'Active' ? 'default' : 'secondary'}>
                    {job.status}
                  </Badge>
                </div>
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm">
                    <ArrowRight className="h-4 w-4" />
                    <span className="sr-only">View details</span>
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

export default JobPostingsPage;
