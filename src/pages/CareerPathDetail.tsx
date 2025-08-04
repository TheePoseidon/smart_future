import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Loader2, ArrowLeft, Star, Clock, DollarSign, TrendingUp, Target, CheckCircle, PlayCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CareerPath {
  id: string;
  title: string;
  description: string;
  overview: string;
  requirements: string[];
  skills_required: string[];
  salary_range: string;
  job_growth: string;
  industry: string;
  difficulty_level: number;
  estimated_duration_months: number;
}
