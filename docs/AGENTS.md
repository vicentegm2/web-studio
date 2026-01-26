## Paso 1: Configuración de Sanity (El "Backend")

1. **Crea una cuenta:** Ve a [Sanity.io](https://www.sanity.io/) y regístrate (usa tu cuenta de GitHub, es lo más fácil).
2. **Inicializa el proyecto:** En la terminal de tu proyecto local, ejecuta:
`npm create sanity@latest -- --template clean --create-project "Nombre-De-Tu-Proyecto" --dataset production`
3. **Define el Esquema:** Verás una carpeta llamada `schemaTypes`. Allí es donde defines qué quieres editar (ej. un objeto "Proyecto" con campos: título, descripción, imagen).
4. **Despliega el Panel (Studio):** Ejecuta `npx sanity deploy`. Esto te dará una URL (ej. `tu-proyecto.sanity.studio`) que es donde entrarás tú solo a editar el contenido.

## Paso 2: Conexión con tu Frontend (Vercel)

1. **Instala el cliente:** En tu proyecto de React, instala:
`npm install @sanity/client @sanity/image-url`
2. **Configura el Cliente:** Crea un archivo `sanityClient.js` para conectar tu web con los datos de Sanity usando tu `projectId`.
3. **Sustituye Datos:** Cambia tus archivos `.json` o constantes de texto por una función `useEffect` que haga un `fetch` a Sanity.

## Paso 3: Variables de Entorno en Vercel

Para que todo funcione de forma segura:

1. Ve al panel de tu proyecto en **Vercel**.
2. En **Settings > Environment Variables**, añade tu `SANITY_PROJECT_ID`.
3. Esto asegura que tu código sepa de dónde sacar la información sin exponer datos sensibles.

---

## Contexto para el Agente (AGENTS.md o Prompt)

Copia y pega este bloque para que cualquier agente de IA entienda exactamente qué estamos haciendo y no te proponga soluciones innecesariamente complejas:

> **Rol:** Asistente técnico senior para refactorización de Portfolio Web.
> **Contexto del Proyecto:**
> * **Frontend:** React desplegado en Vercel ([https://vicentegomez.vercel.app/](https://vicentegomez.vercel.app/)).
> * **Objetivo:** Convertir la web estática en dinámica mediante un **Headless CMS (Sanity.io)**.
> * **Requisito de Usuario:** Acceso de edición único (solo el dueño), interfaz visual para editar textos, subir imágenes de certificaciones y actualizar experiencias laborales sin tocar código.
> * **Restricciones:** >     1. Mantener el hosting en Vercel.
> 2. Priorizar simplicidad y estabilidad.
> 3. Evitar configuraciones de bases de datos manuales (usar el almacenamiento de Sanity).
> 4. No implementar sistemas de registro público; solo autenticación administrativa vía Sanity Studio.
> 
> 
> **Tareas Pendientes:**
> 1. Definir los `schemas` en Sanity para las secciones: Experiencia, Proyectos, Newsletters y Certificaciones.
> 2. Configurar el `sanityClient` en el frontend para consumir los datos.
> 3. Implementar `getStaticProps` o `useEffect` (según el framework) para hidratar los componentes con datos del CMS.
> 4. Asegurar que el manejo de imágenes use el constructor de URLs de Sanity para optimización.
> 
> 
