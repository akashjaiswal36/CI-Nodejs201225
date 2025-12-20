const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    version: process.env.APP_VERSION || 'v1',
    environment: process.env.ENV || 'dev'
  });
});

module.exports = router;
