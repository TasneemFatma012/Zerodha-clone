const express = require("express");

const router = express.Router();
const { HoldingModel } = require("../model/HoldingModel");

router.get("/", async (req, res) => {
  try {
    const filter = {};

    if (req.query.userId) {
      filter.userId = req.query.userId;
    }

    const holdings = await HoldingModel.find(filter).lean();

    res.status(200).json(Array.isArray(holdings) ? holdings : []);
  } catch (error) {
    res.status(500).json({
      error: error.message || "Failed to fetch holdings",
    });
  }
});

module.exports = router;