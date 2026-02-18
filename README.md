# Task Manager – React Mini App

Mini aplicación de gestión de tareas construida con **Next.js (App Router)**, **TypeScript** y **TailwindCSS** como práctica de fundamentos modernos de Frontend Development.

El objetivo del proyecto es demostrar:

- Migración de una aplicación React tradicional a Next.js
- Uso correcto del App Router
- Separación entre Server Components y Client Components
- Manejo de estado, composición de componentes y modelado de datos usando TypeScript para mejorar la seguridad y claridad del código.
- Implementación de una UI consistente y responsive con TailwindCSS

---

## 🚀 Demo

https://to-do-app-ng1g.vercel.app/

---

## 🧠 Funcionalidades

- Crear tareas
- Listar tareas
- Marcar tareas como completadas
- Eliminar tareas
- Filtrar tareas:
  - Todas
  - Completadas
  - Pendientes

---

## 🛠️ Tecnologías utilizadas

- Next.js (App Router)
- React
- TypeScript
- TailwindCSS
- Server Components
- Client Components
- Hooks:
  - `useState`
  - `custom hooks`
- CSS básico (sin librerías externas)

---

## 🎨 Estilos y UI

La interfaz fue migrada de CSS modular a TailwindCSS, buscando:

- Consistencia visual basada en utilidades

- Eliminación de CSS innecesario
- Mayor velocidad de desarrollo
- Diseño responsive desde el inicio
- Mejores estados de interacción (hover, focus)  

Se eliminaron los módulos CSS previos para evitar estilos duplicados y mantener el proyecto más limpio.

---

## 🧩 Estructura de componentes

El proyecto utiliza el App Router de Next.js, separando claramente responsabilidades entre servidor y cliente.

```
app/
├── page.tsx                // Client Component (entry point)
├── layout.tsx              // Layout base
├── globals.css             // Configuración base de Tailwind
└── about/
    ├── page.tsx            // Server Component
    ├── layout. tsx         // Layout para ruta /about

components/ 
├── CreateNewTask           // Crear nuevas tareas
├── FilterPanel             // Filtros de estado
│   └── FilterOptionButton 
├── TasksList               // Lista de tareas
│   └── TaskItem            // Tarea individual 

types/
├── task.ts
├── filter.ts

hooks/
├── useTasks.ts
├── useLocalStorage.ts
```


---

## 🧠 Modelado del dominio

La aplicación modela explícitamente sus entidades principales usando TypeScript.

### Task
Cada tarea está representada por un tipo que define claramente su estructura y estado.

Campos principales:
- `id`
- `title`
- `status`

### Filter
El filtro activo se modela como una unión de valores permitidos, evitando estados inválidos.

Esto permite:
- Autocompletado
- Prevención de errores
- Mejor legibilidad del código

---

## 🧪 Uso de TypeScript

TypeScript se utiliza para:

- Tipar el estado global de la aplicación
- Tipar props de componentes
- Tipar funciones de manejo de estado
- Tipar eventos de formularios

No se utiliza `any`.  
Todos los tipos están definidos de forma explícita o inferidos correctamente.

---

## 🗂️ Manejo de estado

- El estado global de la aplicación incluye:
  - Lista de tareas
  - Filtro activo
- Las tareas filtradas se calculan dinámicamente durante el render.
- No se duplica estado innecesariamente.

---

## 💾 Persistencia

Las tareas se almacenan en `localStorage` para mantener la información entre recargas del navegador.

Se utiliza un custom hook llamado `useLocalStorage` para abstraer los llamados al `localStorage` y manejar el estado asociado

---

## 📦 Instalación y uso

1. Clonar el repositorio
```bash
git clone https://github.com/ricandres98/to-do-app
```

2. Instalar dependencias
```bash
npm install
```


3. Ejecutar en desarrollo
```bash
npm run dev
```

4. Build de producción
```bash
npm run build
```

---

## 📌 Posibles mejoras

- Agregar autenticación

- Implementar drag & drop

- Mejorar el diseño visual

- Persistencia en base de datos 

- Tests unitarios

- Escalar el manejo de estado si la app crece

---

## 👤 Autor

Ricardo Ojeda \
Frontend Developer
