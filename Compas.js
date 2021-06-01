// You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
// The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends
// you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only
// a single block for each letter (direction) and you know it takes you one minute to traverse one city block,
// so create a function that will return true if the walk the app gives you will take you exactly ten minutes
// (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

let horizontal = 0;
let vertical = 0;

function derectionToNum(derection) {
    if (derection === 'n') return vertical += 1;
    if (derection === 's') return vertical -= 1;
    if (derection === 'w') return horizontal -= 1;
    if (derection === 'e') return horizontal += 1;
}

function isValidWalk(walk) {
    
    if (walk.length === 10) {
        walk.forEach(derection => {
            derectionToNum(derection);
        });
        if (horizontal === 0 && vertical === 0) {
            console.log('true');
            return true;
        } else {
            console.log('false');
            return false;
        };
    } else {
        console.log('false');
        return false;
    }
}

isValidWalk(['n','n','n','n','n','s','s','s','s','s']);
isValidWalk(['n','s','n','s','n','s','n','s','n','s']);
!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']);
!isValidWalk(['w']);
!isValidWalk(['n','n','n','s','n','s','n','s','n','s']);