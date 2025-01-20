interface PortfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
}

export function calculatePortfolioPerformance(): PortfolioPerformance {
    const initialInvestment: number = 10000;
    const currentValue: number = 12000;
    const profitOrLoss: number = currentValue - initialInvestment;
    const percentageChange: number = (profitOrLoss / initialInvestment) * 100;
    let performanceSummary: string = "";

    switch (true) {
        case percentageChange >= 20:
            performanceSummary = "Portfolio gained significantly";
            break;
        case percentageChange >= 10:
            performanceSummary = "Portfolio gained moderately";
            break;
        case percentageChange > 0:
            performanceSummary = "Portfolio gained slightly";
            break;
        case percentageChange === 0:
            performanceSummary = "No change in the Portfolio";
            break;
        case percentageChange <= -20:
            performanceSummary = "Portfolio lost significantly";
            break;
        case percentageChange <= -10:
            performanceSummary = "Portfolio lost moderately";
            break;
        case percentageChange < 0:
            performanceSummary = "Portfolio lost slightly";
            break;
        default:
            performanceSummary = "Error";
            break;
        }
        

    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}