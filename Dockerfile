FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY src/ ./src/
COPY public/ ./public/
COPY next.config.ts tsconfig.json postcss.config.mjs ./

ARG PUBLIC_API_URL
ARG INTERNAL_API_URL

ENV NEXT_PUBLIC_API_URL=$PUBLIC_API_URL
ENV INTERNAL_API_URL=$INTERNAL_API_URL

RUN npm run build

FROM node:22-alpine AS production

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --omit=dev

COPY --from=build /app/.next/ ./.next/
COPY --from=build /app/public/ ./public/

RUN chown -R node:node ./.next/ ./public
USER node

ARG PUBLIC_API_URL
ARG INTERNAL_API_URL

ENV NEXT_PUBLIC_API_URL=$PUBLIC_API_URL
ENV INTERNAL_API_URL=$INTERNAL_API_URL

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "run", "start"]
