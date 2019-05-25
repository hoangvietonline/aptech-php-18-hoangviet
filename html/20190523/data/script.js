var data;

function layDuLieu() {

    var xhttp = new XMLHttpRequest(); // đây là một class
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);


            function Create(nameOfElement) {
                return document.createElement(nameOfElement);
            }
            //tạo các element
            var table = Create("table");
            var thead = Create("thead");
            var tbody = Create("tbody");

            var styleAttribute1 = document.createAttribute("style");
            styleAttribute1.value = "color: red";
            thead.setAttributeNode(styleAttribute1);

            //them thead và tbody và thẻ table
            table.appendChild(thead);
            table.appendChild(tbody);

            var trow = Create("tr");
            thead.appendChild(trow);
            // tạo một mảng tạm thời
            var array1 = ["Id", "Name", "Email"];
            //lấy giá trị trang mảng cho vào th trong thẻ tr
            for (var i = 0; i < array1.length; i++) {
                var th = Create("th");
                var text = document.createTextNode(array1[i]);
                th.appendChild(text);
                trow.appendChild(th);
            }
            for (var i = 0; i < data.users.length; i++) {
                var trowBody = Create("tr");
                tbody.appendChild(trowBody);
                var array = [data.users[i].id, data.users[i].name, data.users[i].email];
                for (var j = 0; j < array.length; j++) {
                    var td = Create("td");
                    var text = document.createTextNode(array[j]);
                    td.appendChild(text);
                    trowBody.appendChild(td);
                }
            }
            document.body.appendChild(table);
        }
    }
    xhttp.open("GET", "https://namcoi.com/projects/users-crud-laravel/public/api/users", true);
    xhttp.send();
}