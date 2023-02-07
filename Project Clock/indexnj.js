const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Clock Using JS</title>
        <style>
            #clockcontainer {
                position: relative;
                margin: auto;
                height: 35vw;
                width: 35vw;
                background: url(clock1.png) no-repeat;
                background-size: 100%;
            }
            
            #hour,
            #minute,
            #second,
            #dot {
                position: absolute;
                background-color: black;
                border-radius: 10px;
                transform-origin: bottom;
            }
            
            #hour {
                width: 1.8%;
                height: 25%;
                top: 26%;
                right: 49.1%;
                opacity: 0.8;
            }
            
            #minute {
                width: 1.6%;
                height: 30%;
                top: 20.98%;
                right: 49.2%;
                opacity: 0.8;
            }
            
            #second {
                width: 1%;
                height: 40%;
                top: 10.9%;
                right: 49.5%;
                opacity: 0.8;
            }
            
            #dot {
                height: 4%;
                width: 4%;
                border-radius: 100px;
                top: 48%;
                left: 48%;
            }
        </style>
    
    
    </head>
    
    <body>
        <div id="clockcontainer">
            <div id="hour"></div>
            <div id="minute"></div>
            <div id="second"></div>
            <div id="dot"></div>
        </div>
        <script>
            setInterval(() => {
                d = new Date();
                htime = d.getHours();
                mtime = d.getMinutes();
                stime = d.getSeconds();
                hrotation = 30 * htime + mtime / 2;
                mrotation = 6 * mtime;
                srotation = 6 * stime;
    
                hour.style.transform = "
        rotate($ { hrotation }
            deg)
        ";
                minute.style.transform = "
        rotate($ { mrotation }
            deg)
        ";
                second.style.transform = "
        rotate($ { srotation }
            deg)
        ";
            }, 1000);
        </script>
    </body>
    
    </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});