# 🛒 E-Commerce API REST

[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> API RESTful para una plataforma de comercio electrónico, desarrollada con TypeScript, siguiendo los principios de Domain-Driven Design (DDD) y una arquitectura limpia y escalable.

---

## 📚 Tabla de Contenidos

- [🛒 TypeScript DDD – E-Commerce API REST](#-typescript-ddd--e-commerce-api-rest)
- [🚀 Características Principales](#-características-principales)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [⚙️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [📦 Instalación](#-instalación)
- [🔧 Configuración](#-configuración)
- [▶️ Uso](#️-uso)
- [🧪 Pruebas](#-pruebas)
- [📄 Licencia](#-licencia)
- [🤝 Contribuciones](#-contribuciones)
- [👨‍💻 Autor](#-autor)

---

## 🚀 Características Principales

- 🧩 Arquitectura basada en Domain-Driven Design (DDD)
- 📐 Separación de responsabilidades mediante Clean Architecture
- 🌐 API RESTful modular y escalable
- 🔐 Preparado para autenticación y autorización (JWT, OAuth2)
- 🧪 Pruebas unitarias y de integración con Jest
- 🐳 Integración con Docker para despliegue y desarrollo

---

## 📁 Estructura del Proyecto con Vertical-slice

```text
.
├── src/
|   ├── apps/
│   │   ├── Administrative/
│   │   ├── Authentication/
│   │   ├── Catalog/
│   │   |   ├── product/
│   │   |   ├── SKU/
│   │   |   └── order/
│   ├── contexts/                     # Módulos del dominio (productos, usuarios, pedidos, etc.)
│   │   ├── Catalog/
│   │   |   ├── product/
|   |   |   |   ├── application
|   |   |   |   ├── domain
|   |   |   |   ├── infrastructure
│   │   |   ├── SKU/
│   │   |   └── order/
├── test/                            # Pruebas unitarias y de integración
├── .env                             # Variables de entorno
├── docker-compose.yml               # Configuración de Docker
├── package.json                     # Dependencias y scripts de npm
├── tsconfig.json                    # Configuración de TypeScript
└── README.md                        # Este archivo
```

---

## ⚙️ Tecnologías Utilizadas

- **TypeScript 4.9+**
- **Node.js 18.x**
- **Express.js** para la creación de la API
- **TypeORM** para la gestión de la base de datos
- **Jest** para pruebas
- **Docker** y **Docker Compose** para contenedorización
- **ESLint** y **Prettier** para el linting y formateo del código

---

## 📦 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/david-morales-33/typescript-ddd-e-commerce-api-rest.git
cd typescript-ddd-e-commerce-api-rest
```

### 2. Instalar dependencias

```bash
npm install
```

---

## 🔧 Configuración

1. Copiar el archivo `.env.example` y renombrarlo a `.env`:

```bash
cp .env.example .env
```

2. Configurar las variables de entorno en el archivo `.env` según tu entorno de desarrollo.

---

## ▶️ Uso

### Levantar la aplicación en desarrollo

```bash
npm run dev
```

### Compilar y ejecutar en producción

```bash
npm run build
npm start
```

### Utilizar Docker

```bash
docker-compose up --build
```

---

## 🧪 Pruebas

Ejecutar todas las pruebas:

```bash
npm test
```

Ejecutar pruebas en modo watch:

```bash
npm run test:watch
```

---

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor, sigue los siguientes pasos:

1. Haz un fork del proyecto
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva funcionalidad'`)
4. Sube tus cambios a tu fork (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 👨‍💻 Autor

Desarrollado por [David Morales](https://github.com/david-morales-33)
