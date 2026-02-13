
-- Create leads table for contact form submissions
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT NOT NULL,
  product_type TEXT NOT NULL,
  email TEXT NOT NULL,
  budget TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (contact form is public)
CREATE POLICY "Allow anonymous insert" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- No public SELECT - only backend/admin access
CREATE POLICY "No public read" 
ON public.leads 
FOR SELECT 
USING (false);
