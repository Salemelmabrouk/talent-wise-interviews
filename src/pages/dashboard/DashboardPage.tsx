
import React from 'react';
import { useAuth } from '@/app/core/auth/state/auth.state';
import { UserRole } from '@/app/core/models/user.model';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

// Admin Dashboard Components
const AdminDashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">128</div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="text-green-500">+12%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Interviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">54</div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="text-green-500">+8%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Subscription Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$12,450</div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="text-green-500">+23%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
            <CardDescription>Users who joined recently</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-sm font-medium">{String.fromCharCode(65 + i)}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">User {i + 1}</p>
                      <p className="text-xs text-muted-foreground">user{i + 1}@example.com</p>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">{i === 0 ? 'Today' : `${i} days ago`}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Subscription Overview</CardTitle>
            <CardDescription>Active subscriptions by plan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {['Free', 'Basic', 'Premium', 'Enterprise'].map((plan, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="font-medium">{plan}</div>
                  <div className="flex items-center space-x-4">
                    <div className="w-40 bg-gray-100 rounded-full h-2.5">
                      <div 
                        className="bg-primary h-2.5 rounded-full" 
                        style={{ width: `${[70, 45, 25, 10][i]}%` }}
                      ></div>
                    </div>
                    <div className="text-sm font-medium">{[70, 45, 25, 10][i]}</div>
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

// Recruiter Dashboard Components
const RecruiterDashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Job Postings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8</div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="text-green-500">+2</span> from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Interviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="text-orange-500">-3</span> from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">New Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">24</div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="text-green-500">+8</span> from last week
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Candidates</CardTitle>
            <CardDescription>Latest candidates who applied for your jobs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-sm font-medium">{String.fromCharCode(65 + i)}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Candidate {i + 1}</p>
                      <p className="text-xs text-muted-foreground">Applied for: Senior Developer</p>
                    </div>
                  </div>
                  <div>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      i % 3 === 0 ? 'bg-green-100 text-green-800' : 
                      i % 3 === 1 ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {i % 3 === 0 ? 'Interview Completed' : 
                       i % 3 === 1 ? 'Interview Scheduled' : 
                       'Application Received'}
                    </span>
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

// Candidate Dashboard Components
const CandidateDashboard = () => {
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

const DashboardPage = () => {
  const { user } = useAuth();

  const renderDashboard = () => {
    switch (user?.role) {
      case UserRole.ADMIN:
        return <AdminDashboard />;
      case UserRole.RECRUITER:
        return <RecruiterDashboard />;
      case UserRole.CANDIDATE:
        return <CandidateDashboard />;
      default:
        return <div>Unknown user role</div>;
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {user?.firstName}! Here's an overview of your activity.
        </p>
      </div>
      {renderDashboard()}
    </DashboardLayout>
  );
};

export default DashboardPage;
