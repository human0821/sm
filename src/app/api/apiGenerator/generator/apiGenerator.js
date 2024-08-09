const { spawn } = require("child_process");
const { log } = require("console");
const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "config");

log("Идёт генерация API...");
// Прочитать все файлы из директории
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log(`Unable to scan directory: ${err}`);
  }

  // Итерация по всем файлам и запуск команды
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);

    // Запуск команды для каждого файла
    const npx = spawn("npx", ["@rtk-query/codegen-openapi", filePath], { shell: true });

    npx.stdout.on("data", (data) => {
      console.log(`stdout: ${data.toString()}`);
    });

    npx.stderr.on("data", (data) => {
      console.error(`stderr: ${data.toString()}`);
    });
  });
});
