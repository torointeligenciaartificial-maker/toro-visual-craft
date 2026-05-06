import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const NOTIFICATION_EMAIL = "oscarvillena@toroia.vip";

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
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const lead: LeadData = await req.json();

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

    // Send data to Make webhook for Google Sheets
    const makeWebhookUrl = Deno.env.get("MAKE_WEBHOOK_URL");
    if (makeWebhookUrl) {
      try {
        const webhookRes = await fetch(makeWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fecha: new Date().toISOString(),
            nombre: lead.name,
            marca: lead.brand,
            tipo_producto: lead.productType === "beverage" ? "Bebida" : lead.productType === "cosmetics" ? "Cosmética" : lead.productType,
            email: lead.email,
            presupuesto: lead.budget === "hasta-1200" ? "Hasta 1.200 €" : lead.budget === "1200-2500" ? "1.200 € – 2.500 €" : lead.budget === "evaluando" ? "Estoy valorando opciones" : lead.budget,
            mensaje: lead.message,
          }),
        });
        if (!webhookRes.ok) {
          console.error("Make webhook error:", await webhookRes.text());
        } else {
          console.log("Make webhook sent successfully");
        }
      } catch (e) {
        console.error("Make webhook fetch error:", e);
      }
    }

    // Send notification email via Resend
    if (resendApiKey) {
      const budgetLabels: Record<string, string> = {
        "hasta-1200": "Hasta 1.200 €",
        "1200-2500": "1.200 € – 2.500 €",
        "evaluando": "Estoy valorando opciones",
      };
      const productLabels: Record<string, string> = {
        beverage: "Bebida",
        cosmetics: "Cosmética",
      };

      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "TORO IA Leads <onboarding@resend.dev>",
          to: [NOTIFICATION_EMAIL],
          subject: `Nuevo lead: ${lead.brand} — ${productLabels[lead.productType] || lead.productType}`,
          html: `
            <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
              <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 24px;">Nuevo lead recibido</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 8px 0; color: #888;">Nombre</td><td style="padding: 8px 0;">${lead.name}</td></tr>
                <tr><td style="padding: 8px 0; color: #888;">Marca</td><td style="padding: 8px 0;">${lead.brand}</td></tr>
                <tr><td style="padding: 8px 0; color: #888;">Producto</td><td style="padding: 8px 0;">${productLabels[lead.productType] || lead.productType}</td></tr>
                <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0;"><a href="mailto:${lead.email}">${lead.email}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #888;">Presupuesto</td><td style="padding: 8px 0;">${budgetLabels[lead.budget] || lead.budget}</td></tr>
                <tr><td style="padding: 8px 0; color: #888;">Mensaje</td><td style="padding: 8px 0;">${lead.message}</td></tr>
              </table>
            </div>
          `,
        }),
      });

      if (!emailRes.ok) {
        const emailError = await emailRes.text();
        console.error("Resend error:", emailError);
      } else {
        console.log("Notification email sent successfully");
      }
    }

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
