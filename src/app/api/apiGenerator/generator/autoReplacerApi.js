const { log } = require("console");
const fs = require("fs");
const path = require("path");

const apiGeneratorsHelp = {
  /**
   * Функция возвращает список файлов (путей) в указанной директории
   */
  getAllFilesInDir(dirPath) {
    const files = [];

    function readDir(dir) {
      const filesInDir = fs.readdirSync(dir);

      filesInDir.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          readDir(filePath);
        } else {
          files.push(filePath);
        }
      });
    }

    readDir(dirPath);

    return files;
  },

  /** Заменяет текст в файле */
  replaceTextInFile(fileName, searchText, replaceText = "") {
    const filePath = path.resolve(fileName);
    const data = fs.readFileSync(filePath, "utf8");

    const result = data.replace(searchText, replaceText);

    fs.writeFileSync(filePath, result, "utf8");
  },
};

const services = [{ service: "admin", prefix: "administration" }, { service: "catalog" }, { service: "bonuses" }];

/** Папки в которых нужно заменить код */
const folders = ["/../admin/", "/../common/", "/../catalog/", "/../bonuses/"];

folders.forEach((folder) => {
  apiGeneratorsHelp.getAllFilesInDir(__dirname + folder).forEach((pathFile) => {
    /** В верблюда */
    Array(3)
      .fill()
      .forEach(() => {
        apiGeneratorsHelp.replaceTextInFile(
          pathFile,
          /_([a-z])(\w*)(\??:)/g,
          (x, g1 = "", g2 = "", g3 = "") => g1.toUpperCase() + g2 + g3,
        );
      });
    /** Удаляем лишний текст из методов (названия конечных точек) */
    apiGeneratorsHelp.replaceTextInFile(pathFile, /(\n    \w*)(ApiV1\w*)(:)/g, (x, g1, g2, g3) => g1 + g3);
    apiGeneratorsHelp.replaceTextInFile(pathFile, /(\w*)(ApiV1[A-Z][a-z]*)(\w*)/g, (x, g1, g2, g3, g4) => g2 + g3);
  });
});

log("Идёт проверка на типизацию...");

services.forEach((service) => {
  replacer(service.service, service.prefix);
});

function replacer(name, prefix = name, prefixMethod) {
  if (prefixMethod === undefined) prefixMethod = name[0].toUpperCase() + name.slice(1);

  apiGeneratorsHelp.getAllFilesInDir(__dirname + `/../${name}/`).forEach((pathFile) => {
    // Добавляем префикс к URL
    apiGeneratorsHelp.replaceTextInFile(pathFile, /url: `\//g, `url: \`${prefix}/`);
    // Добавляем префикс если нужен к методу api запроса
    // пример getUserProfile => getUserProfileAdmin
    prefixMethod && apiGeneratorsHelp.replaceTextInFile(pathFile, /\: build\./g, `${prefixMethod}: build.`);
  });
}
