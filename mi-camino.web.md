# 📓 THE 365-DAY DEV JOURNEY: Jose Aparicio ES-VERSION
> **"La lógica es mi superpoder, la sintaxis es solo la herramienta."**

## 🚀 MI "UPGRADE" DE CARRERA: DE HOSPITALITY A WEB DEVELOPER

Este diario no es solo una lista de temas estudiados; es el **registro de ingeniería** de mi transición profesional. Tras más de 8 años gestionando equipos y resolviendo crisis en el sector de la **Hostelería (UK y España)**, estoy aplicando esa misma resiliencia y capacidad de resolución al mundo del desarrollo de software.

### 🛠️ ¿QUÉ VAS A ENCONTRAR EN ESTE LOGBOOK?
Para un reclutador, la duda siempre es: *¿Realmente sabe resolver problemas?*. Aquí documento mi lucha diaria, mis errores de lógica y mis victorias técnicas para demostrar tres cosas:

* **Consistencia Inquebrantable:** Un registro diario de mi evolución, sin filtros.
* **Mentalidad de Debugging:** No solo muestro el código que funciona, sino cómo **"derribé el edificio"** para construir cimientos más sólidos cuando las cosas se pusieron difíciles.
* **Seniority en Actitud:** Mi experiencia previa no es un paréntesis; es el **motor** que acelera mi capacidad de aprendizaje y mi visión de producto orientada al usuario real.

# 🧭 Roadmap de Aprendizaje (Vista Mensual)

| Mes | Tema Principal | Proyectos y Retos | Habilidades Clave |
| :--- | :--- | :--- | :--- |
| **Enero** | ✅ **Fundamentos Web (freeCodeCamp)** | Web Campus & Crema Teatinos, Formularios de Registro | HTML5 Semántico, CSS3, Maquetación básica. |
| **Febrero** | 🔥 **Especialización CSS & JS (Meta)** | Mangata & Gallo, Juego de Cartas, App de Reservas (WIP), Sistema de Niveles | CSS in Depth, Lógica de Arrays, Funciones, Manipulación del DOM. |
| **Marzo** | 🏗️ **Próximamente** | *Por definir...* | *Por definir...* |

---

## 🗓️ [Día 20 de Febrero, 2026]
### 📝 Resumen del Día
Hoy he alcanzado mi primer **"clic" mental importante**. Mi enfoque no ha sido solo escribir líneas de código, sino dominar el arte del **debugging** y entender el flujo de control profundo en JavaScript y la jerarquía de selectores en CSS.

### 🛠️ Conceptos Técnicos Dominados:

