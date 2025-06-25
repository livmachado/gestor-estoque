import express from 'express';
import productRoutes from './routes/product.routes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/products', productRoutes);


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});