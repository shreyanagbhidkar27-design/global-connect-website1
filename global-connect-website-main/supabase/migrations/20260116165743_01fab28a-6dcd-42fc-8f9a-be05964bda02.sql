-- Create enum for submission types
CREATE TYPE public.submission_type AS ENUM ('volunteer', 'program', 'partner', 'spread');

-- Create submissions table to store user interest forms
CREATE TABLE public.submissions (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    submission_type submission_type NOT NULL,
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public form)
CREATE POLICY "Anyone can submit forms" 
ON public.submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent reading (only admin access)
CREATE POLICY "No public read access" 
ON public.submissions 
FOR SELECT 
USING (false);