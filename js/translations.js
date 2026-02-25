const translations = {
    es: {
        // Menu
        menu_home: "INICIO",
        menu_about: "SOBRE MÍ",
        menu_projects: "PROYECTOS",
        menu_process: "PROCESO",
        menu_services: "SERVICIOS",
        menu_contact: "CONTACTO",
        resume_btn: "CV",

        // Home Section
        hero_phrase: '"Transformando la tecnología en soluciones inteligentes."',
        hero_sub: "Innovación, precisión y soluciones IoT a tu medida.",
        impact_title: "Trayectoria de Impacto",
        
        // Impact Cards
        industrial_mod_title: "Modernización Industrial",
        industrial_mod_text: "Sustitución de lógica obsoleta por sistemas embebidos PIC/STM32 en líneas de producción masiva. Implementación de contadores de precisión y sistemas de control adaptados a hardware legacy con enfoque en robustez.",
        process_opt_title: "Optimización de Procesos",
        process_opt_text: "Diseño de laboratorio de ONTs desde cero, logrando equiparar la productividad de 50 operarios con un equipo de solo 5 personas mediante flujos de trabajo por etapas y automatización en PyQt6.",
        eng_framework_title: "Framework de Ingeniería",
        eng_framework_text: "Aplicación de metodologías V-Modell XT y Modelo Espiral para garantizar trazabilidad total, reducción de errores post-venta y éxito en transferencias tecnológicas críticas (Salud y Energía).",

        // Work History
        work_history_title: "Historial Laboral",
        company_header: "Empresa",
        role_header: "Rol Principal",
        period_header: "Periodo",
        lab_head: "Jefatura Técnica de Lab",
        rd_engineer: "Ingeniero de I+D",
        eng_assistant: "Asistente de Ingeniería",
        eng_intern: "Pasante de Ingeniería",

        // Projects Section
        phase_guide: "Guía de Fases",
        phase_mvp_title: "FASE 1: MVP",
        phase_mvp_desc: "Prototipo funcional de bajo costo. Validación de concepto con herramientas Open Source.",
        phase_spiral_title: "FASE 2: SPIRAL",
        phase_spiral_desc: "Desarrollo iterativo de campo. Análisis de viabilidad técnica y económica.",
        phase_developing_title: "FASE: DEVELOPING",
        phase_developing_desc: "Proyecto en desarrollo activo. Integración de hardware y firmware.",
        phase_vmodel_title: "FASE 3: V-MODEL",
        phase_vmodel_desc: "Estandarización y calidad industrial. Trazabilidad total y pruebas formales.",
        
        project_progress: "Progreso",
        project_state: "Estado",
        project_repo: "VER REPOSITORIO",
        project_details: "Ver Detalles",
        project_details_active: "Ocultar Detalles",

        // Project 1: AgriNode Lite
        p1_desc: "Nodo IoT de sensado agroambiental.",
        p1_loc: "Laboratorio IoT (Monterrico, Lima)",
        p1_step1: "Diseño Esquemático",
        p1_step2: "Validación Sensores",
        p1_step3: "Optimización Energía",
        p1_step4: "Documentación",
        p_date_jan: "Ene",
        p_date_pending: "Pendiente",

        // Project 2: Dimmer PWM
        p2_desc: "Controlador de iluminación de alta eficiencia. Diseño de hardware compacto con regulación Buck integrada y firmware optimizado en C.",
        p2_loc: "Bernardperulabs (En desarrollo 2026)",
        p2_step1: "Investigación y Simulación Lógica",
        p2_step2: "Layout 3D y Esquemático Base",
        p2_step3: "Ruteado e Integración Buck Converter",
        p2_step4: "Fabricación y Pruebas de Carga",
        p_date_feb: "Feb",
        p_date_actual: "ACTUAL",
        p_date_prox: "Prox",

        // Project 3: Edge Computing
        p3_desc: "Sistema distribuido con validación real en Calango. Optimización de latencia y robustez en hardware embebido.",
        p3_loc: "Instalación en campo (Calango, Lima 2025)",
        p3_step1: "Despliegue e Instalación Física",
        p3_step2: "Telemetría App Móvil/Escritorio",
        p3_step3: "Análisis de Datos (95% PDR)",
        p3_step4: "Versión de Autor (LuaLaTeX)",
        p_date_oct: "Oct",
        p_date_nov: "Nov",
        p_date_dec: "Dic",

        // Services Section
        services_title: "Servicios Especializados",
        services_intro: "Ofrezco soluciones integrales de ingeniería, combinando el rigor del diseño industrial con la agilidad del prototipado moderno.",
        service_iot_title: "Sistemas Embebidos & IoT",
        service_iot_text: "Desarrollo de firmware robusto en C/C++ y conectividad Edge-to-Cloud. Especialista en arquitecturas de bajo consumo y protocolos industriales.",
        service_legacy_title: "Modernización Legacy",
        service_legacy_text: "Actualización de sistemas industriales antiguos (Retrofitting). Sustitución de lógica discreta por control digital inteligente sin cambiar la infraestructura base.",
        service_pcb_title: "Diseño de PCB (EDA)",
        service_pcb_text: "Diseño profesional de circuitos impresos en KiCad. Desde el esquema hasta los archivos Gerber para fabricación masiva, priorizando la integridad de señal.",
        service_consulting_title: "Consultoría & V&V",
        service_consulting_text: "Documentación técnica avanzada en LuaLaTeX. Pruebas de verificación y validación (V&V) bajo estándares de calidad industrial.",

        // Process Section
        process_main_title: "⚙️ Metodología de Ingeniería",
        process_quote: '"No diseñamos para que funcione una vez; diseñamos para que sea reproducible, eficiente y resiliente al entorno real."',
        process_intro: "Mi metodología no es lineal; es una progresión de tres estados que garantiza la transición exitosa desde la idea en el silicio hasta la estandarización industrial.",
        
        process_phase1_title: "Prototipado Iterativo (MVP)",
        process_phase1_obj: "Validación técnica de concepto al menor costo posible",
        process_phase1_li1: "Metodología: Ciclos rápidos de diseño, implementación y prueba (Iterative Prototyping)",
        process_phase1_li2: "Herramientas: Uso de software Gratuito / Open Source para minimizar la inversión inicial",
        process_phase1_li3: "Hardware/Firmware: Prototipado en PIC16F1939 con periféricos nativos (MSSP, I2C, Timer0)",
        process_phase1_li4: "Estrategia: Enfoque en funcionalidad crítica (Happy Path) y comunicación Edge-to-Cloud",

        process_phase2_title: "Desarrollo de Campo (Modelo Espiral)",
        process_phase2_obj: "Análisis de riesgos, viabilidad económica y robustez",
        process_phase2_li1: "Metodología: Aplicación del Modelo Espiral para evaluar cada iteración del MVP",
        process_phase2_li2: "Acción de Ingeniería: Evaluación de Costo/Beneficio de las tecnologías utilizadas en el prototipo",
        process_phase2_li3: "Análisis Crítico: ¿Las soluciones gratuitas son escalables? ¿El ruido industrial requiere componentes de grado profesional?",
        process_phase2_li4: "Hardware: Optimización de consumo energético y diseño de PCB profesional en KiCad",

        process_phase3_title: "Estandarización (V-Modell XT)",
        process_phase3_obj: "Calidad industrial, verificación formal y cierre de proyecto",
        process_phase3_li1: "Metodología: Implementación del estándar V-Modell XT para asegurar trazabilidad total del dato",
        process_phase3_li2: "Verificación y Validación (V&V): Cada requerimiento validado sistemáticamente (desde el bit en el registro hasta la gráfica en el Dashboard)",
        process_phase3_li3: "Documentación: Generación de manuales técnicos, certificados de funcionamiento y hojas de datos en LuaLaTeX",
        process_phase3_li4: "Resultado: Un producto reproducible, documentado y listo para despliegue masivo",
        
        tooling_title: "💻 Entorno de Ejecución (Tooling)",
        tooling_intro: "La eficiencia de este proceso se apoya en una automatización profunda dentro de mi ecosistema Linux",
        tool_auto_title: "Automatización",
        tool_auto_text: "Uso de Fish Shell y Makefiles para flujos de compilación y quemado (pk2cmd) sin intervención manual",
        tool_ai_title: "IA Asistida",
        tool_ai_text: "Integración de Antigravity y Cursor para refactorización de código y análisis de lógica en tiempo real",
        tool_git_title: "Control de Versiones",
        tool_git_text: "Gestión consciente de estados de archivos en Git para mantener un historial de cambios granular durante las fases del modelo espiral",
        tool_doc_title: "Documentación Viva",
        tool_doc_text: "Sincronización entre Obsidian (notas de ingeniería) y el repositorio central del proyecto",

        // About Section
        about_profile_title: "Perfil Profesional",
        about_profile_text: "Ingeniero Electrónico con enfoque en desarrollo embebido, automatización e infraestructura IoT. Especialista en integrar hardware y software mediante metodologías industriales (V-Modell XT) para crear soluciones escalables.",
        about_skills_title: "Competencias Técnicas",

        skill_cat_embedded: "Embedded / IoT",
        skill_cat_ai: "AI-Assisted Dev",
        skill_cat_toolstack: "Toolstack & OS",

        skill_ai_desc: "Integración de LLMs (Gemini/Claude) para optimización de lógica y refactorización.",
        skill_lang_title: "Idiomas",
        skill_lang_en: "Inglés:",
        skill_lang_en_level: "Nivel B1 (TOEFL ITP: 507)",
        skill_lang_desc: "Traducción técnica y preventa estratégica.",

        skill_legend_active: "Uso activo",
        skill_legend_active_desc: "Herramienta actual",
        skill_legend_prev: "Previa",
        skill_legend_prev_desc: "Experiencia anterior",

        about_philosophy_title: "Filosofía de Trabajo",
        about_philosophy_quote: '"La robustez industrial nace de la trazabilidad y el rigor metodológico."',
        phil_li1: "Validación sistemática (V&V)",
        phil_li2: "Documentación técnica de precisión",
        phil_li3: "Sostenibilidad de hardware legacy",
        phil_li4: "Eficiencia operativa mediante IA",

        // Contact Section
        contact_title: "Conectemos",
        contact_intro: "¿Tienes un proyecto de IoT en mente o quieres profundizar en los detalles técnicos de mi trayectoria? Estoy disponible para colaborar.",
        contact_location_title: "Ubicación",
        contact_location_text: "Monterrico, Lima - Perú",
        contact_form_title: "Envíame un Mensaje",
        contact_form_name: "Tu Nombre",
        contact_form_email: "tu@email.com",
        contact_form_msg: "¿Cómo puedo ayudarte?",
        contact_form_send: "ENVIAR MENSAJE"
    },
    en: {
        // Menu
        menu_home: "HOME",
        menu_about: "ABOUT ME",
        menu_projects: "PROJECTS",
        menu_process: "PROCESS",
        menu_services: "SERVICES",
        menu_contact: "CONTACT",
        resume_btn: "RESUME",

        // Home Section
        hero_phrase: '"Transforming technology into intelligent solutions."',
        hero_sub: "Innovation, precision, and tailored IoT solutions.",
        impact_title: "Impact Trajectory",
        
        // Impact Cards
        industrial_mod_title: "Industrial Modernization",
        industrial_mod_text: "Substitution of obsolete logic with PIC/STM32 embedded systems in mass production lines. Implementation of precision counters and control systems adapted to legacy hardware with a focus on robustness.",
        process_opt_title: "Process Optimization",
        process_opt_text: "Design of ONT laboratory from scratch, matching the productivity of 50 operators with a team of only 5 people through stage-based workflows and automation in PyQt6.",
        eng_framework_title: "Engineering Framework",
        eng_framework_text: "Application of V-Modell XT and Spiral Model methodologies to guarantee total traceability, reduction of post-sale errors, and success in critical technology transfers (Health and Energy).",

        // Work History
        work_history_title: "Work History",
        company_header: "Company",
        role_header: "Primary Role",
        period_header: "Period",
        lab_head: "Lab Technical Head",
        rd_engineer: "R&D Engineer",
        eng_assistant: "Engineering Assistant",
        eng_intern: "Engineering Intern",

        // Projects Section
        phase_guide: "Phase Guide",
        phase_mvp_title: "PHASE 1: MVP",
        phase_mvp_desc: "Low-cost functional prototype. Concept validation with Open Source tools.",
        phase_spiral_title: "PHASE 2: SPIRAL",
        phase_spiral_desc: "Field iterative development. Technical and economic feasibility analysis.",
        phase_developing_title: "PHASE: DEVELOPING",
        phase_developing_desc: "Project under active development. Hardware and firmware integration.",
        phase_vmodel_title: "PHASE 3: V-MODEL",
        phase_vmodel_desc: "Industrial standardization and quality. Total traceability and formal testing.",
        
        project_progress: "Progress",
        project_state: "Status",
        project_repo: "VIEW REPOSITORY",
        project_details: "View Details",
        project_details_active: "Hide Details",

        // Project 1: AgriNode Lite
        p1_desc: "IoT node for agro-environmental sensing.",
        p1_loc: "IoT Lab (Monterrico, Lima)",
        p1_step1: "Schematic Design",
        p1_step2: "Sensor Validation",
        p1_step3: "Power Optimization",
        p1_step4: "Documentation",
        p_date_jan: "Jan",
        p_date_pending: "Pending",

        // Project 2: Dimmer PWM
        p2_desc: "High-efficiency lighting controller. Compact hardware design with integrated Buck regulation and C-optimized firmware.",
        p2_loc: "Bernardperulabs (In development 2026)",
        p2_step1: "Research and Logic Simulation",
        p2_step2: "3D Layout and Base Schematic",
        p2_step3: "Routing and Buck Converter Integration",
        p2_step4: "Manufacturing and Load Testing",
        p_date_feb: "Feb",
        p_date_actual: "CURRENT",
        p_date_prox: "Prox",

        // Project 3: Edge Computing
        p3_desc: "Distributed system with real validation in Calango. Latency optimization and robustness in embedded hardware.",
        p3_loc: "Field installation (Calango, Lima 2025)",
        p3_step1: "Deployment and Physical Installation",
        p3_step2: "Mobile/Desktop App Telemetry",
        p3_step3: "Data Analysis (95% PDR)",
        p3_step4: "Author Version (LuaLaTeX)",
        p_date_oct: "Oct",
        p_date_nov: "Nov",
        p_date_dec: "Dec",

        // Services Section
        services_title: "Specialized Services",
        services_intro: "I offer integral engineering solutions, combining industrial design rigor with modern prototyping agility.",
        service_iot_title: "Embedded Systems & IoT",
        service_iot_text: "Robust firmware development in C/C++ and Edge-to-Cloud connectivity. Specialist in low-power architectures and industrial protocols.",
        service_legacy_title: "Legacy Modernization",
        service_legacy_text: "Retrofitting of old industrial systems. Substitution of discrete logic with intelligent digital control without changing base infrastructure.",
        service_pcb_title: "PCB Design (EDA)",
        service_pcb_text: "Professional printed circuit design in KiCad. From schematic to Gerber files for mass production, prioritizing signal integrity.",
        service_consulting_title: "Consulting & V&V",
        service_consulting_text: "Advanced technical documentation in LuaLaTeX. Verification and validation (V&V) tests under industrial quality standards.",

        // Process Section
        process_main_title: "⚙️ Engineering Methodology",
        process_quote: '"We don\'t design for it to work once; we design for it to be reproducible, efficient, and resilient to the real environment."',
        process_intro: "My methodology is not linear; it's a three-state progression that guarantees successful transition from idea in silicon to industrial standardization.",
        
        process_phase1_title: "Iterative Prototyping (MVP)",
        process_phase1_obj: "Technical concept validation at the lowest cost possible",
        process_phase1_li1: "Methodology: Fast cycles of design, implementation, and testing (Iterative Prototyping)",
        process_phase1_li2: "Tools: Use of Free / Open Source software to minimize initial investment",
        process_phase1_li3: "Hardware/Firmware: Prototyping on PIC16F1939 with native peripherals (MSSP, I2C, Timer0)",
        process_phase1_li4: "Strategy: Focus on critical functionality (Happy Path) and Edge-to-Cloud communication",

        process_phase2_title: "Field Development (Spiral Model)",
        process_phase2_obj: "Risk analysis, economic feasibility, and robustness",
        process_phase2_li1: "Methodology: Application of the Spiral Model to evaluate each MVP iteration",
        process_phase2_li2: "Engineering Action: Cost/Benefit evaluation of technologies used in the prototype",
        process_phase2_li3: "Critical Analysis: Are free solutions scalable? Does industrial noise require professional-grade components?",
        process_phase2_li4: "Hardware: Energy consumption optimization and professional PCB design in KiCad",

        process_phase3_title: "Standardization (V-Modell XT)",
        process_phase3_obj: "Industrial quality, formal verification, and project closure",
        process_phase3_li1: "Methodology: Implementation of the V-Modell XT standard to ensure total data traceability",
        process_phase3_li2: "Verification and Validation (V&V): Each requirement systematically validated (from the bit in the register to the graph in the Dashboard)",
        process_phase3_li3: "Documentation: Generation of technical manuals, performance certificates, and datasheets in LuaLaTeX",
        process_phase3_li4: "Result: A reproducible, documented product ready for mass deployment",
        
        tooling_title: "💻 Execution Environment (Tooling)",
        tooling_intro: "The efficiency of this process is supported by deep automation within my Linux ecosystem.",
        tool_auto_title: "Automation",
        tool_auto_text: "Use of Fish Shell and Makefiles for compilation and burning flows (pk2cmd) without manual intervention",
        tool_ai_title: "AI-Assisted",
        tool_ai_text: "Integration of Antigravity and Cursor for code refactoring and real-time logic analysis",
        tool_git_title: "Version Control",
        tool_git_text: "Conscious management of file states in Git to maintain a granular change history during the spiral model phases",
        tool_doc_title: "Live Documentation",
        tool_doc_text: "Synchronization between Obsidian (engineering notes) and the central project repository",

        // About Section
        about_profile_title: "Professional Profile",
        about_profile_text: "Electronic Engineer focused on embedded development, automation, and IoT infrastructure. Specialist in integrating hardware and software through industrial methodologies (V-Modell XT) to create scalable solutions.",
        about_skills_title: "Technical Competencies",

        skill_cat_embedded: "Embedded / IoT",
        skill_cat_ai: "AI-Assisted Dev",
        skill_cat_toolstack: "Toolstack & OS",

        skill_ai_desc: "Integration of LLMs (Gemini/Claude) for logic optimization and refactoring.",
        skill_lang_title: "Languages",
        skill_lang_en: "English:",
        skill_lang_en_level: "B1 Level (TOEFL ITP: 507)",
        skill_lang_desc: "Technical translation and strategic pre-sales.",

        skill_legend_active: "Active use",
        skill_legend_active_desc: "Current tool",
        skill_legend_prev: "Previous",
        skill_legend_prev_desc: "Prior experience",

        about_philosophy_title: "Work Philosophy",
        about_philosophy_quote: '"Industrial robustness is born from traceability and methodological rigor."',
        phil_li1: "Systematic Validation (V&V)",
        phil_li2: "Precision Technical Documentation",
        phil_li3: "Legacy Hardware Sustainability",
        phil_li4: "Operational Efficiency through IA",

        // Contact Section
        contact_title: "Let's Connect",
        contact_intro: "Have an IoT project in mind or want to delve into the technical details of my trajectory? I'm available for collaboration.",
        contact_location_title: "Location",
        contact_location_text: "Monterrico, Lima - Peru",
        contact_form_title: "Send me a Message",
        contact_form_name: "Your Name",
        contact_form_email: "you@email.com",
        contact_form_msg: "How can I help you?",
        contact_form_send: "SEND MESSAGE"
    }
};

export default translations;
