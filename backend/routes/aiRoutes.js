const router = require("express").Router();

const {
    getRecommendation
} = require("../controllers/aiController");

router.post("/recommend", getRecommendation);

module.exports = router;