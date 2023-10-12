## Plebshop ⚡️

Sencilla solución de punto de venta alimentada por tu cuenta de [Strike](https://strike.me). Cree su propia caja en persona para aceptar pagos Lightning en un par de minutos y reciba los pagos directamente en su saldo de Strike. Pruébalo en https://plebshop.me.

1. Introduce tu nombre de usuario de Strike
2. Elige un nombre para tu tienda
3. Añade algunos productos a tu inventario
4. Echa un vistazo a tus clientes a través de Lightning 
5. Obtén beneficios

Este es un proyecto [Next.js](https://nextjs.org/) arrancado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Empezando

Instalación:

```bash
yarn
```

Ejecutando el servidor de desarrollo:

``bash
yarn dev
```

Abre [http://localhost:3002](http://localhost:3002) con tu navegador para ver el resultado.

Puedes empezar a editar la página modificando `pages/index.js`. La página se actualiza automáticamente a medida que editas el archivo.

Se puede acceder a [rutas API](https://nextjs.org/docs/api-routes/introduction) en [http://localhost:3002/api/hello](http://localhost:3002/api/hello). Este endpoint puede editarse en `pages/api/hello.js`.

El directorio `pages/api` se asigna a `/api/*`. Los archivos en este directorio son tratados como [rutas API](https://nextjs.org/docs/api-routes/introduction) en lugar de páginas React.


## Variables de entorno

Para el desarrollo local, crea un archivo llamado .env.local y añade allí tu clave de la API de Strike. Echa un vistazo al ejemplo env.local.para ver las env vars requeridas así como las opcionales.

- `STRIKE_API_KEY` - Clave API de comercio de Strike
- `STRIKE_API_URL` - URL de la API de Strike. Actualmente `https://api.strike.me/v1/`
- `BUGSNAG_BROWSER_API_KEY` - [Bugsnag](https://www.bugsnag.com/) clave bugsnag opcional para registrar excepciones del navegador
- `BUGSNAG_SERVER_API_KEY` - [Bugsnag](https://www.bugsnag.com/) clave opcional para registrar excepciones del servidor
- `GA_MEASUREMENT_ID` - ID opcional de Google analytics


## Más información

Para obtener más información sobre Next.js, consulta los siguientes recursos:

- Documentación de Next.js](https://nextjs.org/docs): información sobre las funciones y la API de Next.js.
- Learn Next.js](https://nextjs.org/learn) - un tutorial interactivo de Next.js.

Puedes consultar [el repositorio GitHub de Next.js](https://github.com/vercel/next.js/) - ¡tus comentarios y contribuciones son bienvenidos!

## Despliegue en Vercel

La forma más sencilla de desplegar tu aplicación Next.js es utilizar la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.js.

Echa un vistazo a nuestra [Next.js deployment documentation](https://nextjs.org/docs/deployment) para más detalles.

## Duplicar en Figma

Las maquetas de este proyecto también son de código abierto. Siéntase libre de duplicarlos en Figma para darles una vuelta, o añadir comentarios para cualquier sugerencia que pueda tener.

- Diseños Plebshop](https://www.figma.com/file/05SDCQPoM7liZatRQYx7VE/Plebshop-Designs)
- Diagramas de flujo de Plebshop](https://www.figma.com/file/uCTCdXxt8Z1LnJNBkLfrf9/Plebshop-Flows)

Traducción realizada con la versión gratuita del traductor www.DeepL.com/Translator