# React + Simulador de Colección de Items

Esta aplicación es un simulador que te guía a través de la creación y configuración de una colección de items, utilizando una interfaz moderna y responsiva.

![Demo de la Aplicación](/public/image.png)

## Pasos de la Aplicación

1. **Home**
   - Página inicial que te da la bienvenida y te invita a comenzar el proceso de configuración.

2. **Onboarding**
   - Página donde puedes ingresar información inicial que será procesada por IA para generar una lista de items personalizada.
   - La respuesta de la IA se procesa en segundo plano mientras avanzas al siguiente paso.

3. **Configuración de Colección**
   - Aquí puedes configurar los detalles básicos de tu colección:
     - Nombrar la colección
     - Decidir si será pública o privada
   - La página espera la respuesta completa de la IA antes de permitir continuar.

4. **Lista de Items**
   - Muestra una lista ordenada de items generados por la IA, ordenados por relevancia (valor de elo).
   - Cada item incluye:
     - Un emoji representativo
     - Un nombre descriptivo
     - Un checkbox para seleccionar/deseleccionar items
   - La lista es scrollable y ocupa la mitad de la altura de la pantalla.

## Características Principales

- Interfaz moderna y responsive
- Procesamiento de IA en segundo plano
- Gestión de estados y navegación entre pasos
- Selección múltiple de items
- Ordenamiento automático de items por relevancia

## Tecnologías Utilizadas

- React
- Vite
- Tailwind CSS
- JavaScript
- ESLint para validación de código

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
