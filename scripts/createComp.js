const { log } = require("console");
const fs = require("fs");
const path = require("path");
const minimist = require("minimist");

// Получаем аргументы
const options = minimist(process.argv.slice(2));
const args = minimist(process.argv.slice(2))._;
const example = "ПРИМЕР: npm run comp shared MyNewComponent";
const { hooks } = options;

// Пути
const paths = {
  shared: "src/shared/ui",
  widgets: "src/widgets",
  entities: "src/entities",
  pages: "src/pages",
};

// Путь
const componentPath = args[0];
if (!Object.keys(paths).includes(componentPath)) {
  log(`Некорректный путь, возможные пути ${Object.keys(paths)}`);
  log(example);
  process.exit(1);
}

// Название компонента
const componentName = args[1]?.[0].toUpperCase() + args[1]?.slice(1);
if (!componentName) {
  log("Не указано название компонента");
  log(example);
  process.exit(1);
}

// Окончательный путь до компонента
const folderPath = paths[args[0]] + "/" + componentName;

const targetFolder = path.resolve(folderPath);

// Проверяем наличие папки, если нет - создаем
if (!fs.existsSync(targetFolder)) {
  fs.mkdirSync(targetFolder + "/ui", { recursive: true });
}
if (hooks && !fs.existsSync(targetFolder + "/hooks")) {
  fs.mkdirSync(targetFolder + "/hooks", { recursive: true });
}

const componentNameWrap = componentName + "Wrap";

// Шаблон компонента
const componentTemplate = `import { ${componentNameWrap} } from "./${componentName}.styled";
${hooks ? `import { use${componentName} } from "../hooks/use${componentName}";` : ""}

export function ${componentName}({ children }: ${componentName}) {
${hooks ? `const hookDate = use${componentName}();\n` : ""}
  return (
    <${componentNameWrap}>
      {children}
    </${componentNameWrap}>
  );
}
`;

//Шаблон типов
const typeTemplate = `interface ${componentName} {
  children?: React.ReactNode
}`;

// Шаблон стилей
const styleTemplate = `import { styled } from "@mui/material";

export const ${componentName}Wrap = styled("div")\`
\`;
`;
// Шаблон index
const indexTemplate = `export { ${componentName} } from "./ui/${componentName}";`;

// Шаблон хуков
const hooksTemplate = `import { useState } from "react";

export const use${componentName} = () => {

  const [state, setState] = useState();

  return {};
};`;

// Путь к файлам
const componentFilePath = path.join(targetFolder, "ui", `${componentName}.tsx`);
const styleFilePath = path.join(targetFolder, "ui", `${componentName}.styled.ts`);
const typeFilePath = path.join(targetFolder, `types.d.ts`);
const indexFilePath = path.join(targetFolder, "index.ts");
const hooksFilePath = path.join(targetFolder, "hooks", `use${componentName}.ts`);

// Создаем файлы с шаблонами
fs.writeFileSync(componentFilePath, componentTemplate, "utf8");
fs.writeFileSync(styleFilePath, styleTemplate, "utf8");
fs.writeFileSync(typeFilePath, typeTemplate, "utf8");
fs.writeFileSync(indexFilePath, indexTemplate, "utf8");
hooks && fs.writeFileSync(hooksFilePath, hooksTemplate, "utf8");

console.log(`Компонент и стили успешно созданы в папке ${targetFolder}`);
