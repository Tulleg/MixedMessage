const args = process.argv.slice(2);                     // argv is an array from Node which includes the complete Shell command, So slice it and have the third argument(this you need)
const firstParts = ['You', 'We', 'Humans', 'People', 'Aliens'];
const secondParts = ['are','will be', 'likely'];
const thirdParts = ['the best', 'wonderful', 'super', 'tough', 'make it', 'unstoppable'];

const randomChoose = partArray => {                     // Choose random parts of an array
    return partArray[Math.floor(Math.random() * partArray.length)]
};

const createMessage = (name) => {                                                   //Create a Message with random Items from firstParts, secondParts, thirParts
    let motMessage = '';

    if (typeof name === 'string' && name.length >= 2) {                             // If statement checks if you put in a Name than build build a String of random Items
            motMessage = name + ' ' + randomChoose(secondParts) + ' ' + randomChoose(thirdParts) + '!';
        
    } else {
        motMessage = randomChoose(firstParts) + ' ' + randomChoose(secondParts) + ' ' + randomChoose(thirdParts) + '!';
    };
    console.log(motMessage);
};

createMessage(args[0])
