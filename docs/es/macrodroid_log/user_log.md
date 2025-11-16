# Registro del Usuario

El **Registro de Usuario** en MacroDroid es un rastreador de actividad personalizable que registra solo lo que *tú* elijas.  
A diferencia del **Registro del Sistema**, que captura todo lo que sucede en segundo plano (incluyendo detalles a nivel del sistema), el Registro de Usuario se centra únicamente en los eventos que decides registrar mediante la acción **Registrar evento**.

Esto lo convierte en una herramienta ideal para monitorear acciones clave, depurar problemas específicos o simplemente mantener un historial limpio y relevante de tus macros.

---

## 📚 Qué se registra {#what_gets_recorded}

El Registro de Usuario solo incluye las entradas que configures explícitamente.  
Tienes control total sobre qué se registra y cómo se etiqueta.

- Eventos activados por la acción **Registrar evento**  
  *(por ejemplo: “Wi-Fi activado”, “SMS enviado”, “Modo silencio activado”)*  
- Etiquetas de categoría opcionales para organización  
  *(por defecto: **General**, o personalizadas como “Alertas de batería”, “Disparadores de ubicación”, etc.)*

Cada entrada del registro incluye:
- Una **marca de tiempo**
- Tu **mensaje personalizado**
- El **nivel de registro** asignado (explicado más abajo)
- La **categoría** correspondiente

---

## 🔢 Niveles de registro {#log_levels}

Los niveles de registro ayudan a priorizar, organizar y filtrar las entradas según su importancia.

| Nivel       | Descripción                                      | Ideal para                    |
|--------------|--------------------------------------------------|-------------------------------|
| Detallado    | Información minuciosa (ej. “Comprobando paso X”) | Depuración paso a paso        |
| Estándar     | Actividad general (ej. “Macro ejecutada”)        | Seguimiento diario            |
| Advertencias | Posibles problemas (ej. “Batería baja detectada”) | Detectar irregularidades      |
| Errores      | Fallos (ej. “Acción fallida”)                    | Identificar qué salió mal     |

Posteriormente puedes filtrar los registros por nivel para enfocarte en lo más relevante.

---

## 🏷️ Canal de registro de usuario {#user_log_channel}

El **canal de registro de usuario** funciona como una categoría que te permite organizar tus entradas.  
Puedes definir bajo qué “canal” se registrará cada evento, para luego filtrar y buscar fácilmente.  

**Ejemplos de canales:**
- General
- Alertas de batería
- Disparadores de ubicación
- Actividad de red
- Personalizado según tu necesidad

---

## 📤 Opciones de exportación y gestión {#export_&_management_options}

Desde el **menú ⋮** en la pantalla del Registro de Usuario, puedes:

| Opción                | Descripción                                                  |
|------------------------|--------------------------------------------------------------|
| Compartir registro (TXT) | Exporta como texto plano para leer o compartir fácilmente      |
| Compartir registro (HTML) | Exporta una versión con formato y colores para mayor claridad visual |
| Borrar registro         | Elimina todas las entradas y comienza desde cero              |
| Cambiar tamaño del texto | Ajusta el tamaño de fuente de Pequeño a Grande                |

---

## 💡 ¿Por qué usarlo? {#why_use_it}

- **Menos desordenado** que el Registro del Sistema: solo muestra lo que tú decides.  
- **Excelente para depuración**: puedes aislar un problema agregando puntos de registro estratégicos.  
- **Fácil de usar para principiantes**: no requiere conocimientos técnicos, solo tus propios mensajes.  
- **Potente para expertos**: útil para análisis detallado del flujo y seguimiento del comportamiento.  

Es como tu propio diario personalizado del comportamiento de las macros.  
Úsalo para validar disparadores, verificar condiciones o entender qué sucedió (y cuándo) durante la ejecución de una macro.

---