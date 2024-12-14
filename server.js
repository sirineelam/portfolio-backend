const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const data = [
  { scrip: "AADR", quantity: 430, price: 50.30, avgCost: 41.75, investedAmount: 17952.07, portfolioPercentage: 22.06, unrealizedPL: 3676.93, percentReturn: 20.48 },
  { scrip: "MFEM", quantity: 210, price: 23.20, avgCost: 22.50, investedAmount: 4725.84, portfolioPercentage: 5.81, unrealizedPL: 146.16, percentReturn: 3.09 },
  { scrip: "JPEM", quantity: 328, price: 52.50, avgCost: 56.70, investedAmount: 18597.60, portfolioPercentage: 22.86, unrealizedPL: -1377.60, percentReturn: -7.41 },
  { scrip: "KEMQ", quantity: 801, price: 20.40, avgCost: 22.24, investedAmount: 17811.04, portfolioPercentage: 21.89, unrealizedPL: -1470.64, percentReturn: -8.26 },
  { scrip: "KLDW", quantity: 523, price: 32.90, avgCost: 26.32, investedAmount: 13765.36, portfolioPercentage: 16.92, unrealizedPL: 3441.34, percentReturn: 25.00 },
  { scrip: "KOIN", quantity: 335, price: 25.40, avgCost: 25.40, investedAmount: 8509.00, portfolioPercentage: 10.46, unrealizedPL: 0.00, percentReturn: 0.00 },
];

app.get("/api/portfolio", (req, res) => {
  return res.json({
    data
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
