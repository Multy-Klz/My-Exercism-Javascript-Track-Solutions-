/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time = null) {
    if (time === null) return 'You forgot to set the timer.';
    else if (time === 0) {
        return 'Lasagna is done.';
    } else return 'Not done, please wait.';
}

export function preparationTime( layers, time = 2 ) {
    return layers.length * Number(time);
}

export function quantities(layers) {

    let noodles = 0;
    let sauce = 0;

    layers.forEach(element => {
        if (element === 'sauce') sauce += 0.2;
        if (element === 'noodles') noodles += 50;
    });

    return {
        noodles,
        sauce
    }
}

export function addSecretIngredient(friendsList, myList) {
    let index = friendsList.length - 1;
    myList.push(friendsList[index]);
    console.log(index, myList, friendsList);
    return undefined;
}


export function scaleRecipe(recipe, portions) {
    let multiplier = portions / 2;
    let obj = {};
    for (const key in recipe) {
        obj[key] = recipe[key] * multiplier;
    }
    return {  ...obj }; //destructuring the obj to return only the atributes
}