var array = ["Viet", "Nguyen", "Minh"];
for (var i = 0; i < array.length; i++) {
    document.getElementById("person_" + (i + 1)).innerHTML = array[i];
}


var person = {
    name: "viet",
    Age: 23,
    queQuan: "QuangNam",
    pet: ["dog", "cat", "pig"],
    soThich: function () {

        return {
            name: "Hoang Viet"
        }
    }
};
console.log(person.soThich().name);
var array1 = person.pet;

for (var i = 0; i < array1.length; i++) {
    console.log(array1[i]);

    var heading = document.createElement("h1");
    var text = document.createTextNode(array1[i]);
    heading.appendChild(text);
    document.body.appendChild(heading);
}