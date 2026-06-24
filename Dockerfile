FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY src/ ./src/
COPY public/ ./public/
COPY next.config.ts tsconfig.json postcss.config.mjs ./

ARG HN_API_URL
ENV NEXT_PUBLIC_HN_API_URL=$HN_API_URL

RUN npm run build

FROM node:22-alpine AS production

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --only=production

COPY --from=build /app/.next/ ./.next/
COPY --from=build /app/public/ ./public/

USER node

ARG HN_API_URL
ENV NEXT_PUBLIC_HN_API_URL=$HN_API_URL
ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]
