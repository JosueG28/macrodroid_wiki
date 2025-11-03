# Variables en MacroDroid

Las variables almacenan y manipulan datos en tus macros: son contenedores que guardan valores que tus macros usan y pueden cambiar durante la ejecución.

- **Variables Globales**  
  - Sintaxis: `{v=nombreVar}` o `[v=nombreVar]`  
  - Disponibles en **todas las macros**, incluyendo los **Bloques de Acción**  
  - Ideales para compartir datos entre macros o mantener información persistente  

- **Variables Locales**  
  - Sintaxis: `{lv=nombreVar}` o `[lv=nombreVar]`  
  - Solo disponibles **dentro de la macro** donde fueron creadas (incluyendo Bloques de Acción llamados por esa macro)  
  - Perfectas para valores privados o específicos de una macro, por ejemplo, una **API Key** que solo se usará en esa macro.  
  - En este caso, se recomienda marcarla como **Variable Segura**.  

> Usa variables Globales para datos persistentes o compartidos.  
> Usa variables Locales para datos aislados o confidenciales.

---

## Variables Seguras

Marca las variables como **Seguras** para que su contenido se elimine al compartir, exportar o subir macros a la tienda de plantillas.  
Esto protege información sensible como contraseñas, tokens o claves privadas.

---

## Uso de Variables en Condiciones, Restricciones y Campos de Texto

Las variables pueden usarse en:

- **Condiciones** (por ejemplo: “si `isLoggedIn` es verdadero”)  
- **Restricciones** (por ejemplo: “ejecutar solo si `batteryLevel` > 50”)  
- **Campos de texto** usando `{v=tuVariable}` o `{lv=tuVariable}`  
- **Entradas de Texto Mágico** en múltiples acciones  

Los valores de las variables son **persistentes**, pero pueden cambiar si usas acciones como **Establecer variable**, **Limpiar valor**, o si una acción de salida (como **HTTP Request**, **Shell Script**, o **Text Manipulation**) sobreescribe su valor.

---

## Resumen rápido

- **Global:** `{v=nombreVar}` — datos compartidos y persistentes  
- **Local:** `{lv=nombreVar}` — datos privados o específicos de una macro  
- **Segura:** oculta datos sensibles en exportaciones  

Las variables son el cerebro de tus macros. Domínalas para aprovechar todo el potencial de MacroDroid.

---

## Videos recomendados

<iframe width="560" height="315" src="https://www.youtube.com/embed/0V_EcyhxrpA?si=Mvq51zfOQaU4AWbe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
 
<iframe width="560" height="315" src="https://www.youtube.com/embed/u2zY5dv34CM?si=8n0rwJRhtAcNFnh6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


Las variables almacenan y manipulan datos en tus macros: son contenedores que guardan valores que tus macros usan y pueden cambiar durante la ejecución.

- **Variables Globales**  
  - Sintaxis: `{v=nombreVar}` o `[v=nombreVar]`  
  - Disponibles en **todas las macros**, incluyendo los **Bloques de Acción**  
  - Ideales para compartir datos entre macros o mantener información persistente  

- **Variables Locales**  
  - Sintaxis: `{lv=nombreVar}` o `[lv=nombreVar]`  
  - Solo disponibles **dentro de la macro** donde fueron creadas (incluyendo Bloques de Acción llamados por esa macro)  
  - Perfectas para valores privados o específicos de una macro, por ejemplo, una **API Key** que solo se usará en esa macro.  
  - En este caso, se recomienda marcarla como **Variable Segura**.  

> Usa variables Globales para datos persistentes o compartidos.  
> Usa variables Locales para datos aislados o confidenciales.

---

## Variables Seguras

Marca las variables como **Seguras** para que su contenido se elimine al compartir, exportar o subir macros a la tienda de plantillas.  
Esto protege información sensible como contraseñas, tokens o claves privadas.

---

## Uso de Variables en Condiciones, Restricciones y Campos de Texto

Las variables pueden usarse en:

- **Condiciones** (por ejemplo: “si `isLoggedIn` es verdadero”)  
- **Restricciones** (por ejemplo: “ejecutar solo si `batteryLevel` > 50”)  
- **Campos de texto** usando `{v=tuVariable}` o `{lv=tuVariable}`  
- **Entradas de Texto Mágico** en múltiples acciones  

Los valores de las variables son **persistentes**, pero pueden cambiar si usas acciones como **Establecer variable**, **Limpiar valor**, o si una acción de salida (como **HTTP Request**, **Shell Script**, o **Text Manipulation**) sobreescribe su valor.

---

## Resumen rápido

- **Global:** `{v=nombreVar}` — datos compartidos y persistentes  
- **Local:** `{lv=nombreVar}` — datos privados o específicos de una macro  
- **Segura:** oculta datos sensibles en exportaciones  

Las variables son el cerebro de tus macros. Domínalas para aprovechar todo el potencial de MacroDroid.

---

## Videos recomendados

<iframe width="560" height="315" src="https://www.youtube.com/embed/0V_EcyhxrpA?si=Mvq51zfOQaU4AWbe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
 
<iframe width="560" height="315" src="https://www.youtube.com/embed/u2zY5dv34CM?si=8n0rwJRhtAcNFnh6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
