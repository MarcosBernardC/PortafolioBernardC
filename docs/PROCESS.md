## 🛠️ PROCESS – Prototipado Iterativo + Automatización

**Metodología de trabajo:**

- **Iterativa y modular:** implemento módulos de hardware/software por separado y los integro paso a paso, verificando comunicación, logs y resultados.
    
- **Automatización desde terminal:** todo flujo de compilación, pruebas y backup se realiza con scripts reproducibles en Fish + Starship.
    
- **Registro y depuración:** logs automáticos via UART/Python, registro de errores y alertas en Linux, permitiendo depuración remota y reproducible.
    
- **Optimización de memoria y performance:** uso estructuras eficientes, buffers reutilizables y flags de compilación optimizados.
    

---

### **Ejemplo de flujo de trabajo (PIC16F1939 + ESP32)**

**1️⃣ Compilación PIC (Makefile + Fish function)**

`function build_pic     set CHIP 16F1939     set PROJ_DIR (pwd)     set BACKUP_DIR ~/backups/$(date '+%Y%m%d_%H%M%S')     mkdir -p $BACKUP_DIR      # Compila todos los módulos automáticamente     xc8 --chip=$CHIP *.c -o $PROJ_DIR/main.hex      # Copia hex a directorio de test     cp $PROJ_DIR/main.hex ~/test/      # Backup timestamped     cp -r $PROJ_DIR/* $BACKUP_DIR/      echo "✅ Build + Copy + Backup completado" end`

- Automatiza **compilación, test y backup** con un solo comando.
    

---

**2️⃣ Compilación ESP32 desde CLI (PlatformIO / Arduino CLI)**

`#!/usr/bin/env fish set LOG_FILE "build_$(date '+%Y%m%d_%H%M%S').log"  # Compila proyecto PlatformIO pio run ^&> $LOG_FILE  # Check errores if test $status -ne 0     echo "❌ Compilación fallida. Revisa $LOG_FILE" else     echo "✅ Compilación exitosa. Log guardado en $LOG_FILE" end`

- Permite **compilar sin abrir IDE**, con log automático y check de errores.
    

---

**3️⃣ Debug I2C / Nodo distribuido**

`import serial, datetime  ser = serial.Serial('/dev/ttyUSB0', 115200) with open(f"i2c_log_{datetime.datetime.now().strftime('%Y%m%d_%H%M%S')}.txt", "w") as f:     while True:         line = ser.readline().decode().strip()         print(line)         f.write(f"{datetime.datetime.now()}: {line}\n")         if "ERROR" in line:             print("⚠ Nodo falla detectada")`

- Monitorea **fallas en nodos automáticamente**, registra timestamps y alerta errores.
    
- Complementa el **printer.c** y LEDs del microcontrolador.
    

---

**4️⃣ Optimización memoria y performance**

- Reutilización de buffers globales, minimización de variables temporales.
    
- Tipos ajustados (`uint8_t` en vez de `int`) y paso por punteros de structs grandes.
    
- Logs en UART para monitoreo runtime:
    

`#define LOG_MEM_USAGE() printer_printf("Heap used: %d\n", get_free_ram());`

- Permite **medir consumo de memoria** y depurar sin afectar funcionalidad.
    

---

**5️⃣ Resumen de ventajas de tu proceso iterativo**

| Ventaja          | Cómo se implementa                                                      |
| ---------------- | ----------------------------------------------------------------------- |
| Rapidez          | Iteraciones cortas, cada módulo probado por separado                    |
| Reproducibilidad | Scripts Fish + Makefiles aseguran misma compilación siempre             |
| Debug remoto     | Logs Python + UART, alertas automáticas en Linux                        |
| Optimización     | Uso eficiente de RAM/Flash, flags de compilación, buffers reutilizables |
| Flexibilidad     | Cambio de hardware o microcontrolador sin rehacer todo el flujo         |