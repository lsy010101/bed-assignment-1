import request, { Response } from "supertest";
import  app  from "../src/app";  // Import the app
import { calculatePortfolioPerformance } from "../src/portfolio/portfolioperformance"; // Import the function to mock

// Mock the calculatePortfolioPerformance function
jest.mock("../src/portfolio/portfolioperformance");

describe("Portfolio Performance Route Tests", () => {

    describe("GET /portfolioperformance", () => {
        // 1
        it("should return correct portfolio summary for a significant gain", async () => {
            // Arrange
            const mockData = {
                initialInvestment: 10000,
                currentValue: 13000,
                profitOrLoss: 3000,
                percentageChange: 30,
                performanceSummary: "Portfolio gained significantly"
            };
            (calculatePortfolioPerformance as jest.Mock).mockReturnValue(mockData);

            // Act
            const response: Response = await request(app).get("/portfolio-performance");

            // Assert
            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockData);
        });

        // 2
        it("should return correct portfolio summary for a moderate gain", async () => {
            // Arrange
            const mockData = {
                initialInvestment: 10000,
                currentValue: 11500,
                profitOrLoss: 1500,
                percentageChange: 15,
                performanceSummary: "Portfolio gained moderately"
            };
            (calculatePortfolioPerformance as jest.Mock).mockReturnValue(mockData);

            // Act
            const response: Response = await request(app).get("/portfolio-performance");

            // Assert
            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockData);
        });
        
        // 3
        it("should return correct portfolio summary for a slight gain", async () => {
            // Arrange
            const mockData = {
                initialInvestment: 10000,
                currentValue: 10500,
                profitOrLoss: 500,
                percentageChange: 5,
                performanceSummary: "Portfolio gained slightly"
            };
            (calculatePortfolioPerformance as jest.Mock).mockReturnValue(mockData);

            // Act
            const response: Response = await request(app).get("/portfolio-performance");

            // Assert
            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockData);
        });

        // 4
        it("should return correct portfolio summary for no change", async () => {
            // Arrange
            const mockData = {
                initialInvestment: 10000,
                currentValue: 10000,
                profitOrLoss: 0,
                percentageChange: 0,
                performanceSummary: "No change in the Portfolio"
            };
            (calculatePortfolioPerformance as jest.Mock).mockReturnValue(mockData);

            // Act
            const response: Response = await request(app).get("/portfolio-performance");

            // Assert
            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockData);
        });

        // 5
        it("should return correct portfolio summary for a slight loss", async () => {
            // Arrange
            const mockData = {
                initialInvestment: 10000,
                currentValue: 9500,
                profitOrLoss: 500,
                percentageChange: -5,
                performanceSummary: "Portfolio lost slightly"
            };
            (calculatePortfolioPerformance as jest.Mock).mockReturnValue(mockData);

            // Act
            const response: Response = await request(app).get("/portfolio-performance");

            // Assert
            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockData);
        });

        // 6
        it("should return correct portfolio summary for a moderate loss", async () => {
            // Arrange
            const mockData = {
                initialInvestment: 10000,
                currentValue: 8500,
                profitOrLoss: 1500,
                percentageChange: -15,
                performanceSummary: "Portfolio lost moderately"
            };
            (calculatePortfolioPerformance as jest.Mock).mockReturnValue(mockData);

            // Act
            const response: Response = await request(app).get("/portfolio-performance");

            // Assert
            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockData);
        });

        // 7
        it("should return correct portfolio summary for a significant loss", async () => {
            // Arrange
            const mockData = {
                initialInvestment: 10000,
                currentValue: 7000,
                profitOrLoss: -3000,
                percentageChange: -30,
                performanceSummary: "Portfolio lost significantly"
            };
            (calculatePortfolioPerformance as jest.Mock).mockReturnValue(mockData);

            // Act
            const response: Response = await request(app).get("/portfolio-performance");

            // Assert
            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockData);
        });
    });
});
