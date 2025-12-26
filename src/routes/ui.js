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
          input, button {
            padding: 8px;
            margin-top: 8px;
            width: 100%;
          }
          button {
            background: #007bff;
            color: white;
            border: none;
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h2>🚀 DevOps Platform Demo</h2>

          <p><b>Status:</b> UP</p>
          <p><b>Version:</b> ${process.env.APP_VERSION || 'v1'}</p>
          <p><b>Environment:</b> ${process.env.ENV || 'dev'}</p>
          <p><b>Pod / Host:</b> ${os.hostname()}</p>
          <p><b>Time:</b> ${new Date().toISOString()}</p>

          <hr />

          <h3>Save Name to Database</h3>

          <form method="POST" action="/save">
            <input type="text" name="name" placeholder="Enter your name" required />
            <button type="submit">Save</button>
          </form>
        </div>
      </body>
    </html>
  `);
});

module.exports = router;
