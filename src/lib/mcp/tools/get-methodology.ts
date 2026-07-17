import { defineTool } from "@lovable.dev/mcp-js";

const METHODOLOGY = {
  title: "Metodología de trabajo con IA y automatización",
  subtitle:
    "Un proceso de 6 semanas diseñado para eliminar tareas manuales, integrar IA con criterio y medir ahorro real desde la primera semana.",
  weeks: [
    { phase: "Semana 1 · Diagnóstico técnico", detail: "Mapeo de procesos, horas consumidas y cuellos de botella." },
    { phase: "Semana 2 · Diseño del plan", detail: "Priorización por retorno, arquitectura de la solución y stack." },
    { phase: "Semanas 3-4 · Construcción", detail: "Implementación de flujos n8n, agentes IA e integraciones." },
    { phase: "Semana 5 · Puesta en producción", detail: "Despliegue, control de errores, monitorización." },
    { phase: "Semana 6 · Medición y traspaso", detail: "Métricas de ahorro reales, documentación y formación." },
  ],
  contact_url: "https://www.toroia.vip/#contacto",
};

export default defineTool({
  name: "get_methodology",
  title: "Get TORO IA methodology",
  description:
    "Returns TORO IA's 6-week consulting methodology for AI and automation projects.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(METHODOLOGY, null, 2) }],
    structuredContent: METHODOLOGY,
  }),
});
