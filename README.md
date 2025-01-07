# AI Website and App Builder

An AI-powered platform for creating websites and applications using artificial intelligence. Users can input their desired details, and the app will generate the corresponding code.

## User Journeys

1. [Generate Website/App](docs/journeys/generate-website-app.md) - Create a new website or app by providing details.

## External APIs and Services

- **ZAPT AI Platform**: Used for AI code generation through the `createEvent` function.

## Environment Variables

Create a `.env` file in the root directory and include the following environment variables:

```
VITE_PUBLIC_APP_ID=
VITE_PUBLIC_APP_ENV=
VITE_PUBLIC_SENTRY_DSN=
VITE_PUBLIC_UMAMI_WEBSITE_ID=
```

Replace the values with your actual environment variable values.
