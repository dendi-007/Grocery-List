var groceryList = [
    {
        "category": "beverage",
        "item": "Milk",
        "brand": "Jabron",
        "type": "Organic 2% Milk",
        "qty": 1
    },
    {
        "category": "pantry",
        "item": "Farfalle",
        "brand": "Micoy",
        "type": "Pasta",
        "qty": 3
    },
    {
        "category": "pantry",
        "item": "Linguini",
        "brand": "Micoy",
        "type": "Pasta",
        "qty": 2
    },
    {
        "category": "dairy",
        "item": "Yogurt",
        "brand": "Labels",
        "type": "Plain Non-Fat Greek Yogurt",
        "qty": 12
    },
    {
        "category": "produce",
        "item": "Apples",
        "brand": "Zambony",
        "type": "Honeycrisp",
        "qty": 6
    },
    {
        "category": "produce",
        "item": "Lemons",
        "brand": "KC",
        "type": "Pink Variegated",
        "qty": 6
    },
    {
        "category": "beverage",
        "item": "Water",
        "brand": "Switch",
        "type": "Grapefruit Sparkling Water",
        "qty": 8
    },
    {
        "category": "alcohol",
        "item": "Vodka",
        "brand": "Flamingo",
        "type": "L'Orange",
        "qty": 1
    }
];

/**Sorting the Grocery list */
function sortGroceries() {
    let categories = Array.from(new Set(groceryList.map((grocery) => grocery.category))).sort();
    let tempgroceryList = [];
    categories.forEach((category) => {
        let currentCategoryItems = groceryList.filter((grocery) => grocery.category == category);
        currentCategoryItems = currentCategoryItems.sort((a, b) => (a.qty > b.qty) ? 1 : ((b.qty > a.qty) ? -1 : 0));
        currentCategoryItems.forEach((item) => {
            tempgroceryList.push(item)
        })
    })
    groceryList = tempgroceryList;
}

/**Construct the Grocery card and inject those cards inside a div */
(function displayGroceries() {
    sortGroceries();
    var row = "";
    var list, index;
    for (let index = 0; index < groceryList.length; index++) {
        row += "<div class='column' aria-label="+groceryList[index].category+'-category'+"><div class='grocery-card'>"
        row += "<section><div class='accent-text float-right'>Qty: " + groceryList[index].qty + "</div></section>"
        row += "<header><h1 class='grocery-card-header'>" + groceryList[index].item + "</h1></header>"
        row += "<section><p class='grocery-card-content'>" + groceryList[index].brand + " " + groceryList[index].type + "</p></section>"
        row += "<footer><p class='category-text accent-text'>" + groceryList[index].category + "</p></footer></div></div>"
        
    }
    // list = document.getElementsByClassName("column");

    // for (let index = 0; index < groceryList.length; index++) {
    //     list[index].setAttribute("aria-label", groceryList[index].category);
    // }
    
    document.getElementById("flex-div").innerHTML = row;
})();