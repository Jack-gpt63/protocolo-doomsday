const hero = {
    name: "Thor",
    team: "Vingadores",
    power: "98",
    Weapons: ["Stormbreaker", "Mjolnir"],
    origin: {planet: "Asgard"}
}

//lendo
hero.name // notação de ponto
console.log(hero.name) // Thor

hero["team"] // notação de colchetes
console.log(hero["team"]) 

hero.origin.planet // obj dentro de obj

hero.Weapons[0] // array dentro do obj
console.log(hero.Weapons[0])

const key = "power" 
hero[key] // colchetes aceitam variaveis

hero.age // andefined -> não existe
console.log(hero.age)

// adicionando, alterando e removendo

hero.power = 99
console.log(hero)

hero.nickname = "Deus do trovão"
console.log(hero)

delete hero.nickname
console.log(hero)

// percorrendo um objeto

hero.age = "1590"

for (const prop in hero) {
    console.log(prop);
    
}

Object.keys(hero)
Object.values(hero)