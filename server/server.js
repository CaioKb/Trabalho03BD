//Caio Brasil
//Trabalho 3 Banco de Dados
//MongoDB + NodeJS CRUD

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://Caio:kkk12345@myproject.jazvb.mongodb.net/testes?retryWrites=true&w=majority";

const app = express();
const port = 3000;


//Read - Listar todos usuários
app.get('/users', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            throw err;
        }
        var dbo = db.db("Trabalho3DB");
        dbo.collection("Testes").find(
            function (err, result) {
                if (err) {
                    throw err;
                }
                res.send(result);
                db.close();
            });
    });
});

//Read - Listar um usuário especificamente
 app.get('/user', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            throw err;
        }
        var dbo = db.db("Trabalho3DB");
        dbo.collection("Testes").findOne({ UserName: "User1" },
            function (err, result) {
                if (err) {
                    throw err;
                }
                res.json(result);
                db.close();
            });
    });
});


//Create - Criar um novo usuário
app.post('/create', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            throw err;
        }
        var dbo = db.db("Trabalho3DB");
        dbo.collection("Testes").insertOne({
            UserName: "User3",
            UserEmail: "email3@email.com",
            UserPassWord: "pass1234"
        },
            function (err, result) {
                if (err) {
                    throw err;
                }
                res.json(result);
                db.close();
            });
    });
});

//Create - Criar um novo usuário
app.post('/create2', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            throw err;
        }
        var dbo = db.db("Trabalho3DB");
        dbo.collection("Testes").insertOne({
            UserName: "User4",
            UserEmail: "email4@email.com",
            UserPassWord: "pass1234"
        },
            function (err, result) {
                if (err) {
                    throw err;
                }
                res.json(result);
                db.close();
            });
    });
});
//Update - Atualizar o nome do usuário cujo nome é "User3" para "NewUserName"
app.post('/update', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            throw err;
        }
        var dbo = db.db("Trabalho3DB");
        dbo.collection("Testes").updateOne({ UserName: "User3" }, { $set: { UserName: "NewUserName" } },
            function (err, result) {
                if (err) {
                    throw err;
                }
                res.json(result);
                db.close();
            });
    });
});

//Update - Atualizar a senha do usuário cujo nome é "User3" para "NewPass1234."
app.post('/update2', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            throw err;
        }
        var dbo = db.db("Trabalho3DB");
        dbo.collection("Testes").updateOne({ UserName: "User3" }, { $set: { UserPassWord: "NewPass1234." } },
            function (err, result) {
                if (err) {
                    throw err;
                }
                res.json(result);
                db.close();
            });
    });
});

//Delete - Deletar o usuário de nome "NewUserName"
app.post('/delete', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            throw err;
        }
        var dbo = db.db("Trabalho3DB");
        dbo.collection("Testes").deleteOne({ UserName: "NewUserName" },
            function (err, result) {
                if (err) {
                    throw err;
                }
                res.json(result);
                db.close();
            });
    });
});

//Delete - Deletar usuário de nome "User1"
app.post('/delete2', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            throw err;
        }
        var dbo = db.db("Trabalho3DB");
        dbo.collection("Testes").deleteOne({ UserName: "User1" },
            function (err, result) {
                if (err) {
                    throw err;
                }
                res.json(result);
                db.close();
            });
    });
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})