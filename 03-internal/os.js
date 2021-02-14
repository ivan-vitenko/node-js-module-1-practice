const os = require('os');

console.log(`Хост ${os.hostname()}`);
console.log(`Тип ОС ${os.type()}`);
console.log(`Платформа ${os.platform()}`);
console.log(`Версія ${os.release()}`);
console.log(`Час роботи ${(os.uptime() / 60 / 60).toFixed(2)} годин`);
console.log(`Архітектура процесора ${os.arch()}`);
console.log(`Кількість процесорів ${os.cpus().length}`);
console.log(`Пам'ять ${(os.totalmem() / 1e9).toFixed(2)} Gb`);
console.log(`Вільно пам'яті ${(os.freemem() / 1e9).toFixed(2)} Gb`);
