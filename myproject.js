let projects = []//array yang digunakan untuk object
//deklarasi function ketika button diklik masuk ke function addproject
function addProject() {

    //pemanggilan nilai data berdasarkan id
    let title = document.getElementById("input-myproject-title").value;
    let start = document.getElementById("start-date").value;
    let end = document.getElementById("end-date").value;
    let content = document.getElementById('input-myproject-content').value;
    // // get data dan juga cara checked pada checkbox
    // var checkbox = document.getElementsByName("technologies");
    // var technologies = "";
    // for(var i = 0; i < checkbox.length; i++){
    //     if(checkbox[i].checked){
    //         technologies = technologies + checkbox[i].value +", ";
    //     }
    // }
    // Array.document.getElementById("inputTechnologies").innerText = technologies.replace(/,\s*$/, "");
    // // get data dan juga cara checked pada checkbox
    // let inputTechnologies = document.getElementById("inputTechnologies").innerText = technologies.replace(/,\s*$/, "");
    // let inputTechnologies=Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map((elem) => elem.value);
    let inputTechnologies = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(item=>item.value);
    //contoh pemanggilan checkbox gambar 2
    // let getIcon1 = document.getElementById('node')
    // let getIcon2 = document.getElementById('react')
    // let getIcon3 = document.getElementById('next')
    // let getIcon4 = document.getElementById('type')
    
    // var printIcon = ""

    // if(getIcon1.checked == true){
    //     printIcon += '<img value="node" id="node" src="assets/node.png" alt="">'
    // }

    // if(getIcon2.checked == true){
    //     printIcon += '<img value="react" id="react" src="assets/react.png" alt="">'
    // }

    // if(getIcon3.checked == true){
    //     printIcon += '<img value="next" id="next" src="assets/next.png" alt="">'
    // }

    // if(getIcon4.checked == true){
    //     printIcon += '<img value="type" id="type" src="assets/type.png" alt="">'
    // }
    //ambil value gambar
    let image = document.getElementById("input-myproject-image").files[0];

    image = URL.createObjectURL(image)//memanggil url asli pada gambar
    //membungkus nilai yang ada di variable ke object
    let project = {
        title: title,
        start: start,
        end : end,
        content:content,
        inputTechnologies:inputTechnologies,
        image: image,
    }

    console.log(title)
    console.log(start)
    console.log(end)
    console.log(content)
    console.log(inputTechnologies)
    console.log(image)

    projects.push(project)//simpan di array dengan method push
    
    renderProject()//pemanggilan function renderproject
}

function renderProject() {
    //memanggil atribut berdasarkan id content yang berisi car didalamnya
    let projectContainer = document.getElementById('contents')

    //mengatur default tampilan awal
    projectContainer.innerHTML = `
    <div class="card">
        <div class="input-images">
            <img src="images/coding.jpg" alt="">
        </div>
        <div style="display: flex; align-items: flex-start;justify-content: flex-start;width: 100%;">
        <p style="font-size: 12px;">
            <a href="myproject-detail.html" target="_blank" style="font-size: 15px">
                <b>Dumbwasy Mobile App-2021</b></a>
                <br>durasi: 3 bulan</p>       
        </div>
        <div class="paragraf">
            <p>
                Node.js adalah platform perangkat lunak yang dirancang oleh Ryan Dahl. Node.js adalah runtime untuk 
                lingkungan JavaScript Node.js adalah platform perangkat lunak yang dirancang oleh Ryan Dahl. Node.js adalah runtime untuk 
                lingkungan JavaScript Node.js adalah platform perangkat lunak yang dirancang oleh Ryan Dahl. Node.js adalah runtime untuk 
                lingkungan JavaScript 
            </p>
        </div>
        <div class="icon">
            <i class="fa-brands fa-google-play"></i>
            <i class="fa fa-android"></i>
            <i class="fa-brands fa-java"></i>
        </div>
        <div class="btn-group">
            <div class="edit">
                <a href="#" class="btn-edit">Edit </a>
            </div>
            <div class="delete">
                <a href="#" class="btn-post">Delete</a>
            </div> 
        </div>
    </div >`
    // pengulangan array projects
    for(let i = 0; i < projects.length; i++){
        projectContainer.innerHTML += 
    `<div class="card">
        <div class="input-images">
            <img src="${projects[i].image}" alt="">
        </div>
        <div style="display: flex; align-items: flex-start;justify-content: flex-start;width: 100%;">
        <p style="font-size: 12px;">
            <a href="myproject-detail.html" target="_blank" style="font-size: 15px">
                <b>${projects[i].title}</b></a>
                <br>${getDistanceTime(projects[i].start,projects[i].end)}</p>       
        </div>
        <div class="paragraf">
            <p>
            ${projects[i].content}
            </p>
        </div>
        <div class="icon">
                <i class="${projects[i].inputTechnologies[0]}"></i> 
                <i class="${projects[i].inputTechnologies[1]}"></i>
                <i class="${projects[i].inputTechnologies[2]}"></i>
                <i class="${projects[i].inputTechnologies[3]}"></i>
        </div>
        <div class="btn-group">
            <div class="edit">
                <a href="#" class="btn-edit">Edit </a>
            </div>
            <div class="delete">
                <a href="#" class="btn-post">Delete</a>
            </div> 
        </div>
    </div >`
    }
}
// function durasi hasil pengurangan start dan end
function getDistanceTime(start,end) {
    // let start = document.getElementById('start-date').value;
    // let end = document.getElementById('end-date').value;
   
    // console.log('Now: ', timeNow)
    // console.log('project: ', timeproject)
    
    let distance = new Date(end) - new Date(start) // miliseconds
    let monthDistance = Math.floor(distance / (4 * 7 * 24 * 60 * 60 * 1000 )) // convert to month
    if(monthDistance != 0) {
      return 'durasi : '+ monthDistance  + ' bulan'
    }else{
    let dayDistance = Math.floor(distance / (24 * 60 * 60 * 1000 )) // convert to day
    if(dayDistance != 0) {
      return 'durasi : '+ dayDistance  + ' hari'
    }else {
      let hourDistance = Math.floor(distance / ( 60 * 60 * 1000 )) // convert to hours
      if(hourDistance != 0) {
        return 'durasi : '+ hourDistance  + ' jam'
      } else {
        let minuteDistance = Math.floor(distance / ( 60 * 1000 )) // convert to minutes
        if(minuteDistance != 0) {
          return 'durasi : '+ minuteDistance  + ' menit'
        } else {
          let secondDistance = Math.floor(distance /  1000 ) //convert to second
          return 'durasi : '+ secondDistance  + ' detik'
        }
      }
    }
  }
}
// agar bisa update setiap saat atau membuat post setiap saat 
// biar waktunya update
setInterval(function(){
    renderproject()
  }, 1000)
  
  
  
  
