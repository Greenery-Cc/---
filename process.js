
// console.log(process.argv.slice(1))
console.log(process.cwd())

// console.log(process.env)

console.log(process.pid)

console.log(process.env.PORT)

const http = require('http')

let server = http.createServer()

server.listen(()=>{
    console.log("服务启动成功")
})