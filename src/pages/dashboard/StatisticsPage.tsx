
import React from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

// Sample data for statistics
const userRegistrations = [
  { name: 'Jan', candidates: 65, recruiters: 28 },
  { name: 'Feb', candidates: 78, recruiters: 30 },
  { name: 'Mar', candidates: 98, recruiters: 38 },
  { name: 'Apr', candidates: 105, recruiters: 40 },
  { name: 'May', candidates: 120, recruiters: 45 },
  { name: 'Jun', candidates: 142, recruiters: 50 },
];

const interviewData = [
  { name: 'Technical', count: 120 },
  { name: 'Behavioral', count: 85 },
  { name: 'System Design', count: 45 },
  { name: 'Culture Fit', count: 75 },
];

const jobPostingsData = [
  { name: 'Engineering', count: 45 },
  { name: 'Design', count: 20 },
  { name: 'Product', count: 15 },
  { name: 'Marketing', count: 10 },
  { name: 'Sales', count: 12 },
  { name: 'HR', count: 8 },
];

const hiringPipelineData = [
  { name: 'Applied', value: 250 },
  { name: 'Screening', value: 180 },
  { name: 'Interview', value: 120 },
  { name: 'Offer', value: 40 },
  { name: 'Hired', value: 30 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const StatisticsPage = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Statistics</h1>
        <p className="text-muted-foreground">
          Platform analytics and statistics dashboard.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>User Registrations</CardTitle>
            <CardDescription>Monthly user registration trends</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={userRegistrations} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="candidates" stroke="#8884d8" activeDot={{ r: 8 }} name="Candidates" />
                <Line type="monotone" dataKey="recruiters" stroke="#82ca9d" name="Recruiters" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Interview Types</CardTitle>
            <CardDescription>Distribution of interview types</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={interviewData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" name="Interviews" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Job Postings by Department</CardTitle>
            <CardDescription>Distribution of job postings</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={jobPostingsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#8884d8" name="Job Postings" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Hiring Pipeline</CardTitle>
            <CardDescription>Candidates at each stage of the hiring process</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={hiringPipelineData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {hiringPipelineData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default StatisticsPage;
