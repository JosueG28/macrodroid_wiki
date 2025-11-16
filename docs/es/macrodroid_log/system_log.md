# Registro del Sistema

El **Registro del Sistema** es el diario de actividad de MacroDroid donde se registran todos los eventos de la aplicación.  
Es fundamental para solucionar problemas y comprender cómo funcionan tus automatizaciones. Esto es lo que necesitas saber:

---

## 📚 Qué se registra

- Activaciones de disparadores (ej.: "WiFi conectado")  
- Acciones realizadas (ej.: "Notificación enviada")  
- Comprobaciones de restricciones (ej.: "Restricción de batería superada")  
- Cambios en variables (ej.: "Variable [v=mi_var] actualizada")  
- Errores y advertencias  
- Horas de inicio y finalización de macros  

---

## 🔢 Niveles de registro

MacroDroid categoriza las entradas según su importancia:

| Nivel       | Qué muestra                                                                                     | Caso de uso                                      |
|-------------|-------------------------------------------------------------------------------------------------|-------------------------------------------------|
| **Detallado** | Cada paso (ej.: "Comprobando restricción: Hora entre 8:00-9:00")                               | Depuración profunda – muy detallado            |
| **Estándar**  | Hitos clave (ej.: "Macro 'Alarma Apagada' activada", "Acción: Volumen ajustado a 0")          | Monitoreo diario (recomendado)                 |
| **Alertas**   | Problemas no críticos, como configuraciones incorrectas de condiciones o parámetros inválidos en acciones | Revisión de posibles problemas                  |
| **Errores**   | Fallos críticos, incluyendo incompatibilidades (ej.: dispositivo con recursos insuficientes), falta de permisos, errores de acciones/disparadores o problemas internos de MacroDroid (ej.: backup en la nube no realizado) | Corregir macros rotas                            |

---

## 🔍 Filtrar el registro

Toca el **icono de filtro** (arriba a la derecha) para limitar los resultados:

*Filtrar por:*  
- **Tipos de evento**:  
  - ✅ Disparadores  
  - ✅ Acciones  
  - ✅ Restricciones  
  - ✅ Variables  
- **Macros**:  
  - Mostrar macros específicas o **Todas las macros**  
- **Variables**:  
  - Seguir variables individuales  

---

## 📤 Opciones de exportación y gestión

Usa el **menú ⋮** (arriba a la derecha) para:

| Opción                 | Descripción                                        |
|------------------------|----------------------------------------------------|
| **Compartir registro (TXT)**  | Exporta como texto plano – ideal para compartir |
| **Compartir registro (HTML)** | Reporte formateado y con colores – más fácil de leer |
| **Borrar registro**           | Elimina todas las entradas (comenzar desde cero) |
| **Cambiar tamaño del texto**  | Ajusta el tamaño de fuente (Pequeño → Grande) |

---

## 💡 Consejos profesionales

1. **Depuración**: Cuando una macro falla, revisa el registro para ver dónde ocurrió el problema  
2. **Marca de tiempo**: Todas las entradas incluyen la hora exacta de ejecución  
3. **Código de colores**: Errores (morado), Alertas (naranja)  

> El registro se desplaza automáticamente para mostrar las últimas entradas, ¡perfecto para monitoreo en tiempo real!

**Ejemplo de entrada:**  
`[12:30:43]  Invoking macro: Notificación con luz en bordes`  
`[12:30:45]  Notificación recibida`  
`[12:30:47]  Mostrar luz en los bordes`  
