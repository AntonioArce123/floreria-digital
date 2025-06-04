#  Florería Digital

**Autor:** Arce Mendívil Carlos Antonio  
**Materia:** Programación Web  
**Profesor:** Martin Leonardo Nevarez Rivas  
**Fecha de entrega:** 03 Junio 2025

##  Descripción del proyecto

Este proyecto no se encuentra al 100% acabado, debido a la acumulacion de otros proyectos y problemas con el docker. 
(por el WSL 2 **WslRegisterDistribution failed with error: 0x80370102
Please enable the Virtual Machine Platform Windows feature and ensure virtualization is enabled in the BIOS.**)

Este sistema web para una florería digital fue desarrollado como proyecto final de la materia **Programación Web**. Consiste en una aplicación completa tipo **fullstack**, con un frontend en **Vue.js 3 + TypeScript**, un backend en **Node.js + Express + TypeScript**, validación con **Zod**, persistencia de datos en **MySQL** y autenticación a través de **Firebase**. Todo el sistema está orquestado usando **Docker Compose** para facilitar el despliegue y ejecución local.

---

## Objetivos

- Diseñar una arquitectura web moderna con separación de responsabilidades.
- Implementar una API REST segura y validada con Express y Zod.
- Crear una interfaz responsiva con Vue 3 usando Vite.
- Utilizar una base de datos relacional (MySQL) para el manejo de productos y pedidos.
- Desplegar todos los servicios de forma integrada usando Docker Compose.

---

## Tecnologías utilizadas

| Capa         | Tecnología                        |
|--------------|-----------------------------------|
| Frontend     | Vue.js 3, Vite, TypeScript, Axios |
| Backend      | Node.js, Express, TypeScript, Zod |
| Base de datos| MySQL                             |
| Autenticación| Firebase                          |
| Orquestación | Docker, Docker Compose            |

---

## Cómo ejecutar el proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/AntonioArce123/floreria-digital
   cd floreria-digital
