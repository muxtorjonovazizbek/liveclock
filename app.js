
// setInterval(()=> {
//     let date = new Date()
//     console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds() }`);
// }, 1000)
 


setInterval(()=> {
    let date = new Date()
    let hours = date.getHours()
    let minut = date.getMinutes()
    let second = date.getSeconds()
    document.body.innerHTML = `${hours} : ${minut < 10 ? "0" + minut : minut} : ${second < 10 ? "0" + second :second}`
}, 1000)