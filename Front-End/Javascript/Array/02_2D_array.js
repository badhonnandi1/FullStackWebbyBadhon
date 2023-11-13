let greoceryList = [
    ["apples","oranges","bananas"],
    ["carrots","onions","potatoes"],
    ["eggs","butter","bread"]
]

greoceryList[0][0] = "strawberries"; // change the value of the first element



for(let items of greoceryList){
    for(let names of items){
        console.log(names);
    }
}