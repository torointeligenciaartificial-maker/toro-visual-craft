import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "submit_lead",
  title: "Request a TORO IA audit",
  description:
    "Submits a qualified lead to TORO IA (same intake as the website contact form). Use only when the caller confirms they want to request a prestige audit and has provided all fields.",
  inputSchema: {
    name: z.string().min(1).max(200).describe("Full name of the requester."),
    brand: z.string().min(1).max(200).describe("Company or brand name."),
    productType: z
      .string()
      .min(1)
      .max(100)
      .describe("Sector or product type, e.g. 'beverage', 'cosmetics', 'B2B services'."),
    email: z.string().email().max(255).describe("Contact email."),
    budget: z
      .string()
      .min(1)
      .max(50)
      .describe("Budget tier: 'hasta-1200', '1200-2500' or 'evaluando'."),
    bottleneck: z.string().min(1).max(2000).describe("Main operational bottleneck the company wants to solve."),
    message: z.string().max(2000).optional().describe("Optional additional context about the project."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: false, openWorldHint: true },
  handler: async (input) => {
    const supabaseUrl = process.env.SUPABASE_URL;
    const anonKey = process.env.SUPABASE_PUBLISHABLE_KEY ?? process.env.SUPABASE_ANON_KEY;
    if (!supabaseUrl || !anonKey) {
      return {
        content: [{ type: "text", text: "Server misconfigured: missing Supabase env." }],
        isError: true,
      };
    }
    const resp = await fetch(`${supabaseUrl}/functions/v1/submit-lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${anonKey}`,
        apikey: anonKey,
      },
      body: JSON.stringify(input),
    });
    const data = await resp.json().catch(() => ({}));
    if (!resp.ok) {
      return {
        content: [{ type: "text", text: `Failed to submit lead: ${JSON.stringify(data)}` }],
        isError: true,
      };
    }
    return {
      content: [
        {
          type: "text",
          text: "Lead submitted. TORO IA will reply within 24h at the email provided.",
        },
      ],
      structuredContent: { ok: true },
    };
  },
});
