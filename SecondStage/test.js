function getData() {
  /*
  coding here
  */
  var data=document.getElementById("source");
  var city=data.getElementsByTagName("li");
  alert("City is "+city[0].value);
  var air=data.getElementsByTagName("b")
  alert("air is"+air[0].value);
  /*
  data = [
    ["北京", 90],
    ["北京", 90]
    ……
  ]
  */

  return data;

}