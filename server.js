const http = require('http')
const fs = require('fs')
const args = require('minimist')(process.argv.slice(2))

args['port']
const port = args.port || process.env.PORT || 3000

fs.readFile('./www/index.html', 'utf-8', (error, data) => {
    if (error) {
        console.error(error)
        return
    }

    const server = http.createServer((request, response) => {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html')
        response.end(data)
    })

    server.listen(port, () => {
        console.log(`Server listening on port ${port}`)
    })
})