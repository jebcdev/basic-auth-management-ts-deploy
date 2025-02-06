## 🚀 **Deploy de una API con Express.js + TypeScript + PostgreSQL**  

¡Hola, devs! 👋 Hoy les traigo un **BONUS EXTRA** donde desplegamos nuestra API en la nube de manera **100% gratuita** y sin complicaciones.  

Vamos a:  
✅ Crear una **base de datos PostgreSQL** en la nube.  
✅ Configurar nuestra API para conectarse con esta base de datos.  
✅ Subir nuestro código a **GitHub**.  
✅ Hacer el **deploy** automático en **Render**.  

### 🛠️ **Paso a paso del deploy**  

### **1️⃣ Base de datos en la nube con Instagres & Neon**  
📌 Primero, usamos **[Instagres](https://instagres.com/)** para crear una instancia pública de **PostgreSQL** en **menos de un segundo**.  
⚠️ OJO: Esta base de datos solo dura **1 hora**, pero podemos **migrarla a Neon** para hacerla permanente.  

👉 Para darle **persistencia**, pasamos la base de datos a **[Neon.tech](https://neon.tech/)**, creando una cuenta con **GitHub o Google**.  
👉 Neon nos da una nueva **cadena de conexión**, que ajustamos con la ayuda de **ChatGPT** en nuestro archivo `.env` y en la configuración de **TypeORM**.  

### **2️⃣ Pruebas locales con la nueva base de datos**  
Una vez tenemos la nueva base de datos en **Neon**, probamos la conexión localmente:  
✔️ Editamos el archivo `.env` con la nueva cadena de conexión.  
✔️ Ajustamos la configuración de **TypeORM**.  
✔️ Corremos la API en local y verificamos que todo funciona correctamente.  

### **3️⃣ Subir el código a GitHub**  
📌 Ahora subimos nuestro código a un repositorio en **GitHub** para que pueda ser usado en **Render**.  

### **4️⃣ Hacer deploy en Render**  
📌 Usamos **[Render](https://render.com/)** para alojar nuestra API:  
1️⃣ Creamos una cuenta en **Render** con **GitHub o Google**.  
2️⃣ Elegimos la opción de **crear un nuevo servicio web**.  
3️⃣ Conectamos nuestro **repositorio de GitHub**.  
4️⃣ Configuramos las **variables de entorno** (`.env`).  
5️⃣ Render automáticamente hace el **deploy** de nuestra API. 🎉  

---

## 💡 **¿Qué aprendimos en este BONUS EXTRA?**  
✅ Cómo desplegar una **base de datos PostgreSQL gratuita** en la nube.  
✅ Cómo configurar nuestra API para conectarse a esta base de datos.  
✅ Cómo subir nuestro código a **GitHub** y conectarlo con **Render**.  
✅ Cómo hacer un **deploy automático** y sin complicaciones.  

🚀 **¡Estoy emocionadísimo porque es la primera vez que lo intento y salió genial!** Estos servicios gratuitos hacen que el deploy sea **fácil y rápido**.  