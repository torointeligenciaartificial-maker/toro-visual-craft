import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { SERVICES } from "../../../data/services";

export default defineTool({
  name: "list_services",
  title: "List TORO IA services",
  description:
    "Returns the catalog of TORO IA's consulting services (slug, title and subtitle). Use to discover which services exist before fetching details.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = SERVICES.map((s) => ({
      slug: s.slug,
      title: s.h1,
      subtitle: s.subtitle,
      url: `https://www.toroia.vip/servicios/${s.slug}`,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { services: items },
    };
  },
});

// Re-export for convenience
export { z };
