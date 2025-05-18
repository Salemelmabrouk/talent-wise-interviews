
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/app/core/auth/state/auth.state';
import { UserRole } from '@/app/core/models/user.model';
import { Calendar, ChevronRight, Home, Menu, MessageSquare, Settings, Users, Briefcase, LineChart } from 'lucide-react';
import { cn } from '@/lib/utils';

type SidebarLink = {
  name: string;
  href: string;
  icon: React.ElementType;
};

const DashboardSidebar = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [collapsed, setCollapsed] = React.useState(false);

  const adminLinks: SidebarLink[] = [
    { name: 'Overview', href: '/dashboard', icon: Home },
    { name: 'Users', href: '/dashboard/users', icon: Users },
    { name: 'Statistics', href: '/dashboard/statistics', icon: LineChart },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  const recruiterLinks: SidebarLink[] = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Candidates', href: '/dashboard/candidates', icon: Users },
    { name: 'Job Postings', href: '/dashboard/jobs', icon: Briefcase },
    { name: 'Interviews', href: '/dashboard/interviews', icon: Calendar },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  const candidateLinks: SidebarLink[] = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Job Applications', href: '/dashboard/applications', icon: Briefcase },
    { name: 'Interviews', href: '/dashboard/interviews', icon: Calendar },
    { name: 'Practice', href: '/dashboard/practice', icon: MessageSquare },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  const links = user?.role === UserRole.ADMIN
    ? adminLinks
    : user?.role === UserRole.RECRUITER
    ? recruiterLinks
    : candidateLinks;

  return (
    <aside 
      className={cn(
        "bg-sidebar h-screen flex flex-col shadow-lg transition-all duration-300 border-r border-gray-200",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-4 flex items-center justify-between border-b border-gray-200">
        {!collapsed && (
          <Link to="/dashboard" className="flex items-center space-x-2">
            <div className="bg-primary p-1 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <span className="font-bold text-lg text-gray-800">InterviewAI</span>
          </Link>
        )}
        
        {collapsed && (
          <div className="bg-primary p-1 rounded-md mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-md hover:bg-gray-200 transition-colors"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <ChevronRight className={cn("h-5 w-5 text-gray-600 transition-transform", collapsed ? "rotate-0" : "rotate-180")} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-2 space-y-1">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                location.pathname === link.href
                  ? "bg-gray-100 text-primary"
                  : "text-gray-600 hover:bg-gray-50 hover:text-primary"
              )}
            >
              <link.icon 
                className={cn(
                  "mr-3 h-5 w-5 flex-shrink-0",
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-gray-400 group-hover:text-primary"
                )} 
                aria-hidden="true" 
              />
              {!collapsed && <span>{link.name}</span>}
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className={cn(
          "flex items-center",
          collapsed ? "justify-center" : "space-x-3"
        )}>
          <div className="bg-gray-200 rounded-full p-1">
            <Users className="h-5 w-5 text-gray-600" />
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {user?.role}
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
