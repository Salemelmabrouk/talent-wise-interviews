
import React from 'react';
import { Switch } from '@/components/ui/switch';

interface NotificationSettingsProps {
  isCandidate: boolean;
  isRecruiter: boolean;
}

export const NotificationSettings = ({ isCandidate, isRecruiter }: NotificationSettingsProps) => {
  return (
    <div className="space-y-4">
      {isCandidate ? (
        <>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">New job matches</p>
              <p className="text-sm text-muted-foreground">Receive notifications when new jobs match your profile</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Application updates</p>
              <p className="text-sm text-muted-foreground">Get notified when your application status changes</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Interview reminders</p>
              <p className="text-sm text-muted-foreground">Receive reminders before scheduled interviews</p>
            </div>
            <Switch defaultChecked />
          </div>
        </>
      ) : isRecruiter ? (
        <>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">New applications</p>
              <p className="text-sm text-muted-foreground">Receive notifications when candidates apply to your job postings</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Interview schedules</p>
              <p className="text-sm text-muted-foreground">Get notified about upcoming interview schedules</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Job posting expiration</p>
              <p className="text-sm text-muted-foreground">Receive alerts when job postings are about to expire</p>
            </div>
            <Switch defaultChecked />
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">System alerts</p>
              <p className="text-sm text-muted-foreground">Receive important system notifications</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">User registrations</p>
              <p className="text-sm text-muted-foreground">Get notified when new users register</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Platform updates</p>
              <p className="text-sm text-muted-foreground">Receive notifications about platform changes and updates</p>
            </div>
            <Switch defaultChecked />
          </div>
        </>
      )}
    </div>
  );
};
