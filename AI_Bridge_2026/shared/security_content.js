/* =====================================================================
   Cisco AI Bridge @ Cisco Connect Cancún 2026
   Stage 3 · Storytelling — SECURITY BLUEPRINT (Dani)
   Bilingual content engine (ES / EN). Product & technical terms stay in English.

   Data model consumed by the interactive kiosk (kiosk/index.html).
   Flow (Slide 5 rules):
     Experienced user   -> pick industry -> pick THEIR use case -> results
     Non-Experienced    -> pick industry -> see IDENTIFIED use cases -> pick -> results
   Results = Security challenge + Security pillars + Cisco products + Booth to visit
   ===================================================================== */

const BOOTH_DATA = {
  meta: {
    event: "Cisco AI Bridge · Cisco Connect Cancún 2026",
    stage: "Stage 3 — Storytelling",
    blueprint: { es: "Blueprint de Seguridad", en: "Security Blueprint" },
    version: "1.0",
  },

  /* -------------------------------------------------------------------
     10 SECURITY PILLARS (Dani's blueprint taxonomy from Slide 5)
     Names in ES/EN; the pillar keyword stays recognizable in English.
     ------------------------------------------------------------------- */
  pillars: {
    identity: {
      key: "Identity",
      name: { es: "Identidad", en: "Identity" },
      short: {
        es: "Dar identidad a usuarios, dispositivos y agentes de IA — con un dueño humano responsable.",
        en: "Give identity to users, devices and AI agents — each with an accountable human owner.",
      },
      color: "#3070E7", icon: "id",
      products: [
        { name: "Duo", why: {
          es: "Asigna identidad y MFA a usuarios, dispositivos y agentes de IA — con un dueño humano responsable de su comportamiento.",
          en: "Assigns identity and MFA to users, devices and AI agents — each with an accountable human owner." } },
        { name: "Cisco Identity Intelligence", why: {
          es: "Correlaciona el riesgo de identidad entre Okta, Entra, AD, Duo e ISE, incluyendo identidades no humanas y agentes.",
          en: "Correlates identity risk across Okta, Entra, AD, Duo and ISE — including non-human identities and agents." } },
        { name: "Cisco ISE", why: {
          es: "Da identidad al acceso de red y es la base de la segmentación basada en identidad (TrustSec).",
          en: "Provides network-access identity and is the foundation for identity-based segmentation (TrustSec)." } },
        { name: "Cisco Secure Access — Zero Trust for Agentic AI", why: {
          es: "Descubre agentes de IA y les emite tokens de corta vida con mínimo privilegio.",
          en: "Discovers AI agents and issues them short-lived, least-privilege tokens." } },
      ],
    },
    sse: {
      key: "SSE / ZTNA",
      name: { es: "SSE / Zero Trust Access", en: "SSE / Zero Trust Access" },
      short: {
        es: "Acceso Zero Trust y segmentación de tráfico hacia apps e IA, sin VPN tradicional.",
        en: "Zero Trust access and traffic segmentation to apps and AI, without legacy VPN.",
      },
      color: "#16BDEB", icon: "shield-lock",
      products: [
        { name: "Cisco Secure Access", why: {
          es: "SSE unificado (ZTNA, SWG, CASB, DNS, DLP, AI Access) con una sola política de acceso; FedRAMP authorized.",
          en: "Unified SSE (ZTNA, SWG, CASB, DNS, DLP, AI Access) with a single access policy; FedRAMP authorized." } },
        { name: "Duo", why: {
          es: "Verifica la confianza del usuario y del dispositivo antes de conceder acceso — el primer principio de Zero Trust.",
          en: "Verifies user and device trust before granting access — the first Zero Trust principle." } },
      ],
    },
    segmentation: {
      key: "Segmentation",
      name: { es: "Segmentación", en: "Segmentation" },
      short: {
        es: "Convertir cada punto de la red en punto de inspección y política; aislar cargas de IA/OT.",
        en: "Turn every network point into an inspection & policy point; isolate AI/OT workloads.",
      },
      color: "#22C55E", icon: "grid",
      products: [
        { name: "Cisco Hypershield", why: {
          es: "Convierte cada switch, servidor y carga en punto de inspección y enforcement, con segmentación autónoma y dual dataplane.",
          en: "Turns every switch, server and workload into an inspection & enforcement point, with autonomous segmentation and a dual dataplane." } },
        { name: "Cisco Secure Workload", why: {
          es: "Micro-segmentación que descubre la política del tráfico real en data center, nube y Kubernetes.",
          en: "Micro-segmentation that discovers policy from real traffic across data center, cloud and Kubernetes." } },
        { name: "Cisco ISE", why: {
          es: "Segmentación macro basada en identidad (TrustSec/SGT) que alimenta a Hypershield y ACI.",
          en: "Identity-based macro-segmentation (TrustSec/SGT) that feeds Hypershield and ACI." } },
        { name: "Cisco ACI / Nexus Dashboard", why: {
          es: "Segmentación intent-based a escala de fabric del data center.",
          en: "Intent-based segmentation at data-center fabric scale." } },
        { name: "Isovalent (Cilium)", why: {
          es: "Segmentación a nivel de kernel con eBPF para cargas de IA cloud-native.",
          en: "Kernel-level eBPF segmentation for cloud-native AI workloads." } },
      ],
    },
    aishadow: {
      key: "AI Shadow",
      name: { es: "AI Shadow", en: "Shadow AI" },
      short: {
        es: "Descubrir y controlar el uso no autorizado de apps de IA y la fuga de datos hacia LLMs públicos.",
        en: "Discover and control unsanctioned AI app usage and data leakage to public LLMs.",
      },
      color: "#F59E0B", icon: "eye",
      products: [
        { name: "Cisco AI Defense — AI Access & AI Cloud Visibility", why: {
          es: "Descubre modelos, apps y datos de IA — sancionados y en la sombra — embebido en la red, sin agentes ni librerías.",
          en: "Discovers AI models, apps and data — sanctioned and shadow — network-embedded, with no agents or libraries." } },
        { name: "Cisco Secure Access — AI Access", why: {
          es: "Da visibilidad y DLP al uso de apps GenAI de terceros desde el plano de control SSE.",
          en: "Gives visibility and DLP over third-party GenAI app usage from the SSE control plane." } },
      ],
    },
    soc: {
      key: "SOC / SecOps",
      name: { es: "SOC / SecOps", en: "SOC / SecOps" },
      short: {
        es: "Detección y respuesta con IA a través de red, endpoint, nube e identidad.",
        en: "AI-driven detection & response across network, endpoint, cloud and identity.",
      },
      color: "#8B5CF6", icon: "radar",
      products: [
        { name: "Cisco XDR", why: {
          es: "Detección y respuesta multi-dominio (red, endpoint, nube, identidad) con investigación de IA agéntica y recuperación ante ransomware.",
          en: "Cross-domain detection & response (network, endpoint, cloud, identity) with agentic-AI investigation and ransomware recovery." } },
        { name: "Splunk Enterprise Security", why: {
          es: "SIEM con AI Assistant que escribe y explica SPL y resume investigaciones para el SOC.",
          en: "SIEM with an AI Assistant that writes/explains SPL and summarizes investigations for the SOC." } },
        { name: "Cisco AI Assistant for Security", why: {
          es: "Copiloto que genera políticas en lenguaje natural y resume incidentes a través de Firewall, XDR y Secure Access.",
          en: "Copilot that generates natural-language policy and summarizes incidents across Firewall, XDR and Secure Access." } },
      ],
    },
    perimeter: {
      key: "Perimeter",
      name: { es: "Perímetro", en: "Perimeter" },
      short: {
        es: "Firewalls de alto desempeño listos para tareas de IA, con visibilidad de tráfico cifrado.",
        en: "High-performance firewalls ready for AI tasks, with encrypted-traffic visibility.",
      },
      color: "#FF9000", icon: "brick-wall",
      products: [
        { name: "Cisco Secure Firewall (Snort 3, EVE)", why: {
          es: "NGFW de alto desempeño listo para tareas de IA; el Encrypted Visibility Engine clasifica tráfico cifrado sin descifrarlo.",
          en: "High-performance NGFW ready for AI tasks; the Encrypted Visibility Engine classifies encrypted traffic without decryption." } },
        { name: "Cisco Multicloud Defense", why: {
          es: "Extiende el perímetro a AWS, Azure, GCP y Oracle (ingress/egress/east-west) desde un plano de control SaaS.",
          en: "Extends the perimeter to AWS, Azure, GCP and Oracle (ingress/egress/east-west) from one SaaS control plane." } },
      ],
    },
    guardrails: {
      key: "Guardrails",
      name: { es: "Guardrails", en: "Guardrails" },
      short: {
        es: "Inspección en tiempo real de prompts/respuestas: prompt injection, jailbreak, fuga de PII.",
        en: "Real-time prompt/response inspection: prompt injection, jailbreak, PII leakage.",
      },
      color: "#EF4444", icon: "guard",
      products: [
        { name: "Cisco AI Defense — Runtime Protection", why: {
          es: "Inspecciona prompts y respuestas en tiempo real: bloquea prompt injection, jailbreak, model DoS y fuga de PII — sin SDK, alineado a OWASP LLM Top 10 y MITRE ATLAS.",
          en: "Inspects prompts and responses in real time: blocks prompt injection, jailbreak, model DoS and PII leakage — no SDK, aligned to OWASP LLM Top 10 and MITRE ATLAS." } },
      ],
    },
    codeguard: {
      key: "CodeGuard",
      name: { es: "CodeGuard", en: "CodeGuard" },
      short: {
        es: "Seguridad del código y apps generadas con/para IA — de código a nube, cadena de suministro de software.",
        en: "Security for AI-generated/AI apps and their code — code-to-cloud software supply chain.",
      },
      color: "#00C8FF", icon: "code",
      products: [
        { name: "Cisco AI Defense — Model & Application Validation", why: {
          es: "Red-teaming algorítmico que prueba modelos y apps de IA en busca de vulnerabilidades de seguridad y safety (IP de Robust Intelligence).",
          en: "Algorithmic red-teaming that tests AI models and apps for security and safety vulnerabilities (Robust Intelligence IP)." } },
        { name: "Panoptica (Outshift)", why: {
          es: "Seguridad cloud-native de código a nube: APIs, CI/CD y cadena de suministro de software de las apps que ejecutan la IA.",
          en: "Cloud-native code-to-cloud security: APIs, CI/CD and software supply chain of the apps that run the AI." } },
      ],
    },
    opensource: {
      key: "Open Source",
      name: { es: "Open Source", en: "Open Source" },
      short: {
        es: "Cimientos abiertos: eBPF (Cilium/Tetragon), Snort, ClamAV y agentes interoperables (AGNTCY).",
        en: "Open foundations: eBPF (Cilium/Tetragon), Snort, ClamAV and interoperable agents (AGNTCY).",
      },
      color: "#94A3B8", icon: "branch",
      products: [
        { name: "Cilium / Tetragon (Isovalent)", why: {
          es: "Base eBPF abierta para redes, seguridad y observabilidad de cargas de IA en Kubernetes.",
          en: "Open eBPF foundation for AI networking, security and observability on Kubernetes." } },
        { name: "Snort 3", why: {
          es: "Motor IPS open source embebido en Cisco Secure Firewall.",
          en: "Open-source IPS engine embedded in Cisco Secure Firewall." } },
        { name: "ClamAV", why: {
          es: "Motor antimalware open source mantenido por Cisco.",
          en: "Open-source antimalware engine stewarded by Cisco." } },
        { name: "OpenTelemetry", why: {
          es: "Estándar abierto de telemetría; Splunk Observability es OTel-native.",
          en: "Open telemetry standard; Splunk Observability is OTel-native." } },
        { name: "AGNTCY — Internet of Agents", why: {
          es: "Framework abierto de Cisco Outshift para la interoperabilidad segura entre agentes de IA.",
          en: "Cisco Outshift open framework for secure AI-agent interoperability." } },
      ],
    },
    intelligence: {
      key: "Threat Intelligence",
      name: { es: "Inteligencia de Amenazas", en: "Threat Intelligence" },
      short: {
        es: "Talos: inteligencia de amenazas que alimenta todo el portafolio en tiempo real.",
        en: "Talos: threat intelligence feeding the entire portfolio in real time.",
      },
      color: "#FF007F", icon: "globe",
      products: [
        { name: "Cisco Talos", why: {
          es: "Una de las mayores organizaciones de inteligencia de amenazas: billones de eventos diarios que alimentan Firewall, XDR, Secure Access, Email y AI Defense en tiempo real.",
          en: "One of the largest threat-intelligence orgs: trillions of daily events feeding Firewall, XDR, Secure Access, Email and AI Defense in real time." } },
        { name: "Splunk Threat Intelligence Management", why: {
          es: "Enriquece las detecciones de Splunk ES con inteligencia externa correlacionada.",
          en: "Enriches Splunk ES detections with correlated external intelligence." } },
      ],
    },
  },

  /* -------------------------------------------------------------------
     SHOWCASE BOOTHS (security-relevant demo stations)
     ------------------------------------------------------------------- */
  booths: {
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


  /* -------------------------------------------------------------------
     INDUSTRIES × USE CASES (from Slides 3–4)  with SECURITY mapping
     ------------------------------------------------------------------- */
  industries: {
    retail: {
      name: { es: "Retail", en: "Retail" }, icon: "cart",
      tagline: { es: "Del cliente al anaquel, con IA segura.", en: "From shopper to shelf, with secure AI." },
      useCases: [
        {
          id: "retail-personalization",
          title: { es: "Hiper-personalización", en: "Hyper-Personalization" },
          desc: { es: "La IA analiza navegación y compras en tiempo real para crear 'segmentos de uno' con ofertas a la medida.",
                   en: "AI analyzes real-time browsing and purchases to build 'segments of one' with tailored offers." },
          securityChallenge: {
            es: "El motor de personalización consume datos personales (PII) y llama a LLMs; hay riesgo de fuga de datos y prompt injection.",
            en: "The personalization engine consumes PII and calls LLMs; risk of data leakage and prompt injection." },
          pillars: ["guardrails", "aishadow", "sse", "identity"],
          products: ["Cisco AI Defense", "Cisco Secure Access", "Duo"],
          booths: ["sec_ai", "sec_zta"],
          recommendation: {
            es: "Protege el LLM de personalización con AI Defense (guardrails + inspección de PII) y controla el acceso con Secure Access.",
            en: "Protect the personalization LLM with AI Defense (guardrails + PII inspection) and gate access with Secure Access." },
        },
        {
          id: "retail-inventory",
          title: { es: "Inventario inteligente y pronóstico de demanda", en: "Smart Inventory & Demand Forecasting" },
          desc: { es: "Predice necesidades de stock con clima, eventos y tendencias sociales para reducir sobrestock y quiebres.",
                   en: "Predicts stock needs from weather, events and social trends to cut overstock and stockouts." },
          securityChallenge: {
            es: "Modelos que ingieren datos de múltiples fuentes/APIs externas: riesgo en la cadena de suministro de software y datos.",
            en: "Models ingest data from many external sources/APIs: software & data supply-chain risk." },
          pillars: ["codeguard", "opensource", "intelligence", "soc"],
          products: ["Cisco AI Defense", "Cisco XDR", "Cisco Talos"],
          booths: ["sec_ai", "sec_aiwork"],
          recommendation: {
            es: "Valida los modelos y sus dependencias open source con AI Defense; correlaciona anomalías con XDR + Talos.",
            en: "Validate models and their open-source dependencies with AI Defense; correlate anomalies with XDR + Talos." },
        },
        {
          id: "retail-assistant",
          title: { es: "Asistentes de compra con IA generativa", en: "AI Shopping Assistants" },
          desc: { es: "'Concierges' con GenAI que ayudan al cliente a encontrar productos por conversación natural.",
                   en: "GenAI 'concierges' that help customers find products via natural conversation." },
          securityChallenge: {
            es: "Chatbot expuesto al público: jailbreak, contenido dañino, exfiltración de datos y abuso del modelo.",
            en: "Public-facing chatbot: jailbreak, harmful content, data exfiltration and model abuse." },
          pillars: ["guardrails", "perimeter", "aishadow"],
          products: ["Cisco AI Defense", "Cisco Secure Firewall"],
          booths: ["sec_ai", "sec_hmf"],
          recommendation: {
            es: "Pon AI Defense frente al asistente para bloquear jailbreaks y fuga de datos, con Secure Firewall en el perímetro.",
            en: "Place AI Defense in front of the assistant to block jailbreaks and data leakage, with Secure Firewall at the edge." },
        },
        {
          id: "retail-lossprevention",
          title: { es: "Visión computacional para prevención de pérdidas", en: "Computer Vision for Loss Prevention" },
          desc: { es: "Meraki y analítica de IA detectan comportamiento sospechoso o errores de cobro en tiempo real.",
                   en: "Meraki and AI analytics detect suspicious behavior or checkout errors in real time." },
          securityChallenge: {
            es: "Cámaras y sensores IoT como superficie de ataque; necesitan identidad, segmentación y visibilidad.",
            en: "Cameras and IoT sensors as attack surface; they need identity, segmentation and visibility." },
          pillars: ["segmentation", "identity", "soc"],
          products: ["Cisco ISE", "Cisco Hypershield", "Cisco XDR", "Meraki"],
          booths: ["nw_unified", "sec_aiwork"],
          recommendation: {
            es: "Segmenta los dispositivos IoT con ISE + Hypershield y vigila el entorno con XDR.",
            en: "Segment IoT devices with ISE + Hypershield and watch the environment with XDR." },
        },
        {
          id: "retail-pricing",
          title: { es: "Precios dinámicos", en: "Dynamic Pricing" },
          desc: { es: "Ajusta precios automáticamente según competencia, inventario y elasticidad de demanda.",
                   en: "Automatically adjusts prices based on competitor data, inventory and demand elasticity." },
          securityChallenge: {
            es: "Decisiones automatizadas de negocio: manipulación de datos de entrada y acceso no autorizado al motor de precios.",
            en: "Automated business decisions: input-data manipulation and unauthorized access to the pricing engine." },
          pillars: ["sse", "identity", "guardrails"],
          products: ["Cisco Secure Access", "Duo", "Cisco AI Defense"],
          booths: ["sec_zta", "sec_ai"],
          recommendation: {
            es: "Restringe quién y qué agente puede tocar el motor con Secure Access + Duo; valida integridad con AI Defense.",
            en: "Restrict who and which agent can touch the engine with Secure Access + Duo; validate integrity with AI Defense." },
        },
      ],
    },

    financial: {
      name: { es: "Servicios Financieros", en: "Financial Services" }, icon: "bank",
      tagline: { es: "Confianza, fraude y cumplimiento a velocidad de IA.", en: "Trust, fraud and compliance at AI speed." },
      useCases: [
        {
          id: "fin-fraud",
          title: { es: "Detección de fraude en tiempo real", en: "Real-Time Fraud Detection" },
          desc: { es: "Modelos analizan millones de transacciones por segundo; Cisco + Splunk identifican patrones de crimen financiero.",
                   en: "Models analyze millions of transactions per second; Cisco + Splunk spot financial-crime patterns." },
          securityChallenge: {
            es: "El pipeline de fraude es blanco de ataque; requiere telemetría confiable, correlación y respuesta inmediata.",
            en: "The fraud pipeline is an attack target; it needs trusted telemetry, correlation and instant response." },
          pillars: ["soc", "intelligence", "segmentation"],
          products: ["Splunk Enterprise Security", "Cisco XDR", "Cisco Talos"],
          booths: ["sec_aiwork", "sec_scc"],
          recommendation: {
            es: "Integra el modelo con Splunk + XDR y enriquece con Talos para detección y respuesta en segundos.",
            en: "Integrate the model with Splunk + XDR and enrich with Talos for detection and response in seconds." },
        },
        {
          id: "fin-trading",
          title: { es: "Trading algorítmico", en: "Algorithmic Trading" },
          desc: { es: "ML ejecuta operaciones de alta frecuencia con análisis de sentimiento de noticias y mercado.",
                   en: "ML runs high-frequency trades using sentiment analysis of news and market data." },
          securityChallenge: {
            es: "Latencia y confidencialidad críticas; manipulación de datos de entrada o del modelo puede costar millones.",
            en: "Latency and confidentiality are critical; tampering with inputs or the model can cost millions." },
          pillars: ["segmentation", "perimeter", "guardrails"],
          products: ["Cisco Hypershield", "Cisco Secure Firewall", "Cisco AI Defense"],
          booths: ["nw_unified", "sec_hmf"],
          recommendation: {
            es: "Aísla el entorno de trading con Hypershield y protege el modelo con AI Defense contra manipulación.",
            en: "Isolate the trading environment with Hypershield and protect the model with AI Defense against tampering." },
        },
        {
          id: "fin-claims",
          title: { es: "Procesamiento automatizado de siniestros", en: "Automated Claims Processing" },
          desc: { es: "La IA analiza fotos de accidentes/daños y aprueba reclamos en minutos.",
                   en: "AI scans accident/damage photos and approves claims in minutes." },
          securityChallenge: {
            es: "Decisiones sobre datos sensibles del cliente; riesgo de fuga de PII y de imágenes/datos envenenados.",
            en: "Decisions over sensitive customer data; risk of PII leakage and poisoned images/data." },
          pillars: ["guardrails", "codeguard", "aishadow"],
          products: ["Cisco AI Defense", "Cisco Secure Access"],
          booths: ["sec_ai", "sec_zta"],
          recommendation: {
            es: "AI Defense inspecciona y redacta PII en prompts/respuestas y valida la app; Secure Access controla el acceso.",
            en: "AI Defense inspects and redacts PII in prompts/responses and validates the app; Secure Access controls access." },
        },
        {
          id: "fin-credit",
          title: { es: "Scoring de riesgo crediticio", en: "Credit Risk Scoring" },
          desc: { es: "Usa datos alternativos (pagos de servicios, flujo de caja) para evaluar riesgo con más precisión.",
                   en: "Uses alternative data (utility payments, cash flow) to assess lending risk more accurately." },
          securityChallenge: {
            es: "Modelo regulado: exige trazabilidad, control de datos y evidencia de cumplimiento (CNBV/Banxico).",
            en: "Regulated model: demands traceability, data control and compliance evidence (CNBV/Banxico)." },
          pillars: ["identity", "sse", "soc"],
          products: ["Duo", "Cisco Secure Access", "Splunk Enterprise Security"],
          booths: ["sec_zta", "sec_aiwork"],
          recommendation: {
            es: "Gobierna acceso e identidad con Duo + Secure Access y genera evidencia de cumplimiento con Splunk.",
            en: "Govern access and identity with Duo + Secure Access and generate compliance evidence with Splunk." },
        },
        {
          id: "fin-compliance",
          title: { es: "Monitoreo de cumplimiento (RegTech)", en: "Compliance Monitoring (RegTech)" },
          desc: { es: "IA escanea comunicaciones y transacciones para asegurar apego a regulaciones globales.",
                   en: "AI scans communications and transactions to ensure adherence to global regulations." },
          securityChallenge: {
            es: "Shadow AI y fuga de datos regulados hacia herramientas no aprobadas; visibilidad total es obligatoria.",
            en: "Shadow AI and leakage of regulated data to unsanctioned tools; full visibility is mandatory." },
          pillars: ["aishadow", "guardrails", "intelligence"],
          products: ["Cisco AI Defense", "Cisco Secure Access", "Cisco Talos"],
          booths: ["sec_ai", "sec_zta"],
          recommendation: {
            es: "Descubre y controla Shadow AI con AI Defense + Secure Access AI Access; evita fuga de datos regulados.",
            en: "Discover and control Shadow AI with AI Defense + Secure Access AI Access; prevent regulated-data leakage." },
        },
      ],
    },

    distribution: {
      name: { es: "Centros de Distribución", en: "Distribution Centers" }, icon: "box",
      tagline: { es: "Robots, sensores y datos — asegurados de punta a punta.", en: "Robots, sensors and data — secured end to end." },
      useCases: [
        {
          id: "dist-robotics",
          title: { es: "Robótica de almacén (AGV/AMR)", en: "Warehouse Robotics (AGVs/AMRs)" },
          desc: { es: "Robots móviles autónomos que recogen y empacan, optimizados con Cisco URWB.",
                   en: "Autonomous mobile robots that pick and pack, optimized by Cisco URWB." },
          securityChallenge: {
            es: "Robots = identidades no humanas en red OT; comprometerlos detiene la operación física.",
            en: "Robots = non-human identities on an OT network; compromising them halts physical operations." },
          pillars: ["identity", "segmentation", "soc"],
          products: ["Duo", "Cisco ISE", "Cisco Cyber Vision", "Cisco Hypershield"],
          booths: ["iot_cybervision", "nw_unified"],
          recommendation: {
            es: "Da identidad a cada robot con Duo/ISE, segmenta con Hypershield y vigila el OT con Cyber Vision.",
            en: "Give each robot an identity with Duo/ISE, segment with Hypershield and watch OT with Cyber Vision." },
        },
        {
          id: "dist-slotting",
          title: { es: "Optimización de slotting", en: "Slotting Optimization" },
          desc: { es: "La IA decide la colocación más eficiente de mercancía para minimizar recorridos.",
                   en: "AI determines the most efficient goods placement to minimize travel distance." },
          securityChallenge: {
            es: "Modelo con acceso a datos operativos sensibles; requiere control de acceso y validación del modelo.",
            en: "Model with access to sensitive operational data; needs access control and model validation." },
          pillars: ["sse", "codeguard", "guardrails"],
          products: ["Cisco Secure Access", "Cisco AI Defense"],
          booths: ["sec_zta", "sec_ai"],
          recommendation: {
            es: "Controla el acceso al modelo con Secure Access y valida su integridad con AI Defense.",
            en: "Control model access with Secure Access and validate its integrity with AI Defense." },
        },
        {
          id: "dist-maintenance",
          title: { es: "Mantenimiento predictivo de bandas", en: "Predictive Maintenance for Conveyors" },
          desc: { es: "Sensores monitorean vibración y calor para predecir fallas antes de que paren la producción.",
                   en: "Sensors monitor vibration and heat to predict failures before they stop production." },
          securityChallenge: {
            es: "Miles de sensores IoT amplían la superficie de ataque; necesitan segmentación e inteligencia.",
            en: "Thousands of IoT sensors widen the attack surface; they need segmentation and intelligence." },
          pillars: ["segmentation", "intelligence", "opensource"],
          products: ["Cisco Cyber Vision", "Cisco Hypershield", "Cisco Talos"],
          booths: ["iot_cybervision", "sec_scc"],
          recommendation: {
            es: "Segmenta y da visibilidad OT con Cyber Vision + Hypershield, respaldado por Talos.",
            en: "Segment and gain OT visibility with Cyber Vision + Hypershield, backed by Talos." },
        },
        {
          id: "dist-labor",
          title: { es: "Optimización de turnos y mano de obra", en: "Labor & Shift Optimization" },
          desc: { es: "La IA predice picos de demanda y sugiere niveles de staffing y horarios.",
                   en: "AI predicts peak times and suggests staffing levels and shift schedules." },
          securityChallenge: {
            es: "Datos de empleados (PII) procesados por IA; riesgo de fuga y de Shadow AI en RRHH.",
            en: "Employee data (PII) processed by AI; risk of leakage and Shadow AI in HR." },
          pillars: ["aishadow", "guardrails", "identity"],
          products: ["Cisco AI Defense", "Cisco Secure Access", "Duo"],
          booths: ["sec_ai", "sec_zta"],
          recommendation: {
            es: "Evita fuga de PII con AI Defense y controla qué apps de IA se usan con Secure Access AI Access.",
            en: "Prevent PII leakage with AI Defense and control which AI apps are used with Secure Access AI Access." },
        },
        {
          id: "dist-idp",
          title: { es: "Procesamiento inteligente de documentos", en: "Intelligent Document Processing" },
          desc: { es: "NLP digitaliza y verifica automáticamente cartas porte, facturas y manifiestos.",
                   en: "NLP automatically digitizes and verifies bills of lading, invoices and manifests." },
          securityChallenge: {
            es: "Documentos como vector de prompt injection y datos envenenados hacia el LLM.",
            en: "Documents as a prompt-injection and data-poisoning vector into the LLM." },
          pillars: ["guardrails", "codeguard", "perimeter"],
          products: ["Cisco AI Defense", "Cisco Secure Firewall"],
          booths: ["sec_ai", "sec_hmf"],
          recommendation: {
            es: "AI Defense inspecciona el contenido de documentos contra prompt injection antes de llegar al modelo.",
            en: "AI Defense inspects document content against prompt injection before it reaches the model." },
        },
      ],
    },

    transportation: {
      name: { es: "Transporte", en: "Transportation" }, icon: "truck",
      tagline: { es: "Flotas, rutas y seguridad en movimiento.", en: "Fleets, routes and safety in motion." },
      useCases: [
        {
          id: "trans-routing",
          title: { es: "Optimización dinámica de rutas", en: "Dynamic Route Optimization" },
          desc: { es: "La IA recalcula rutas en tiempo real según tráfico, clima y consumo de combustible.",
                   en: "AI recalculates fleet routes in real time based on traffic, weather and fuel use." },
          securityChallenge: {
            es: "Datos de ubicación en tiempo real y APIs externas; riesgo de intercepción y manipulación.",
            en: "Real-time location data and external APIs; risk of interception and manipulation." },
          pillars: ["sse", "perimeter", "identity"],
          products: ["Cisco Secure Access", "Cisco Secure Firewall", "Duo"],
          booths: ["sec_zta", "sec_hmf"],
          recommendation: {
            es: "Cifra y segmenta el tráfico con Secure Access y protege las APIs con Secure Firewall.",
            en: "Encrypt and segment traffic with Secure Access and protect the APIs with Secure Firewall." },
        },
        {
          id: "trans-fleet",
          title: { es: "Mantenimiento predictivo de flota", en: "Predictive Fleet Maintenance" },
          desc: { es: "Monitorea salud del motor y presión de llantas en miles de vehículos para programar reparaciones.",
                   en: "Monitors engine health and tire pressure across thousands of vehicles to schedule repairs." },
          securityChallenge: {
            es: "Vehículos conectados = identidades no humanas móviles; enorme superficie de ataque distribuida.",
            en: "Connected vehicles = mobile non-human identities; a huge distributed attack surface." },
          pillars: ["identity", "segmentation", "intelligence"],
          products: ["Duo", "Cisco ISE", "Cisco Talos", "Cisco Hypershield"],
          booths: ["nw_unified", "sec_scc"],
          recommendation: {
            es: "Autentica cada vehículo con Duo/ISE, segmenta con Hypershield y enriquece con Talos.",
            en: "Authenticate each vehicle with Duo/ISE, segment with Hypershield and enrich with Talos." },
        },
        {
          id: "trans-traffic",
          title: { es: "Gestión inteligente de tráfico", en: "Smart Traffic Management" },
          desc: { es: "Semáforos con IA que ajustan tiempos según flujo real, reduciendo congestión hasta 30%.",
                   en: "AI traffic lights that adjust timing to real-time flow, cutting congestion up to 30%." },
          securityChallenge: {
            es: "Infraestructura crítica de ciudad: un compromiso tiene impacto físico y de seguridad pública.",
            en: "Critical city infrastructure: a compromise has physical and public-safety impact." },
          pillars: ["segmentation", "soc", "perimeter"],
          products: ["Cisco Cyber Vision", "Cisco XDR", "Cisco Hypershield"],
          booths: ["iot_cybervision", "sec_aiwork"],
          recommendation: {
            es: "Segmenta y monitorea la infraestructura con Cyber Vision + XDR; enforcement con Hypershield.",
            en: "Segment and monitor infrastructure with Cyber Vision + XDR; enforcement with Hypershield." },
        },
        {
          id: "trans-dms",
          title: { es: "Monitoreo del conductor (DMS)", en: "Driver Monitoring Systems (DMS)" },
          desc: { es: "Cámaras en cabina detectan fatiga o distracción y disparan alertas para mejorar seguridad.",
                   en: "In-cabin cameras detect fatigue or distraction and trigger alerts to improve safety." },
          securityChallenge: {
            es: "Video biométrico sensible procesado por IA; privacidad, fuga de datos y Shadow AI.",
            en: "Sensitive biometric video processed by AI; privacy, data leakage and Shadow AI." },
          pillars: ["guardrails", "aishadow", "sse"],
          products: ["Cisco AI Defense", "Cisco Secure Access"],
          booths: ["sec_ai", "sec_zta"],
          recommendation: {
            es: "Protege datos biométricos con AI Defense y controla el acceso a la app con Secure Access.",
            en: "Protect biometric data with AI Defense and control app access with Secure Access." },
        },
        {
          id: "trans-lastmile",
          title: { es: "Última milla autónoma", en: "Autonomous Last-Mile Delivery" },
          desc: { es: "Gestión de flotas de drones o robots de acera que navegan entornos urbanos complejos.",
                   en: "Managing fleets of drones or sidewalk robots navigating complex urban environments." },
          securityChallenge: {
            es: "Agentes autónomos físicos: exigen identidad fuerte, autorización de acciones y respuesta ante secuestro.",
            en: "Physical autonomous agents: require strong identity, action authorization and hijack response." },
          pillars: ["identity", "soc", "guardrails"],
          products: ["Duo", "Cisco Secure Access", "Cisco XDR", "Cisco AI Defense"],
          booths: ["sec_zta", "sec_aiwork"],
          recommendation: {
            es: "Da identidad y Zero Trust a cada agente con Duo + Secure Access; vigila y responde con XDR.",
            en: "Give each agent identity and Zero Trust with Duo + Secure Access; monitor and respond with XDR." },
        },
      ],
    },

    manufacturing: {
      name: { es: "Manufactura", en: "Manufacturing" }, icon: "factory",
      tagline: { es: "OT, calidad y gemelos digitales protegidos.", en: "OT, quality and digital twins protected." },
      useCases: [
        {
          id: "mfg-quality",
          title: { es: "Inspección de calidad con IA", en: "AI-Powered Quality Inspection" },
          desc: { es: "Visión computacional (con Cisco Industrial Ethernet) inspecciona productos con 99.9% de precisión.",
                   en: "Computer vision (with Cisco Industrial Ethernet) inspects products at 99.9% accuracy." },
          securityChallenge: {
            es: "El sistema de visión vive en la línea de producción OT; un fallo o ataque para la planta.",
            en: "The vision system lives on the OT production line; a failure or attack stops the plant." },
          pillars: ["segmentation", "identity", "intelligence"],
          products: ["Cisco Cyber Vision", "Cisco Industrial Ethernet", "ISE", "Cisco Talos"],
          booths: ["iot_cybervision", "sec_scc"],
          recommendation: {
            es: "Segmenta la línea con Cyber Vision + ISE y respalda con inteligencia de Talos.",
            en: "Segment the line with Cyber Vision + ISE and back it with Talos intelligence." },
        },
        {
          id: "mfg-twins",
          title: { es: "Gemelos digitales", en: "Digital Twins" },
          desc: { es: "Réplica virtual de la planta para simular escenarios y optimizar flujos sin riesgo.",
                   en: "Virtual replica of the factory to simulate scenarios and optimize workflows risk-free." },
          securityChallenge: {
            es: "El gemelo concentra datos completos de la planta: si se filtra, expone toda la operación.",
            en: "The twin concentrates full plant data: if leaked, it exposes the entire operation." },
          pillars: ["sse", "guardrails", "codeguard"],
          products: ["Cisco Secure Access", "Cisco AI Defense", "Cisco Hypershield"],
          booths: ["sec_zta", "sec_ai"],
          recommendation: {
            es: "Aplica Zero Trust al gemelo con Secure Access y protege sus modelos/datos con AI Defense.",
            en: "Apply Zero Trust to the twin with Secure Access and protect its models/data with AI Defense." },
        },
        {
          id: "mfg-pdm",
          title: { es: "Mantenimiento predictivo (PdM)", en: "Predictive Maintenance (PdM)" },
          desc: { es: "Analiza datos de sensores de máquinas industriales para evitar paros no planeados.",
                   en: "Analyzes industrial machine sensor data to prevent costly unplanned downtime." },
          securityChallenge: {
            es: "Convergencia IT/OT: los datos de sensores cruzan fronteras que antes estaban aisladas.",
            en: "IT/OT convergence: sensor data crosses boundaries that used to be isolated." },
          pillars: ["segmentation", "soc", "opensource"],
          products: ["Cisco Cyber Vision", "Cisco XDR", "Cisco Hypershield"],
          booths: ["iot_cybervision", "sec_aiwork"],
          recommendation: {
            es: "Controla la frontera IT/OT con Hypershield + Cyber Vision y correlaciona con XDR.",
            en: "Control the IT/OT boundary with Hypershield + Cyber Vision and correlate with XDR." },
        },
        {
          id: "mfg-gendesign",
          title: { es: "Diseño generativo", en: "Generative Design" },
          desc: { es: "La IA propone miles de iteraciones de una pieza según peso, resistencia y material.",
                   en: "AI suggests thousands of part design iterations based on weight, strength and material." },
          securityChallenge: {
            es: "Propiedad intelectual crítica en los prompts y modelos; riesgo de robo de IP y Shadow AI.",
            en: "Critical IP inside prompts and models; risk of IP theft and Shadow AI." },
          pillars: ["aishadow", "guardrails", "codeguard"],
          products: ["Cisco AI Defense", "Cisco Secure Access"],
          booths: ["sec_ai", "sec_zta"],
          recommendation: {
            es: "Protege la IP en prompts con AI Defense y evita herramientas no aprobadas con Secure Access AI Access.",
            en: "Protect prompt IP with AI Defense and block unsanctioned tools with Secure Access AI Access." },
        },
        {
          id: "mfg-otsec",
          title: { es: "Ciberseguridad OT", en: "OT Cybersecurity" },
          desc: { es: "Cisco Cyber Vision + IA detectan patrones anómalos en sistemas de control industrial (ICS).",
                   en: "Cisco Cyber Vision + AI detect anomalous patterns in industrial control systems (ICS)." },
          securityChallenge: {
            es: "Los ICS no fueron diseñados para ciberseguridad; requieren visibilidad, segmentación e inteligencia dedicadas.",
            en: "ICS were not designed for cybersecurity; they need dedicated visibility, segmentation and intelligence." },
          pillars: ["segmentation", "intelligence", "soc", "identity"],
          products: ["Cisco Cyber Vision", "Cisco ISE", "Cisco XDR", "Cisco Talos"],
          booths: ["iot_cybervision", "sec_aiwork"],
          recommendation: {
            es: "Base OT completa: Cyber Vision para visibilidad, ISE para identidad, XDR + Talos para detección.",
            en: "Full OT foundation: Cyber Vision for visibility, ISE for identity, XDR + Talos for detection." },
        },
      ],
    },
  },

  /* -------------------------------------------------------------------
     UI STRINGS (ES / EN)
     ------------------------------------------------------------------- */
  ui: {
    attract_kicker: { es: "Cisco AI Bridge · Cisco Connect Cancún 2026", en: "Cisco AI Bridge · Cisco Connect Cancún 2026" },
    attract_title: { es: "Security Blueprint", en: "Security Blueprint" },
    attract_sub: { es: "Asegura la era de la IA — de la red al agente.", en: "Secure the AI era — from network to agent." },
    attract_cta: { es: "Toca para comenzar", en: "Tap to begin" },
    lang_label: { es: "EN", en: "ES" },

    path_title: { es: "¿Cómo quieres explorar?", en: "How do you want to explore?" },
    path_exp_title: { es: "Ya sé mi caso de uso", en: "I know my use case" },
    path_exp_desc: { es: "Cuéntame tu caso de uso y te muestro cómo el portafolio de Cisco lo asegura y qué booths visitar.",
                     en: "Tell me your use case and I'll show how Cisco's portfolio secures it and which booths to visit." },
    path_new_title: { es: "Ayúdame a descubrirlo", en: "Help me discover it" },
    path_new_desc: { es: "Elige tu industria y te guío por los casos de uso de IA que identificamos para ti.",
                     en: "Pick your industry and I'll guide you through the AI use cases we identified for you." },

    industry_title: { es: "Selecciona tu industria", en: "Select your industry" },
    usecase_title: { es: "Selecciona tu caso de uso", en: "Select your use case" },
    usecase_title_new: { es: "Casos de uso que identificamos", en: "Use cases we identified" },

    result_challenge: { es: "El reto de seguridad", en: "The security challenge" },
    result_pillars: { es: "Pilares de seguridad que aplican", en: "Security pillars that apply" },
    result_products: { es: "Portafolio Cisco recomendado", en: "Recommended Cisco portfolio" },
    result_reco: { es: "Cómo Cisco lo asegura", en: "How Cisco secures it" },
    result_booths: { es: "Booths que debes visitar", en: "Booths you should visit" },

    btn_back: { es: "Atrás", en: "Back" },
    btn_restart: { es: "Empezar de nuevo", en: "Start over" },
    btn_explore_pillars: { es: "Ver los 10 pilares", en: "See the 10 pillars" },
    pillars_title: { es: "Blueprint de Seguridad · 10 Pilares", en: "Security Blueprint · 10 Pillars" },
    pillars_hint: { es: "Toca un pilar para ver los productos Cisco y por qué están ahí", en: "Tap a pillar to see the Cisco products and why they belong there" },
    pillar_products: { es: "Productos Cisco que lo habilitan", en: "Cisco products that enable it" },
    pillar_why: { es: "Por qué", en: "Why" },
    pillar_back: { es: "Volver a los 10 pilares", en: "Back to the 10 pillars" },

    footer: { es: "Cisco AI Bridge · Cisco Connect Cancún 2026 · © Cisco Systems México",
              en: "Cisco AI Bridge · Cisco Connect Cancún 2026 · © Cisco Systems Mexico" },
  },
};

if (typeof module !== "undefined" && module.exports) module.exports = BOOTH_DATA;
