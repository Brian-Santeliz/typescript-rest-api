import app from "./app";
import { runDatabase } from "./config/database";
runDatabase();
app.listen(app.get("port"), () =>
  console.log(`Servidor en el puerto ${app.get("port")}`)
);
