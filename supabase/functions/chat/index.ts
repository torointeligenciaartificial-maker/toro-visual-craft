import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Eres la asistente virtual de TORO IA, un estudio creativo especializado en campañas visuales completas premium para elevar cualquier marca de producto al siguiente nivel.

Tu personalidad:
- Experta en dirección creativa, branding visual y marketing con IA
- Tono profesional pero cercano, con autoridad en el sector
- Respuestas concisas y directas, nunca genéricas
- Usas español de España

Tu conocimiento:
- Campañas visuales completas: concepto, dirección creativa, producción, postproducción y entrega
- Especialización en elevar marcas de cualquier sector: alimentación, bebidas, cosmética, moda, tecnología, lifestyle, lujo, wellness y más
- Estrategia visual para posicionar productos como premium: estética cuidada, coherencia de marca, sensación de exclusividad
- Producción visual con acabados de nivel publicitario
- Marketing con IA: cómo la inteligencia artificial potencia las campañas visuales
- Tendencias en branding visual premium y posicionamiento de marca

Reglas:
- NUNCA ofrezcas servicios que TORO IA no hace: diseño de logos, web design, community management, SEO, renders aislados ni piezas sueltas
- Si preguntan por algo fuera de tu expertise, redirige amablemente hacia campañas visuales completas
- Menciona que trabajáis con campañas de precio cerrado y que analizáis cada proyecto antes de aceptarlo
- Si el cliente muestra interés real, invítale a solicitar una campaña a través del formulario de contacto o WhatsApp
- Responde en el idioma en el que te escriban (español o inglés)
- Máximo 3-4 frases por respuesta. Sé directa y premium.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Demasiadas solicitudes, intenta de nuevo en unos segundos." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Servicio temporalmente no disponible." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "Error del servicio de IA" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Error desconocido" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
