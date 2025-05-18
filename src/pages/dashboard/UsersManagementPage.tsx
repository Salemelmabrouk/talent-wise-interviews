
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Filter, ArrowRight, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { UserRole } from '@/app/core/models/user.model';

const users = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@interviewai.com',
    role: UserRole.ADMIN,
    status: 'Active',
    lastLogin: '2025-05-17 14:32'
  },
  {
    id: '2',
    name: 'Recruiter Smith',
    email: 'recruiter@interviewai.com',
    role: UserRole.RECRUITER,
    status: 'Active',
    lastLogin: '2025-05-16 09:45'
  },
  {
    id: '3',
    name: 'Candidate Johnson',
    email: 'candidate@interviewai.com',
    role: UserRole.CANDIDATE,
    status: 'Active',
    lastLogin: '2025-05-15 16:20'
  },
  {
    id: '4',
    name: 'Sarah Williams',
    email: 'sarah@company.com',
    role: UserRole.RECRUITER,
    status: 'Inactive',
    lastLogin: '2025-05-10 11:15'
  },
  {
    id: '5',
    name: 'Mike Roberts',
    email: 'mike@gmail.com',
    role: UserRole.CANDIDATE,
    status: 'Active',
    lastLogin: '2025-05-17 08:30'
  },
  {
    id: '6',
    name: 'Lisa Chen',
    email: 'lisa@tech.co',
    role: UserRole.CANDIDATE,
    status: 'Active',
    lastLogin: '2025-05-16 17:45'
  },
  {
    id: '7',
    name: 'David Kim',
    email: 'david@recruiting.net',
    role: UserRole.RECRUITER,
    status: 'Active',
    lastLogin: '2025-05-14 13:20'
  }
];

const UsersManagementPage = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Users Management</h1>
        <p className="text-muted-foreground">
          Manage users, roles, and permissions across the platform.
        </p>
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search users..." className="pl-8" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>User Accounts</CardTitle>
          <CardDescription>A list of all users registered in the system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-6 bg-muted/50 p-3 text-sm font-medium">
              <div className="col-span-2">User</div>
              <div>Role</div>
              <div>Status</div>
              <div>Last Login</div>
              <div className="text-right">Actions</div>
            </div>
            {users.map((user) => (
              <div key={user.id} className="grid grid-cols-6 items-center p-3 text-sm border-t">
                <div className="col-span-2">
                  <div className="font-medium">{user.name}</div>
                  <div className="text-xs text-muted-foreground">{user.email}</div>
                </div>
                <div>
                  <Badge variant="outline" className="capitalize">
                    {user.role}
                  </Badge>
                </div>
                <div>
                  <Badge variant={user.status === 'Active' ? 'success' : 'secondary'}>
                    {user.status}
                  </Badge>
                </div>
                <div>{user.lastLogin}</div>
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

export default UsersManagementPage;
