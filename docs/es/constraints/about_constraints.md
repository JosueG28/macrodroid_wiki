# Introducción a las Restricciones

## Descripción
Una restricción en MacroDroid es una herramienta opcional que te permite controlar cuándo se activa una macro o una acción específica.  
Se basan en condiciones que deben cumplirse para permitir o prevenir la ejecución de macros y acciones.  
Las restricciones actúan como "guardianes" que verifican si es el momento adecuado para que algo suceda, añadiendo lógica condicional a tus automatizaciones.

## Cuándo Usarlas
Usa restricciones para refinar el comportamiento de tus macros y evitar ejecuciones innecesarias o en momentos inapropiados.  
Si un trigger detecta *“pantalla encendida”*, una restricción podría validar que la hora esté entre 8:00 AM y 10:00 PM antes de activar una acción como ajustar el brillo o activar el modo lectura.  
Esto evita que la macro se dispare a medianoche cuando no tiene sentido.

## Tipos de Restricciones  
MacroDroid ofrece una variedad de restricciones categorizadas para mayor facilidad:  
- **Dispositivo y Estado:** Batería, modo avión, orientación de pantalla, etc.  
- **Tiempo y Fecha:** Día de la semana, hora específica, intervalo.  
- **Ubicación y Conectividad:** Wi-Fi, Bluetooth geovalla, GPS.  
- **Variables y Lógica:** Valor de variable, comparación, expresiones regulares.  
- **Aplicaciones y Eventos:** App en primer plano, notificación recibida, etc.  
- **Lógicas Avanzadas:** AND/OR/XOR/NOT para anidar condiciones complejas.  

Puedes explorarlas todas en el selector de restricciones al editar una macro.

## Aplicación de Restricciones
Las restricciones se pueden aplicar de diferentes maneras para mayor control:

- **A toda la macro:** En la pestaña 'Restricciones' al final de la macro. La macro solo se activa si todas las restricciones se cumplen.
- **A triggers individuales:** Selecciona un trigger, toca 'Añadir Restricción'. El trigger solo se considera si la restricción es verdadera.
- **A acciones individuales:** Selecciona una acción, toca 'Añadir Restricción'. La acción solo se ejecuta si la restricción se cumple.

Esto permite precisión: por ejemplo, restringe una acción solo si la batería está por encima del 20%.

## Anidamiento de Restricciones (Lógica Avanzada)
Para lógica más sofisticada, usa la restricción especial **AND/OR/XOR/NOT**.  
Cualquier restricción anidada bajo esta se evalúa con ese operador lógico. Puedes anidar múltiples para crear condiciones complejas.  

Ejemplo de estructura:

```
│ - Restricción 1 (e.g., Batería > 50%)
│ - OR
│ - Restricción 2 (e.g., Wi-Fi conectado)
│ - Restricción 3 (e.g., Bluetooth activo)
```


En este caso, la Restricción 1 debe ser verdadera **Y** al menos una de (Restricción 2 **O** Restricción 3) debe ser verdadera.

Usa esto para combinar condiciones de forma inteligente, como "Ejecuta solo si es de día Y (estás en casa O en el trabajo)".

## Beneficios Clave
- **Precisión:** Evita ejecuciones accidentales y ahorra batería/recursos.
- **Flexibilidad:** Combina con triggers y acciones para automatizaciones inteligentes.
- **Lógica Compleja:** Anidamiento permite reglas avanzadas sin programación.
- **Eficiencia:** Macros más limpias y seguras, con condiciones integradas.

## Limitaciones Importantes
- Las restricciones son opcionales; sin ellas, la macro se ejecuta siempre que el trigger se active.
- El anidamiento lógico puede volverse complejo; prueba con macros simples primero.
- Algunas restricciones requieren permisos (e.g., ubicación para GPS).
- No sustituyen a condicionales en acciones; úsalas para control global o por elemento.

## Ejemplo Simple: "Notificación Solo en Casa"
- **Trigger:** Batería baja (<20%).
- **Acción:** Enviar notificación ("Carga el teléfono").
- **Restricción:** Ubicación (en casa).
- **Resultado:** La notificación solo aparece si estás en casa, evitando alertas innecesarias fuera.

