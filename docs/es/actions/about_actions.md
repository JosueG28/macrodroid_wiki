# Introducción a las Acciones

## Descripción {#description}
Una acción es algo que tu dispositivo puede hacer cuando se ejecuta una macro. Para que una macro sea válida, debe tener al menos una acción.  
Las acciones son los "hacedores" de MacroDroid: realizan tareas como enviar un mensaje, ajustar el volumen, hacer una solicitud HTTP o ejecutar un script, entre muchas otras.

## Cuándo Usarlas {#when_to_use_them}
Las acciones se utilizan para automatizar tareas en respuesta a triggers (desencadenantes) o condiciones.  
Son esenciales para cualquier macro, ya que definen qué sucede una vez que se activa.  
Por ejemplo, si un trigger detecta que llegas a casa, una acción podría encender las luces o reproducir música.

## Tipos de Acciones {#types_of_actions}  
MacroDroid ofrece una amplia variedad de acciones categorizadas para facilitar su uso:  
- **Dispositivo y Sistema:** Ajustar brillo, volumen, Wi-Fi, Bluetooth, etc.  
- **Aplicaciones:** Lanzar apps, simular toques, copiar texto.  
- **Red y Comunicación:** Enviar SMS, emails, solicitudes HTTP.  
- **Variables y Lógica:** Establecer variables, bucles, condicionales.  
- **Avanzadas:** Scripts shell, plugins, interacciones con otros dispositivos.  

Puedes explorar todas desde el selector de acciones al editar una macro.

## ¿Qué pasa con acciones que tardan?  {#what_about_actions_that_take_time}

La mayoría de las acciones se ejecutan al instante, pero algunas **toman tiempo**, como solicitudes HTTP, scripts largos o acciones que dependen de accesibilidad.

MacroDroid maneja esto de dos maneras:

- **Acciones síncronas:** Terminan *antes* de que continúe la siguiente acción.
- **Acciones asíncronas:** Empiezan, pero la macro sigue corriendo en paralelo.

Si necesitas que MacroDroid espere a que la acción termine, activa la opción:

**“Bloquear la siguiente acción hasta completar”**

Esto es clave cuando necesitas usar datos obtenidos por una acción que tarda.

## ¿Y si la acción es asíncrona y necesito su resultado? {#what_if_the_action_is_asynchronous_and_i_need_its_result}

MacroDroid **no tiene callbacks** ni un sistema para “cuando termine, ejecuta esto otro”, como en lenguajes de programación.  
La forma práctica de manejar esto es usando alguno de estos métodos:

- **Guardar el resultado en una variable**.
- **Usar Wait o un bucle** hasta que cambie esa variable.
- **Activar otra macro** cuando el resultado esté listo (por variable global, evento, etc.).

**Caso:** Haces una solicitud HTTP para obtener un precio.

- Si necesitas usar ese valor *inmediatamente*, activa **Bloquear la siguiente acción hasta completar** en la acción HTTP.  
- Si no quieres bloquear:
  - Guarda la respuesta en una variable,
  - pon un **Wait**,
  - revisa esa variable más adelante,
  - o dispara otra macro cuando cambie.

**¿Qué pasa si no usas bloqueo y validas datos?** Si una acción asíncrona no ha terminado cuando intentas usar sus datos (por ejemplo, en una validación o condicional), los datos no estarán disponibles. La macro podría fallar, saltar pasos o usar valores incorrectos (como vacíos, anteriores o predeterminados).  
Para evitarlo, siempre incluye condiciones que manejen esto: verifica si la variable ha cambiado antes de proceder, o usa un bucle para esperar.


## Limitaciones Importantes {#important_limitations}
- Algunas acciones requieren permisos especiales (e.g., root para scripts shell avanzados).
- Acciones asíncronas sin bloqueo pueden complicar flujos si no se manejan bien.
- No todas las acciones devuelven datos directamente; usa variables para capturar resultados.
- En dispositivos con restricciones (e.g., Android 10+), algunas acciones como accesibilidad necesitan configuración extra.

## Ejemplo Simple: "Ajustar Volumen al Llegar a Casa" {#simple_example}
- **Trigger:** Ubicación (llegada a casa).
- **Acción:** Establecer Volumen (Multimedia a 50%).
- **Resultado:** Al detectar tu llegada, el volumen se ajusta automáticamente.