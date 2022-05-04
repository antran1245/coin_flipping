function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise( (resolve, reject) => {
        // your code here!
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5 && attempts < 100) {
            attempts++;
            let result = tossCoin();
            if(result === 'heads') {
                headsCount++;
                if(headsCount === 5) {
                    resolve('Heads has been flipped five times');
                }
            } else {
                headsCount = 0;
            }
        }
        reject('Coins has been flipped more than 100 times.')
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );
