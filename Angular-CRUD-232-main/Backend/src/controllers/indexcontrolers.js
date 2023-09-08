const {Pool} = require('pg');

const pool = new Pool({
    host:'137.184.120.127',
    user: 'modulo4',
    password: 'modulo4',
    database: 'giinwedb'
});

const getContactos = async(req,res)=>{
     const response = await pool.query('SELECT * FROM CONTACT');
     res.json(response.rows);
}
const newContactos = async(req,res)=>{
    const {fullname, email, phone} = req.body;
    const response = await pool.query('INSERT INTO CONTACT (fullname, email, phone) VALUES ($1,$2,$3)',[fullname,email,phone]);
    res.json(response);

}

module.exports =  {getContactos,newContactos}