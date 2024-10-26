/*Server Setup*/ 
const express = require("express");
const app = express();
const port = 2000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

/*Data Handling*/
const comments = [];

app.post('/submit-comment', (req, res) => {
  const { name, comment } = req.body;
  comments.push({ name, comment });
  res.redirect('/comment.html'); // Redirecting the User back to the comment form
});

app.get('/comments', (req, res) => {
  res.json(comments);
});

