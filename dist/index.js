class Clothing {
    //declare properties
    gender;
    season;
    size;
    style;
    constructor(gender, season, size, style) {
        this.gender = gender;
        this.season = season;
        this.size = size;
        this.style = style;
    }
    callParentGender() {
        console.log(`calling ${this.gender} from parent class`);
    }
}
class Store {
    // every class has a default constructor
    // create a properties of list of cloth,array a specific type of list
    // all the clothing is in the store;
    // stock is properties of store;
    stock = [];
    //constructor(){}
    buyCloth(cloth) {
        this.stock.push(cloth);
    }
    showStock() {
        console.log(`there is ${this.stock.length} clothes`);
    }
    sellCloth(style) {
        //search our stock if there is a clothes with that style, if you find delete it.
        /*
        let targetIndex;
        //index is a position of the item inside the array;
        for(let index = 0; index < this.stock.length; index++){
          let cloth = this.stock[index];
          //checking one by one
          if (cloth.style == style){
            targetIndex = index
            break;
          }
        }
        */
        const targetIndex = this.stock.findIndex((cloth) => {
            style == cloth.style;
        });
        this.stock.splice(targetIndex, 1);
        // splice() is develting the item in the array delete item and idex
    }
}
class Women extends Clothing {
    constructor(season, size, style) {
        super("women", season, size, style);
    }
}
class Man extends Clothing {
    constructor(season, size, style) {
        super("man", season, size, style);
    }
    callGender() {
        console.log(`calling ${this.gender} from child class`);
    }
}
function main() {
    let store = new Store();
    let women = new Women("winter", "m", "casual");
    let women2 = new Women("summer", "L", "sport");
    let man = new Man("summer", "XXL", "suit");
    //console.log(`calling ${man.gender} from main`);
    man.callGender();
    man.callParentGender();
    // create another object store it in our stoke;
    store.buyCloth(women);
    store.buyCloth(women2);
    store.buyCloth(man);
    store.showStock(); // 3 item 
    store.sellCloth("casual"); //2 item 
    store.showStock();
}
main();
