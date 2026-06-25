-- Tighten the permissive INSERT policy on public.leads
-- Replace WITH CHECK (true) with field-level validation to prevent abuse
DROP POLICY IF EXISTS "Allow anonymous insert" ON public.leads;

CREATE POLICY "Anonymous can submit qualified leads"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(name) BETWEEN 1 AND 200
  AND char_length(brand) BETWEEN 1 AND 200
  AND char_length(product_type) BETWEEN 1 AND 200
  AND char_length(email) BETWEEN 3 AND 320
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND char_length(budget) BETWEEN 1 AND 100
  AND char_length(message) BETWEEN 1 AND 5000
);