# Commands I used to set up TailwindCSS with Vite
```bash
npm install -D tailwindcss postcss autoprefixer vite
npm tailwindcss init
npx tailwindcss init
```
## Then I created a file "postcss.config.js" and added the following content
```bash
module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
}
```
## Created "main.css" and added tailwind css layers
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Created "index.html" and linked the css file
## Created a script in "package.json":
```bash
"dev": "vite"
```

## From here I was done and I ran the following command to start the project in the browser
```bash
npm run dev
```
