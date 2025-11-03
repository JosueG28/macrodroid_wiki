# Tipos de Variables Soportados

MacroDroid admite varios tipos de variables para almacenar distintos tipos de datos.  
Cada tipo define qué clase de información puede contener y cómo se comporta dentro de las macros.  
Comprenderlas bien te ayudará a construir macros más potentes y organizadas.

---

### 🧾 Cadena

Almacena **valores de texto**, como palabras, frases, nombres o cualquier combinación de caracteres.

**Ejemplos:**
- `"Hola mundo"`
- `"Temperatura actual: 25°C"`
- `"https://api.example.com/login"`

**Usos comunes:**
- Mostrar texto en notificaciones o acciones de TTS.  
- Almacenar resultados de peticiones HTTP o comandos Shell.  
- Construir mensajes dinámicos concatenando texto y otras variables.  

**Ejemplo de uso en Magic Text:**  
`La hora actual es `{hour}:{minute} {am_pm}`

---

### 🔢 Entero

Almacena **números enteros**, positivos o negativos, sin decimales.

**Ejemplos:**
- `0`, `10`, `-25`, `2025`

**Usos comunes:**
- Contadores (por ejemplo, cuántas veces se ha ejecutado una macro).  
- Controlar bucles (por ejemplo, repetir X veces).  
- Comparar números en condiciones (por ejemplo, `si batería > 50`).  

**Ejemplo práctico:**
> Crea un contador que aumente cada vez que se conecte el Wi-Fi:
> - Acción → **Set Variable** → `contadorWiFi = contadorWiFi + 1` or `contadorWiFi = value + 1`

---

### 🔣 Decimal

Almacena **números con decimales** para cálculos más precisos.

**Ejemplos:**
- `3.14`, `-0.01`, `25.75`

**Usos comunes:**
- Operaciones matemáticas con valores fraccionarios (temperatura, distancia, tiempo).  
- Resultados de acciones como “Calcular expresión matemática”.  
- Promedios o porcentajes.  

**Ejemplo práctico:**
> Guardar el resultado de una operación:
> - Acción → **Set Variable** → `promedio = (valor1 + valor2) / 2`

---

### ⚙️ Booleano

Almacena un valor lógico **verdadero o falso**.

**Ejemplos:**
- `true`, `false`

**Usos comunes:**
- Controlar el flujo de una macro (por ejemplo, ejecutar una acción solo si `isEnabled` es verdadero).  
- Activar o desactivar funciones sin eliminar acciones.  
- Usar como bandera (“flag”) para evitar ejecuciones repetidas.  

**Ejemplo práctico:**
> Si `modoNoche` es verdadero, activa el modo oscuro.  

---

### 📋 Arreglo

Almacena **una lista ordenada de valores**, todos accesibles mediante su índice (posición).

**Ejemplos:**
- `[1, 2, 3, 4]`
- `["Lunes", "Martes", "Miércoles"]`
- `[{"nombre": "Alex"}, {"nombre": "Sara"}]`

**Usos comunes:**
- Almacenar listas de nombres, URLs, números o configuraciones.  
- Recorrer los elementos con la acción **Iterate Dictionary/Array**.  
- Crear menús dinámicos o listas personalizadas.  

**Ejemplo práctico:**
> Usar un Array para elegir un mensaje aleatorio:  
> - `mensajes = ["Hola!", "¿Cómo estás?", "¡Buen día!"]`  
> - Acción → **Iterate Dictionary/Array** → mostrar en notificación.  

---

### 🗂️ Diccionario

Almacena **pares clave-valor**, donde cada clave tiene un valor asociado.  
Permite organizar información estructurada como si fuera un pequeño objeto JSON.

**Ejemplos:**
- `{"nombre": "Alex", "edad": 30}`
- `{"ciudad": "Guadalajara", "pais": "México"}`
- `{"usuario": {"nombre": "Josué", "activo": true}}`

**Usos comunes:**
- Guardar configuraciones, respuestas de APIs o datos agrupados.  
- Acceder a valores específicos usando su clave (por ejemplo, `usuario.nombre`).  
- Crear estructuras más complejas combinando Arrays y Diccionarios.  

**Ejemplo práctico:**
> Guardar datos de un usuario después de un HTTP Request:  
> - `usuario = {"nombre": "Josué", "premium": true, "nivel": 4}`  
> - Luego puedes acceder a `{v=usuario[nombre]}` o `{v=usuario[nivel]}`  

---

> 💡 **Consejo:**  
> Usa **Arrays** y **Diccionarios** cuando necesites trabajar con colecciones o estructuras de datos más complejas.  
> Usa **Strings**, **Integers**, **Decimals** y **Booleans** para valores simples o directos.
