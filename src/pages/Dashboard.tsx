import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AdminDashboard from '@/components/dashboards/AdminDashboard';
import MentorDashboard from '@/components/dashboards/MentorDashboard';
import StudentDashboard from '@/components/dashboards/StudentDashboard';
import { Loader2 } from 'lucide-react';

const Dashboard = () => {
  const { user, userRole, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <div>Please log in to access your dashboard.</div>;
  }

  // Render appropriate dashboard based on user role
  switch (userRole) {
    case 'admin':
      return <AdminDashboard />;
    case 'mentor':
      return <MentorDashboard />;
    case 'student':
      return <StudentDashboard />;
    default:
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">No Role Assigned</h2>
            <p className="text-muted-foreground">
              Please contact an administrator to assign your role.
            </p>
          </div>
        </div>
      );
  }
};

export default Dashboard;