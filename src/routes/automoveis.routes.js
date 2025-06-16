import express from "express";
const router = express.Router();

let automoveis = [
    {id: 1, modelo: "Civic", marca: "Honda", ano: 2022},
    {id: 2, modelo: "gol", marca: "Volkswagen", ano: 1997}
];

router.get("/", (req, res)=>{
    res.json(automoveis);
});

router.put("/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    const index = automoveis.findIndex(automovel => automovel.id === id);

    if (index === -1) {
        return res.status(404).json({message: "Automóvel não encontrado"});
    }

    automoveis[index] = { id,  ...req.body, };
    res.json(automoveis[index]);
});

router.post("/automoveis", (req,res)=>{
    const novo = {
        id: automoveis.length + 1,
        ...req.body,
    };
    automoveis.push(novo);
    res.status(201).json(novo);
});

router.delete("/automoveis/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    automoveis = automoveis.filter(automovel => automovel.id !== id);
    res.json({message: "automovel deletado com sucesso"});
});

export default router;