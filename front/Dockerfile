FROM node:24.12.0-alpine AS base

FROM base AS builder
ENV NEXT_PUBLIC_BASE_URL=https://tajiri.she-dev.net

WORKDIR /app
RUN corepack enable

COPY app/package.json app/yarn.lock ./
RUN yarn install --frozen-lockfile

COPY app/.env.production .env.production
COPY app ./
RUN yarn build

FROM base AS runner
ARG UID=1001
ARG GID=1001

ENV NODE_ENV=production \
    PORT=3001

WORKDIR /app
RUN addgroup -g ${GID} -S she \
  && adduser  -S -u ${UID} -G she -h /app she

COPY --from=builder --chown=she:she /app/public ./public
COPY --from=builder --chown=she:she /app/.next/standalone ./
COPY --from=builder --chown=she:she /app/.next/static ./.next/static

USER she

EXPOSE 3001
CMD ["node", "server.js"]
