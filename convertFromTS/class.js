class Menu {
    constructor(item_list, total_pages) {
        this.items = item_list;
        this.pages = total_pages;
    }
    parentFunction() {
        console.log('our menu today');
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}
class HappyMeal extends Menu {
    constructor(item_list, total_pages) {
        super(item_list, total_pages);
    }
    childFunction() {
        console.log("Our special menu for children:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}
const sundayMenu = new Menu(["Banh xeo", "Bun Bo", "Gan Kieu"], 1);
sundayMenu.parentFunction();
const menu_for_children = new HappyMeal(["candy", "drink", "toy"], 1);
menu_for_children.childFunction();
