# 🌐 Express.js va Puppeteer yordamida Proxy Server

Ushbu loyiha - bu oddiy veb-proksi serveri bo'lib, Node.js, Express.js va Puppeteer yordamida qurilgan. Foydalanuvchilar veb-sayt URL manzilini kiritishlari mumkin va server ushbu sahifani yuklab, barcha havolalarni (linklarni) proksi orqali ishlashi uchun o'zgartirib, foydalanuvchiga taqdim etadi.

Bu cheklovlar yoki to'siqlar mavjud bo'lgan veb-saytlarga kirish uchun foydali bo'lishi mumkin.

## ✨ Xususiyatlari

- **Oddiy interfeys:** Veb-saytga kirish uchun qulay va sodda foydalanuvchi interfeysi.
- **URL'larni o'zgartirish:** Puppeteer yordamida sahifani yuklaydi va `absolutify` kutubxonasi orqali barcha nisbiy havolalarni proksi orqali ishlaydigan mutlaq havolalarga o'zgartiradi.
- **Static fayllar:** `public` jildidagi statik fayllarga xizmat ko'rsatish.

## 🛠 Texnologiyalar

- [Node.js](https://nodejs.org/) - JavaScript ishga tushirish muhiti.
- [Express.js](https://expressjs.com/) - Node.js uchun veb-freymvork.
- [Puppeteer](https://pptr.dev/) - Headless (interfeysiz) Chrome brauzerini boshqarish uchun kutubxona.
- [Nodemon](https://nodemon.io/) - Dastur ishlab chiqish jarayonida o'zgarishlarni avtomatik qayta ishga tushirish uchun vosita.
- `absolutify` - HTML'dagi nisbiy URL manzillarni mutlaq manzilga aylantirish uchun kutubxona.

## 🚀 O'rnatish va ishga tushirish

1.  **Loyiha nusxasini yuklab oling:**

    ```bash
    git clone <ushbu-repository-url-manzili>
    cd <loyiha-papkasining-nomi>
    ```

2.  **Kerakli paketlarni o'rnating:**

    ```bash
    npm install
    ```

    _Ushbu buyruq `package.json` faylidagi barcha bog'liqliklarni (`express`, `puppeteer` va h.k.) o'rnatadi._

3.  **Loyihani ishga tushiring:**

    Rivojlanish (development) rejimida ishga tushirish uchun:

    ```bash
    npm run dev
    ```

    Bu buyruq `nodemon` yordamida serverni ishga tushiradi. Kodga kiritilgan har qanday o'zgarishdan so'ng server avtomatik ravishda qayta ishga tushadi.

    Oddiy ishga tushirish uchun:

    ```bash
    node index.js
    ```

4.  **Brauzerda oching:**

    Server ishga tushganidan so'ng, brauzeringizda quyidagi manzilni oching:
    [http://localhost:3000](http://localhost:3000)

## 📝 Foydalanish

1.  Brauzerda ochilgan sahifadagi kiritish maydoniga kirmoqchi bo'lgan veb-sayt manzilini kiriting (masalan, `google.com` yoki `wikipedia.org`).
2.  "Kirish" tugmasini bosing.
3.  Server ushbu veb-saytni yuklaydi va sizga ko'rsatadi. Barcha havolalar proksi orqali ishlashda davom etadi.
