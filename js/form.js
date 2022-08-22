function printValues() {
    var name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;

    var document_type = document.getElementById("document_type");
    var selected_document = document_type.options[document_type.selectedIndex].value;

    var document_number = document.getElementById("document_number").value;

    var gender = document.querySelector('input[name=gender]:checked').value;


    console.log("nombre: " + name);
    console.log("apellidos: " + last_name);
    console.log("tipo de documento: " + selected_document);
    console.log("numero de documento: " + document_number);
    console.log("genero: " + gender);

    console.log("-------------------------------");
}