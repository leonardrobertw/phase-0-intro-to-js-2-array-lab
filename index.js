const cats = [
"Milo",
"Otis",
"Garfield"
]
function destructivelyAppendCat(name){
    return cats.push(name)
}
function destructivelyPrependCat(name){
    return cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    return cats.splice(cats.length - 1)
}
function destructivelyRemoveFirstCat(){
    return cats.splice(0,1)
}
let copyOfCats
    function appendCat(name){ 
    return copyOfCats = [...cats, name];
    }
    console.log(cats)
    console.log(appendCat("Broom"))
    function prependCat(name){ 
    return copyOfCats = [name, ...cats];
    }
    console.log(cats)
    console.log(prependCat("Arnold"))
    function removeLastCat(x, y){
        return cats.slice(0, cats.length - 1)
}
function removeFirstCat(x, y){
    return cats.slice(1, cats.length)
}