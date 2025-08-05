import express from 'express';
import productRoutes from './routes/product.routes';
import transactionRoutes from './routes/transaction.routes';
import reportRoutes from './routes/report.routes'
import cors from "cors";


const app = express();

app.use(cors({ origin: "*" }))
app.use(express.json());

const PORT = 3000;
app.use('/products', productRoutes);
app.use('/transaction', transactionRoutes);
app.use('/report', reportRoutes);



app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
