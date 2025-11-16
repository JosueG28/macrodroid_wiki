# Registro del Sistema

El **Registro del Sistema** es el diario de actividad de MacroDroid donde se registran todos los eventos de la aplicación.  
Es esencial para solucionar problemas y entender cómo funcionan tus automatizaciones. Aquí tienes lo que necesitas saber:

---

## 📚 ¿Qué se Registra? {#what_gets_recorded}

- Activaciones de disparadores (p. ej., "WiFi conectado")  
- Acciones realizadas (p. ej., "Notificación enviada")  
- Verificaciones de restricciones (p. ej., "Restricción de nivel de batería aprobada")  
- Cambios en variables (p. ej., "Variable [v=my_var] actualizada")  
- Errores y alertas  
- Tiempos de inicio y fin de macros  

---

## 🔢 Niveles del Registro {#log_levels}

MacroDroid categoriza las entradas según su importancia:

| Nivel       | Qué Muestra                                                                                     | Caso de Uso                                           |
|-------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------|
| **Detallado** | Cada paso individual (p. ej., "Verificando restricción: Hora entre 8:00-9:00")                          | Depuración profunda – muy detallado                   |
| **Estándar** | Hitos clave (p. ej., "Macro 'Apagar Alarma' activada", "Acción: Volumen ajustado a 0")                 | Monitoreo diario (recomendado)                   |
| **Alertas** | Problemas no críticos, como condiciones mal configuradas o parámetros inválidos en acciones           | Revisar problemas potenciales                         |
| **Errores**   | Fallos críticos, incluyendo incompatibilidades (p. ej., el dispositivo carece de recursos), permisos faltantes, errores en acciones/disparadores o problemas internos de MacroDroid (p. ej., respaldo en la nube fallido) | Arreglar macros rotas                                 |

---

## 🔍 Filtrado del Registro  {#filtering_the_log}

Toca el **icono de filtro** (arriba a la derecha) para reducir los resultados:

*Filtros por:*  
- **Tipos de Eventos**:  
  - ✅ Disparadores  
  - ✅ Acciones  
  - ✅ Restricciones  
  - ✅ Variables  
- **Macros**:  
  - Mostrar macros específicas o **Todas las Macros**  
- **Variables**:  
  - Rastrear variables individuales  

---

## 📤 Opciones de Exportación y Gestión {#export_&_management_options}

Usa el menú **⋮** (arriba a la derecha) para:

| Opción                   | Descripción                                           |
|---------------------------|-------------------------------------------------------|
| **Compartir registro**       | Exportar como texto plano – ideal para compartir             |
| **Compartir registro (HTML)**      | Informe formateado con colores – más fácil de leer        |
| **Limpiar registro**             | Eliminar todas las entradas y empezar de nuevo                   |
| **Tamaño del texto**      | Ajustar el tamaño de la fuente (Pequeño → Grande)                     |

---

## ⚙️ Avanzado: Deshabilitar el Registro para Macros Específicas {#disabling_logging_for_specific_macros}

Para evitar que el registro se llene de entradas repetitivas de macros de alta frecuencia (p. ej., una que verifica la batería cada minuto), puedes deshabilitar el registro por completo para macros individuales:

1. Abre la macro para editarla.
2. En el editor de la macro, toca el menú **⋮ (3 puntos)** en la esquina superior derecha.
3. Busca el interruptor **"Permitir registro"** y desactívalo (desmarca) para detener todas las entradas de esa macro.

Además, en el mismo menú, puedes seleccionar **"Mostrar registro"** para ver solo las entradas del registro de esta macro específica.

Esto mantiene tu registro enfocado en eventos importantes sin afectar la funcionalidad de la macro. Reactiva "Permitir registro" cuando depures esa macro específica.

---

## 💡 Consejos Pro {#pro_tips}

1. **Depuración**: Cuando una macro se comporte mal, revisa el registro para ver dónde falló  
2. **Marca de Tiempo**: Todas las entradas incluyen la hora exacta de ejecución  
3. **Codificación por Colores**: Errores (púrpura), Alertas (naranja)  
4. **Evita el Desorden**: Usa la deshabilitación por macro para automatizaciones frecuentes y mantén un registro limpio y útil  

> ¡El registro se desplaza automáticamente para mostrar las entradas más recientes – perfecto para monitoreo en tiempo real!

**Entrada de ejemplo:**  
`[12:30:43]  Activando macro: Notificación de Luz en Bordes`  
`[12:30:45]  Notificación recibida`  
`[12:30:47]  Mostrar luz en bordes`