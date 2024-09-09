async function load() {
    let data = await fetch('data.json');
    data = await data.json();
    console.log(data)
    let template = ""
    data.forEach(element => {
        template += `<div class="profil">
    <div class="kotak-kiri">
        <img src="${element.fotoselfie}" alt="">
    </div>
    <div class="kotak-kanan">
       <p>${element.nama}</p>
       <p>${element.no}</p>
       <p>${element.alamat}</p>
       <p>${element.ttl}</p>
    </div>
  </div>`
    }); 

    document.getElementById('robot').innerHTML = template
}

load()