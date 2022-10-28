# UniformConf demo for Sanity

## Prerequisites

You have to install, import content and start Sanity Studio.

## Getting Started

First, you need provide API keys to connect with empty Uniform App project and your Sanity studio. Copy `.env.example` into `.env` and fill all the keys.

1. `npm install` to install all dependencies.
1. `npm run generate:slug-page` to create slug page. Depending on the value of this environment variable, either SSG or SSR mode will be enabled (Uniform supports both):
    ```
    # Server Side Render or Static Site Generation mode?
    NEXT_USE_SSR=0
    ```
1. `npm run dev` to start a local dev server.
1. `npm run build && npm run start` to start a production server.