# Heciendo vista nuestra web desde github

Pasos para ejecutar el proyecto

1. Clonar repositorio
2. Ejecutar ```npm install``` para reconstruir los módulos de node
3. Correr el devServer ```npm run dev```
4. Abrir el proyecto en: ```localhost```

## Producción

1. Ejecutar ```npm run build```
2. Tomar la carpeta ```dist``` y deplegarla


## Despler mi App JS en GitHub Peges

1. Crear directorio docs
2. Crear archivo de configuración ```vite.config.js```
3. Copiar todo el contenido de la carta ```dist``` en ```docs```
   1. Haber realizado antes el ```npm run build```
4. Subir repositorio a github
5. Entrear a Settigs del repositorio
   1. pages
   2. Elegir Rama
   3. Elegir carpeta ```docs```
   4. Crear archiv