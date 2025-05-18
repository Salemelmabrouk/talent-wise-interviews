
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { useAuth } from '@/app/core/auth/state/auth.state';
import { UserRole } from '@/app/core/models/user.model';
import { SettingsCard } from '@/components/settings/SettingsCard';
import { PersonalInfoForm } from '@/components/settings/PersonalInfoForm';
import { NotificationSettings } from '@/components/settings/NotificationSettings';
import { SecuritySettings } from '@/components/settings/SecuritySettings';

const SettingsPage = () => {
  const { user } = useAuth();

  // Type guards to check user roles
  const isCandidate = user?.role === UserRole.CANDIDATE;
  const isRecruiter = user?.role === UserRole.RECRUITER;

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>
      
      <div className="grid gap-6">
        <SettingsCard 
          title="Personal Information"
          description="Update your personal details"
        >
          <PersonalInfoForm 
            user={user} 
            isCandidate={isCandidate}
            isRecruiter={isRecruiter}
          />
        </SettingsCard>
        
        <SettingsCard 
          title="Notifications"
          description="Configure how you receive notifications"
        >
          <NotificationSettings 
            isCandidate={isCandidate}
            isRecruiter={isRecruiter}
          />
        </SettingsCard>
        
        <SettingsCard 
          title="Security"
          description="Manage your account security settings"
        >
          <SecuritySettings />
        </SettingsCard>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
