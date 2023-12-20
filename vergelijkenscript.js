for (var i = 1; i < product.length; i++) {
  document.getElementById("select1").innerHTML += `
    <option value="${i}">${product[i].title}</option>
    `;
  document.getElementById("select2").innerHTML += `
    <option value="${i}">${product[i].title}</option>
    `;
}
// user kan niet 2 dezelfde hamburgers vergelijken
function item1(a) {
  var select2 = document.getElementById("select2").value;
  if (a != select2) {
    document.getElementById("img1").src = product[a].image
    document.getElementById("price1").innerHTML = "€ " + product[a].price
    document.getElementById("restaurant1").innerHTML = product[a].restaurant
    document.getElementById("energiekj1").innerHTML = product[a].energiekj
    document.getElementById("energiekcal1").innerHTML = product[a].energiekcal
    document.getElementById("koolhydraten1").innerHTML = product[a].koolhydraten
    document.getElementById("suikers1").innerHTML = product[a].suikers
    document.getElementById("vezels1").innerHTML = product[a].vezels
    document.getElementById("vet1").innerHTML = product[a].vet
    document.getElementById("verzadigdvet1").innerHTML = product[a].verzadigdvet
    document.getElementById("eiwit1").innerHTML = product[a].eiwit
  } else {
    document.getElementById("select1").selectedIndex = 0;
    document.getElementById("img1").src = product[0].image
    document.getElementById("price1").innerHTML = ""
    document.getElementById("restaurant1").innerHTML = ""
    document.getElementById("energiekj1").innerHTML = ""
    document.getElementById("energiekcal1").innerHTML = ""
    document.getElementById("koolhydraten1").innerHTML = ""
    document.getElementById("suikers1").innerHTML = ""
    document.getElementById("vezels1").innerHTML = ""
    document.getElementById("vet1").innerHTML = ""
    document.getElementById("verzadigdvet1").innerHTML = ""
    document.getElementById("eiwit1").innerHTML = ""

  }
}

function item2(a) {
  var select1 = document.getElementById("select1").value;
  if (a != select1) {
    document.getElementById("img2").src = product[a].image
    document.getElementById("price2").innerHTML = "€ " + product[a].price
    document.getElementById("restaurant2").innerHTML = product[a].restaurant
    document.getElementById("energiekj2").innerHTML = product[a].energiekj
    document.getElementById("energiekcal2").innerHTML = product[a].energiekcal
    document.getElementById("koolhydraten2").innerHTML = product[a].koolhydraten
    document.getElementById("suikers2").innerHTML = product[a].suikers
    document.getElementById("vezels2").innerHTML = product[a].vezels
    document.getElementById("vet2").innerHTML = product[a].vet
    document.getElementById("verzadigdvet2").innerHTML = product[a].verzadigdvet
    document.getElementById("eiwit2").innerHTML = product[a].eiwit
  } else {
    document.getElementById("select2").selectedIndex = 0;
    document.getElementById("img2").src = product[0].image
    document.getElementById("price2").innerHTML = ""
    document.getElementById("restaurant2").innerHTML = ""
    document.getElementById("energiekj2").innerHTML = ""
    document.getElementById("energiekcal2").innerHTML = ""
    document.getElementById("koolhydraten2").innerHTML = ""
    document.getElementById("suikers2").innerHTML = ""
    document.getElementById("vezels2").innerHTML = ""
    document.getElementById("vet2").innerHTML = ""
    document.getElementById("verzadigdvet2").innerHTML = ""
    document.getElementById("eiwit2").innerHTML = ""

  }
}