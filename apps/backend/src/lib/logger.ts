import winston from "winston";

export const logger = winston.createLogger({
  level: "debug",
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: "backend", hostEnv: "local" },
  transports: [
    new winston.transports.Console({
      format: winston.format.json(),
    }),
  ],
});
