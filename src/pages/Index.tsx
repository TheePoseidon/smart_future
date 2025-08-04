import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Target, ArrowRight } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  // Redirect authenticated users to dashboard
  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold">Smart Future</h1>
          <Badge variant="outline">Career Guidance Platform</Badge>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate('/auth')}>
            Sign In
          </Button>
          <Button onClick={() => navigate('/auth')}>
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Shape Your Future Career
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get personalized career guidance, connect with expert mentors, and track your progress 
          towards achieving your professional goals.
        </p>
        <Button size="lg" className="gap-2" onClick={() => navigate('/auth')}>
          Start Your Journey
          <ArrowRight className="h-4 w-4" />
        </Button>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">
          Everything You Need for Career Success
        </h3>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Personalized Career Paths</CardTitle>
              <CardDescription>
                Discover career opportunities tailored to your skills, interests, and goals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full justify-start"
                onClick={() => navigate('/career-paths')}
              >
                <Target className="mr-2 h-4 w-4" />
                Explore Career Paths
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Expert Mentorship</CardTitle>
              <CardDescription>
                Connect with industry professionals who can guide your career journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>1-on-1 mentoring sessions</li>
                <li>Industry expert guidance</li>
                <li>Real-world career advice</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Progress Tracking</CardTitle>
              <CardDescription>
                Monitor your growth and celebrate milestones on your career path
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Goal setting and tracking</li>
                <li>Skill development metrics</li>
                <li>Achievement recognition</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Transform Your Career?</CardTitle>
            <CardDescription>
              Join thousands of professionals who have found their path to success
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" className="gap-2" onClick={() => navigate('/auth')}>
              Get Started Today
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
