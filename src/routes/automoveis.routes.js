import express from "express";
const router = express.Router();

let automoveis = [
    {id: 1, modelo: "Civic", marca: "Honda", ano: 2022},
    {id: 2, modelo: "gol", marca: "Volskwagen", ano: 1997}
];

router.get("/", (req, res)=>{
    res.json(automoveis);
});

router.put("/", (req, res)=>{
    const{id,modelo,marca,ano} = req.body
    res.json(automoveis); 
});

router.post("/", (req,res)=>{
    const{id,modelo,marca,ano} = req.body
    res.json(automoveis);  
});

router.delete("/", (req, res)=>{
    const{id} = req.body;
    automoveis = automoveis.filter(automovel => automovel.id !== id);
    res.json(automoveis);
});