const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  
const cpfCheck = require('cpf-check');


const app = express();
const port = 3000;

app.use(cors());  
app.use(bodyParser.json());

app.post('/validar-cpf', (req, res) => {
    try {
        const { cpf } = req.body;

        
        if (cpfCheck.validate(cpf)) {
            res.status(200).json({ message: 'CPF Válido' });
        } else {
            res.status(400).json({ message: 'CPF Inválido' });
        }
    } catch (error) {
        console.error('Erro ao validar CPF:', error);
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
