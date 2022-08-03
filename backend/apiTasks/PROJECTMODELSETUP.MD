1. first init:

```bash
    yarn init -y
```

2. Some basic dependecies:

```bash
    yarn add typescript ts-node-dev @types/node tsconfig-paths -D
```

3. This command will create tsconfig.json:

```bash
    npx tsc --init --rootDir src --outDir build esModuleInterop --resolveJsonModule --lib es6 modulenp commonjs --allowJs true --noImplicitAny true
//Should generate a file with this text below:
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "allowJs": true,
    "outDir": "build",
    "rootDir": "src",
    "strict": true,
    "noImplicitAny": true,
    "strictPropertyInitialization": false,
    "moduleResolution": "node",
    "baseUrl": "./",
    "paths": {
      "@config/*": ["src/config/*"],
      "@modules/*": ["src/modules/*"],
      "@shared/*": ["src/shared/*"]
    },
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true
  },
  "exclude": ["node_modules", "build"],
  "include": ["src/**/*"]
}
```

4. LAST THING Because we installed ts-node-dev we can add this script to packge.json:

```bash
"scripts": {
    "dev": "ts-node-dev -r tsconfig-paths/register --inspect --transpile-only --ignore-watch node_modules src/shared/http/server.ts",
    "build": "babel src --extensions \".js,.ts\" --out-dir dist --copy-files",
    "lint": "eslint . --ext .ts",
    "lint-fix": "eslint . --ext .ts --fix",
    "typeorm": "ts-node-dev -r tsconfig-paths/register ./node_modules/typeorm/cli.js"
}
```

5. Generate .editorconfig and put this configs:

```bash
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf
```

6. Install ESLint dependencie:

```bash
  yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

7. After create a .eslintrc and wrote in it:

```bash
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "prettier"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "no-console": "warn",
    "prettier/prettier": "error"
  }
}
```

8. Create a .eslintignore and wrote in it:

```bash
node_modules
dist
build
/*.js
```

9. Install prettier:

```bash
yarn add prettier -D
```

10. Create file .prettierrc:

```bash
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 80,
  "arrowParens": "avoid"
}
```

11. Command to fix possible errors between prettier and ESLint

```bash
yarn add eslint-config-prettier@6.15.0 eslint-plugin-prettier@3.2.0 -D
```

12. Creating folder structure:

```shell
mkdir -p src/config

mkdir -p src/modules

mkdir -p src/shared/http

mv src/server.ts src/shared/http/server.ts
```

13. Add dependencies to create the connection:

```bash
yarn add express cors express-async-errors
```

14. Add the typo:

```bash
yarn add -D @types/express @types/cors
```

15. Add typeorm, reflect-metadata and postgresql:

```bash
yarn add typeorm reflect-metadata pg
```
