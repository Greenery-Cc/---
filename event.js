const { EventEmitter } = require('events')

let myevent  = new EventEmitter ()

myevent.on("some_event",()=>{
    console.log("我是路过宝")
})

myevent.on("some_event",()=>{
    console.log("我是路过宝2号")
})

myevent.on("some_event",(a,b)=>{
    console.log(a,b,this)
})


myevent.emit("some_event")