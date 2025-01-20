import express, { Express } from "express";
import setupSwagger from "../config/swagger";
import { calculatePortfolioPerformance } from "./portfolio/portfolioperformance";

const app: Express = express();

setupSwagger(app);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

/**
 * @openapi
 * /tasks:
 *  get:
 *   summary: Retrieve a list of tasks
 *   tags: [Tasks]
 *   responses:
 *    200:
 *     description: A list of tasks
 */

app.get("/tasks", (req, res) => {
    res.send("Retrieve tasks")
});

app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});

/**
 * @openapi
 * /api/v1/health:
 *  get:
 *   summary: server health check
 *   tags: [api/v1/health]
 *   responses:
 *    200:
 *     description: checks server health
 */

app.get('/portfolioperformance', (req, res) => {
    const portfolioPerformance = calculatePortfolioPerformance();
    res.status(200).json(portfolioPerformance);
  });

/**
 * @openapi
 * /portfolioperformance:
 *  get:
 *   summary: Retrieve performance summary
 *   tags: [Portfolioperformance]
 *   responses:
 *    200:
 *     description: Assess portfolio performance summary according to gain/loss percentage
 */

export default app;
