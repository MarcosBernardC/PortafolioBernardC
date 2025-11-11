## 🧩 **PROJECTS** – Integración y Desarrollo Embebido

### **1️⃣ SmartGrow Node – Sistema IoT para diagnóstico de cultivos**

**Tipo:** Proyecto de tesis – Nodo inteligente de monitoreo ambiental.  
**Hardware:** PIC16F1939 + ESP32 + sensores de luz y humedad de suelo + SD + RTC.  
**Software:** C embebido, Python (análisis de logs), MQTT, Fish automation.  
**Descripción:**  
Desarrollo de un sistema distribuido de nodos con sensores ambientales que registran datos de humedad, temperatura y luz, enviándolos vía ESP32 a un servidor MQTT.  
Incluye registro automático en SD, comunicación UART y scripts Fish para backup y análisis en Linux.

**Automatización destacada:**

- Compilación y test automatizados con Makefile + Fish.
    
- Logs UART convertidos a CSV por Python.
    
- Respaldo automático en GitHub con control de versiones.
    

**Valor técnico:**  
Demuestra integración hardware-software, optimización de recursos embebidos y documentación reproducible.

---

### **2️⃣ PyMonitor RF – Plataforma de monitoreo local con IA**

**Tipo:** Proyecto experimental – Sistema de diagnóstico y análisis con interfaz PyQt6.  
**Hardware:** Transceptores RF + Raspberry Pi.  
**Software:** PyQt6 + FastAPI + SQLite + IA para análisis de patrones.  
**Descripción:**  
Interfaz gráfica para Garuda Linux (Hyprland) que visualiza datos en tiempo real de nodos RF distribuidos.  
Incorpora un modelo ligero de IA para detectar anomalías o fallas en sensores.  
Permite control local, logging automático y sincronización opcional con GitHub.

**Automatización destacada:**

- Scripts Fish para ejecución y despliegue rápido.
    
- Integración PyQt6 con backend Python y SQLite.
    
- AI embebida para predicción y diagnóstico.
    

**Valor técnico:**  
Fusiona sistemas embebidos, GUI nativa y análisis inteligente, optimizada para entornos Linux minimalistas.

---

### **3️⃣ EdgeHub32 – Gateway IoT modular con optimización distribuida**

**Tipo:** Proyecto en desarrollo – Gateway y coordinador inteligente.  
**Hardware:** ESP32 + OLED I²C + sensores de temperatura y luminosidad.  
**Software:** PlatformIO + Python + MQTT + TensorFlow Lite.  
**Descripción:**  
Diseño de un gateway IoT que centraliza datos de múltiples nodos, aplica preprocesamiento con IA y los envía a la nube o a un dashboard local.  
Incluye visualización OLED, optimización de consumo energético y scripts automáticos de sincronización.

**Automatización destacada:**

- Compilación CLI con PlatformIO.
    
- Registro continuo con Python y visualización en tiempo real.
    
- Optimización AI para reducción de ruido y predicción local.
    

**Valor técnico:**  
Demuestra escalabilidad, integración IA embebida y orquestación modular de nodos IoT.

---

## ⚙️ **SERVICES** – Soluciones Técnicas Personalizadas

**1️⃣ Desarrollo Embebido**  
Diseño de firmware optimizado para microcontroladores (PIC, ESP32, Raspberry Pi), con comunicación UART, I²C, SPI y RF.

**2️⃣ Automatización de Procesos Técnicos**  
Scripts personalizados (Fish, Bash, Python) para compilación, testing, backup y despliegue automatizado en entornos Linux.

**3️⃣ Integración IoT y Cloud**  
Diseño de arquitecturas distribuidas con MQTT, APIs REST y dashboards locales o remotos.

**4️⃣ Interfaz Gráfica y Control Local (Linux / PyQt6)**  
Aplicaciones visuales personalizadas para monitoreo y diagnóstico de sistemas embebidos.

**5️⃣ Optimización y Depuración Inteligente**  
Análisis de rendimiento, diagnóstico predictivo y mejora continua asistida por IA.