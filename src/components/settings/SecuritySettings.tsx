
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export const SecuritySettings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Change Password</h3>
        <div className="mt-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New password</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm new password</Label>
            <Input id="confirm-password" type="password" />
          </div>
          <Button>Update Password</Button>
        </div>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Add an extra layer of security to your account
        </p>
        <div className="mt-4">
          <Button variant="outline">Enable Two-Factor Authentication</Button>
        </div>
      </div>
    </div>
  );
};
