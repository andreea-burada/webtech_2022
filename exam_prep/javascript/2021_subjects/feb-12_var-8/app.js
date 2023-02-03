// input is a string that could contain "..." for example: Subsemnatul ..., dominiciliat in ...;
// tokens is an array with token names
// The function should replace each ... from input with the values from tokens in the following format ${tokenName};
function addTokens(input, tokens){
    // input should be a string. If other type is passed throw an Error with 
    // the message Input should be a string; (0.5 pts)
    if (typeof input !== 'string') {
        throw Error('Input should be a string');
    }

    // input should be at least 6 characters long. If input length is less than 6 
    // throw an Error with the message Input should have at least 6 characters; (0.5 pts)
    if (input.length < 6) {
        throw Error('Input should have at least 6 characters');
    }

    // tokens is an array with elements with the following format: {tokenName: string}. If this 
    // format is not respected throw an Error with the following message Invalid array format; (0.5 pts)
    tokens.forEach(token => {
        if (token.hasOwnProperty('tokenName') == false || Object.keys(token).length > 1 || typeof token.tokenName !== 'string') {
            throw Error('Invalid array format');
        }
    });

    // If input don't contain any ... return the initial value of input; (0.5 pts)
    if (input.includes('...') === false) {
        return input;
    }

    // If input contains ..., replace them with the specific values and return the new input; (0.5 pts)
    tokens.forEach(token => {
        input = input.replace('...', `\$\{${token.tokenName}\}`);
    });
    return input;

}

const app = {
    addTokens: addTokens
}

module.exports = app;