const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/health', (req, res) => {
    res.json({ mensaje: 'El API está funcionando correctamente.' });
});

app.get('/api/info', (req, res) => {
    res.json([
        { nombre: 'Emely', edad: 18, carrera: 'Ingeniería Informática', materiasAprobadas: 8 },
        { nombre: 'Daniel', edad: 19, carrera: 'Ingeniería Informática', materiasAprobadas: 12 }
    ]);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`API corriendo en http://localhost:${PORT}`);
});