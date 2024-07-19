export const PORTFOLIO_QUERYS = {
    getPortfolioById: `
     query($getPorfolioByIdId: String!)  {
      getPorfolioById(id: $getPorfolioByIdId) {
        customerCode,
        channel,
        country,
        createdDate

      }
    }
    `
};