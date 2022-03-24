const http = require('http')
const fs = require('fs')
const args = require('minimist')(process.argv.slice(2))

args['port']
const port = args.port || process.env.PORT || 8080
const hostname = 'localhost'

/*fs.readFile('./www/index.html', (error, data) => {
    if (error) throw error

})*/

const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html')
    response.end('<h1>Hi world</h1>')
})

server.listen(port, hostname, () => {
    console.log(`Server listening on port ${port}`)
})