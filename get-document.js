var getElement = document.createElement("div");
var attrGetElement = document.createAttribute("id");
attrGetElement.value = "slt-document";
getElement.setAttributeNode(attrGetElement);



var pId = document.createElement("p");
pId.innerText = "all the id of this page:- ";
var sltId = document.createElement("select");
sltId.innerHTML = "<option>id</option>";
var attrId = document.createAttribute("id");
attrId.value = "slt-id";
// var attrIdEvent = document.createAttribute("onchange");
// attrIdEvent.value = "idElementFun()";


sltId.setAttributeNode(attrId);
// sltId.setAttributeNode(attrIdEvent);
pId.appendChild(sltId);


var pTag = document.createElement("p");
pTag.innerText = "all the Tag of this page:- ";
var sltTag = document.createElement("select");
sltTag.innerHTML = "<option>tag</option>";
var attrTag = document.createAttribute("id");
attrTag.value = "slt-tag";

sltTag.setAttributeNode(attrTag);
pTag.appendChild(sltTag);



var pClass = document.createElement("p");
pClass.innerText = "all the class of this page:- ";
var sltClass = document.createElement("select");
sltClass.innerHTML = "<option>class</option>";
var attrClass = document.createAttribute("id");
attrClass.value = "slt-class";

sltClass.setAttributeNode(attrClass);
pClass.appendChild(sltClass);


var pName = document.createElement("p");
pName.innerText = "all the Name of this page:- ";
var sltName = document.createElement("select");
sltName.innerHTML = "<option>Name</option>";
var attrName = document.createAttribute("id");
attrName.value = "slt-name";

sltName.setAttributeNode(attrName);
pName.appendChild(sltName);


var funName = document.createAttribute("onload");
funName.value = "getDocFun()"




getElement.appendChild(pId);
getElement.appendChild(pTag);
getElement.appendChild(pClass);
getElement.appendChild(pName);




document.body.appendChild(getElement)
document.body.setAttributeNode(funName)


var docMain = document.getElementById("slt-document");
docMain.style.backgroundColor = "yellowgreen";
docMain.style.padding = "20px";
docMain.style.position = "absolute";
docMain.style.top = "0";
docMain.style.right = "0";
docMain.style.zIndex = "100";

function getDocFun() {
    var allTags = document.body.getElementsByTagName("*");

    var allIdArray = [];
    var allClassArray = [];
    var allTagArray = [];
    var allNameArray = [];

    var allId = "<option>";
    var allClass = "<option>";
    var allTag = "<option>";
    var allName = "<option>";

    for (var element of allTags) {
        if (element.hasAttribute("id")) {
            allIdArray.push(element.attributes.getNamedItem("id").value)
        }
    }
    for (var element of allTags) {
        if (element.hasAttribute("class")) {
            if (allClassArray.indexOf(element.attributes.getNamedItem("class").value) == -1) {
                allClassArray.push(element.attributes.getNamedItem("class").value)
            }

        }
    }
    for (var element of allTags) {
        if (allTagArray.indexOf(element.tagName.toLocaleLowerCase()) == -1) {
            allTagArray.push(element.tagName.toLocaleLowerCase())
        }
    }
    for (var element of allTags) {
        if (element.hasAttribute("name")) {
            if (allNameArray.indexOf(element.attributes.getNamedItem("name").value) == -1) {
                allNameArray.push(element.attributes.getNamedItem("name").value)
            }

        }
    }
    for (var id of allIdArray) {
        allId += id + "<option>"
    }
    for (var Class of allClassArray) {
        allClass += Class + "<option>"
    }
    for (var Tag of allTagArray) {
        allTag += Tag + "<option>"
    }
    for (var Name of allNameArray) {
        allName += Name + "<option>"
    }

    document.getElementById("slt-id").innerHTML = allId;
    document.getElementById("slt-class").innerHTML = allClass;
    document.getElementById("slt-tag").innerHTML = allTag;
    document.getElementById("slt-name").innerHTML = allName;

}
var sss = document.getElementsByTagName("select");
for (var ss of sss) {
    ss.style.width = "200px"

}



// function idElementFun() {
//     var idChild = document.getElementById("slt-id").value;
//     alert("there is " + document.getElementById(idChild).children.length + " child on this parent")
// }







