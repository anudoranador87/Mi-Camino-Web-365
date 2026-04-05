# Dev Log 365 — Diario público de aprendizaje / Public Learning Log

🇪🇸 [Español](#español) · 🇬🇧 [English](#english)

🌐 **[Ver en vivo / Live](https://anudoranador87.github.io/Mi-Camino-Web-365/)**

---

## Español

### Qué es esto

Diario técnico de mi transición de hostelería a frontend. 365 días documentados sin filtros.

Cada entrada documenta una sesión de estudio: errores reales, decisiones de arquitectura, código que funciona y código que no, y por qué. Los días sin entrada son días que no estudié. Sin relleno.

**Esto no es un tutorial. Es el proceso.**

---

### Clonar y ver en local

```bash
git clone https://github.com/anudoranador87/Mi-Camino-Web-365.git
cd Mi-Camino-Web-365
open index.html
```

Sin npm. Sin build tools. Sin dependencias. Funciona directamente en el navegador.

---

### Qué hay dentro

```
Mi-Camino-Web-365/
├── index.html          # Diario en español — entrada principal
├── diario-365en.html   # Versión en inglés
├── Projects.html       # Vista de proyectos
├── reflexiones.html    # Reflexiones del proceso
├── css/
│   └── styles.css      # Estilos compartidos entre versiones de idioma
└── assets/             # GIFs y capturas de proyectos
```

---

### Decisiones técnicas

**HTML estático por idioma en lugar de i18n dinámico.**  
El diario tiene 1300+ líneas de HTML y crece cada semana. Implementar JSON + fetch para internacionalización añadía complejidad innecesaria para un proyecto estático en GitHub Pages. Principio aplicado: YAGNI. El trade-off está documentado en la [entrada del Día 21](https://anudoranador87.github.io/Mi-Camino-Web-365/).

**CSS variables para theming.**  
Un solo punto de cambio para colores. Preparado para dark mode.

**Filtros de entradas con JS vanilla.**  
`querySelectorAll` + `forEach` + `classList.toggle`. Sin librerías.

**Contadores animados.**  
Los números de la cabecera se animan al cargar. Estado actualizado manualmente por entrada. Automatizar los contadores está identificado como deuda técnica — pendiente antes del Día 100.

---

### Stack

`HTML5` · `CSS3 (Custom Properties)` · `JavaScript ES6+` · `GitHub Pages`

---

### Estado del reto

| | |
|---|---|
| 📅 Inicio | 18 enero 2026 |
| 🔥 Días documentados | 74+ |
| 🐛 Bugs documentados | 40+ |
| 🏗️ Proyectos | 5 |

---

### Autor

Jose Aparicio — Frontend developer en transición desde hostelería.

📧 josemaparicio87@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/joseaparicio87/)  
🐙 [GitHub](https://github.com/anudoranador87)

---

## English

### What this is

A technical journal of my transition from hospitality to frontend development. 365 days documented without filters.

Each entry covers one study session: real bugs, architecture decisions, code that works and code that doesn't, and why. Days with no entry are days I didn't study. No filler.

**This is not a tutorial. It's the process.**

---

### Clone and run locally

```bash
git clone https://github.com/anudoranador87/Mi-Camino-Web-365.git
cd Mi-Camino-Web-365
open index.html
```

No npm. No build tools. No dependencies. Opens directly in the browser.

---

### What's inside

```
Mi-Camino-Web-365/
├── index.html          # Spanish diary — main entry point
├── diario-365en.html   # English version
├── Projects.html       # Projects view
├── reflexiones.html    # Reflections on the process
├── css/
│   └── styles.css      # Shared styles across language versions
└── assets/             # GIFs and project screenshots
```

---

### Technical decisions

**Static HTML per language instead of dynamic i18n.**  
The diary has 1300+ lines of HTML and grows every week. Implementing JSON + fetch for internationalisation added unnecessary complexity for a static GitHub Pages project. Principle applied: YAGNI. The trade-off is documented in [Day 21's entry](https://anudoranador87.github.io/Mi-Camino-Web-365/).

**CSS custom properties for theming.**  
Single source of truth for colors. Ready for dark mode.

**Entry filters in vanilla JS.**  
`querySelectorAll` + `forEach` + `classList.toggle`. No libraries.

**Animated counters.**  
The header numbers animate on load. State is updated manually per entry. Automating the counters is identified as technical debt — scheduled before Day 100.

---

### Stack

`HTML5` · `CSS3 (Custom Properties)` · `JavaScript ES6+` · `GitHub Pages`

---

### Challenge status

| | |
|---|---|
| 📅 Start | January 18, 2026 |
| 🔥 Days documented | 74+ |
| 🐛 Bugs documented | 40+ |
| 🏗️ Projects | 5 |

---

### Author

Jose Aparicio — Frontend developer transitioning from hospitality.

📧 josemaparicio87@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/joseaparicio87/)  
🐙 [GitHub](https://github.com/anudoranador87)
