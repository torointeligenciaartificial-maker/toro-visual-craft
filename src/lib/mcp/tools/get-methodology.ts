import { defineTool } from "@lovable.dev/mcp-js";

const METHODOLOGY = {
  title: "Cómo trabajamos",
  subtitle:
    "Un proceso sencillo y sin tecnicismos: hablamos, lo montamos, lo pruebas tú primero y lo ponemos en marcha.",
  weeks: [
    { phase: "1 · Charla de 20 minutos", detail: "Me cuentas cómo funciona tu negocio o despacho, sin compromiso." },
    { phase: "2 · Propuesta clara", detail: "Te digo qué necesitas y cuánto cuesta, con IVA y sin permanencia." },
    { phase: "3 · Lo montamos", detail: "Preparamos la web o el asistente de WhatsApp con tus propias palabras." },
    { phase: "4 · Lo pruebas tú", detail: "Lo revisas antes de que lo vea ningún cliente." },
    { phase: "5 · Puesta en marcha y mantenimiento", detail: "Lo activamos y, si quieres, lo mejoramos cada mes." },
  ],
  contact_url: "https://toroia.vip/#contacto",
};

export default defineTool({
  name: "get_methodology",
  title: "Get TORO IA methodology",
  description:
    "Returns TORO IA's way of working: from the free 20-minute chat to launch and monthly maintenance.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(METHODOLOGY, null, 2) }],
    structuredContent: METHODOLOGY,
  }),
});
