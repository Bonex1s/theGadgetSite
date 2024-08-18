const express = require("express");
const path = require("path");
const app = express();
const port = 3030;

// Укажите Express использовать папку 'public' для статических файлов
app.use(express.static(path.join(__dirname, "assets")));

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
