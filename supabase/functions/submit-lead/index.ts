import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface LeadData {
  name: string;
  brand: string;
  productType: string;
  email: string;
  budget: string;
  message: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const lead: LeadData = await req.json();

    // Validate
    if (!lead.name || !lead.email || !lead.brand || !lead.productType || !lead.budget || !lead.message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Insert lead
    const { error: insertError } = await supabase.from("leads").insert({
      name: lead.name.trim().slice(0, 200),
      brand: lead.brand.trim().slice(0, 200),
      product_type: lead.productType.trim().slice(0, 100),
      email: lead.email.trim().slice(0, 255),
      budget: lead.budget.trim().slice(0, 50),
      message: lead.message.trim().slice(0, 2000),
    });

    if (insertError) {
      console.error("Insert error:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to save lead" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send notification email via Supabase's built-in SMTP (Resend)
    // For now, we log the lead. Email sending can be configured with a provider.
    console.log("New lead received:", {
      name: lead.name,
      brand: lead.brand,
      productType: lead.productType,
      email: lead.email,
      budget: lead.budget,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing lead:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
