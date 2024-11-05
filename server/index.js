const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/chat', (req, res) => {
    const { message } = req.body;
    
    res.json({
        content: `Получено: ${message}`,
        timestamp: new Date().toISOString(),
        options: {
            radio: ["Ответ 1", "Ответ 2"],
            checkbox: ["Выбор А", "Выбор Б"]
        }
    });
});

app.get('/chat', (req, res) => {
    res.json({
        content: 'Hello, world!',
        timestamp: new Date().toISOString(),
    });
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
}); 