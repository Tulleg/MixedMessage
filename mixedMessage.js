const args = process.argv.slice(2);
const firstParts = ['You', 'We', 'Humans', 'People', 'Aliens'];
const secondParts = ['are','will be', 'likely'];
const thirdParts = ['the best', 'wonderful', 'super', 'tough', 'make it', 'unstoppable'];



const createMessage = (name) => {                                                   //Create a Message with random Items from firstParts, secondParts, thirParts
    let motMessage = '';

    if (typeof name === 'string' && name.length >= 2) {                             // If statement checks if you put in a Name than build build a String of random Items
            motMessage = name + ' ' + secondParts[Math.floor(Math.random() * secondParts.length)] + ' ' + thirdParts[Math.floor(Math.random() * thirdParts.length)] + '!';
        
    } else {
        motMessage = firstParts[Math.floor(Math.random() * firstParts.length)] + ' ' + secondParts[Math.floor(Math.random() * secondParts.length)] + ' ' + thirdParts[Math.floor(Math.random() * thirdParts.length)] + '!';
    };
    console.log(motMessage);
}

createMessage(args[0])
