// ^ Custom object manager
function createObject(property, values) {
    try {
        if (property.length === values.length) {
            const obj = {};

            for (let idx = 0; idx < property.length; idx++)
                obj[property[idx]] = values[idx];

            return obj;
        }
        console.log(`Unable to create object with property ${property} and value ${values}`);
    } catch (err) {
        console.log(`Error: ${err.name}\nMessage: ${err.message}`);
    }
}


createObject(1, 3);
console.log("========================================");
console.log(createObject(['string', 'test', 'value'], [1, 3, 4]))
