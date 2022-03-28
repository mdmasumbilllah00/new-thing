function collectId() {
    var allTag = document.body.getElementsByTagName("*");
    var x = [];
    var nameArray = [];
    var allId = "<option>";
    var allTheTag = "<option>";
    var allTheClass = "<option>";
    var allTheName = "<option>";
    for (var element of allTag) {
        if (element.hasAttribute("id")) {
            allId += element.attributes.getNamedItem("id").value + "<option>"
        }
        if (x.indexOf(element.tagName) == -1) {
            x.push(element.tagName)

        }
        if (element.hasAttribute("class")) {
            allTheClass += element.attributes.getNamedItem("class").value + "<option>"
        }
        if (element.hasAttribute("name")) {
            if (nameArray.indexOf(element.attributes.getNamedItem("name").value) == -1)
                nameArray.push(element.attributes.getNamedItem("name").value);
            if (element.attributes.getNamedItem("name").value == "") {
                continue
            }
        }

    }
    for (var element of x) {
        allTheTag += element.toLowerCase() + "<option>";
    }
    for (var element of nameArray) {
        allTheName += element + "<option>";

    }
    document.getElementById("slectId").innerHTML = allId;
    document.getElementById("slect-tag").innerHTML = allTheTag;
    document.getElementById("slect-class").innerHTML = allTheClass;
    document.getElementById("slect-name").innerHTML = allTheName;
}

var pid = document.createElement("p");
var stid = document.createElement("select");
var attid = document.createAttribute("id");
attid.value = "slectId";
stid.setAttributeNode(attid);
pid.innerHTML = " all the id:- ";
pid.appendChild(stid)

document.body.appendChild(pid)

// var pclass = document.createElement("p");
// var stclass = document.createElement("select");
// var attclass = document.createAttribute("id");
// attclass.value = "slect-class";
// stclass.setAttributeNode(attclass);
// pid.innerHTML = " all the class:- ";
// pid.appendChild(stclass)

// document.body.appendChild(pclass)