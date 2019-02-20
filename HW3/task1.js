var name = prompt("Introduce yourself, please :)", "User name here");

function getName() {
    var n;
    var output;
    for (var i = 0; i < 10; i++) {
        if (n != true) {
            n = name.includes(i);
        }
    }    
    switch (n) {
        case true:
            output = name.toUpperCase();
            break;
        case false:
            output = getBackwards(name);
            break;
        default:
            output = "Something went wrong!";
    }   
    return output;
}

function getBackwards(str1) {
    var output = '';
    var l = str1.length;    
    for (var i = 1; i < l + 1; i++) {
        output = output + str1[l - i];        
    }

    return output;
}

console.log(getName());
alert(getName());