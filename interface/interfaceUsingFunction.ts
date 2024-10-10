//interface---> using functions

interface convertCase{
    (input: string, isUpper: boolean): string;
}

let format: convertCase;

format= function(input: string, isUpper: boolean): string{
    return isUpper? input.toUpperCase(): input.toLowerCase();
}

console.log(format("nithu",true));
