function valorar() {
    console.log("valorar");
    var text=document.getElementById("textarea_opinion").value;
    console.log(text);
    var code=document.getElementById("code_opinion").value;
    console.log(code);
    var select_opinion = document.getElementById("select_opinion");
    var selectedelement = select_opinion.options[select_opinion.selectedIndex].id;
    console.log(selectedelement);

    if(""==code){
        alert("code de reserva no valido");
        return;
    }else if (""==text || "Enter text here..."==text) {
        alert("valoracion no es valida");
        return;
    }



    var father=document.getElementById("list_opinions");

    var div1 = document.createElement("div");
    div1.className="opinion_total_element";
    father.append(div1);

    var div2 = document.createElement("div");
    div2.className="container";
    div1.append(div2);

    var div3 = document.createElement("div");
    div3.className="row";
    div2.append(div3);

    var div4 = document.createElement("div");
    div4.className="col-md-12";
    div3.append(div4);

    var div5 = document.createElement("div");
    div5.className="section";
    div4.append(div5);

    var div6 = document.createElement("div");
    div6.className="container";
    div5.append(div6);

    var div7 = document.createElement("div");
    div7.className="row";
    div6.append(div7);

    if(selectedelement=="thumbs_up_opinion"){
        var div8 = document.createElement("div");
        div8.className="col-md-1";

        var i = document.createElement("i");
        i.className="fa fa-3x fa-fw fa-thumbs-o-up";
        div8.append(i);

        var div9 = document.createElement("div");
        div9.className="opinion_element col-md-11";
        div9.append(document.createTextNode(text));

    }else{
        var div9 = document.createElement("div");
        div9.className="col-md-1";

        var i = document.createElement("i");
        i.className="fa fa-3x fa-fw fa-thumbs-o-down";
        div9.append(i);

        var div8 = document.createElement("div");
        div8.className="opinion_element col-md-11";
        div8.append(document.createTextNode(text));
    }
    div7.append(div8);
    div7.append(div9);
}
