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
    // chave: valor
    console.log(`${prop}:`, hero[prop]);
}

Object.keys(hero) // lista de chaves
Object.values(hero) // lista de valores

// desestruturação
const { name, team} = hero
console.log(name, team);

// método
const villian = {
    name: "Doutor Destino",
    power: 500,
    attack(target) {
    return `${this.name} atacou ${target}!`
    },
    powerUp(amount) {
        this.power += amount
        return this.power
    }
}

console.log(villian.attack("Thor"))
console.log(villian.powerUp(50))

// villian.powerUp(100)
// const { power } = villian
// console.log(power)

//referencia x copia
const ref = hero

ref.power = 1

console.log(hero.power);
