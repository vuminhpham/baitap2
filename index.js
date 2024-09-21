import http, { request } from "node:http"
import path from "node:path"


const note = "/users/joe/notes.txt";
let name = "data.txt";
let folder = "public";
let a = path.join(folder, name);
console.log(path.dirname (note));
console.log(path.extname (note));
console.log(a);

http
    .createServer((request, response) => {
        response.write("<h1>Hello Express!<h1>");
        response.end();
    })
    .listen(3000);  