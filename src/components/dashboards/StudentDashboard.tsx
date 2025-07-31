import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Target, Calendar, TrendingUp } from 'lucide-react';

const StudentDashboard = () => {
  const { profile, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold">Smart Future</h1>
            <Badge variant="secondary">Student Dashboard</Badge>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Welcome, {profile?.full_name || 'Student'}
            </span>
            <Button variant="outline" onClick={signOut}>
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Progress Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Learning Journey</CardTitle>
            <CardDescription>
              Track your progress towards your career goals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm text-muted-foreground">65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Skills Assessment</span>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <Progress value={80} className="h-1" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Career Path</span>
                    <span className="text-sm text-muted-foreground">45%</span>
                  </div>
                  <Progress value={45} className="h-1" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Mentor Sessions</span>
                    <span className="text-sm text-muted-foreground">70%</span>
                  </div>
                  <Progress value={70} className="h-1" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Modules</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                of 18 total modules
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Goal</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">Software Engineer</div>
              <p className="text-xs text-muted-foreground">
                Progress: 65%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Session</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">Tomorrow</div>
              <p className="text-xs text-muted-foreground">
                2:00 PM with Sarah
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Skill Score</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">850</div>
              <p className="text-xs text-muted-foreground">
                +50 this week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Action Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Continue Learning</CardTitle>
              <CardDescription>
                Pick up where you left off in your career journey
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" onClick={() => window.location.href = '/career-paths'}>
                <BookOpen className="mr-2 h-4 w-4" />
                Explore Career Paths
              </Button>
              <Button variant="outline" className="w-full justify-start" onClick={() => window.location.href = '/career-paths'}>
                <Target className="mr-2 h-4 w-4" />
                Browse All Careers
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mentorship</CardTitle>
              <CardDescription>
                Connect with mentors and schedule sessions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Session
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="mr-2 h-4 w-4" />
                View Progress Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;