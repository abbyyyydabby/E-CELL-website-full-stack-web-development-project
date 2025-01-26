
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const http = require('http')
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Connection
const db = mysql.createConnection({
    host: '*****',
    user: '******', // Replace with your MySQL username
    password: '*******', // Replace with your MySQL password
    database: '***********'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database!');
});

// Nodemailer Setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '***********@gmail.com', // Replace with your Gmail address
        pass: 'dbkg acps tkpv yqim'     // Replace with your App Password or Gmail password
    },
    tls: {
        rejectUnauthorized: false
    }
});

// API Endpoint to Handle Form Submission
app.post('/submit-form', (req, res) => {
    const { name, phone, email, department, year, reason, experience, interest, skill, contribution, commitment, leadership, otherClubs, declaration } = req.body;
    
    const query = 'INSERT INTO applicants (name, phone, email, department, year, reason, experience, interest, skill, contribution, commitment, leadership, otherClubs, declaration) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [name, phone, email, department, year, reason, experience, interest, skill, contribution, commitment, leadership, otherClubs, declaration];

    db.query(query, values, (err, result) => {
        if (err) throw err;
        
        // Send confirmation email
        const mailOptions = {
            from: '************@gmail.com',
            to: `${email}`, // Use template literal to insert the email
            subject: 'Confirmation of Registration',
            text: `Dear ${name},\n\nThank you for registering with the GTBIT Entrepreneurship Society. We have received your application and will get back to you soon.\n\nBest regards,\nGTBIT Entrepreneurship Society`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                return res.status(500).send('Error in sending confirmation email.');
            }
            console.log('Confirmation email sent: ' + info.response);
            res.redirect('https://abbyyyydabby.github.io/E-CELL-website-full-stack-web-development-project/confirmation.html');
            
        });
        
    });

});

// Start Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
