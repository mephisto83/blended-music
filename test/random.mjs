import * as rando from '../src/tools/random.mjs';



console.log(rando.Random)
console.log(rando.Rand1)
console.log(typeof rando.Rand1.random(1)());
rando.Random.noise.seed(1);
for (var i = 0; i < 3; i++) {
    console.log(rando.Random.noise.simplex2(i, i))
}