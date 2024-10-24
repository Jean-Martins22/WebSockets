import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const cliente = new MongoClient(process.env.MONGO_URI);

let documentosColecao;

try {
    await cliente.connect();

    const db = cliente.db("alura-websockets");
    documentosColecao = db.collection("documentos");

    console.log("Conectado ao banco de dados com sucesso!");

} catch (erro) {
    console.log(erro);
}

export { documentosColecao };
