FROM denoland/deno:2.0.2

ARG LOG_LEVEL=info

ENV LOG_LEVEL=$LOG_LEVEL

# The port that your application listens to.
EXPOSE 8000

WORKDIR /app

# Prefer not to run as root.
USER deno

# These steps will be re-run upon each file change in your working directory:
COPY . .
# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache src/main.ts

# Warmup caches
RUN timeout 10s deno -A src/main.ts || [ $? -eq 124 ] || exit 1

CMD ["run", "--allow-net", "src/main.ts"]