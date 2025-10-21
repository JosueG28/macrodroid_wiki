---
hide:
  - toc
---

# **Disparadores: El inicio de la automatización**

La función principal de **MacroDroid** es automatizar tareas en tu dispositivo — y todo comienza con un **Disparador**.  
Un Disparador es, esencialmente, la **“causa”** o **“evento”** que le indica a MacroDroid cuándo iniciar un **Macro**.

---

## ¿Qué es un Disparador?

Un **disparador** es un evento que tu dispositivo detecta. Cuando ese evento ocurre, y el macro está habilitado, las acciones que definiste se ejecutan.  
Cada macro debe tener **al menos un disparador** — sin él, tu macro nunca se iniciará.

**Ejemplo:**  
- Disparador: `Cargador conectado`  
- Acciones: `Mostrar notificación: Carga iniciada`

Si eres nuevo en MacroDroid, piensa en los disparadores como la parte del **"CUÁNDO"** de tu automatización:  
> “Cuando esto ocurra, haz aquello.”

[**📜 Ir a la lista completa de disparadores →**](list.md)

---

## Cómo funcionan los Disparadores

Los disparadores son monitoreados continuamente por MacroDroid en segundo plano. Funcionan con base en **cambios de estado** o **eventos específicos** que ocurren en tu dispositivo Android.

1. **Ocurre un evento:** Sucede algo en tu teléfono (por ejemplo, conectas el cargador, abres una app o llega una hora específica).  
2. **MacroDroid lo detecta:** MacroDroid reconoce este evento a través del **Disparador** configurado.  
3. **Se inicia el Macro:** Una vez que se cumple la condición del disparador, MacroDroid **inicia** el macro.

---

## Disparador único vs. múltiples disparadores

Un Macro puede configurarse para ejecutarse con uno o varios disparadores:

- **Disparador único:**  
  El macro se ejecuta cuando ocurre ese evento específico.

- **Múltiples disparadores:**  
  El macro se ejecuta cuando **cualquiera** de los disparadores listados ocurre — siempre y cuando ninguna **Restricción** lo impida.

**Nota:**  
Los disparadores no pueden combinarse usando lógica **AND** (por ejemplo, “Cargador conectado Y Audífonos conectados”), porque son eventos instantáneos — solo uno puede iniciar el macro a la vez.

**Alternativa:**  
Usa **restricciones** para controlar cuándo se permite que un disparador se active.

**Ejemplo:**  
- Disparador: `Cargador conectado`  
- Restricción: `Hora del día: 8:00 AM – 10:00 PM`  
➡ El macro solo se ejecutará durante esas horas.

---

Los disparadores son el **punto de inicio de toda automatización en MacroDroid**.  
Dominar su uso es clave para crear macros potentes y eficientes — comienza con algo sencillo, experimenta, y pronto estarás automatizando tu Android como un profesional.
