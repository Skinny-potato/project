const express = require('express');
const cors = require('cors');
const multer = require('multer');
const upload = multer();
const app = express();
const axios = require("axios")
const FormData = require('form-data');
const fs = require('fs');
const spawn = require('child_process').spawn;
const path = require('path');
const pdfParse = require('pdf-parse')
const mv = require('mv');
const fileUpload = require('express-fileupload')


const PORT = 4200
app.use(cors());
app.use(express.json());
// app.use(fileUpload());



app.post('/result', upload.any(), async (req, res) => {
    const file = req.files ? req.files[0] : null;
    const text = req.body.text || '';
    const scriptPathFile = './backend/pythonApi/pythonApi.py';
    const scriptPathImage = './backend/pythonApi/imageapi.py';
    console.log(text, file);

    if (text) {

        let dataFromText = ""
        console.log('Text:', text);
        // res.json({ message: 'You have uploaded a text with these details', text });
        const process = spawn('python', [scriptPathFile, text]);

        process.stdout.on('data', (data) => {
            dataFromText = data

        });

        process.stderr.on('data', (data) => {
            console.error(data.toString());
        });

        process.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
            res.send(dataFromText);
        });

        console.log(dataFromText);
    }
    if (file) {
        if (file.mimetype === "application/pdf") {
            console.log("pdf file is handled here");
            // res.send("you can move ahead")
            try {
                console.log(file);
                const buffer = file.buffer
                const { text } = await pdfParse(buffer)
                const finalText = "The text from the Pdf File you uploaded is: " + text
                res.send(finalText)
                // console.log(text);
                // res.send(text)
                // const process = spawn('python', [scriptPath, text]);
                // process.stdout.on('data', (data) => {
                //     textFromFile=data

                //   });

                //   process.stderr.on('data', (data) => {
                //     console.error(data.toString());
                //   });

                //   process.on('close', (code) => {
                //     console.log(`child process exited with code ${code}`);
                //     res.send(`Script finished with code ${code} and ${textFromFile} `);
                //   });

                //   console.log(textFromFile);



            } catch (err) {
                console.log(err);
                res.status(500).send("Error parsing and returning the file")
            }
        }
        else if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
            const fileName = file.originalname;
            const fileBuffer = file.buffer;
            const filePathImage = `./backend/UploadedFiles/${fileName}`;

            fs.writeFile(filePathImage, fileBuffer, (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).send("Error uploading file");
                } else {
                    console.log(filePathImage, " file path created .......................");
                    // Do something with the file...


                    let dataFromText = ""
                    console.log('File :', file);
                    // res.json({ message: 'You have uploaded a text with these details', text });
                    const process = spawn('python', [scriptPathImage, fileName]);
                    console.log("pyhton function triggered");
                    process.stdout.on('data', (data) => {
                        dataFromText = data
            
                    });
            
                    process.stderr.on('data', (data) => {
                        console.error(data.toString());
                    });
            
                    process.on('close', (code) => {
                        console.log(`child process exited with code ${code}`);
                        res.send(`Script finished with code ${code} and ${dataFromText} `);
                    });
            
                    console.log(dataFromText);


                    // Delete the file from local storage after using it
                    // fs.unlink(filePathImage, (err) => {
                    //     if (err) {
                    //         console.error(err);
                    //     } else {
                    //         console.log('File deleted successfully');
                    //     }
                    // });
                }
            });


            // res.send("you can move ahead")
        }
        else {
            res.status(500).send("Error, You might have uploaded wrong file")
        }
    }



});



const server = () => app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}.`);
});

server();
