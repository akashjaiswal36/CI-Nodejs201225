const router = require('express').Router();
const os = require('os');

router.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>DevOps Platform Demo</title>
        <style>
          body { font-family: Arial; background: #eef2f7; padding: 40px; }
          .card {
            background: white;
            padding: 20px;
            width: 420px;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h2>🚀 DevOps Platform Demo, argocd will not work :-)</h2>
          <p><b>Status:</b> UP</p>
          <p><b>Version:</b> ${process.env.APP_VERSION || 'v1'}</p>
          <p><b>Environment:</b> ${process.env.ENV || 'dev'}</p>
          <p><b>Pod / Host:</b> ${os.hostname()}</p>
          <p><b>Time:</b> ${new Date().toISOString()}</p>
        </div>
      </body>
    </html>
  `);
});

module.exports = router;
