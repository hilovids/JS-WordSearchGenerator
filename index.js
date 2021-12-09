function GenerateWordSearch(words){
    let dirs = ["WE","EW","NS","SN","NWSE","NESW","SWNE","SENW"]
    let templateString = randomString(100,'abcdefghijklmnopqrstuvwxyz');
    let stringGrid = [];
    let answersInPuzzle = [];
    for(let i = 0; i < 100; i++){
        stringGrid.push({char: templateString[i], touched: false});
    }

    console.log(stringGrid);
    //console.log(templateString);

    words = words.filter(function(value){return value.length <= 10})
    words.forEach(element => {
        let elementExplode = element.split("");
        let x = 0
        let y = 0
        let toChange = [];
        let possible = true;
        let placed = false;
        let attempts = 0;
        while(!placed && attempts < 200){
            let dir = dirs[randomNumber(dirs.length)];
        switch(dir){
            case "WE":
                attempts++;
                x = randomNumber(10 - elementExplode.length + 1);    
                y = randomNumber(10);
                for(letter in elementExplode){
                    toChange.push(10*y + x + parseInt(letter))
                }
                console.log(toChange);
                toChange.forEach(element => {
                    if(stringGrid[element].touched){
                        possible = false;
                    }
                });
                if(possible){
                    for(letter in elementExplode){
                        stringGrid[toChange[letter]].char = elementExplode[letter];
                        stringGrid[toChange[letter]].touched = true;
                        placed = true;
                    }
                }
                console.log(stringGrid);
                break;
            case "EW":
                attempts++;
                x = randomNumber(10 - elementExplode.length + 1);    
                y = randomNumber(10);
                elementExplode = elementExplode.reverse();
                for(letter in elementExplode){
                    toChange.push(10*y + x + parseInt(letter))
                }
                console.log(toChange);
                toChange.forEach(element => {
                    if(stringGrid[element].touched){
                        possible = false;
                    }
                });
                if(possible){
                    for(letter in elementExplode){
                        stringGrid[toChange[letter]].char = elementExplode[letter];
                        stringGrid[toChange[letter]].touched = true;
                        placed = true;
                    }
                }
                console.log(stringGrid);
                break;
            case "NS":
                attempts++;
                y = randomNumber(10 - elementExplode.length + 1);    
                x = randomNumber(10);
                for(letter in elementExplode){
                    toChange.push(10*(y + parseInt(letter)) + x)
                }
                console.log(toChange);
                toChange.forEach(element => {
                    if(stringGrid[element].touched){
                        possible = false;
                    }
                });
                if(possible){
                    for(letter in elementExplode){
                        stringGrid[toChange[letter]].char = elementExplode[letter];
                        stringGrid[toChange[letter]].touched = true;
                        placed = true;
                    }
                }
                console.log(stringGrid);
                break;
            case "SN":
                attempts++;
                elementExplode = elementExplode.reverse();
                y = randomNumber(10 - elementExplode.length + 1);    
                x = randomNumber(10);
                for(letter in elementExplode){
                    toChange.push(10*(y + parseInt(letter)) + x)
                }
                console.log(toChange);
                toChange.forEach(element => {
                    if(stringGrid[element].touched){
                        possible = false;
                    }
                });
                if(possible){
                    for(letter in elementExplode){
                        stringGrid[toChange[letter]].char = elementExplode[letter];
                        stringGrid[toChange[letter]].touched = true;
                        placed = true;
                    }
                }
                console.log(stringGrid);
                break;
            case "NWSE":
                attempts++;
                y = randomNumber(10 - elementExplode.length + 1);    
                x = randomNumber(10 - elementExplode.length + 1);
                for(letter in elementExplode){
                    toChange.push(10*(y + parseInt(letter)) + x + parseInt(letter))
                }
                console.log(toChange);
                toChange.forEach(element => {
                    if(stringGrid[element].touched){
                        possible = false;
                    }
                });
                if(possible){
                    for(letter in elementExplode){
                        stringGrid[toChange[letter]].char = elementExplode[letter];
                        stringGrid[toChange[letter]].touched = true;
                        placed = true;
                    }
                }
                console.log(stringGrid);
                break;
            case "NESW":
                attempts++;
                y = randomNumber(10 - elementExplode.length + 1);    
                x = randomNumber(10 - elementExplode.length + 1);
                for(letter in elementExplode){
                    toChange.push(10*(y) + x + 9*parseInt(letter))
                }
                console.log(toChange);
                toChange.forEach(element => {
                    if(stringGrid[element].touched){
                        possible = false;
                    }
                });
                if(possible){
                    for(letter in elementExplode){
                        stringGrid[toChange[letter]].char = elementExplode[letter];
                        stringGrid[toChange[letter]].touched = true;
                        placed = true;
                    }
                }
                console.log(stringGrid);
                break;
            case "SWNE":
                attempts++;
                elementExplode = elementExplode.reverse();
                y = randomNumber(10 - elementExplode.length + 1);    
                x = randomNumber(10 - elementExplode.length + 1);
                for(letter in elementExplode){
                    toChange.push(10*(y) + x + 9*parseInt(letter))
                }
                console.log(toChange);
                toChange.forEach(element => {
                    if(stringGrid[element].touched){
                        possible = false;
                    }
                });
                if(possible){
                    for(letter in elementExplode){
                        stringGrid[toChange[letter]].char = elementExplode[letter];
                        stringGrid[toChange[letter]].touched = true;
                        placed = true;
                    }
                }
                console.log(stringGrid);
                break;
            case "SENW":
                attempts++;
                elementExplode = elementExplode.reverse();
                y = randomNumber(10 - elementExplode.length + 1);    
                x = randomNumber(10 - elementExplode.length + 1);
                for(letter in elementExplode){
                    toChange.push(10*(y + parseInt(letter)) + x + parseInt(letter))
                }
                console.log(toChange);
                toChange.forEach(element => {
                    if(stringGrid[element].touched){
                        possible = false;
                    }
                });
                if(possible){
                    for(letter in elementExplode){
                        stringGrid[toChange[letter]].char = elementExplode[letter];
                        stringGrid[toChange[letter]].touched = true;
                        placed = true;
                    }
                }
                console.log(stringGrid);
                break;
        }
    }
    if(placed){
        answersInPuzzle.push(element);
    }

    });
    let toReturn = "";
    stringGrid.forEach(element => {
        toReturn += element.char;
    });
    return [toReturn, answersInPuzzle];
}

function randomNumber(max){
    return Math.floor(Math.random()*max);
}

function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
console.log(GenerateWordSearch(["davis", "dandy", "olive", "sass", "fred", "john"]));