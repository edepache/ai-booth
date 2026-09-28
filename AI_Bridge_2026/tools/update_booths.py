#!/usr/bin/env python3
"""
Update all 3 blueprint content files with the real event booths catalog.
Replaces the `booths: { ... }` block + rewrites each use case's `booths: [...]` IDs.
Then re-splices the updated data into the corresponding kiosk index.html.
"""
import re, pathlib, sys

ROOT = pathlib.Path("/Users/danieben/Documents/Cisco Connect/Cisco Connect 2026/AI Boot/AI_Bridge_2026")

# --------------------------------------------------------------------------
# MASTER CATALOG — 35 demos across 8 Cisco Campus Areas (from Demos_Connect)
# Same catalog is embedded in each of the 3 shared/*_content.js files so any
# use case in any blueprint can reference any demo.
# --------------------------------------------------------------------------
BOOTHS_JS = r"""  booths: {
    // ------- Networking (Juan Cervantes) -------
    nw_unified: {
      campus: "Networking",
      name: { es: "Networking · Unified Secure Networking", en: "Networking · Unified Secure Networking" },
      focus: { es: "Red segura unificada: identidad, política y visibilidad como una sola capa.",
               en: "Unified secure networking: identity, policy and visibility as one layer." },
      products: [],
    },
    nw_smart_access: {
      campus: "Networking",
      name: { es: "Networking · Smart Access", en: "Networking · Smart Access" },
      focus: { es: "Acceso basado en identidad (802.1X, TrustSec) en campus y sucursal.",
               en: "Identity-based access (802.1X, TrustSec) across campus and branch." },
      products: [],
    },
    nw_secure_wan: {
      campus: "Networking",
      name: { es: "Networking · Secure WAN", en: "Networking · Secure WAN" },
      focus: { es: "SD-WAN + SASE con Zero Trust integrado desde el borde.",
               en: "SD-WAN + SASE with Zero Trust integrated from the edge." },
      products: [],
    },
    nw_smart_retail: {
      campus: "Networking",
      name: { es: "Networking · Smart Retail", en: "Networking · Smart Retail" },
      focus: { es: "Conectividad y visibilidad para el piso de venta y el POS.",
               en: "Connectivity and visibility for the sales floor and POS." },
      products: [],
    },
    nw_smart_spaces: {
      campus: "Networking",
      name: { es: "Networking · Smart Spaces", en: "Networking · Smart Spaces" },
      focus: { es: "Ocupación, calidad del aire y experiencia con Wi-Fi como sensor.",
               en: "Occupancy, air quality and experience with Wi-Fi as a sensor." },
      products: [],
    },

    // ------- Security (Flavio Correa) -------
    sec_zta: {
      campus: "Security",
      name: { es: "Security · Zero Trust Access", en: "Security · Zero Trust Access" },
      focus: { es: "ZTNA con acceso basado en identidad para usuarios, dispositivos y agentes.",
               en: "ZTNA with identity-based access for users, devices and agents." },
      products: [],
    },
    sec_hmf: {
      campus: "Security",
      name: { es: "Security · Hybrid Mesh Firewall", en: "Security · Hybrid Mesh Firewall" },
      focus: { es: "Perímetro consistente en Data Center, nube y sucursal.",
               en: "Consistent perimeter across Data Center, cloud and branch." },
      products: [],
    },
    sec_ifs: {
      campus: "Security",
      name: { es: "Security · Identity First Security", en: "Security · Identity First Security" },
      focus: { es: "Duo, ISE e Identity Intelligence — identidad como primer control.",
               en: "Duo, ISE and Identity Intelligence — identity as the first control." },
      products: [],
    },
    sec_scc: {
      campus: "Security",
      name: { es: "Security · Security Cloud Control", en: "Security · Security Cloud Control" },
      focus: { es: "Plano único de gestión y política para todo el portafolio de seguridad.",
               en: "Single management and policy plane for the whole security portfolio." },
      products: [],
    },
    sec_ai: {
      campus: "Security",
      name: { es: "Security · AI Security", en: "Security · AI Security" },
      focus: { es: "Cisco AI Defense — guardrails, Shadow AI y validación de modelos.",
               en: "Cisco AI Defense — guardrails, Shadow AI and model validation." },
      products: [],
    },
    sec_aiwork: {
      campus: "Security",
      name: { es: "Security · Security & Observability for AI Workloads", en: "Security · Security & Observability for AI Workloads" },
      focus: { es: "Seguridad y observabilidad para cargas de IA de punta a punta.",
               en: "End-to-end security and observability for AI workloads." },
      products: [],
    },

    // ------- CAI · Cloud & AI Infrastructure (Carlos Rubio) -------
    cai_edge_holo: {
      campus: "CAI",
      name: { es: "CAI · Unified Edge - Holograma", en: "CAI · Unified Edge - Holograma" },
      focus: { es: "Unified Edge en vivo — edge computing convergente demostrado con holograma.",
               en: "Unified Edge live — converged edge computing demonstrated with a hologram." },
      products: [],
    },
    cai_edge: {
      campus: "CAI",
      name: { es: "CAI · Unify edge", en: "CAI · Unify edge" },
      focus: { es: "Cómputo, red y datos como una sola plataforma en el borde.",
               en: "Compute, network and data as a single platform at the edge." },
      products: [],
    },
    cai_ndb: {
      campus: "CAI",
      name: { es: "CAI · Data Center Networking with Nexus Dashboard", en: "CAI · Data Center Networking with Nexus Dashboard" },
      focus: { es: "Telemetría y assurance del Data Center (ACI / NX-OS).",
               en: "Data Center telemetry and assurance (ACI / NX-OS)." },
      products: [],
    },
    cai_hyperfabric: {
      campus: "CAI",
      name: { es: "CAI · Scaling multi-agent systems / Hyperfabric / Secure IA Factory", en: "CAI · Scaling multi-agent systems / Hyperfabric / Secure IA Factory" },
      focus: { es: "Cisco Secure AI Factory (con NVIDIA) para sistemas multi-agente a escala.",
               en: "Cisco Secure AI Factory (with NVIDIA) for multi-agent systems at scale." },
      products: [],
    },
    cai_stack: {
      campus: "CAI",
      name: { es: "CAI · Stack Automation", en: "CAI · Stack Automation" },
      focus: { es: "Infraestructura como código con Intersight y automatización full-stack.",
               en: "Infrastructure as code with Intersight and full-stack automation." },
      products: [],
    },
    cai_smartsw: {
      campus: "CAI",
      name: { es: "CAI · Smart switch", en: "CAI · Smart switch" },
      focus: { es: "Cisco Smart Switch (N9300): enforcement y observabilidad en el silicio.",
               en: "Cisco Smart Switch (N9300): silicon-embedded enforcement and observability." },
      products: [],
    },
    cai_compute: {
      campus: "CAI",
      name: { es: "CAI · Compute / Intersight /unify edge / hiperconvergencia /AI", en: "CAI · Compute / Intersight /unify edge / hiperconvergencia /AI" },
      focus: { es: "Cómputo GPU-ready, hiperconvergencia y operación como código.",
               en: "GPU-ready compute, hyperconvergence and management as code." },
      products: [],
    },

    // ------- Collaboration (Arturo Prieto & Vero Diaz) -------
    col_exec: {
      campus: "Collaboration",
      name: { es: "Collaboration · Executive Room (Mezzanine)", en: "Collaboration · Executive Room (Mezzanine)" },
      focus: { es: "Sala ejecutiva Webex: reuniones inmersivas de alto nivel.",
               en: "Webex executive room: high-end immersive meetings." },
      products: [],
    },
    col_connect: {
      campus: "Collaboration",
      name: { es: "Collaboration · Connect Room", en: "Collaboration · Connect Room" },
      focus: { es: "Colaboración híbrida con Webex Rooms.",
               en: "Hybrid collaboration with Webex Rooms." },
      products: [],
    },
    col_interop: {
      campus: "Collaboration",
      name: { es: "Collaboration · Interoperability", en: "Collaboration · Interoperability" },
      focus: { es: "Interoperabilidad Webex con MS Teams, Zoom y salas de terceros.",
               en: "Webex interop with MS Teams, Zoom and third-party rooms." },
      products: [],
    },
    col_contact: {
      campus: "Collaboration",
      name: { es: "Collaboration · Webex Contact Center", en: "Collaboration · Webex Contact Center" },
      focus: { es: "Contact center en la nube con IA integrada.",
               en: "Cloud contact center with integrated AI." },
      products: [],
    },
    col_calling: {
      campus: "Collaboration",
      name: { es: "Collaboration · Webex Calling & Webex Suite", en: "Collaboration · Webex Calling & Webex Suite" },
      focus: { es: "Telefonía y colaboración en la nube.",
               en: "Cloud telephony and collaboration." },
      products: [],
    },
    col_workspaces: {
      campus: "Collaboration",
      name: { es: "Collaboration · Smart Workspaces", en: "Collaboration · Smart Workspaces" },
      focus: { es: "Espacios de trabajo inteligentes con Webex y Meraki.",
               en: "Intelligent workspaces with Webex and Meraki." },
      products: [],
    },

    // ------- ThousandEyes (Carlos Venegas) -------
    te_agentic: {
      campus: "ThousandEyes",
      name: { es: "ThousandEyes · ThousandEyes Agentic Operations", en: "ThousandEyes · ThousandEyes Agentic Operations" },
      focus: { es: "Agentes de IA para observabilidad de red autónoma.",
               en: "AI agents for autonomous network observability." },
      products: [],
    },
    te_insights: {
      campus: "ThousandEyes",
      name: { es: "ThousandEyes · Traffic Insights, Cloud Insights", en: "ThousandEyes · Traffic Insights, Cloud Insights" },
      focus: { es: "Visibilidad de flujos y de nube pública de punta a punta.",
               en: "End-to-end flow and public-cloud visibility." },
      products: [],
    },
    te_assurance: {
      campus: "ThousandEyes",
      name: { es: "ThousandEyes · Cisco Architectures + Network Assurance", en: "ThousandEyes · Cisco Architectures + Network Assurance" },
      focus: { es: "Assurance de red integral sobre las arquitecturas Cisco.",
               en: "End-to-end network assurance over Cisco architectures." },
      products: [],
    },

    // ------- Observability (Cleber) -------
    obs_agent: {
      campus: "Observability",
      name: { es: "Observability · Agent Observability", en: "Observability · Agent Observability" },
      focus: { es: "Monitoreo del comportamiento y desempeño de agentes de IA.",
               en: "Monitoring behavior and performance of AI agents." },
      products: [],
    },
    obs_itsi: {
      campus: "Observability",
      name: { es: "Observability · Splunk ITSI", en: "Observability · Splunk ITSI" },
      focus: { es: "Splunk IT Service Intelligence: AIOps y salud de servicios.",
               en: "Splunk IT Service Intelligence: AIOps and service health." },
      products: [],
    },
    obs_cloud: {
      campus: "Observability",
      name: { es: "Observability · Splunk Observability Cloud", en: "Observability · Splunk Observability Cloud" },
      focus: { es: "APM, trazas distribuidas y métricas de Kubernetes OTel-native.",
               en: "APM, distributed traces and Kubernetes metrics, OTel-native." },
      products: [],
    },
    obs_datafabric: {
      campus: "Observability",
      name: { es: "Observability · Cisco Data Fabric", en: "Observability · Cisco Data Fabric" },
      focus: { es: "Capa unificada de datos para observabilidad full-stack.",
               en: "Unified data layer for full-stack observability." },
      products: [],
    },

    // ------- Service Providers (Christian Calixto) -------
    sp_agile: {
      campus: "Service Providers",
      name: { es: "Service Providers · End to End Agile Services Networking", en: "Service Providers · End to End Agile Services Networking" },
      focus: { es: "Agile Services Networking de punta a punta para operadores.",
               en: "End-to-end Agile Services Networking for operators." },
      products: [],
    },
    sp_siliconone: {
      campus: "Service Providers",
      name: { es: "Service Providers · Sillicon One Platforms and RON transceivers", en: "Service Providers · Sillicon One Platforms and RON transceivers" },
      focus: { es: "Silicon One y transceivers RON: escala para IA y backbone.",
               en: "Silicon One and RON transceivers: AI and backbone scale." },
      products: [],
    },
    sp_ai_conn: {
      campus: "Service Providers",
      name: { es: "Service Providers · Scale Connectivity for AI: Cisco Routed Networking and SRv6", en: "Service Providers · Scale Connectivity for AI: Cisco Routed Networking and SRv6" },
      focus: { es: "Cisco Routed Networking y SRv6 para conectividad de IA a escala.",
               en: "Cisco Routed Networking and SRv6 for AI connectivity at scale." },
      products: [],
    },
    sp_agentic: {
      campus: "Service Providers",
      name: { es: "Service Providers · Service Providers Agentic Operations", en: "Service Providers · Service Providers Agentic Operations" },
      focus: { es: "Operación autónoma con agentes de IA para el operador.",
               en: "Autonomous operations with AI agents for operators." },
      products: [],
    },
    sp_security: {
      campus: "Service Providers",
      name: { es: "Service Providers · Cisco Service Provider Security", en: "Service Providers · Cisco Service Provider Security" },
      focus: { es: "Protección de la infraestructura del operador.",
               en: "Operator infrastructure protection." },
      products: [],
    },

    // ------- Industrial IOT (Fayce) -------
    iot_cybervision: {
      campus: "Industrial IOT",
      name: { es: "Industrial IOT · Cisco Cyber Vision - Industrial Segmentation & Remote Access", en: "Industrial IOT · Cisco Cyber Vision - Industrial Segmentation & Remote Access" },
      focus: { es: "Cisco Cyber Vision: segmentación industrial y acceso remoto seguro.",
               en: "Cisco Cyber Vision: industrial segmentation and secure remote access." },
      products: [],
    },
    iot_ie: {
      campus: "Industrial IOT",
      name: { es: "Industrial IOT · Cisco Industrial Switches on Meraki Dashboard", en: "Industrial IOT · Cisco Industrial Switches on Meraki Dashboard" },
      focus: { es: "Switches industriales Cisco gestionados desde Meraki Dashboard.",
               en: "Cisco industrial switches managed from Meraki Dashboard." },
      products: [],
    },
    iot_utilities: {
      campus: "Industrial IOT",
      name: { es: "Industrial IOT · Win utilities: Scale and manage grid networks", en: "Industrial IOT · Win utilities: Scale and manage grid networks" },
      focus: { es: "Escala y gestión de redes de servicios públicos (utilities).",
               en: "Scale and manage utility grid networks." },
      products: [],
    },
  },
"""

