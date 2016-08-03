const MAX = 8;

/**
 *  Calculates the effectiveness of a specific card
 *  based on how much the card was spread between
 *  categories. The greater the spread, the more 
 *  likely the card is not a great/clear one
 * 
 *  @param {number[]} list - List of values for the card in different categories
 *  @param {number} threshold - How many categories a card can comfortably spread over
 */

export function calculateCardEffectiveness(list, threshold = 2) {
    let nonZeroes = list.filter(value => value > 0),
        calculation = (list.length - nonZeroes.length) / list.length * 100;

    if (nonZeroes.length > 0){
        return nonZeroes.length == 1 && nonZeroes[0] == MAX ? 100 : calculation;
    }else{
        return 0;
    }
}


/**
 *  Calculates the effectiveness of a specific category
 *  based on the number of cards that were placed in it
 *  by users correctly (correctly here being the categories
 *  already chosen by the designer)
 * 
 *  @param {number[]} list - List of values for the card
 *                        in different categories
 */

export function calculateCategoryEffectiveness(list) {
    
}