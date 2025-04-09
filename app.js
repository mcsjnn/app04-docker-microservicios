onst express = require('express');
const app = express();
const clientes = require('./routes/clientes');
const productos = require('./routes/productos');

app.use(express.json());
app.use(express.static('public'));

app.use('/clientes', clientes);
app.use('/productos', productos);

app.listen(9000, () => {
  console.log('Servidor corriendo en http://localhost:9000');
});
