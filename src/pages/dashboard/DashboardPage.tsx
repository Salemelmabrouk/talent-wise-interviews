
import React from 'react';
import { useAuth } from '@/app/core/auth/state/auth.state';
import { UserRole } from '@/app/core/models/user.model';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import AdminDashboardContent from './AdminDashboardContent';
import RecruiterDashboardContent from './RecruiterDashboardContent';
import CandidateDashboardContent from './CandidateDashboardContent';

const DashboardPage = () => {
  const { user } = useAuth();

  const renderDashboard = () => {
    switch (user?.role) {
      case UserRole.ADMIN:
        return <AdminDashboardContent />;
      case UserRole.RECRUITER:
        return <RecruiterDashboardContent />;
      case UserRole.CANDIDATE:
        return <CandidateDashboardContent />;
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
