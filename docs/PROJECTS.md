## 🧩 **PROJECTS** – Integración y Desarrollo Embebido

### **Proyecto 1: AgriNode Lite (Electrónica)**

**Objetivo:** Medir variables agroambientales con un nodo sensor.

**Detalles:**

* **Microcontrolador:** PIC16F1939
    
- **Sensores:** Temperatura (DHT22 o DS18B20), humedad del suelo (YL-69 o capacitivo), luz (BH1750)
    
- **Comunicación:** UART/Serial (para luego conectarlo a la PC)
    
- **Salida:** Datos en consola serial
    

**Extras opcionales:**
    
- Alimentación con batería + regulador (3.3V o 5V según sensor)
    

**Valor:** Refuerza conceptos de electrónica, sensores y comunicación serial.

---

### **Proyecto 2: AgriNode Manager (Software)**

**Objetivo:** Interfaz de usuario para visualizar y controlar el nodo sensor desde la PC.

**Stack:**

- **Lenguaje:** Python
    
- **GUI:** PyQt6
    
- **Comunicación:** pyserial para leer datos del nodo
    
- **Funcionalidades:**
    
    - Conexión/desconexión al puerto serial
        
    - Visualización en tiempo real de temperatura, humedad y luz
        
    - Registro de datos en CSV local
        
    - Alertas visuales si alguna variable supera un umbral
        

**Extras opcionales:**

- Gráficos en tiempo real con matplotlib o pyqtgraph
    
- Guardar configuraciones de umbrales
    

**Valor:** Consolidar habilidades en GUI, comunicación serial y manejo básico de datos.

---

### **Proyecto 3: AgriNode Cloud (Software + Base de Datos + Web)**

**Objetivo:** Guardar datos de los nodos en una base de datos y visualizarlos desde cualquier lugar.

**Stack sugerido:**

- **Base de datos:** PostgreSQL (local o free-tier en Heroku, Supabase, Railway)
    
- **Backend:** Python (FastAPI o Flask)
    
- **Frontend:** HTML + CSS + JS básico (o un dashboard simple con Plotly Dash)
    
- **Flujo:**
    
    1. Nodo envía datos → script Python en PC → API → PostgreSQL
        
    2. Web dashboard consulta la base de datos → visualiza en gráficos
        

**Extras opcionales:**

- Alertas por correo o Telegram si algún sensor está fuera de rango
    
- Filtrado de datos por fechas, promedios diarios, exportación CSV
    

**Valor:** Integración de electrónica, software y cloud. Aprendizaje completo de stack, bases de datos, API y dashboards.