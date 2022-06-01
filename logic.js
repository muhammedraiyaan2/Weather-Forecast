let dataTxt=document.getElementById("data")
let sub=document.getElementById("sub")
let textData1=document.getElementById("textData1")
let textData2=document.getElementById("textData2")
let textData3=document.getElementById("textData3")
sub.onclick=()=>{
 let xml=new XMLHttpRequest();
 xml.open("GET",`https://api.weatherapi.com/v1/current.json?key=9413ae19af5947609b4112935222404&q=${dataTxt.value}&aqi=no`,true)
 xml.onload=(responseText)=>{
  let dataJ =JSON.parse(xml.responseText)
  let c = dataJ.current.temp_c
  textData1.innerText=c
  let f = dataJ.current.temp_f
  textData2.innerText=f
  let type = dataJ.current.condition["text"]
  textData3.innerText=type
 }
 xml.send()
}
