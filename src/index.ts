class Clothing {
  protected gender: string;
  season: string;
  size: string;
  style: string;

  constructor(gender: string, season: string, size: string, style: string) {
    this.gender = gender;
    this.season = season;
    this.size = size;
    this.style = style;
  }

  callParentGender(){
    console.log(`calling ${this.gender} from parent class`)
  }

}

class Store {
  private stock: Array<Clothing> = [];
  //constructor(){}
  buyCloth(cloth: Clothing) {
    this.stock.push(cloth);
  }

  showStock() {
    console.log(`there is ${this.stock.length} clothes`);
  }

  sellCloth(style: string) {
    const targetIndex = this.stock.findIndex((cloth) => {
      style == cloth.style;
    });
    this.stock.splice(targetIndex, 1);
    // splice() is develting the item in the array delete item and idex
  }
}

class Women extends Clothing {
  constructor(season: string, size: string, style: string) {
    super("women", season, size, style);
  }
}

class Man extends Clothing {
  constructor(season: string, size: string, style: string) {
    super("man", season, size, style);
  }
   
  callGender(){
    console.log(`calling ${this.gender} from child class`)
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
  

  store.buyCloth(women);
  store.buyCloth(women2);
  store.buyCloth(man);
  store.showStock(); // 3 item 
  store.sellCloth("casual"); //2 item 
  store.showStock();
}

main();
