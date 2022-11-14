// input - String
// tokens - array of key and value pairs
function addTokens(input, tokens){
    if (typeof(input) !== 'string')
    {
        throw 'Invalid input';
    }
    if (input.length < 6)
    {
        throw 'Input should have at least 6 characters';
    }
    // check for format - {tokenName: string}
    tokens.forEach(token => {
        // check if the key is tokenName
        let token_key = Object.keys(token);
        let error = 'Invalid array format';
        if (token_key.length != 1)
        {
            throw error;
        }
        else if (token_key[0] != 'tokenName')
        {
            throw error;
        }
        // we checked if the key is singular and called tokenName; now we can check the value type
        if (typeof(token.tokenName) !== 'string')
        {
            throw error;
        }
    });
    // all elements of the array are the right format
    // check if the input contains '...'
    if ((input.match("[.]{3}") || []).length < 1)
    {
        return input;
    };
    // replace all '...' with the tokens
    tokens.forEach(token => {
        input = input.replace("...", `$\{${token.tokenName}\}`);
    });
    return input;
}

const app = {
    addTokens: addTokens
}

module.exports = app;