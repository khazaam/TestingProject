//This is a test app file

const add = (a = 0,b = 0) => {

if(typeof a!=='number' || typeof b !== 'number'){
    return 0;
}    

return a + b;

};

//you could add more stuff here
const sub = (a = 0, b = 0) => {
if(typeof a!=='number' || typeof b !== 'number'){
    return 0;
}    
    
    return a - b;
    
};

module.exports = {

add,
sub

};