console.clear()
var y = 0
var x = 0

const musica = ' ts ts ts ts ts ts ts ts ts ts ts ts ts ts ts ts ts ts ts ts ts ts ts ts ts ts ts ts ts ts ding ding ding ding ding ding ding ding ding ding ding ding ding'

for (m of musica.split(' ')) {
  console.log(m)
    if (m == "ts") {//x++
      x = Math.min(x+1, 30)
      console.log(x)
    }
    else if (m == "boom") {//x--
        x = Math.max(x-1, 0)
    }
    else if (m == "ding") {//y++
        y = Math.min(y+1, 10)
    }
  else if (m == "bing") {//y--
        y = Math.max(y-1, 0)
    }
}
console.log(x, y)