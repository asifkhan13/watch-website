function Watch(name, price, color, image) {
  this.name = name
  this.price = price
  this.color = color
  this.image = image

}


var bluemovado = new Watch("Blue Movado", "2,000", "blue", "img/bluemovado.jpg")
var bluerolex = new Watch("Blue Rolex", "5,000", "blue", "img/bluerolex.jpg")
var diamondrolex = new Watch("Diamond Rolex", "9,000", "white", "img/diamondrolex.jpg")
var goldmovado = new Watch("Gold Movado", "1,000", "gold", "img/goldmovado.jpg")
var greenrolex = new Watch("Green Rolex", "5,000", "green", "img/greenrolex.jpg")
var movado = new Watch("Movado", "6,000", "silver", "img/movado.jpg")
var omega = new Watch("Omega", "7,000", "black", "img/omega.jpg")
var rado = new Watch("Rado" ,"2,000", "black", "img/rado.jpg")
var rolex = new Watch("Rolex", "4,000", "gold", "img/rolex.jpg")


var watchArray = new Array

watchArray.push(bluemovado, bluerolex, diamondrolex, goldmovado, greenrolex, movado, omega, rado, rolex)

for(var i = 0; i < watchArray.length; i++){

  var newItem = document.createElement("div")
  var newdiv = document.createElement("div")
  var nameH1 = document.createElement("h1")
  var priceH4 = document.createElement("h4")
  var colorH4 = document.createElement("h4")
  var btn = document.createElement("button")
  var image = document.createElement("img")

  var watchname = document.createTextNode(watchArray[i].name)
  var watchprice = document.createTextNode("Price: " + watchArray[i].price)
  var watchcolor = document.createTextNode("Color: " + watchArray[i].color)
  var watchbutton = document.createTextNode("BUY IT KNOW")

  image.src = watchArray[i].image


  image.className = "img-responsive"
  btn.className = "button"
  newItem.className = "col-lg-4 "
  newdiv.className = "watch watchname" + [i]

  nameH1.appendChild(watchname)
  priceH4.appendChild(watchprice)
  colorH4.appendChild(watchcolor)
  btn.appendChild(watchbutton)

  newdiv.appendChild(nameH1)
  newdiv.appendChild(image)
  newdiv.appendChild(colorH4)
  newdiv.appendChild(priceH4)
  newdiv.appendChild(btn)

  newItem.appendChild(newdiv)

  document.getElementById("products").appendChild(newItem)
}
