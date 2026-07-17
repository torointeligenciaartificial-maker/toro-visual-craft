import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { SERVICES } from "../../../data/services";

export default defineTool({
  name: "get_service",
  title: "Get TORO IA service detail",
  description:
    "Returns the full detail of a single TORO IA service by its slug: benefits, what is included, steps and SEO metadata.",
  inputSchema: {
    slug: z
      .string()
      .min(1)
      .describe("Service slug, e.g. 'automatizacion-n8n' or 'consultoria-ia-pymes'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const service = SERVICES.find((s) => s.slug === slug);
    if (!service) {
      return {
        content: [
          {
            type: "text",
            text: `No service found with slug "${slug}". Call list_services to see available slugs.`,
          },
        ],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(service, null, 2) }],
      structuredContent: { service },
    };
  },
});
