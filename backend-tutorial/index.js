const express = require("express");
const mongoose = require("mongoose");

const TarefaSchema = require("./schemas/TarefaSchema");

const app = express();

app.use(express.json()); // não entendi tenho que pesquisar

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.gouonsl.mongodb.net/Nodebackend_tutorial?retryWrites=true&w=majority"
);

const tarefas = [
  {
    id: 1,
    description: "test 1",
  },
  {
    id: 2,
    description: "test 2",
  },
  {
    id: 3,
    description: "test 3",
  },
];

app.get("/", (req, res) => {
  return res.json({
    Ping: "Pong",
  });
});

// GET ALL
app.get("/tarefas", (req, res) => {
  return res.json({ minhasTarefas: tarefas });
});

// GET BY ID
app.get("/tarefas/:id", (req, res) => {
  console.log(req.params); //todos os parametros enviados pelo user
  const tarefa = tarefas.find((tarefa) => tarefa.id === Number(req.params.id));

  if (!tarefa) {
    return res.status(404).json({ message: "Item does not exist" });
  }

  return res.json({ minhasTarefas: tarefas });
});

// POST ITEM
app.post("/tarefas", async (req, res) => {
  const response = await TarefaSchema.create(req.body);

  //   const body = req.body;
  //   tarefas.push({ ...body, id: Date.now() });

  return res.status(201).json(response);
});

// DELETE ITEM
app.delete("/tarefas/:id", (req, res) => {
  const indexTarefa = tarefas.findIndex(
    (tarefa) => tarefa.id === Number(req.params.id) // não tá excluindo por id, mas por posição de array
  );

  tarefas.splice(indexTarefa, 1);

  return res.json({ message: "item deletado" });
});

// PUT ITEM
app.put("/tarefas/:id", (req, res) => {
  const indexTarefa = tarefas.findIndex(
    (tarefa) => tarefa.id === Number(req.params.id)
  );
  tarefas[indexTarefa].description = req.body.description;

  return res.json({ message: "item alterado" });
});

app.listen(3333, () =>
  console.log("servidor iniciado em: http://localhost:3333")
);
