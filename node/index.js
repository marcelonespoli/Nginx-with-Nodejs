const express = require('express')
const app = express();
const port = 3000;

const mysql = require('mysql')
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const connection = mysql.createConnection(config)

app.get('/', (req, res) => {  
    const name = 'Marcelo'; 
    const sqlInsert = `INSERT INTO people (name) values('${name}')`
    connection.query(sqlInsert, (error, result, fields) => { console.log(error); });

    const sqlQuery = 'SELECT id, name FROM people'
    connection.query(sqlQuery, (error, results, fields) => { 
        console.log(error);
        console.log(results);
        var response = '<h1>Full Cycle Rocks!</h1>' +
                       '<br />' +
                       '<strong>Data from database MySQL:</strong>'
        results.forEach(person => { 
            response += '<br />'
            response += 'Nome ' +  person['id'] + ' added: ' + person['name']
        });       
        res.send(response)  
    });    
})

app.listen(port, () => {
    console.log('Executando na porta ' + port)
})