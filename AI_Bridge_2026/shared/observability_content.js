/* =====================================================================
   Cisco AI Bridge @ Cisco Connect Cancún 2026
   Stage 3 · Storytelling — OBSERVABILITY BLUEPRINT (Chino)
   Bilingual content engine (ES / EN). Product & technical terms stay in English.

   Full-Stack Observability model — 7 pillars:
     ITOps · NetOps · AppOps/CloudOps · SecOps · AIOps · MLOps · BizOps
   (v2 — incorporates Chino's feedback: added Nexus Dashboard, AppDynamics,
    Splunk Observability Cloud, ISE, Panoptica, Secure Application, Cisco
    Observability Platform (FSO), Splunk Observability for AI, Isovalent,
    Splunk Log Observer, AppDynamics Business iQ, ITSI Business Service Insights,
    and split NetOps / AppOps / BizOps into their own pillars.)

   Same data model / flow as Security & Infrastructure blueprints.
   NOTE: use-case field name `securityChallenge` is kept identical so the kiosk
   template is a drop-in; the UI label is reworded to "operational challenge".
   ===================================================================== */

const BOOTH_DATA = {
  meta: {
    event: "Cisco AI Bridge · Cisco Connect Cancún 2026",
    stage: "Stage 3 — Storytelling",
    blueprint: { es: "Blueprint de Observabilidad", en: "Observability Blueprint" },
    version: "2.0",
  },

  /* -------------------------------------------------------------------
     CENTRAL HUB — ITSM (the 7 pillars revolve around it)
     ------------------------------------------------------------------- */
  hub: {
    key: "ITSM",
    name: { es: "ITSM", en: "ITSM" },
    full: { es: "IT Service Management", en: "IT Service Management" },
    color: "#F8FAFC", icon: "hub",
    short: {
      es: "El centro de la estrategia. ITIL y plataformas como ServiceNow o Jira gestionan el servicio; los 7 pilares giran a su alrededor entregándole telemetría, contexto y automatización.",
      en: "The center of the strategy. ITIL and platforms like ServiceNow or Jira manage the service; the 7 pillars revolve around it delivering telemetry, context and automation.",
    },
    detail: {
      es: "ITSM (IT Service Management) es el marco que organiza cómo se opera la tecnología. Tradicionalmente es reactivo: alguien abre un ticket cuando algo ya falló. En esta estrategia, los 7 pilares de observabilidad alimentan a ITSM de forma proactiva: ITSI + AIOps detectan la anomalía, correlacionan la causa raíz y abren automáticamente un ticket ya 'masticado' en ServiceNow o Jira, con toda la información técnica lista para el ingeniero. Así ITSM deja de ser el punto de partida del problema y se convierte en el punto de orquestación de la solución.",
      en: "ITSM (IT Service Management) is the framework that organizes how technology is operated. Traditionally it's reactive: someone opens a ticket after something has already failed. In this strategy the 7 observability pillars feed ITSM proactively: ITSI + AIOps detect the anomaly, correlate root cause and automatically open a pre-digested ticket in ServiceNow or Jira, with all the technical information ready for the engineer. ITSM stops being the problem's starting point and becomes the orchestration point of the solution.",
    },
    frameworks: ["ITIL", "ServiceNow", "Jira", "Splunk ITSI"],
  },

  /* -------------------------------------------------------------------
     7 OBSERVABILITY PILLARS (Full-Stack Observability)
     ------------------------------------------------------------------- */
  pillars: {
    itops: {
      key: "ITOps",
      name: { es: "ITOps", en: "ITOps" },
      short: {
        es: "Salud de servicios, cómputo y Data Center: del servicio de negocio a la infraestructura física.",
        en: "Service, compute and Data Center health: from business service down to physical infrastructure.",
      },
      color: "#16BDEB", icon: "eye",
      products: [
        { name: "Splunk IT Service Intelligence (ITSI)", why: {
          es: "Monitoreo unificado que agrupa métricas de múltiples fuentes y mapea la salud de los servicios reales del negocio.",
          en: "Unified monitoring that aggregates metrics from many sources and maps the health of real business services." } },
        { name: "Cisco Intersight", why: {
          es: "Operación de cómputo (UCS/servidores) con recomendaciones de IA y optimización de cargas.",
          en: "Compute operations (UCS/servers) with AI recommendations and workload optimization." } },
        { name: "Cisco Nexus Dashboard", why: {
          es: "Operaciones y telemetría del Data Center (ACI / NX-OS); cierra la brecha de visibilidad entre el campus y el núcleo del DC.",
          en: "Data Center operations and telemetry (ACI / NX-OS); closes the visibility gap between campus and the DC core." } },
      ],
    },
    netops: {
      key: "NetOps",
      name: { es: "NetOps", en: "NetOps" },
      short: {
        es: "Operaciones de red de punta a punta: campus, sucursal, Data Center, Internet y nube.",
        en: "End-to-end network operations: campus, branch, Data Center, Internet and cloud.",
      },
      color: "#3070E7", icon: "globe",
      products: [
        { name: "Cisco ThousandEyes", why: {
          es: "Visibilidad de BGP, Internet y nube pública — la ruta completa que la red no controla.",
          en: "BGP, Internet and public-cloud visibility — the full path the network doesn't control." } },
        { name: "Cisco Catalyst Center", why: {
          es: "Assurance y telemetría en streaming para redes de campus y sucursal.",
          en: "Assurance and streaming telemetry for campus and branch networks." } },
        { name: "Meraki Dashboard", why: {
          es: "Visibilidad en la nube de red, dispositivos y experiencia en todas las sedes.",
          en: "Cloud visibility of network, devices and experience across every site." } },
        { name: "Cisco Nexus Dashboard", why: {
          es: "Operaciones analíticas y telemetría de red en el Data Center.",
          en: "Analytical operations and network telemetry in the Data Center." } },
        { name: "Isovalent (Cilium)", why: {
          es: "Observabilidad y conectividad a nivel de red nativa en la nube con eBPF (Hubble/Tetragon).",
          en: "Cloud-native network observability and connectivity with eBPF (Hubble/Tetragon)." } },
      ],
    },
    appops: {
      key: "AppOps / CloudOps",
      name: { es: "AppOps / CloudOps", en: "AppOps / CloudOps" },
      short: {
        es: "Operaciones de aplicaciones y nube: APM, trazas distribuidas, código, bases de datos y logs para DevOps.",
        en: "Application and cloud operations: APM, distributed traces, code, databases and logs for DevOps.",
      },
      color: "#8B5CF6", icon: "code",
      products: [
        { name: "Splunk Observability Cloud", why: {
          es: "APM, trazas distribuidas y métricas de Kubernetes, OTel-native, para entornos nativos de nube.",
          en: "APM, distributed traces and Kubernetes metrics, OTel-native, for cloud-native environments." } },
        { name: "Cisco AppDynamics", why: {
          es: "Monitoreo profundo de código y bases de datos para aplicaciones tradicionales e híbridas.",
          en: "Deep code and database monitoring for traditional and hybrid applications." } },
        { name: "Splunk Log Observer", why: {
          es: "Análisis de logs en tiempo real sin indexación pesada.",
          en: "Real-time log analysis without heavy indexing." } },
      ],
    },
    secops: {
      key: "SecOps",
      name: { es: "SecOps", en: "SecOps" },
      short: {
        es: "Detección y respuesta con IA, telemetría de identidad y seguridad de cargas cloud-native.",
        en: "AI-driven detection and response, identity telemetry and cloud-native workload security.",
      },
      color: "#EF4444", icon: "shield-lock",
      products: [
        { name: "Splunk Enterprise Security", why: {
          es: "SIEM con AI Assistant que correlaciona telemetría de seguridad y resume investigaciones.",
          en: "SIEM with an AI Assistant that correlates security telemetry and summarizes investigations." } },
        { name: "Cisco XDR", why: {
          es: "Detección y respuesta multi-dominio con investigación de IA agéntica.",
          en: "Cross-domain detection and response with agentic-AI investigation." } },
        { name: "Cisco ISE", why: {
          es: "Telemetría de identidad y control de acceso 802.1X que enriquece la detección.",
          en: "Identity telemetry and 802.1X access control that enriches detection." } },
        { name: "Cisco Panoptica (CNAPP)", why: {
          es: "Protege el ciclo de vida completo de las aplicaciones nativas en la nube (de código a nube).",
          en: "Protects the full lifecycle of cloud-native applications (code-to-cloud)." } },
        { name: "Cisco Secure Application (en AppDynamics)", why: {
          es: "Seguridad a nivel de código en tiempo de ejecución, integrada en AppDynamics.",
          en: "Runtime code-level security, integrated into AppDynamics." } },
        { name: "Splunk SOAR", why: {
          es: "Orquestación y automatización de respuesta con playbooks.",
          en: "Security orchestration and automated response with playbooks." } },
      ],
    },
    aiops: {
      key: "AIOps",
      name: { es: "AIOps", en: "AIOps" },
      short: {
        es: "El cerebro analítico: líneas base dinámicas, correlación de eventos, reducción de ruido y auto-remediación predictiva.",
        en: "The analytical brain: dynamic baselines, event correlation, noise reduction and predictive auto-remediation.",
      },
      color: "#00C8FF", icon: "radar",
      products: [
        { name: "Splunk ITSI — Predictive Analytics & Adaptive Thresholding", why: {
          es: "Líneas base dinámicas y análisis predictivo que avisan minutos u horas antes de una caída.",
          en: "Dynamic baselines and predictive analytics that warn minutes or hours before an outage." } },
        { name: "Splunk Machine Learning Toolkit (MLTK)", why: {
          es: "Modelos de ML para detección de anomalías, pronóstico y clustering sobre datos operativos.",
          en: "ML models for anomaly detection, forecasting and clustering over operational data." } },
        { name: "Cisco Observability Platform (FSO)", why: {
          es: "El motor de extensibilidad que unifica y correlaciona la observabilidad full-stack.",
          en: "The extensibility engine that unifies and correlates full-stack observability." } },
        { name: "Splunk SOAR — Auto-remediation Playbooks", why: {
          es: "Activa scripts de auto-reparación (p.ej. asignar RAM o reiniciar un microservicio) sin intervención humana.",
          en: "Triggers self-healing scripts (e.g. add RAM or restart a microservice) with no human intervention." } },
        { name: "Cisco AIOps (Catalyst Center & Meraki)", why: {
          es: "Predice comportamientos de red y resuelve problemas de desempeño en mucho menos tiempo.",
          en: "Predicts network behavior and resolves performance issues in much less time." } },
      ],
    },
    mlops: {
      key: "MLOps",
      name: { es: "MLOps", en: "MLOps" },
      short: {
        es: "Operar, monitorear y gobernar modelos de IA en producción — tokens, LLMs, GPUs, desempeño y drift.",
        en: "Operate, monitor and govern AI models in production — tokens, LLMs, GPUs, performance and drift.",
      },
      color: "#22C55E", icon: "branch",
      products: [
        { name: "Splunk Observability for AI", why: {
          es: "Diseñado para monitorear el consumo de tokens, el rendimiento de LLMs y la infraestructura de GPUs.",
          en: "Purpose-built to monitor token consumption, LLM performance and GPU infrastructure." } },
        { name: "Splunk Machine Learning Toolkit (MLTK)", why: {
          es: "Entrena, valida y operacionaliza modelos de ML directamente sobre los datos de Splunk.",
          en: "Trains, validates and operationalizes ML models directly on Splunk data." } },
        { name: "Cisco AI Defense — Model Validation", why: {
          es: "Valida y hace red-teaming de los modelos que operas — el puente con el Blueprint de Seguridad.",
          en: "Validates and red-teams the models you operate — the bridge to the Security Blueprint." } },
        { name: "OpenTelemetry", why: {
          es: "Estándar abierto de telemetría para instrumentar pipelines de ML; Splunk Observability es OTel-native.",
          en: "Open telemetry standard to instrument ML pipelines; Splunk Observability is OTel-native." } },
      ],
    },
    bizops: {
      key: "BizOps",
      name: { es: "BizOps", en: "BizOps" },
      short: {
        es: "Conecta la telemetría técnica con los KPIs de negocio y demuestra el ROI de la observabilidad.",
        en: "Connects technical telemetry to business KPIs and proves the ROI of observability.",
      },
      color: "#FF9000", icon: "grid",
      products: [
        { name: "AppDynamics Business iQ", why: {
          es: "Inyecta telemetría técnica directamente en KPIs de negocio (p.ej. cómo la latencia afecta la tasa de conversión).",
          en: "Injects technical telemetry directly into business KPIs (e.g. how latency affects conversion rate)." } },
        { name: "Splunk ITSI — Business Service Insights", why: {
          es: "Mapeo de alto nivel sobre la salud de los servicios críticos del negocio.",
          en: "High-level mapping of the health of the business's critical services." } },
      ],
    },
  },

  /* -------------------------------------------------------------------
     SHOWCASE BOOTHS
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
     INDUSTRIES × USE CASES  with OBSERVABILITY mapping (7-pillar)
     ------------------------------------------------------------------- */
  industries: {
    retail: {
      name: { es: "Retail", en: "Retail" }, icon: "cart",
      tagline: { es: "Experiencia de compra siempre disponible, del clic al pago.", en: "Always-on shopping experience, from click to checkout." },
      useCases: [
        {
          id: "retail-peak",
          title: { es: "Disponibilidad del e-commerce en picos (Black Friday)", en: "E-commerce availability at peak (Black Friday)" },
          desc: { es: "Los picos de tráfico saturan el checkout y degradan la experiencia justo cuando más ventas hay.",
                   en: "Traffic spikes saturate checkout and degrade experience exactly when sales peak." },
          securityChallenge: {
            es: "Las alertas estáticas no ven la anomalía temprana: un aumento leve de latencia a la hora pico no dispara umbrales fijos pero anticipa una caída y golpea la conversión.",
            en: "Static alerts miss the early anomaly: a small latency rise at peak hour doesn't trip fixed thresholds but foreshadows an outage and hurts conversion." },
          pillars: ["aiops", "appops", "bizops"],
          products: ["Splunk IT Service Intelligence (ITSI)", "Splunk Observability Cloud", "AppDynamics Business iQ", "Splunk SOAR"],
          booths: ["obs_itsi", "obs_cloud", "obs_datafabric"],
          recommendation: {
            es: "ITSI aprende la línea base dinámica del checkout y detecta la anomalía temprana; Business iQ traduce la latencia en impacto de conversión y un playbook de SOAR escala capacidad antes de la caída.",
            en: "ITSI learns the dynamic baseline of checkout and catches the early anomaly; Business iQ turns latency into conversion impact and a SOAR playbook scales capacity before the outage." },
        },
        {
          id: "retail-omnichannel",
          title: { es: "Experiencia digital omnicanal", en: "Omnichannel digital experience" },
          desc: { es: "Web, app móvil y pasarelas de pago de terceros deben sentirse instantáneas en todo canal.",
                   en: "Web, mobile app and third-party payment gateways must feel instant across every channel." },
          securityChallenge: {
            es: "La lentitud suele venir de servicios SaaS y rutas de Internet que el retailer no controla ni ve.",
            en: "Slowness often comes from SaaS services and Internet paths the retailer neither controls nor sees." },
          pillars: ["appops", "netops"],
          products: ["Cisco AppDynamics", "Cisco ThousandEyes", "Splunk Observability Cloud"],
          booths: ["obs_cloud", "te_insights"],
          recommendation: {
            es: "AppDynamics correlaciona la transacción de negocio con el código y ThousandEyes ilumina la ruta de Internet/SaaS de punta a punta.",
            en: "AppDynamics correlates the business transaction with the code and ThousandEyes lights up the Internet/SaaS path end to end." },
        },
        {
          id: "retail-stores",
          title: { es: "Salud de tiendas y punto de venta (POS/IoT)", en: "Store and point-of-sale health (POS/IoT)" },
          desc: { es: "Cientos de tiendas con POS, Wi-Fi e IoT que deben operar sin interrupción.",
                   en: "Hundreds of stores with POS, Wi-Fi and IoT that must run without interruption." },
          securityChallenge: {
            es: "Sin visibilidad centralizada, cada tienda es un silo y los problemas de red se detectan cuando el cliente ya se fue.",
            en: "Without centralized visibility every store is a silo and network issues surface only after the customer has left." },
          pillars: ["netops", "itops"],
          products: ["Meraki Dashboard", "Cisco Catalyst Center", "Splunk IT Service Intelligence (ITSI)"],
          booths: ["te_assurance", "obs_itsi"],
          recommendation: {
            es: "Meraki + Catalyst Center dan salud de red por tienda y ITSI agrupa todo bajo el impacto al servicio de negocio.",
            en: "Meraki + Catalyst Center give per-store network health and ITSI rolls it up under business-service impact." },
        },
        {
          id: "retail-secops",
          title: { es: "Seguridad de operaciones digitales", en: "Digital operations security" },
          desc: { es: "Fraude y amenazas en canales digitales que crecen con el volumen de ventas.",
                   en: "Fraud and threats on digital channels that grow with sales volume." },
          securityChallenge: {
            es: "Miles de alertas de seguridad diarias generan fatiga y ocultan el incidente real.",
            en: "Thousands of daily security alerts create fatigue and hide the real incident." },
          pillars: ["secops", "aiops"],
          products: ["Splunk Enterprise Security", "Cisco XDR", "Cisco Panoptica (CNAPP)", "Splunk SOAR"],
          booths: ["sec_aiwork"],
          recommendation: {
            es: "Splunk ES correlaciona la telemetría, XDR investiga con IA agéntica, Panoptica protege las apps cloud-native y SOAR automatiza la contención.",
            en: "Splunk ES correlates telemetry, XDR investigates with agentic AI, Panoptica protects cloud-native apps and SOAR automates containment." },
        },
        {
          id: "retail-mlops",
          title: { es: "Modelos de recomendación y pricing en producción", en: "Recommendation & pricing models in production" },
          desc: { es: "La personalización y el pricing dinámico dependen de modelos que deben mantenerse precisos.",
                   en: "Personalization and dynamic pricing rely on models that must stay accurate." },
          securityChallenge: {
            es: "El drift del modelo degrada silenciosamente las recomendaciones y los márgenes sin que nadie lo note.",
            en: "Model drift silently degrades recommendations and margins with no one noticing." },
          pillars: ["mlops", "bizops"],
          products: ["Splunk Machine Learning Toolkit (MLTK)", "Splunk Observability for AI", "Cisco AI Defense — Model Validation"],
          booths: ["obs_cloud", "obs_datafabric"],
          recommendation: {
            es: "MLTK + Splunk Observability for AI monitorean desempeño, drift y consumo del modelo; AI Defense valida su integridad y BizOps mide el impacto en margen.",
            en: "MLTK + Splunk Observability for AI monitor model performance, drift and consumption; AI Defense validates its integrity and BizOps measures margin impact." },
        },
      ],
    },

    financial: {
      name: { es: "Servicios Financieros", en: "Financial Services" }, icon: "bank",
      tagline: { es: "Cero downtime y detección predictiva a escala de transacción.", en: "Zero downtime and predictive detection at transaction scale." },
      useCases: [
        {
          id: "fin-paygw",
          title: { es: "Salud preventiva de la pasarela de pagos (Black Friday)", en: "Preventive health of the payment gateway (Black Friday)" },
          desc: { es: "Un día de alta demanda: la plataforma debe sostenerse sin que ningún cliente experimente un error al pagar.",
                   en: "A high-demand day: the platform must hold without a single customer hitting a payment error." },
          securityChallenge: {
            es: "A las 2:00 PM la latencia sube de 100ms a 150ms — invisible para umbrales estáticos de 500ms, pero anticipa un colapso de la base de datos a las 2:30 PM.",
            en: "At 2:00 PM latency rises from 100ms to 150ms — invisible to static 500ms thresholds, yet it foreshadows a database collapse at 2:30 PM." },
          pillars: ["aiops", "itops", "bizops"],
          products: ["Splunk IT Service Intelligence (ITSI)", "Splunk Machine Learning Toolkit (MLTK)", "Splunk SOAR", "AppDynamics Business iQ"],
          booths: ["obs_itsi", "obs_cloud", "obs_datafabric"],
          recommendation: {
            es: "AIOps nota la anomalía silenciosa, correlaciona la causa raíz (RAM saturada por un microservicio de descuentos mal optimizado) en un solo incidente, avisa con 22 min de anticipación y ejecuta un playbook de auto-remediación (asignar RAM + reiniciar el microservicio). A diferencia del ITSM reactivo (esperar el ticket), ITSI + AIOps es proactivo y hasta abre el ticket ya 'masticado' en ServiceNow/Jira. Con Business iQ el impacto se mide en pesos. ROI reportado: 387% a 3 años, payback en 13 meses y $15.3M de beneficio anual.",
            en: "AIOps spots the silent anomaly, correlates root cause (RAM exhausted by a poorly optimized discount microservice) into a single incident, warns 22 min ahead and runs an auto-remediation playbook (add RAM + restart the microservice). Unlike reactive ITSM (wait for the ticket), ITSI + AIOps is proactive and even opens the ticket pre-digested in ServiceNow/Jira. With Business iQ the impact is measured in dollars. Reported ROI: 387% over 3 years, 13-month payback and $15.3M annual benefit." },
        },
        {
          id: "fin-fraud",
          title: { es: "Detección de fraude en tiempo real", en: "Real-time fraud detection" },
          desc: { es: "Millones de transacciones por segundo donde cada milisegundo y cada patrón cuentan.",
                   en: "Millions of transactions per second where every millisecond and every pattern count." },
          securityChallenge: {
            es: "Los patrones de fraude se esconden en el ruido; las reglas estáticas los pierden o generan demasiados falsos positivos.",
            en: "Fraud patterns hide in the noise; static rules miss them or generate too many false positives." },
          pillars: ["secops", "aiops"],
          products: ["Splunk Enterprise Security", "Splunk Machine Learning Toolkit (MLTK)", "Cisco XDR", "Cisco ISE"],
          booths: ["sec_aiwork", "obs_itsi"],
          recommendation: {
            es: "Splunk ES + MLTK modelan el comportamiento normal y detectan la desviación al instante; ISE aporta contexto de identidad y XDR investiga y responde en segundos.",
            en: "Splunk ES + MLTK model normal behavior and detect deviation instantly; ISE adds identity context and XDR investigates and responds in seconds." },
        },
        {
          id: "fin-compliance",
          title: { es: "Cumplimiento y auditoría continua", en: "Compliance and continuous audit" },
          desc: { es: "CNBV, Banxico y NOM-151 exigen evidencia, trazabilidad e inmutabilidad de registros.",
                   en: "CNBV, Banxico and NOM-151 demand evidence, traceability and record immutability." },
          securityChallenge: {
            es: "Reunir evidencia de cumplimiento a mano es lento, propenso a error y difícil de sostener en auditoría.",
            en: "Gathering compliance evidence by hand is slow, error-prone and hard to sustain under audit." },
          pillars: ["secops", "itops"],
          products: ["Splunk Enterprise Security", "Splunk IT Service Intelligence (ITSI)"],
          booths: ["sec_aiwork"],
          recommendation: {
            es: "Splunk ES genera reportes de cumplimiento e inmutabilidad de índices; ITSI da la salud del servicio para las métricas de continuidad.",
            en: "Splunk ES generates compliance reports and index immutability; ITSI provides service health for continuity metrics." },
        },
        {
          id: "fin-mobile",
          title: { es: "Experiencia de banca digital y móvil", en: "Digital and mobile banking experience" },
          desc: { es: "La app y el portal deben responder al instante en cualquier red y dispositivo.",
                   en: "The app and portal must respond instantly on any network and device." },
          securityChallenge: {
            es: "Cuando el cliente reporta lentitud, el problema puede estar en la app, la nube o el proveedor de Internet.",
            en: "When the customer reports slowness, the problem may live in the app, the cloud or the ISP." },
          pillars: ["appops", "netops"],
          products: ["Cisco AppDynamics", "Cisco ThousandEyes", "Splunk Observability Cloud"],
          booths: ["obs_cloud", "te_insights"],
          recommendation: {
            es: "AppDynamics correlaciona la transacción de negocio con el código y ThousandEyes aísla si la culpa es de la red/Internet.",
            en: "AppDynamics correlates the business transaction with the code and ThousandEyes isolates whether the network/Internet is to blame." },
        },
        {
          id: "fin-riskmodels",
          title: { es: "Modelos de scoring y riesgo en producción", en: "Scoring and risk models in production" },
          desc: { es: "Los modelos de crédito y riesgo deben mantenerse precisos, explicables y auditables.",
                   en: "Credit and risk models must stay accurate, explainable and auditable." },
          securityChallenge: {
            es: "Un modelo que sufre drift puede aprobar riesgo indebido o rechazar buenos clientes sin señal visible.",
            en: "A drifting model can approve undue risk or reject good customers with no visible signal." },
          pillars: ["mlops", "secops"],
          products: ["Splunk Machine Learning Toolkit (MLTK)", "Splunk Observability for AI", "Cisco AI Defense — Model Validation"],
          booths: ["obs_cloud", "sec_aiwork"],
          recommendation: {
            es: "MLTK + Splunk Observability for AI vigilan desempeño y drift; AI Defense valida y hace red-teaming para mantener la confianza del modelo.",
            en: "MLTK + Splunk Observability for AI watch performance and drift; AI Defense validates and red-teams to keep model trust." },
        },
      ],
    },

    distribution: {
      name: { es: "Centros de Distribución", en: "Distribution Centers" }, icon: "box",
      tagline: { es: "Operación logística visible y predecible, 24/7.", en: "Logistics operations visible and predictable, 24/7." },
      useCases: [
        {
          id: "dist-wms",
          title: { es: "Salud del WMS y sistemas de automatización", en: "WMS and automation systems health" },
          desc: { es: "El sistema de gestión de almacén orquesta picking, packing y despacho en tiempo real.",
                   en: "The warehouse management system orchestrates picking, packing and dispatch in real time." },
          securityChallenge: {
            es: "Una degradación del WMS frena toda la operación física y se propaga a bandas, robots y despacho.",
            en: "A WMS degradation halts the whole physical operation and cascades to conveyors, robots and dispatch." },
          pillars: ["itops", "appops", "aiops"],
          products: ["Splunk IT Service Intelligence (ITSI)", "Cisco AppDynamics", "Splunk Observability Cloud"],
          booths: ["obs_itsi", "obs_cloud"],
          recommendation: {
            es: "ITSI mapea el WMS como servicio de negocio, AppDynamics ve el código y con AIOps se predice la degradación antes del paro físico.",
            en: "ITSI maps the WMS as a business service, AppDynamics sees the code and with AIOps degradation is predicted before the physical stop." },
        },
        {
          id: "dist-otnet",
          title: { es: "Red OT/IoT del almacén (robots y sensores)", en: "Warehouse OT/IoT network (robots and sensors)" },
          desc: { es: "AGVs, AMRs y miles de sensores dependen de una red inalámbrica confiable.",
                   en: "AGVs, AMRs and thousands of sensors depend on a reliable wireless network." },
          securityChallenge: {
            es: "Un 'hot spot' de congestión inalámbrica detiene robots sin una causa evidente para el operador.",
            en: "A wireless congestion 'hot spot' stops robots with no obvious cause for the operator." },
          pillars: ["netops"],
          products: ["Meraki Dashboard", "Cisco Catalyst Center", "Cisco Nexus Dashboard"],
          booths: ["te_assurance"],
          recommendation: {
            es: "Meraki + Catalyst Center exponen la congestión a nivel granular y correlacionan el impacto en la operación en tiempo real.",
            en: "Meraki + Catalyst Center expose congestion at a granular level and correlate the operational impact in real time." },
        },
        {
          id: "dist-pdm",
          title: { es: "Mantenimiento predictivo de bandas y equipos", en: "Predictive maintenance of conveyors and equipment" },
          desc: { es: "Sensores de vibración y calor anticipan fallas mecánicas antes de que paren la línea.",
                   en: "Vibration and heat sensors anticipate mechanical failures before they stop the line." },
          securityChallenge: {
            es: "Los datos de sensores son masivos; sin ML es imposible ver la señal de falla entre el ruido.",
            en: "Sensor data is massive; without ML it's impossible to see the failure signal in the noise." },
          pillars: ["aiops", "mlops"],
          products: ["Splunk Machine Learning Toolkit (MLTK)", "Splunk IT Service Intelligence (ITSI)"],
          booths: ["obs_itsi", "obs_cloud"],
          recommendation: {
            es: "MLTK aprende el patrón normal de vibración/calor y avisa la falla con anticipación; ITSI la eleva a incidente accionable.",
            en: "MLTK learns the normal vibration/heat pattern and warns of failure ahead of time; ITSI raises it as an actionable incident." },
        },
        {
          id: "dist-itot-sec",
          title: { es: "SecOps en la convergencia IT/OT", en: "SecOps at the IT/OT convergence" },
          desc: { es: "Los datos de sensores cruzan fronteras que antes estaban aisladas.",
                   en: "Sensor data crosses boundaries that used to be isolated." },
          securityChallenge: {
            es: "La convergencia IT/OT amplía la superficie de ataque y mezcla telemetría que el SOC no correlacionaba.",
            en: "IT/OT convergence widens the attack surface and mixes telemetry the SOC didn't correlate before." },
          pillars: ["secops"],
          products: ["Splunk Enterprise Security", "Cisco XDR", "Cisco ISE", "Splunk SOAR"],
          booths: ["sec_aiwork"],
          recommendation: {
            es: "Splunk ES + XDR correlacionan telemetría IT y OT en un solo lugar, ISE aporta identidad y SOAR automatiza la respuesta.",
            en: "Splunk ES + XDR correlate IT and OT telemetry in one place, ISE adds identity and SOAR automates the response." },
        },
        {
          id: "dist-forecast",
          title: { es: "Modelos de slotting y forecast en producción", en: "Slotting and forecast models in production" },
          desc: { es: "La eficiencia del almacén depende de modelos de colocación y demanda siempre afinados.",
                   en: "Warehouse efficiency depends on placement and demand models kept finely tuned." },
          securityChallenge: {
            es: "Un modelo de forecast con drift genera sobrestock o quiebres que nadie atribuye al modelo.",
            en: "A drifting forecast model causes overstock or stockouts no one attributes to the model." },
          pillars: ["mlops", "bizops"],
          products: ["Splunk Machine Learning Toolkit (MLTK)", "Splunk Observability for AI", "Cisco AI Defense — Model Validation"],
          booths: ["obs_cloud", "obs_datafabric"],
          recommendation: {
            es: "MLTK + Splunk Observability for AI detectan el drift y disparan el reentrenamiento; BizOps conecta el error del modelo con el costo de inventario.",
            en: "MLTK + Splunk Observability for AI detect drift and trigger retraining; BizOps ties model error to inventory cost." },
        },
      ],
    },

    transportation: {
      name: { es: "Transporte", en: "Transportation" }, icon: "truck",
      tagline: { es: "Flotas y rutas monitoreadas en tiempo real.", en: "Fleets and routes monitored in real time." },
      useCases: [
        {
          id: "trans-platform",
          title: { es: "Disponibilidad de plataformas de ruteo y telemática", en: "Availability of routing and telematics platforms" },
          desc: { es: "El motor de ruteo recalcula miles de rutas en tiempo real y no puede detenerse.",
                   en: "The routing engine recalculates thousands of routes in real time and cannot stop." },
          securityChallenge: {
            es: "Una degradación gradual del backend pasa desapercibida hasta que las entregas empiezan a fallar.",
            en: "A gradual backend degradation goes unnoticed until deliveries start to fail." },
          pillars: ["aiops", "itops", "appops"],
          products: ["Splunk IT Service Intelligence (ITSI)", "Splunk Observability Cloud", "Cisco AppDynamics"],
          booths: ["obs_itsi", "obs_cloud"],
          recommendation: {
            es: "ITSI + AIOps detectan la degradación temprana y AppDynamics/Observability Cloud correlacionan la causa raíz antes de que impacte las entregas.",
            en: "ITSI + AIOps catch early degradation and AppDynamics/Observability Cloud correlate root cause before it impacts deliveries." },
        },
        {
          id: "trans-apps",
          title: { es: "Experiencia de apps de pasajeros y conductores", en: "Passenger and driver app experience" },
          desc: { es: "Las apps deben responder al instante en redes móviles variables.",
                   en: "The apps must respond instantly on variable mobile networks." },
          securityChallenge: {
            es: "La lentitud puede venir de la app, la nube o el operador móvil — sin visibilidad no hay culpable claro.",
            en: "Slowness may come from the app, the cloud or the mobile carrier — without visibility there's no clear culprit." },
          pillars: ["appops", "netops"],
          products: ["Cisco AppDynamics", "Cisco ThousandEyes", "Splunk Observability Cloud"],
          booths: ["obs_cloud", "te_insights"],
          recommendation: {
            es: "AppDynamics correlaciona la transacción y ThousandEyes aísla la ruta de red/Internet responsable.",
            en: "AppDynamics correlates the transaction and ThousandEyes isolates the responsible network/Internet path." },
        },
        {
          id: "trans-fleet-pdm",
          title: { es: "Mantenimiento predictivo de flota", en: "Predictive fleet maintenance" },
          desc: { es: "Salud de motor y llantas en miles de vehículos para programar reparaciones proactivas.",
                   en: "Engine and tire health across thousands of vehicles to schedule proactive repairs." },
          securityChallenge: {
            es: "La telemetría de flota es enorme y dispersa; sin ML las fallas se ven cuando el vehículo ya paró.",
            en: "Fleet telemetry is huge and scattered; without ML failures show up only after the vehicle has stopped." },
          pillars: ["aiops", "mlops"],
          products: ["Splunk Machine Learning Toolkit (MLTK)", "Splunk IT Service Intelligence (ITSI)"],
          booths: ["obs_itsi", "obs_cloud"],
          recommendation: {
            es: "MLTK modela el desgaste y predice la falla; ITSI la convierte en una orden de mantenimiento accionable.",
            en: "MLTK models wear and predicts failure; ITSI turns it into an actionable maintenance order." },
        },
        {
          id: "trans-critical-sec",
          title: { es: "SecOps de infraestructura crítica de transporte", en: "SecOps for critical transport infrastructure" },
          desc: { es: "Semáforos, señalización y centros de control son infraestructura de seguridad pública.",
                   en: "Traffic lights, signaling and control centers are public-safety infrastructure." },
          securityChallenge: {
            es: "Un compromiso tiene impacto físico; el SOC necesita correlación y respuesta inmediatas.",
            en: "A compromise has physical impact; the SOC needs immediate correlation and response." },
          pillars: ["secops"],
          products: ["Splunk Enterprise Security", "Cisco XDR", "Cisco ISE", "Splunk SOAR"],
          booths: ["sec_aiwork"],
          recommendation: {
            es: "Splunk ES + XDR correlacionan, ISE aporta identidad y SOAR automatiza la contención en infraestructura crítica.",
            en: "Splunk ES + XDR correlate, ISE adds identity and SOAR automates containment on critical infrastructure." },
        },
        {
          id: "trans-route-mlops",
          title: { es: "Modelos de optimización de rutas en producción", en: "Route optimization models in production" },
          desc: { es: "La eficiencia de la flota depende de modelos de ruteo siempre precisos.",
                   en: "Fleet efficiency depends on routing models that stay accurate." },
          securityChallenge: {
            es: "Un modelo con drift genera rutas subóptimas y sobrecosto de combustible sin señal visible.",
            en: "A drifting model produces suboptimal routes and fuel overspend with no visible signal." },
          pillars: ["mlops", "bizops"],
          products: ["Splunk Machine Learning Toolkit (MLTK)", "Splunk Observability for AI", "Cisco AI Defense — Model Validation"],
          booths: ["obs_cloud", "obs_datafabric"],
          recommendation: {
            es: "MLTK + Splunk Observability for AI monitorean el modelo y su drift; BizOps traduce el error en sobrecosto de combustible.",
            en: "MLTK + Splunk Observability for AI monitor the model and its drift; BizOps translates the error into fuel overspend." },
        },
      ],
    },

    manufacturing: {
      name: { es: "Manufactura", en: "Manufacturing" }, icon: "factory",
      tagline: { es: "OT, líneas y gemelos digitales sin paros no planeados.", en: "OT, lines and digital twins with no unplanned downtime." },
      useCases: [
        {
          id: "mfg-oee",
          title: { es: "Disponibilidad de líneas y OEE", en: "Line availability and OEE" },
          desc: { es: "La eficiencia general del equipo (OEE) depende de que las líneas no se detengan.",
                   en: "Overall equipment effectiveness (OEE) depends on lines never stopping." },
          securityChallenge: {
            es: "Un paro no planeado cuesta miles por minuto y su causa suele estar oculta en datos de OT dispersos.",
            en: "Unplanned downtime costs thousands per minute and its cause is often hidden in scattered OT data." },
          pillars: ["itops", "aiops", "bizops"],
          products: ["Splunk IT Service Intelligence (ITSI)", "Cisco Nexus Dashboard", "AppDynamics Business iQ"],
          booths: ["obs_itsi", "obs_datafabric"],
          recommendation: {
            es: "ITSI mapea la línea como servicio y con AIOps anticipa el paro; Business iQ expresa el OEE y el costo del paro en términos de negocio.",
            en: "ITSI maps the line as a service and with AIOps anticipates the stop; Business iQ expresses OEE and downtime cost in business terms." },
        },
        {
          id: "mfg-pdm",
          title: { es: "Mantenimiento predictivo (PdM)", en: "Predictive maintenance (PdM)" },
          desc: { es: "Datos de sensores de máquinas industriales para prevenir paros costosos.",
                   en: "Industrial machine sensor data to prevent costly downtime." },
          securityChallenge: {
            es: "La señal de falla se pierde entre millones de lecturas de sensores sin un motor de ML.",
            en: "The failure signal is lost among millions of sensor readings without an ML engine." },
          pillars: ["aiops", "mlops"],
          products: ["Splunk Machine Learning Toolkit (MLTK)", "Splunk IT Service Intelligence (ITSI)", "Splunk Observability Cloud"],
          booths: ["obs_itsi", "obs_cloud"],
          recommendation: {
            es: "MLTK aprende el comportamiento normal de la máquina y predice la falla; ITSI la eleva a mantenimiento accionable.",
            en: "MLTK learns the machine's normal behavior and predicts failure; ITSI raises it to actionable maintenance." },
        },
        {
          id: "mfg-otvis",
          title: { es: "Observabilidad de OT/ICS", en: "OT/ICS observability" },
          desc: { es: "Los sistemas de control industrial necesitan visibilidad que no fue diseñada en ellos.",
                   en: "Industrial control systems need visibility that was never designed into them." },
          securityChallenge: {
            es: "Sin telemetría de OT unificada, los equipos operan a ciegas ante anomalías de proceso.",
            en: "Without unified OT telemetry, teams operate blind to process anomalies." },
          pillars: ["netops", "secops"],
          products: ["Cisco Nexus Dashboard", "Cisco Catalyst Center", "Splunk Enterprise Security"],
          booths: ["te_assurance", "sec_aiwork"],
          recommendation: {
            es: "Catalyst Center + Nexus Dashboard dan visibilidad de red OT y Splunk ES aporta el ángulo de seguridad del proceso.",
            en: "Catalyst Center + Nexus Dashboard provide OT network visibility and Splunk ES adds the process-security angle." },
        },
        {
          id: "mfg-itot-sec",
          title: { es: "SecOps IT/OT", en: "IT/OT SecOps" },
          desc: { es: "La convergencia IT/OT expone a la planta a amenazas que antes no la alcanzaban.",
                   en: "IT/OT convergence exposes the plant to threats that couldn't reach it before." },
          securityChallenge: {
            es: "El SOC necesita correlacionar telemetría OT con IT para detectar ataques al proceso industrial.",
            en: "The SOC needs to correlate OT telemetry with IT to detect attacks on the industrial process." },
          pillars: ["secops"],
          products: ["Splunk Enterprise Security", "Cisco XDR", "Cisco ISE", "Splunk SOAR"],
          booths: ["sec_aiwork"],
          recommendation: {
            es: "Splunk ES + XDR unifican la detección IT/OT, ISE aporta identidad y SOAR automatiza la respuesta ante incidentes de proceso.",
            en: "Splunk ES + XDR unify IT/OT detection, ISE adds identity and SOAR automates response to process incidents." },
        },
        {
          id: "mfg-quality-mlops",
          title: { es: "Modelos de calidad y visión en producción", en: "Quality and vision models in production" },
          desc: { es: "La inspección de calidad por visión computacional depende de modelos siempre precisos.",
                   en: "Computer-vision quality inspection depends on models that stay accurate." },
          securityChallenge: {
            es: "Un modelo de visión con drift deja pasar defectos o rechaza producto bueno sin alerta.",
            en: "A drifting vision model lets defects through or rejects good product with no alert." },
          pillars: ["mlops"],
          products: ["Splunk Machine Learning Toolkit (MLTK)", "Splunk Observability for AI", "Cisco AI Defense — Model Validation"],
          booths: ["obs_cloud", "obs_itsi"],
          recommendation: {
            es: "MLTK + Splunk Observability for AI vigilan el desempeño del modelo de visión y AI Defense valida su integridad.",
            en: "MLTK + Splunk Observability for AI watch the vision model's performance and AI Defense validates its integrity." },
        },
      ],
    },
  },

  /* -------------------------------------------------------------------
     UI STRINGS (ES / EN)
     ------------------------------------------------------------------- */
  ui: {
    attract_kicker: { es: "Cisco AI Bridge · Cisco Connect Cancún 2026", en: "Cisco AI Bridge · Cisco Connect Cancún 2026" },
    attract_title: { es: "Observability Blueprint", en: "Observability Blueprint" },
    attract_sub: { es: "Full-Stack Observability: de la red al modelo al negocio.", en: "Full-Stack Observability: from network to model to business." },
    attract_cta: { es: "Toca para comenzar", en: "Tap to begin" },
    lang_label: { es: "EN", en: "ES" },

    path_title: { es: "¿Cómo quieres explorar?", en: "How do you want to explore?" },
    path_exp_title: { es: "Ya sé mi caso de uso", en: "I know my use case" },
    path_exp_desc: { es: "Cuéntame tu caso de uso y te muestro cómo el portafolio de Cisco/Splunk lo resuelve y qué booths visitar.",
                     en: "Tell me your use case and I'll show how the Cisco/Splunk portfolio solves it and which booths to visit." },
    path_new_title: { es: "Ayúdame a descubrirlo", en: "Help me discover it" },
    path_new_desc: { es: "Elige tu industria y te guío por los casos de uso de observabilidad que identificamos para ti.",
                     en: "Pick your industry and I'll guide you through the observability use cases we identified for you." },

    industry_title: { es: "Selecciona tu industria", en: "Select your industry" },
    usecase_title: { es: "Selecciona tu caso de uso", en: "Select your use case" },
    usecase_title_new: { es: "Casos de uso que identificamos", en: "Use cases we identified" },

    result_challenge: { es: "El reto operativo", en: "The operational challenge" },
    result_pillars: { es: "Pilares de observabilidad que aplican", en: "Observability pillars that apply" },
    result_products: { es: "Portafolio Cisco/Splunk recomendado", en: "Recommended Cisco/Splunk portfolio" },
    result_reco: { es: "Cómo Cisco lo resuelve", en: "How Cisco solves it" },
    result_booths: { es: "Booths que debes visitar", en: "Booths you should visit" },

    btn_back: { es: "Atrás", en: "Back" },
    btn_restart: { es: "Empezar de nuevo", en: "Start over" },
    btn_explore_pillars: { es: "Ver los 7 pilares", en: "See the 7 pillars" },
    pillars_title: { es: "Blueprint de Observabilidad · 7 Pilares", en: "Observability Blueprint · 7 Pillars" },
    pillars_hint: { es: "Toca un pilar para ver los productos Cisco/Splunk y por qué están ahí", en: "Tap a pillar to see the Cisco/Splunk products and why they belong there" },
    pillar_products: { es: "Productos que lo habilitan", en: "Products that enable it" },
    pillar_why: { es: "Por qué", en: "Why" },
    pillar_back: { es: "Volver a los 7 pilares", en: "Back to the 7 pillars" },

    footer: { es: "Cisco AI Bridge · Cisco Connect Cancún 2026 · © Cisco Systems México",
              en: "Cisco AI Bridge · Cisco Connect Cancún 2026 · © Cisco Systems Mexico" },
  },
};

if (typeof module !== "undefined" && module.exports) module.exports = BOOTH_DATA;
