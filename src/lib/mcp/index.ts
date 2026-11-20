import { defineMcp } from "@lovable.dev/mcp-js";
import listServices from "./tools/list-services";
import getService from "./tools/get-service";
import getMethodology from "./tools/get-methodology";
import submitLead from "./tools/submit-lead";

export default defineMcp({
  name: "toro-ia-mcp",
  title: "TORO IA",
  version: "0.1.0",
  instructions:
    "Tools to explore TORO IA's digital consulting for law firms and local businesses: browse services, read how we work, and submit a contact request. All data exposed here is public; the submit_lead tool creates a lead in TORO IA's CRM.",
  tools: [listServices, getService, getMethodology, submitLead],
});
