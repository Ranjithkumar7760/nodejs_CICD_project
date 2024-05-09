import express from 'express';

const app = express();

app.get('/', (req, res) => {
    // Sending an HTML response with a link
    res.send(`
      <html>
        <head>
          <title>Welcome To My Page</title>
        </head>
        <body>
          <h1>This website runs by using node js and is hosted in an AWS beanstalk welcome </h1>
          <p>Check out <a href="https://drive.google.com/file/d/1LrTlxBXRH_ligoubac6JY1F0Bx1mxcNw/view?usp=drive_link">My Portfolio</a>!</p>
        </body>
      </html>
    `);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app; // Export for testing
