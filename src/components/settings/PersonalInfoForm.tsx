
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserRole, CandidateUser, RecruiterUser } from '@/app/core/models/user.model';

interface PersonalInfoFormProps {
  user: any;
  isCandidate: boolean;
  isRecruiter: boolean;
}

export const PersonalInfoForm = ({ user, isCandidate, isRecruiter }: PersonalInfoFormProps) => {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" defaultValue={user?.firstName} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" defaultValue={user?.lastName} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" defaultValue={user?.email} />
      </div>
      
      {isCandidate && (
        <>
          <div className="space-y-2">
            <Label htmlFor="skills">Skills (comma separated)</Label>
            <Input id="skills" defaultValue={(user as CandidateUser)?.skills?.join(', ')} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="experience">Experience</Label>
            <Input id="experience" defaultValue={(user as CandidateUser)?.experience} />
          </div>
        </>
      )}
      
      {isRecruiter && (
        <>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" defaultValue={(user as RecruiterUser)?.company} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="position">Position</Label>
            <Input id="position" defaultValue={(user as RecruiterUser)?.position} />
          </div>
        </>
      )}
      
      <Button>Save Changes</Button>
    </form>
  );
};
