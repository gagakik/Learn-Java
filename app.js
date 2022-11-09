const parts = ["ბიგი (250)","ბიგი (120)","ბიგი (100)","ბიგი (80)","ბიგი (50)","რიგელი (95 სმ)","რიგელი (45 სმ)","რიგელი მომრ. (76სმ)",
    "კრონშტეინი","PVC (91.4*96.4)","PVC (46.9*91.4)","PVC (50*88.9)","PVC  (66.4*96.4)","PVC  (46.9*66.4)","PVC  (50*64)",
    "PVC  (66.4*75.3)","PVC (21.4*96.4)","PVC (21.4*46.9)","PVC (75.3*91.4)","PVC (21.4*75)","PVC (44.5*96.4)","PVC (96.4*111.4)",
    "PVC (46.9*111.4)","PVC (47*40)","PVC (96.4*40)","დსპ (48*97)","დსპ (97*97)","დსპ (48*48)","დსპ  მომრგ.(47*47)",
    "დსპ (23*99)","მინა (21.5*96.5)","მინა (21*46.9)","მინა (19*48)","მინა (96.5*120.5)","მინა (46.5*120)","მინა თარო (48*97)","მინა თარო (97*97)",
"მინა თარო (48*48)","მინა თარო მომრ. (47.5*47.5)","ორგმინა (21*75)","ორგმინა (75*120)","კარის დიდი პლასმასი","კარის პატარა პლასმასი","კარის სახელური","კარის საკეტი",
    "ხრახნი"]

const nr2110 = [parts[0], parts[5], parts[20]]
const nr2200 = [parts[2], parts[5], parts[6], parts[9],parts[10],parts[11],parts[25],parts[8],parts[41],parts[42],parts[43]]
const nr2220 = []
const nr2225 = []
const nr2280 = []
const nr3470 = []
const nr2210 = []
const nr2310 = []
const nr2300 = []
const nr2315 = []
const nr2305 = []
const nr2320 = []
const nr3300 = []
const nr3310 = []
const nr3620 = []
const nr3622 = []
const nr3360 = []
const nr2050 = []
const nr2250 = []
const nr2240 = []
const nr2255 = []


let count = document.getElementById('spearPartsDiv')
let count2 = document.getElementById('spearPartsDiv2')
let counter = 0
let counterMax = 32

    
//ნაწილების ჩამონათვალი ავტომატურად
for (let i = 0; i < nr2200.length; i++){
  let p = document.createElement("p")
  p.textContent += "Parts: " + nr2200[i]
  count.appendChild(p)
};

for (let i = 0; i < nr2200.length; i++){
  let p = document.createElement("p")
  p.textContent += "Parts: " + nr2200[i]
};


const getQty = document.getElementById('getQty')


function getQtyminus(){
  if(1 <= counter ){
    counter=counter - 1
    getQty.textContent = "Nr.2.110: " + counter + " pcs"
 } else {
  alert("0");
}
}


function getQtyplus(){
  if(counter <= counterMax){
    counter=counter + 1
    getQty.textContent = "Nr.2.110: " + counter + " pcs"
 } else {
  alert("33");
}
}
    






    //const img = document.createElement("img")
    //img.src = 'https://www.munsterjoinery.ie/media/catalog/product/cache/11d51a9030d0c63b4b89b91cc0841df3/s/t/stockholm__latdtccdo5tv2hre.jpg'
    //imgElement.appendChild(img);


    //const door = [parts[0],parts[5],parts[6]]

    //let count = document.getElementById("text")
    //let raod = document.getElementById("raod")
    //let p1 = 2
    //let imgElement = document.getElementById("img")

    //function save() {

      //  if(getInput.value > 0){
        //    let getInput = document.getElementById("getInput").value;
          //  raod.innerText = getInput * p1
            //count.innerText = door[0]
        //}else {
          //  count.innerText = "შეიყვანე რამე შეჩემა"
        //}
        
    //}

    


    



