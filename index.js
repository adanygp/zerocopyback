import  express from 'express';
import userRoutes from "./routes/userRoutes.js";
const app = express();

app.use(userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});
