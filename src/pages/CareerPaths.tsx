import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Search, Star, Clock, DollarSign, TrendingUp, ArrowRight } from 'lucide-react';
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
