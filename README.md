# Task Manager – React Mini App

Mini aplicación de gestión de tareas construida con React como práctica de fundamentos modernos de Frontend Development.

El objetivo del proyecto es demostrar manejo de estado, composición de componentes y buenas prácticas en React, más que construir una aplicación compleja.

---

## 🚀 Demo

(LINK pendiente)

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

- React
- JavaScript (ES6+)
- Hooks:
  - `useState`
  - `custom hooks`
- CSS básico (sin librerías externas)
- Vite

---

## 🧩 Estructura de componentes

La aplicación está dividida en componentes pequeños y reutilizables:

App
├── CreateNewTask // Crear nuevas tareas \
├── FilterPanel // Filtros de estado \
├── TasksList // Lista de tareas \
│ └── TaskItem // Tarea individual \


El estado principal vive en el componente `App` y se pasa a los componentes hijos mediante props.

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


3. Compilar el proyecto
```bash
npm run build
```

4. Ejecutar el proyecto
```bash
npm run preview
```

---

## 📌 Posibles mejoras

- Migrar el proyecto a TypeScript

- Agregar autenticación

- Implementar drag & drop

- Mejorar el diseño visual

- Tests unitarios

---

## 👤 Autor

Ricardo Ojeda \
Frontend Developer