* **💻 JavaScript: Lógica y Estructura**
    * **Gestión de Variables:** Perfeccioné el uso de `let` y la reasignación dinámica.
    * **Template Literals:** Implementé el uso de backticks (`` ` ``) para inyectar variables en strings de forma limpia.
    * **Operador de Módulo (%):** Clave para resolver la lógica de precios según productos pares/impares.
    * **Scope de Bloque:** Entendí por qué las variables declaradas con `let` viven y mueren dentro de las llaves `{}`.

* **🎨 CSS: Maquetación y Selectores**
    * **Box Model:** Análisis profundo de **padding**, **border** y **margin** para evitar el desbordamiento de contenedores.
    * **Interacción (UX):** Uso de pseudoclases `:hover` para feedback visual.
    * **Selectores de Relación:** `+` (Hermano adyacente) y `~` (Hermano general).

### 🧩 Resolución de Problemas (Debug Log)
* **Logro del momento:** He construido mi primer periódico digital desde cero. 
* **Correcciones:** He corregido errores de sintaxis en **text-transform** y he aprendido a diferenciar **font-weight** de **font-family**. 
* **Estado:** Mi estructura de **Flexbox** está empezando a tener sentido.

> **💡 Mi Nota Mental:** "La lógica es mi superpoder, la sintaxis es solo la herramienta."

---

## 🗓️ [Día 22 de Febrero, 2026]
### 🔨 Forjando el Formulario de Odin project
Hoy he terminado el proyecto del formulario de registro y, sinceramente, **el cambio de nivel se nota**. No solo he picado código, sino que he tomado decisiones de diseño y he usado herramientas profesionales.

### 🧠 Lo que he aprendido hoy:
* **📐 Grid y Alineación Real:** He dominado cómo dividir la pantalla en columnas (`2fr 3fr`) y cómo usar `grid-template-columns: 1fr 1fr` dentro del formulario para que todos los inputs queden perfectamente alineados en parejas sin que se muevan según el texto.
* **🖋️ Jerarquía Tipográfica:** He reservado la fuente **Norse** para el branding y el botón de acción, y he usado **Inter** para que los textos largos y los labels se lean sin esfuerzo.
* **🌑 Sombras con Intención:** He pasado de las sombras genéricas que no me gustaban a crear una sombra direccional (**Bottom Shadow**) usando el eje Y (`box-shadow: 0 8px 15px rgba(0,0,0,0.1)`). Ahora el formulario parece que flota, no que está sucio.
* **✨ Micro-interacciones:** He configurado un efecto `:hover` profesional que no solo cambia el color, sino que eleva el botón con `transform: translateY(-3px)`. Se siente **"vivo"**.

---

## 🗓️ [Día 23 de Febrero, 2026]
### 🚀 "Hoy he dejado de hacer una web 'que funciona' para hacer una web profesional"
Hoy ha sido un día de una **intensidad brutal**. He saltado del diseño visual a la lógica pura, enfrentándome a problemas que separan a los aficionados de los desarrolladores reales. 

### 📱 La Batalla por la Adaptabilidad (Responsive Design)
No me he conformado con que la web se vea bien en mi monitor. He luchado con las **Media Queries** para que la experiencia sea fluida en móviles y tablets:
* **El cambio de estrategia:** He tenido que refactorizar el contenedor principal. Lo que en escritorio era un Grid organizado, en pantallas pequeñas lo he transformado en un Flexbox con `flex-direction: column`.
* **Superando el Caos del CSS:** Mi mayor dificultad aquí ha sido la **Cascada de CSS**. Los estilos globales se daban de bofetadas con los de las Media Queries. He tenido que aprender a priorizar y organizar mis selectores para que la web no se **"rompiera"** al encoger la ventana.

### 🎨 Perfeccionando la Experiencia (UI & UX Avanzado)
He querido que el usuario sienta que está en una web de calidad premium:
* **🔍 Validación Inteligente:** He implementado la pseudoclase `:user-invalid`. Me volví loco al principio porque los bordes rojos salían nada más cargar la página, lo cual era súper agresivo. Ahora, el feedback solo aparece después de que el usuario interactúa. Es un detalle de **"pro"**.
* **⚡ Micro-interacciones:** He añadido efectos de `transition` y `transform` en los `input:focus`. Ahora los campos **"reaccionan"** cuando vas a escribir, dándole un toque táctil y moderno.
* **✍️ Tipografía de Élite:** He configurado las fuentes **'Norse'** e **'Inter'** ajustando el `letter-spacing`. He aprendido que el diseño está en los detalles invisibles.

### 🥊 JavaScript y la Lógica de Reservas (El gran reto)
> **"De la frustración al éxito: Cómo construí el motor de Campus & Crema"**

1.  **El Momento del "Borrón y Cuenta Nueva":** Empecé el día con un código que era una jungla. En lugar de seguir poniendo parches, tomé la decisión más difícil pero más inteligente: **empezar de cero**. He aprendido que, en programación, a veces hay que derribar el edificio para construir unos cimientos sólidos. He definido mi Array de `mesasOcupadas` con precisión, entendiendo que cada dato cuenta.
2.  **El Laberinto de la Sintaxis (Mis dificultades):**
    * **La guerra de los símbolos:** Al principio me volvía loco con el `=` y el `===`. Me frustraba ver que el **"semáforo"** no cambiaba de color. He descubierto que usar `(estaOcupada === true)` dentro de un bucle es como hacer una pregunta al aire sin anotar la respuesta. La solución fue entender que necesitaba una orden directa: `estaOcupada = true;`.
    * **El caos de los paréntesis y llaves:** Ha sido mi mayor reto. He tenido errores de **"gramática"** de código que me daban ganas de mandarlo todo a paseo. Paréntesis que abrían pero no cerraban, o ese `if` que se quedaba cojo por no tener su **"cajita"** de paréntesis.
    * **El punto y coma traicionero:** Hubo un momento en que puse un punto y coma justo después de un `for`, bloqueando todo el motor. Aprender a **"ver"** estos errores invisibles ha sido un entrenamiento visual increíble.

> **🧠 Reflexión Final (Error Lógico):** Hoy he visto que el desarrollo web es un equilibrio. De nada sirve un JS perfecto si la web se ve mal en un iPhone, y de nada sirve un CSS precioso si el botón de reserva no sabe distinguir una hora libre de una ocupada. El error lógico de hoy ha sido entender que el diseño y la lógica son un solo cuerpo.

---

## 🗓️ [Día 24 de Febrero, 2026]
### 🏋️ "Sesión de Entrenamiento: Algoritmos y Estructuras de Datos"

### 🚀 Logros del día (Basados en ejercicios)
* **💼 Resolución de Casos de Uso:** He realizado una serie de ejercicios prácticos simulando entornos reales (E-commerce, Sistemas de Login y Perfiles de Usuario).
* **⚙️ Construcción de Lógica Dinámica:** A través de retos, he aprendido a generar estructuras de HTML dinámico mediante funciones y **Template Literals**.
* **📂 Arquitectura de Información:** He practicado la anidación de datos, integrando **Arrays dentro de Objetos** para gestionar perfiles complejos.

### 🥊 La "pelea" con el código (Aprendizaje basado en errores)
Hoy la sesión de prácticas ha sido un **"combate" constante** contra la sintaxis y la lógica:
* **⚔️ Guerra de Símbolos:** Durante los ejercicios, me **"pelee"** con el uso de `()` vs `{}` vs `[]`. Tras varios intentos fallidos, he consolidado que las llaves son para objetos y los corchetes para listas.
* **↪️ El desafío del "Return":** En las prácticas de funciones, identifiqué el error común de intentar usar **return** fuera de su ámbito o confundirlo con **console.log**.
* **🧪 Mutación vs Asignación:** En el reto de gestión de inventario, sufrí las consecuencias de usar `=` en lugar de `.push()`, aprendiendo por las malas cómo un error de asignación puede destruir una base de datos de strings.


## 🗓️ [Día 25 de Febrero, 2026]

### 🚀 [Logros del Día](#)

* **`🔵 Motor de Estado Circular`**: Creación de un bucle lógico que incrementa del 1 al 10 y reinicia a `0` al llegar al nivel 11.

* **`🔵 Modo Legendario`**: Disparador visual (escala, bordes dorados y brillo) al alcanzar el nivel máximo.

### 🥊 [La "Pelea" con el Código (Depuración Real)](#)

* **↪️ El Conflicto del Else (Limpieza Prematura):**
    * **Fallo:** Al volver a 0, el efecto dorado desaparecía tan rápido que mataba la experiencia del usuario.
    * **Solución:** Reorganización del flujo `if/else` para priorizar la persistencia visual del hito alcanzado.

* **🧪 Pesadilla de Sintaxis:**
    * **Fallo:** Código muerto por un paréntesis extra `{(this...` y por usar puntos `.` dentro de `classList`.
    * **Solución:** Consolidación de sintaxis: `classList` no lleva punto y los bloques de código deben estar limpios de caracteres huérfanos.

    ### 🏆 [Prueba visuual del logro](#)
    
    ![Subida de nivel](./cardsrestart.gif)
  
    
    ---

### 🏋️ "Sesión de Entrenamiento por la tarde : Diagnóstico y Gestión de Errores en JS (Meta - Coursera)"

### 🚀 Logros del día
* **`🔴 Formación Especializada`**: Avance en el curso de **Meta en Coursera**, profundizando en la resiliencia del código a través de la gestión de errores.
* **`🔴 Clasificación de Errores`**: Identificación y resolución de los 4 jinetes del apocalipsis en JS: **Reference**, **Type**, **Range** y **Syntax**.
* **`🔴 Estructuras de Control de Fallos`**: Implementación de bloques `try...catch` para crear aplicaciones profesionales que no se detienen ante fallos inesperados.
* **`🔴 Anatomía del Objeto Error`**: Uso de las propiedades `.name` y `.message` para extraer información crítica durante el debugging.

### 🥊 La "pelea" con el código (Tipos de errores detectados)

* **⚔️ El Error de Referencia (ReferenceError):** * **Fallo:** Llamar a una variable no declarada.
    * **Lección:** Sin `let` o `const`, JavaScript no encuentra el "personaje" en memoria.
* **⚔️ El Conflicto de Tipos (TypeError):** * **Fallo:** Usar métodos incompatibles (ej: `.toUpperCase()` en un número).
    * **Lección:** Cada tipo de dato tiene sus propias herramientas; no puedes batir un huevo con un destornillador.
* **⚔️ Fuera de Rango (RangeError):** * **Fallo:** Valores numéricos fuera de los límites legales (ej: `new Array(-1)`).
    * **Lección:** Forzar los límites lógicos de JS detiene el motor de ejecución.
* **⚔️ La Barrera de la Sintaxis (SyntaxError):** * **Fallo:** Olvidar una llave `}` o un paréntesis `)`.
    * **Lección:** Es un error de gramática que impide que el código siquiera arranque.

### 🧠 Reflexión de Ingeniería: El Error Lógico
Gracias a los materiales de **Meta**, hoy he interiorizado que los errores lógicos son los más críticos porque la consola no te avisa. La revisión constante y el pensamiento crítico son nuestra mejor defensa.

---