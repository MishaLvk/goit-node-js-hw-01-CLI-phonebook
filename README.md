<!-- Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table) -->

node index.js --action="list"
https://ibb.co/19Tbnkb

<!-- Отримуємо контакт по id -->

node index.js --action="get" --id=5
https://ibb.co/n8krJhT

<!-- Додаємо контакт -->

node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"
https://ibb.co/8sYyyPz

<!-- Видаляємо контакт -->

node index.js --action="remove" --id=3
https://ibb.co/9ngTJhb