# --------------------------------------------------------------------------
# OLD → NEW booth ID mappings per blueprint
# --------------------------------------------------------------------------
MAP_SECURITY = {
    "secureaccess": "sec_zta",
    "hypershield":  "nw_unified",
    "aidefense":    "sec_ai",
    "soc":          "sec_aiwork",
    "perimeter":    "sec_hmf",
    "ot":           "iot_cybervision",
    "talos":        "sec_scc",
}
MAP_OBSERVABILITY = {
    "itsi":         "obs_itsi",
    "o11y":         "obs_cloud",
    "thousandeyes": "te_insights",
    "netassure":    "te_assurance",
    "soc":          "sec_aiwork",
    "bizops":       "obs_datafabric",
    "aiassist":     "obs_agent",
}
MAP_INFRASTRUCTURE = {
    "switching": "cai_smartsw",
    "wireless":  "nw_smart_access",
    "wan":       "nw_secure_wan",
    "dc":        "cai_compute",
    "platform":  "cai_stack",
    "ot":        "iot_ie",
    "o11y":      "te_assurance",
}

def replace_booths_block(js: str) -> str:
    """Replace the top-level `booths: { ... }` block with the master catalog."""
    m = re.search(r"^  booths:\s*\{", js, re.MULTILINE)
    if not m:
        raise RuntimeError("booths block not found")
    start = m.start()
    # find matching close brace at depth 0
    i = js.index("{", m.start())
    depth = 0
    for j in range(i, len(js)):
        c = js[j]
        if c == "{": depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                # include following comma if present
                k = j + 1
                while k < len(js) and js[k] in " \n\r\t":
                    k += 1
                if k < len(js) and js[k] == ",":
                    k += 1
                # BOOTHS_JS already ends with `},` so no extra comma needed
                return js[:start] + BOOTHS_JS.rstrip() + "\n" + js[k:]
    raise RuntimeError("unbalanced booths block")

