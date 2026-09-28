/* =====================================================================
   Cisco AI Bridge @ Cisco Connect Cancún 2026
   Stage 3 · Storytelling — INFRASTRUCTURE BLUEPRINT (Angel)
   Bilingual content engine (ES / EN). Product & technical terms stay in English.

   Same data model / flow as Security & Observability blueprints:
     Experienced user   -> pick industry -> pick THEIR use case -> results
     Non-Experienced    -> pick industry -> see IDENTIFIED use cases -> pick -> results
   Result = Infrastructure challenge + Infra pillars + Cisco products + Booth to visit

   Pillars (6 layers): Switching · Wireless · Routing & WAN · Compute & DC · Platform & Automation · Observability & Telemetry
   NOTE: use-case field name `securityChallenge` kept identical to the other blueprints
   so the kiosk template is a drop-in; the UI label is reworded to "infrastructure challenge".
   ===================================================================== */

const BOOTH_DATA = {
  meta: {
    event: "Cisco AI Bridge · Cisco Connect Cancún 2026",
    stage: "Stage 3 — Storytelling",
    blueprint: { es: "Blueprint de Infraestructura", en: "Infrastructure Blueprint" },
    version: "1.0",
  },

  /* -------------------------------------------------------------------
     6 INFRASTRUCTURE PILLARS (the six layers)
     ------------------------------------------------------------------- */
  pillars: {
    switching: {
      key: "Switching",
      name: { es: "Switching", en: "Switching" },
      short: {
        es: "Catalyst 9000 y Nexus 9000: la capa que define la latencia y el ancho de banda de toda la plataforma.",
        en: "Catalyst 9000 and Nexus 9000: the layer that sets the latency and bandwidth for the whole platform.",
      },
      color: "#22C55E", icon: "grid",
      products: [
        { name: "Cisco Catalyst 9000", why: {
          es: "Switching de campus y sucursal con PoE, stacking y programabilidad vía IOS-XE.",
          en: "Campus and branch switching with PoE, stacking and programmability via IOS-XE." } },
        { name: "Cisco Nexus 9000", why: {
          es: "Switching de Data Center con puertos de 400G/800G y ASICs Silicon One.",
          en: "Data Center switching with 400G/800G ports and Silicon One ASICs." } },
        { name: "Cisco Silicon One", why: {
          es: "Silicio unificado que entrega el throughput y la baja latencia que exigen las cargas de IA.",
          en: "Unified silicon delivering the throughput and low latency AI workloads demand." } },
        { name: "Cisco Smart Switches (N9300)", why: {
          es: "Permiten que agentes como Tetragon mitiguen vulnerabilidades de día cero directamente en el silicio, sin appliance externo.",
          en: "Let agents like Tetragon mitigate zero-day vulnerabilities directly in silicon, with no external appliance." } },
      ],
    },
    wireless: {
      key: "Wireless",
      name: { es: "Wireless", en: "Wireless" },
      short: {
        es: "Access Points Wi-Fi 6E/7 que además son sensores de experiencia de usuario y de espectro.",
        en: "Wi-Fi 6E/7 access points that are also user-experience and spectrum sensors.",
      },
      color: "#16BDEB", icon: "radar",
      products: [
        { name: "Cisco Catalyst 9100/9200 Access Points", why: {
          es: "Conectividad de alta densidad con roaming determinístico; el AP mide la experiencia y detecta interferencia antes del ticket.",
          en: "High-density connectivity with deterministic roaming; the AP measures experience and detects interference before the ticket." } },
        { name: "Meraki Access Points", why: {
          es: "APs gestionados en la nube con políticas de RF, canales y potencia consistentes en todas las sedes.",
          en: "Cloud-managed APs with consistent RF, channel and power policy across every site." } },
        { name: "Cisco Catalyst Center (RRM)", why: {
          es: "Gestión centralizada de radiofrecuencia sin configurar sitio por sitio.",
          en: "Centralized RF management with no site-by-site configuration." } },
      ],
    },
    routing: {
      key: "Routing & WAN",
      name: { es: "Routing y WAN", en: "Routing & WAN" },
      short: {
        es: "Catalyst 8000 y SD-WAN: transporte inteligente por aplicación, del borde a la nube.",
        en: "Catalyst 8000 and SD-WAN: intelligent per-application transport, from edge to cloud.",
      },
      color: "#3070E7", icon: "globe",
      products: [
        { name: "Cisco Catalyst 8000 Edge", why: {
          es: "Conecta sucursal, Data Center y nube con enrutamiento de alto desempeño.",
          en: "Connects branch, Data Center and cloud with high-performance routing." } },
        { name: "Cisco ISR 1000/4000", why: {
          es: "Routers de sucursal para conectividad WAN flexible y segura.",
          en: "Branch routers for flexible, secure WAN connectivity." } },
        { name: "Cisco Catalyst SD-WAN", why: {
          es: "Abstrae el transporte y decide por aplicación: lo crítico por el enlace con SLA, lo masivo a Internet, sin intervención manual.",
          en: "Abstracts transport and decides per application: critical over the SLA link, bulk to Internet, with no manual intervention." } },
        { name: "Cisco Secure Access (SASE)", why: {
          es: "Habilita Zero Trust y segmentación de tráfico desde el mismo borde, eliminando el backhaul innecesario.",
          en: "Enables Zero Trust and traffic segmentation from the edge itself, eliminating unnecessary backhaul." } },
      ],
    },
    compute: {
      key: "Compute & DC",
      name: { es: "Compute y Data Center", en: "Compute & Data Center" },
      short: {
        es: "UCS e Intersight: cómputo listo para IA con fabric lossless de microsegundos.",
        en: "UCS and Intersight: AI-ready compute with a microsecond lossless fabric.",
      },
      color: "#FF9000", icon: "code",
      products: [
        { name: "Cisco UCS X-Series", why: {
          es: "Cómputo modular para virtualización, contenedores y cargas de IA bajo un plano de gestión único.",
          en: "Modular compute for virtualization, containers and AI workloads under a single management plane." } },
        { name: "Cisco UCS C-Series", why: {
          es: "Servidores rack GPU-ready para inferencia y entrenamiento de modelos.",
          en: "GPU-ready rack servers for model inference and training." } },
        { name: "Cisco Intersight", why: {
          es: "Aplica el perfil de servidor (firmware, RAID, red y almacenamiento) como código, no como checklist.",
          en: "Applies the server profile (firmware, RAID, network and storage) as code, not as a checklist." } },
        { name: "Cisco Nexus / Silicon One (Lossless Fabric)", why: {
          es: "Fabric de 400G/800G y latencia de microsegundos, cero pérdida, para patrones all-to-all entre GPUs.",
          en: "400G/800G microsecond, zero-loss fabric for all-to-all GPU patterns." } },
      ],
    },
    platform: {
      key: "Platform",
      name: { es: "Plataforma y Automatización", en: "Platform & Automation" },
      short: {
        es: "Catalyst Center, ISE y SD-Access: la política sigue a la identidad, no a la topología.",
        en: "Catalyst Center, ISE and SD-Access: policy follows identity, not topology.",
      },
      color: "#8B5CF6", icon: "guard",
      products: [
        { name: "Cisco Catalyst Center", why: {
          es: "Zero-Touch Provisioning y automatización vía APIs REST/NETCONF y modelos YANG — adiós al CLI dispositivo por dispositivo.",
          en: "Zero-Touch Provisioning and automation via REST/NETCONF APIs and YANG models — goodbye device-by-device CLI." } },
        { name: "Cisco Intersight", why: {
          es: "Aprovisionamiento y ciclo de vida de la infraestructura de cómputo como código.",
          en: "Provisioning and lifecycle of compute infrastructure as code." } },
        { name: "Cisco ISE", why: {
          es: "Autenticación 802.1X: el mismo usuario recibe el mismo acceso sin importar puerto, SSID o sede.",
          en: "802.1X authentication: the same user gets the same access regardless of port, SSID or site." } },
        { name: "Cisco SD-Access", why: {
          es: "Segmentación basada en identidad con Security Group Tags sobre la misma infraestructura física.",
          en: "Identity-based segmentation with Security Group Tags over the same physical infrastructure." } },
      ],
    },
    observability: {
      key: "Observability",
      name: { es: "Observabilidad y Telemetría", en: "Observability & Telemetry" },
      short: {
        es: "ThousandEyes, Meraki y Splunk: telemetría en streaming y causa raíz predictiva.",
        en: "ThousandEyes, Meraki and Splunk: streaming telemetry and predictive root cause.",
      },
      color: "#00C8FF", icon: "eye",
      products: [
        { name: "Cisco ThousandEyes", why: {
          es: "Visibilidad de la ruta completa hacia aplicaciones SaaS e Internet que la red no controla.",
          en: "Full-path visibility toward SaaS apps and Internet the network doesn't control." } },
        { name: "Cisco Catalyst Center (Assurance)", why: {
          es: "Telemetría en streaming que reemplaza el sondeo SNMP con visibilidad granular de enlaces congestionados.",
          en: "Streaming telemetry that replaces SNMP polling with granular visibility of congested links." } },
        { name: "Meraki Dashboard", why: {
          es: "Visibilidad en la nube de enlaces, dispositivos y experiencia en todas las sedes.",
          en: "Cloud visibility of links, devices and experience across every site." } },
        { name: "Splunk", why: {
          es: "Analítica predictiva que identifica fallas y cuellos de botella antes de que impacten al usuario o a una corrida de entrenamiento.",
          en: "Predictive analytics that spots failures and bottlenecks before they impact users or a training run." } },
      ],
    },
  },

  /* -------------------------------------------------------------------
     SHOWCASE BOOTHS (infrastructure-relevant demo stations)
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
     INDUSTRIES × USE CASES  (from Angel's Infrastructure blueprint)
     ------------------------------------------------------------------- */
  industries: {
    retail: {
      name: { es: "Retail", en: "Retail" }, icon: "cart",
      tagline: { es: "Tienda conectada, del piso de venta a la nube.", en: "Connected store, from sales floor to cloud." },
      useCases: [
        {
          id: "retail-store-connect",
          title: { es: "Conectividad de tienda estandarizada", en: "Standardized store connectivity" },
          desc: { es: "Abrir una tienda nueva con la misma calidad de red y seguridad desde el día uno.",
                   en: "Open a new store with the same network quality and security from day one." },
          securityChallenge: {
            es: "Configurar cada tienda a mano es lento, inconsistente y no escala a cientos de sitios.",
            en: "Configuring each store by hand is slow, inconsistent and doesn't scale to hundreds of sites." },
          pillars: ["switching", "wireless", "platform"],
          products: ["Cisco Catalyst 9300", "Cisco Catalyst 9100/9200 Access Points", "Cisco Catalyst Center"],
          booths: ["cai_smartsw", "nw_smart_access", "cai_stack"],
          recommendation: {
            es: "Catalyst 9300 y APs Wi-Fi 6E se despliegan con Zero-Touch Provisioning; la política de seguridad es idéntica desde el arranque.",
            en: "Catalyst 9300 and Wi-Fi 6E APs deploy with Zero-Touch Provisioning; the security policy is identical from boot." },
        },
        {
          id: "retail-pos-iot",
          title: { es: "Segmentación de POS e IoT", en: "POS and IoT segmentation" },
          desc: { es: "Cajas, cámaras, etiquetas electrónicas y red de invitados sobre la misma infraestructura física.",
                   en: "Registers, cameras, e-labels and guest network over the same physical infrastructure." },
          securityChallenge: {
            es: "Mezclar POS, IoT y visitantes en la misma red plana expone datos de pago a movimiento lateral.",
            en: "Mixing POS, IoT and guests on the same flat network exposes payment data to lateral movement." },
          pillars: ["platform", "switching"],
          products: ["Cisco ISE", "Cisco SD-Access", "Cisco Catalyst 9000"],
          booths: ["cai_stack", "cai_smartsw"],
          recommendation: {
            es: "Los Security Group Tags de SD-Access aíslan cada dominio sobre la misma infraestructura, sin VLANs manuales.",
            en: "SD-Access Security Group Tags isolate each domain over the same infrastructure, with no manual VLANs." },
        },
        {
          id: "retail-cv",
          title: { es: "Visión computacional en el piso de venta", en: "Computer vision on the sales floor" },
          desc: { es: "Detectar comportamiento sospechoso y errores de cobro en tiempo real.",
                   en: "Detect suspicious behavior and checkout errors in real time." },
          securityChallenge: {
            es: "Enviar todo el video al Data Center satura el enlace y agrega latencia inútil.",
            en: "Sending all video to the Data Center saturates the link and adds useless latency." },
          pillars: ["wireless", "observability"],
          products: ["Meraki MV", "Meraki Dashboard", "Cisco Catalyst 9100/9200 Access Points"],
          booths: ["nw_smart_access", "te_assurance"],
          recommendation: {
            es: "Las cámaras Meraki MV corren analítica embebida y procesan en el borde, sin backhaul de video.",
            en: "Meraki MV cameras run embedded analytics and process at the edge, with no video backhaul." },
        },
        {
          id: "retail-ux",
          title: { es: "Experiencia de usuario medible", en: "Measurable user experience" },
          desc: { es: "Saber por qué la app móvil va lenta, con datos y no con suposiciones.",
                   en: "Know why the mobile app is slow, with data instead of guesses." },
          securityChallenge: {
            es: "Sin visibilidad, la lentitud se atribuye a la app cuando puede ser saturación de AP o del enlace.",
            en: "Without visibility, slowness is blamed on the app when it may be AP or link saturation." },
          pillars: ["observability", "wireless"],
          products: ["Cisco Catalyst Center", "Cisco ThousandEyes", "Meraki Dashboard"],
          booths: ["te_assurance", "nw_smart_access"],
          recommendation: {
            es: "Catalyst Center correlaciona la experiencia de la app con la salud del AP y del enlace en tiempo real.",
            en: "Catalyst Center correlates app experience with AP and link health in real time." },
        },
        {
          id: "retail-multisite",
          title: { es: "Operación multisitio", en: "Multi-site operations" },
          desc: { es: "Administrar cientos de tiendas sin escalar el personal en la misma proporción.",
                   en: "Manage hundreds of stores without scaling staff at the same rate." },
          securityChallenge: {
            es: "La gestión sitio por sitio consume al equipo y frena la expansión.",
            en: "Site-by-site management drains the team and slows expansion." },
          pillars: ["platform", "observability"],
          products: ["Cisco Catalyst Center", "Meraki Dashboard", "Cisco Intersight"],
          booths: ["cai_stack", "te_assurance"],
          recommendation: {
            es: "Un equipo central administra todas las tiendas desde un solo panel con automatización por API.",
            en: "A central team runs all stores from a single pane with API-driven automation." },
        },
      ],
    },

    financial: {
      name: { es: "Servicios Financieros", en: "Financial Services" }, icon: "bank",
      tagline: { es: "Sucursal segura y elástica, en producción en menos de un día.", en: "Secure, elastic branch in production in under a day." },
      useCases: [
        {
          id: "fin-branch-fast",
          title: { es: "Sucursal en producción en menos de un día", en: "Branch in production in under a day" },
          desc: { es: "Levantar una sucursal completa sin que un ingeniero viaje al sitio.",
                   en: "Stand up a full branch without an engineer traveling on-site." },
          securityChallenge: {
            es: "Enviar personal a cada sucursal a configurar equipos es caro, lento y propenso a error.",
            en: "Sending staff to each branch to configure gear is costly, slow and error-prone." },
          pillars: ["routing", "platform", "wireless"],
          products: ["Cisco Catalyst 8300", "Cisco Catalyst 9000", "Cisco Catalyst Center"],
          booths: ["nw_secure_wan", "cai_stack"],
          recommendation: {
            es: "Router, switch y APs se aprovisionan solos con Zero-Touch; el sitio queda operando el mismo día.",
            en: "Router, switch and APs self-provision with Zero-Touch; the site is operating the same day." },
        },
        {
          id: "fin-core-priority",
          title: { es: "Priorización del core bancario", en: "Prioritizing the banking core" },
          desc: { es: "Garantizar que las transacciones y Webex tengan siempre el mejor enlace.",
                   en: "Ensure transactions and Webex always get the best link." },
          securityChallenge: {
            es: "Cuando un respaldo satura el enlace, las transacciones críticas sufren y el cliente lo nota.",
            en: "When a backup saturates the link, critical transactions suffer and the customer notices." },
          pillars: ["routing"],
          products: ["Cisco Catalyst SD-WAN", "Cisco Catalyst 8000 Edge"],
          booths: ["nw_secure_wan"],
          recommendation: {
            es: "SD-WAN identifica la aplicación y garantiza SLA al core y a Webex, desviando respaldos al enlace de Internet.",
            en: "SD-WAN identifies the application and guarantees SLA to the core and Webex, offloading backups to the Internet link." },
        },
        {
          id: "fin-zero-trust",
          title: { es: "Zero Trust por identidad", en: "Zero Trust by identity" },
          desc: { es: "Que cada quien acceda solo a lo que le corresponde, sin importar el puerto.",
                   en: "Everyone accesses only what they should, regardless of the port." },
          securityChallenge: {
            es: "En una red por topología, conectar una cámara al puerto equivocado abre acceso indebido.",
            en: "In a topology-based network, plugging a camera into the wrong port opens undue access." },
          pillars: ["platform"],
          products: ["Cisco ISE", "Cisco SD-Access"],
          booths: ["cai_stack"],
          recommendation: {
            es: "ISE autentica con 802.1X: el cajero llega al core, el visitante solo a Internet y la cámara queda aislada aunque cambie de puerto.",
            en: "ISE authenticates with 802.1X: the teller reaches the core, the visitor only the Internet and the camera stays isolated even if it changes port." },
        },
        {
          id: "fin-compliance",
          title: { es: "Cumplimiento y trazabilidad", en: "Compliance and traceability" },
          desc: { es: "Sostener auditorías regulatorias sin recolección manual de evidencia.",
                   en: "Sustain regulatory audits without manual evidence gathering." },
          securityChallenge: {
            es: "Reunir logs de decenas de sucursales a mano no resiste una auditoría de CNBV/Banxico.",
            en: "Gathering logs from dozens of branches by hand won't survive a CNBV/Banxico audit." },
          pillars: ["observability"],
          products: ["Splunk", "Cisco Catalyst Center"],
          booths: ["te_assurance"],
          recommendation: {
            es: "Telemetría continua y logs centralizados en Splunk sostienen la auditoría con evidencia automática.",
            en: "Continuous telemetry and centralized logs in Splunk sustain the audit with automatic evidence." },
        },
        {
          id: "fin-continuity",
          title: { es: "Continuidad operativa", en: "Operational continuity" },
          desc: { es: "Mantener la sucursal operando ante la caída de un transporte.",
                   en: "Keep the branch running through the loss of a transport." },
          securityChallenge: {
            es: "Un único enlace convierte cualquier corte del proveedor en una sucursal detenida.",
            en: "A single link turns any provider outage into a stopped branch." },
          pillars: ["routing", "switching"],
          products: ["Cisco Catalyst SD-WAN", "Cisco Catalyst 9000"],
          booths: ["nw_secure_wan", "cai_smartsw"],
          recommendation: {
            es: "Doble enlace, stacking y failover automático mantienen la operación ante la caída de un transporte.",
            en: "Dual link, stacking and automatic failover keep operations up through a transport failure." },
        },
      ],
    },

    distribution: {
      name: { es: "Centros de Distribución", en: "Distribution Centers" }, icon: "box",
      tagline: { es: "Almacén automatizado, del muelle al robot.", en: "Automated warehouse, from dock to robot." },
      useCases: [
        {
          id: "dist-urwb",
          title: { es: "Backhaul inalámbrico ultraconfiable", en: "Ultra-reliable wireless backhaul" },
          desc: { es: "Conectividad continua para robots móviles (AGV/AMR) en movimiento entre pasillos y muelles.",
                   en: "Continuous connectivity for mobile robots (AGV/AMR) moving between aisles and docks." },
          securityChallenge: {
            es: "El Wi-Fi tradicional pierde el enlace en el roaming y detiene al robot a media operación.",
            en: "Traditional Wi-Fi drops the link on roaming and stops the robot mid-operation." },
          pillars: ["wireless"],
          products: ["Cisco URWB", "Cisco Catalyst 9100/9200 Access Points"],
          booths: ["iot_ie", "nw_smart_access"],
          recommendation: {
            es: "Cisco URWB mantiene conectividad continua y determinística para los AGV/AMR en movimiento.",
            en: "Cisco URWB keeps continuous, deterministic connectivity for AGVs/AMRs on the move." },
        },
        {
          id: "dist-industrial",
          title: { es: "Cobertura industrial robusta", en: "Rugged industrial coverage" },
          desc: { es: "Red que opera con polvo, vibración y rangos térmicos amplios.",
                   en: "A network that operates with dust, vibration and wide thermal ranges." },
          securityChallenge: {
            es: "El hardware de oficina falla en el piso del almacén y genera cortes intermitentes.",
            en: "Office-grade hardware fails on the warehouse floor and causes intermittent outages." },
          pillars: ["switching"],
          products: ["Cisco Industrial Ethernet", "Cisco Catalyst 9000"],
          booths: ["iot_ie", "cai_smartsw"],
          recommendation: {
            es: "Los switches Cisco Industrial Ethernet están diseñados para el entorno industrial donde el hardware común falla.",
            en: "Cisco Industrial Ethernet switches are built for the industrial environment where common hardware fails." },
        },
        {
          id: "dist-pdm",
          title: { es: "Mantenimiento predictivo de bandas", en: "Predictive conveyor maintenance" },
          desc: { es: "Anticipar fallas de los sistemas de clasificación antes de una parada de producción.",
                   en: "Anticipate sorting-system failures before a production stop." },
          securityChallenge: {
            es: "Sin telemetría de los sensores, la falla mecánica se descubre cuando la banda ya paró.",
            en: "Without sensor telemetry, mechanical failure is discovered only after the conveyor has stopped." },
          pillars: ["observability", "switching"],
          products: ["Cisco Industrial Ethernet", "Splunk", "Meraki Dashboard"],
          booths: ["iot_ie", "te_assurance"],
          recommendation: {
            es: "Sensores sobre red industrial reportan vibración y temperatura, y la analítica anticipa la falla.",
            en: "Sensors over the industrial network report vibration and temperature, and analytics anticipate the failure." },
        },
        {
          id: "dist-otit",
          title: { es: "Segmentación OT/IT", en: "OT/IT segmentation" },
          desc: { es: "Separar la red de automatización de la red administrativa.",
                   en: "Separate the automation network from the administrative network." },
          securityChallenge: {
            es: "Una red plana permite que una amenaza de IT alcance el control físico del almacén.",
            en: "A flat network lets an IT threat reach the warehouse's physical control." },
          pillars: ["platform", "switching"],
          products: ["Cisco SD-Access", "Cisco ISE", "Cisco Cyber Vision"],
          booths: ["cai_stack", "iot_ie"],
          recommendation: {
            es: "SD-Access separa OT e IT en dominios de política independientes, reduciendo la superficie de ataque lateral.",
            en: "SD-Access separates OT and IT into independent policy domains, cutting the lateral attack surface." },
        },
        {
          id: "dist-traceability",
          title: { es: "Trazabilidad end-to-end", en: "End-to-end traceability" },
          desc: { es: "Lectores RFID y terminales de radiofrecuencia sobre una sola infraestructura gestionada.",
                   en: "RFID readers and RF terminals over a single managed infrastructure." },
          securityChallenge: {
            es: "Redes separadas para cada sistema de captura multiplican el costo y los puntos de falla.",
            en: "Separate networks for each capture system multiply cost and points of failure." },
          pillars: ["wireless", "platform"],
          products: ["Cisco Catalyst 9100/9200 Access Points", "Cisco Catalyst Center"],
          booths: ["nw_smart_access", "cai_stack"],
          recommendation: {
            es: "RFID y terminales de radiofrecuencia operan sobre el mismo Wi-Fi gestionado centralmente.",
            en: "RFID and RF terminals run over the same centrally managed Wi-Fi." },
        },
      ],
    },

    transportation: {
      name: { es: "Transporte", en: "Transportation" }, icon: "truck",
      tagline: { es: "Activos en movimiento, siempre conectados.", en: "Assets on the move, always connected." },
      useCases: [
        {
          id: "trans-mobile",
          title: { es: "Conectividad en movimiento", en: "Connectivity on the move" },
          desc: { es: "Conectividad LTE/5G para flotas, trenes y unidades de campo con failover entre operadores.",
                   en: "LTE/5G connectivity for fleets, trains and field units with carrier failover." },
          securityChallenge: {
            es: "Un solo operador móvil deja al vehículo sin conexión en zonas de baja cobertura.",
            en: "A single mobile carrier leaves the vehicle offline in low-coverage areas." },
          pillars: ["routing"],
          products: ["Cisco IR1800", "Cisco IR1101"],
          booths: ["nw_secure_wan", "iot_ie"],
          recommendation: {
            es: "Los routers Cisco IR1800/IR1101 dan conectividad LTE/5G con failover automático entre operadores.",
            en: "Cisco IR1800/IR1101 routers provide LTE/5G connectivity with automatic carrier failover." },
        },
        {
          id: "trans-edge",
          title: { es: "Edge computing a bordo", en: "On-board edge computing" },
          desc: { es: "Procesar video y telemetría en el vehículo y enviar solo lo relevante.",
                   en: "Process video and telemetry in the vehicle and send only what matters." },
          securityChallenge: {
            es: "Transmitir todo el video en vivo por LTE/5G es caro y poco práctico.",
            en: "Streaming all live video over LTE/5G is expensive and impractical." },
          pillars: ["compute", "routing"],
          products: ["Cisco IR1800", "Cisco UCS C-Series"],
          booths: ["cai_compute", "nw_secure_wan"],
          recommendation: {
            es: "El procesamiento local envía solo eventos relevantes, reduciendo drásticamente el costo de transporte de datos.",
            en: "Local processing sends only relevant events, drastically reducing data-transport cost." },
        },
        {
          id: "trans-roadside",
          title: { es: "Monitoreo de infraestructura vial", en: "Roadside infrastructure monitoring" },
          desc: { es: "Conectar semáforos, cámaras y sensores en gabinetes de intemperie.",
                   en: "Connect traffic lights, cameras and sensors in outdoor cabinets." },
          securityChallenge: {
            es: "Equipos de interior fallan en gabinetes expuestos a calor, humedad y polvo.",
            en: "Indoor gear fails in cabinets exposed to heat, humidity and dust." },
          pillars: ["switching", "wireless"],
          products: ["Cisco Industrial Ethernet", "Cisco Catalyst 9100/9200 Access Points"],
          booths: ["iot_ie", "nw_smart_access"],
          recommendation: {
            es: "Switches industriales y APs robustos conectan la infraestructura vial en intemperie de forma confiable.",
            en: "Industrial switches and rugged APs reliably connect roadside infrastructure outdoors." },
        },
        {
          id: "trans-fleet-mgmt",
          title: { es: "Gestión centralizada de miles de nodos", en: "Centralized management of thousands of nodes" },
          desc: { es: "Administrar unidades distribuidas geográficamente desde un solo panel.",
                   en: "Manage geographically distributed units from a single pane." },
          securityChallenge: {
            es: "Gestionar miles de nodos móviles uno por uno es inviable operativamente.",
            en: "Managing thousands of mobile nodes one by one is operationally unfeasible." },
          pillars: ["platform", "observability"],
          products: ["Meraki Dashboard", "Cisco Catalyst Center"],
          booths: ["cai_stack", "te_assurance"],
          recommendation: {
            es: "Meraki Dashboard administra las unidades distribuidas desde un solo panel en la nube.",
            en: "Meraki Dashboard manages the distributed units from a single cloud pane." },
        },
        {
          id: "trans-asset-sec",
          title: { es: "Seguridad del activo móvil", en: "Mobile asset security" },
          desc: { es: "Que cada vehículo se autentique como un endpoint más de la red corporativa.",
                   en: "Each vehicle authenticates as one more endpoint of the corporate network." },
          securityChallenge: {
            es: "Un vehículo sin identidad de red es un punto ciego y un riesgo de acceso no controlado.",
            en: "A vehicle with no network identity is a blind spot and an uncontrolled-access risk." },
          pillars: ["platform"],
          products: ["Cisco ISE", "Cisco IR1800"],
          booths: ["cai_stack", "nw_secure_wan"],
          recommendation: {
            es: "Cada vehículo se autentica con política y cifrado consistentes con la red corporativa.",
            en: "Each vehicle authenticates with policy and encryption consistent with the corporate network." },
        },
      ],
    },

    manufacturing: {
      name: { es: "Manufactura", en: "Manufacturing" }, icon: "factory",
      tagline: { es: "Planta conectada y segura, sin paros no planeados.", en: "Connected, secure plant with no unplanned downtime." },
      useCases: [
        {
          id: "mfg-deterministic",
          title: { es: "Red determinística para la línea", en: "Deterministic network for the line" },
          desc: { es: "Latencia predecible para los sistemas de control industrial.",
                   en: "Predictable latency for industrial control systems." },
          securityChallenge: {
            es: "Una red con jitter variable rompe los ciclos de control y detiene la línea.",
            en: "A network with variable jitter breaks control loops and stops the line." },
          pillars: ["switching"],
          products: ["Cisco Industrial Ethernet", "Cisco Catalyst 9000"],
          booths: ["iot_ie", "cai_smartsw"],
          recommendation: {
            es: "Cisco Industrial Ethernet con TSN entrega la latencia predecible que exigen los sistemas de control.",
            en: "Cisco Industrial Ethernet with TSN delivers the predictable latency control systems demand." },
        },
        {
          id: "mfg-quality",
          title: { es: "Inspección de calidad conectada", en: "Connected quality inspection" },
          desc: { es: "Los sistemas de visión envían imágenes a alta tasa sin competir con el tráfico administrativo.",
                   en: "Vision systems send images at a high rate without competing with administrative traffic." },
          securityChallenge: {
            es: "Sin priorización, el tráfico de oficina interfiere con la inspección en la línea.",
            en: "Without prioritization, office traffic interferes with in-line inspection." },
          pillars: ["switching", "observability"],
          products: ["Cisco Industrial Ethernet", "Cisco Catalyst Center"],
          booths: ["iot_ie", "te_assurance"],
          recommendation: {
            es: "La red industrial prioriza el tráfico de visión para que la inspección opere sin interferencia.",
            en: "The industrial network prioritizes vision traffic so inspection runs without interference." },
        },
        {
          id: "mfg-otsec",
          title: { es: "Ciberseguridad OT", en: "OT cybersecurity" },
          desc: { es: "Descubrir activos industriales y detectar patrones anómalos en el ICS sin agentes.",
                   en: "Discover industrial assets and detect anomalous ICS patterns with no agents." },
          securityChallenge: {
            es: "Los ICS no fueron diseñados para ciberseguridad y son invisibles para el SOC tradicional.",
            en: "ICS were not designed for cybersecurity and are invisible to the traditional SOC." },
          pillars: ["platform", "observability"],
          products: ["Cisco Cyber Vision", "Cisco Industrial Ethernet"],
          booths: ["iot_ie"],
          recommendation: {
            es: "Cisco Cyber Vision descubre activos, mapea comunicaciones y detecta anomalías en el ICS sin agentes.",
            en: "Cisco Cyber Vision discovers assets, maps communications and detects ICS anomalies with no agents." },
        },
        {
          id: "mfg-itot",
          title: { es: "Convergencia IT/OT controlada", en: "Controlled IT/OT convergence" },
          desc: { es: "Que planta y corporativo compartan infraestructura con dominios de política independientes.",
                   en: "Let plant and corporate share infrastructure with independent policy domains." },
          securityChallenge: {
            es: "Converger IT y OT sin control expone la planta a amenazas que antes no la alcanzaban.",
            en: "Converging IT and OT without control exposes the plant to threats that couldn't reach it before." },
          pillars: ["platform"],
          products: ["Cisco SD-Access", "Cisco ISE"],
          booths: ["cai_stack"],
          recommendation: {
            es: "SD-Access permite compartir la infraestructura física manteniendo dominios de política separados para planta y corporativo.",
            en: "SD-Access lets plant and corporate share physical infrastructure while keeping separate policy domains." },
        },
        {
          id: "mfg-availability",
          title: { es: "Disponibilidad como requisito de negocio", en: "Availability as a business requirement" },
          desc: { es: "Evitar que una falla de red detenga la producción.",
                   en: "Prevent a network failure from stopping production." },
          securityChallenge: {
            es: "En manufactura, cada minuto de paro por red cuesta miles y no es aceptable.",
            en: "In manufacturing, every minute of network downtime costs thousands and is unacceptable." },
          pillars: ["switching", "routing"],
          products: ["Cisco Industrial Ethernet", "Cisco Catalyst 9000"],
          booths: ["cai_smartsw", "iot_ie"],
          recommendation: {
            es: "Anillos redundantes y convergencia en milisegundos evitan que una falla de red detenga la producción.",
            en: "Redundant rings and millisecond convergence keep a network failure from stopping production." },
        },
      ],
    },
  },

  /* -------------------------------------------------------------------
     UI STRINGS (ES / EN)
     ------------------------------------------------------------------- */
  ui: {
    attract_kicker: { es: "Cisco AI Bridge · Cisco Connect Cancún 2026", en: "Cisco AI Bridge · Cisco Connect Cancún 2026" },
    attract_title: { es: "Infrastructure Blueprint", en: "Infrastructure Blueprint" },
    attract_sub: { es: "La base física para la era de la IA: del switch al servidor.", en: "The physical foundation for the AI era: from switch to server." },
    attract_cta: { es: "Toca para comenzar", en: "Tap to begin" },
    lang_label: { es: "EN", en: "ES" },

    path_title: { es: "¿Cómo quieres explorar?", en: "How do you want to explore?" },
    path_exp_title: { es: "Ya sé mi caso de uso", en: "I know my use case" },
    path_exp_desc: { es: "Cuéntame tu caso de uso y te muestro cómo la infraestructura Cisco lo habilita y qué booths visitar.",
                     en: "Tell me your use case and I'll show how Cisco infrastructure enables it and which booths to visit." },
    path_new_title: { es: "Ayúdame a descubrirlo", en: "Help me discover it" },
    path_new_desc: { es: "Elige tu industria y te guío por los casos de uso de infraestructura que identificamos para ti.",
                     en: "Pick your industry and I'll guide you through the infrastructure use cases we identified for you." },

    industry_title: { es: "Selecciona tu industria", en: "Select your industry" },
    usecase_title: { es: "Selecciona tu caso de uso", en: "Select your use case" },
    usecase_title_new: { es: "Casos de uso que identificamos", en: "Use cases we identified" },

    result_challenge: { es: "El reto de infraestructura", en: "The infrastructure challenge" },
    result_pillars: { es: "Pilares de infraestructura que aplican", en: "Infrastructure pillars that apply" },
    result_products: { es: "Portafolio Cisco recomendado", en: "Recommended Cisco portfolio" },
    result_reco: { es: "Cómo Cisco lo habilita", en: "How Cisco enables it" },
    result_booths: { es: "Booths que debes visitar", en: "Booths you should visit" },

    btn_back: { es: "Atrás", en: "Back" },
    btn_restart: { es: "Empezar de nuevo", en: "Start over" },
    btn_explore_pillars: { es: "Ver los 6 pilares", en: "See the 6 pillars" },
    pillars_title: { es: "Blueprint de Infraestructura · 6 Pilares", en: "Infrastructure Blueprint · 6 Pillars" },
    pillars_hint: { es: "Toca un pilar para ver los productos Cisco y por qué están ahí", en: "Tap a pillar to see the Cisco products and why they belong there" },
    pillar_products: { es: "Productos Cisco que lo habilitan", en: "Cisco products that enable it" },
    pillar_why: { es: "Por qué", en: "Why" },
    pillar_back: { es: "Volver a los 6 pilares", en: "Back to the 6 pillars" },

    footer: { es: "Cisco AI Bridge · Cisco Connect Cancún 2026 · © Cisco Systems México",
              en: "Cisco AI Bridge · Cisco Connect Cancún 2026 · © Cisco Systems Mexico" },
  },
};

if (typeof module !== "undefined" && module.exports) module.exports = BOOTH_DATA;
