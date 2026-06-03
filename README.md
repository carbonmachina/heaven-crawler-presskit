# 🎮 Heaven Crawler - Presskit Template

Esta es una plantilla de Presskit moderna, responsiva y completamente estática (Serverless) diseñada para **Heaven Crawler**. Es un clon del clásico formato `presskit()` de Rami Ismail, pero modernizado para 2026.

This is a modern, responsive, and serverless Presskit template designed for **Heaven Crawler**. It follows the structure of Rami Ismail's classic `presskit()` format, but is modernized for 2026.

---

## 🛠️ Cómo Editar / How to Edit

### 1. Modificar la Información (Modify Info)
Abre el archivo [presskit-data.js](file:///e:/GitRepos/HCPressKit/presskit-data.js) en cualquier editor de texto (como Notepad, VS Code, etc.). Todo el contenido está comentado en español e inglés. Modifica los textos, precios, plataformas, enlaces y fechas.
> **Español:** Solo necesitas cambiar los valores entre comillas o dentro de los corchetes `[ ]`.
> 
> **English:** You only need to change the values inside the quotes or brackets `[ ]`.

### 2. Cambiar Imágenes (Modify Images)
1. Coloca tus capturas de pantalla (screenshots), logos e íconos en una carpeta llamada `images/`.
2. Actualiza las rutas en `presskit-data.js` para que apunten a tus archivos locales. Por ejemplo:
   ```javascript
   logo: "images/logo.png",
   icon: "images/icon.png",
   screenshots: [
     {
       caption: "Captura del nivel 1.",
       url: "images/screenshot1.jpg"
     }
   ]
   ```

### 3. Probar Localmente (Test Locally)
Simplemente haz doble clic en `index.html` para abrir el sitio directamente en tu navegador. **¡No necesitas un servidor local ni PHP!** Puedes ver tus cambios al instante simplemente refrescando la página (`F5`).

Double-click `index.html` to open the website in your browser. **No server or PHP is required!** Just refresh the page (`F5`) to see your updates.

---

## 🚀 Cómo Hostear Gratis en GitHub Pages / How to Host for Free on GitHub Pages

Dado que este presskit está construido completamente en HTML, CSS y JavaScript estático, se puede hospedar de forma 100% gratuita y segura en **GitHub Pages**. Sigue estos pasos:

Since this presskit is entirely static, you can host it for free on **GitHub Pages**:

### Método 1: Por Terminal / Git (Recomendado para programadores)
1. Crea un repositorio vacío en tu cuenta de GitHub (ejemplo: `heaven-crawler-presskit`).
2. En la terminal de esta carpeta, inicializa Git y sube los archivos:
   ```bash
   git init
   git add .
   git commit -m "Initial presskit setup"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```
3. Ve a la pestaña **Settings** (Configuración) de tu repositorio en GitHub.
4. En el menú de la izquierda, haz clic en **Pages**.
5. Bajo **Build and deployment**, selecciona la rama `main` y la carpeta `/ (root)`. Haz clic en **Save**.
6. ¡Listo! En un par de minutos, tu presskit estará en vivo en: `https://TU_USUARIO.github.io/TU_REPOSITORIO/`.

### Método 2: Web de GitHub (Sin instalar Git ni Terminal - Ideal para tu coworker)
1. Crea una cuenta en [GitHub.com](https://github.com) si aún no tienes una.
2. Haz clic en **New repository** (Nuevo repositorio).
3. Nómbralo (ej. `heaven-crawler-presskit`), marca la casilla **Public**, y haz clic en **Create repository**.
4. En la página que aparece, busca el enlace que dice **"uploading an existing file"** (subir un archivo existente).
5. Arrastra y suelta todos los archivos de esta carpeta (`index.html`, `presskit-data.js`, `styles.css`, la carpeta `js/` y la carpeta `images/` con sus fotos).
6. Haz clic en **Commit changes** para guardar.
7. Ve a **Settings** -> **Pages** (en la barra lateral izquierda).
8. Selecciona la rama `main` en el desplegable de **Branch** y dale a **Save**.
9. Espera 1 minuto y tu web estará lista para compartir en internet.

---

## 💎 Características Premium Incluidas / Premium Features Included

*   **Responsive Dual Layout:** En pantallas grandes, muestra un menú lateral y un factsheet fijo muy cómodo para periodistas. En móviles, se adapta automáticamente a una sola columna táctil.
*   **Modo Oscuro / Claro:** Selector dinámico con guardado automático en el navegador del usuario (`localStorage`).
*   **Visualizador de Pantallas (Lightbox):** Las capturas de pantalla se pueden ampliar a pantalla completa al hacer clic, con soporte para flechas de teclado, descargar directamente la imagen en alta resolución y navegación continua.
*   **Cero Dependencias Pesadas:** Carga ultra rápida, ideal para periodistas que necesitan descargar activos rápido sin esperas.