def rewrite_use_case_booths(js: str, mapping: dict) -> tuple[str, int]:
    """Rewrite booth IDs inside each `booths: [...]` array using the mapping.
    Safe: only touches strings inside `booths: [...]` arrays."""
    count = 0
    def sub(m):
        nonlocal count
        inside = m.group(1)
        def quote_sub(qm):
            nonlocal count
            key = qm.group(1)
            new = mapping.get(key, key)
            if new != key: count += 1
            return f'"{new}"'
        new_inside = re.sub(r'"([^"]+)"', quote_sub, inside)
        return f"booths: [{new_inside}]"
    js = re.sub(r"booths:\s*\[([^\]]*)\]", sub, js)
    return js, count

def process_file(rel: str, mapping: dict):
    path = ROOT / rel
    src = path.read_text()
    src = replace_booths_block(src)
    src, changed = rewrite_use_case_booths(src, mapping)
    path.write_text(src)
    print(f"  {rel}: booths block replaced, {changed} use-case booth IDs rewritten")

def extract_data_block(text: str) -> tuple[int, int, str]:
    s = text.index("const BOOTH_DATA = {")
    i = text.index("{", s); depth = 0
    for j in range(i, len(text)):
        c = text[j]
        if c == "{": depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                k = j + 1
                while k < len(text) and text[k] in " \n\r\t": k += 1
                if k < len(text) and text[k] == ";": k += 1
                return s, k, text[s:k]
    raise RuntimeError("unbalanced")

def splice_into_html(kiosk: str, shared_js: str):
    """Copy the BOOTH_DATA object from shared_js into the kiosk HTML in place."""
    kp = ROOT / kiosk
    sp = ROOT / shared_js
    khtml = kp.read_text()
    sjs = sp.read_text()
    s0, s1, data = extract_data_block(sjs)
    h0, h1, _ = extract_data_block(khtml)
    new = khtml[:h0] + data + khtml[h1:]
    kp.write_text(new)
    print(f"  {kiosk}: BOOTH_DATA refreshed from {shared_js} ({len(data):,} chars)")

# --------------------------------------------------------------------------
# EXECUTE
# --------------------------------------------------------------------------
print("Updating shared/*_content.js files with real event booths catalog...")
process_file("shared/security_content.js",       MAP_SECURITY)
process_file("shared/observability_content.js",  MAP_OBSERVABILITY)
process_file("shared/infrastructure_content.js", MAP_INFRASTRUCTURE)

print("\nRe-splicing new data into kiosk HTML files...")
splice_into_html("security/index.html",       "shared/security_content.js")
splice_into_html("observability/index.html",  "shared/observability_content.js")
splice_into_html("infrastructure/index.html", "shared/infrastructure_content.js")

print("\nDone.")
