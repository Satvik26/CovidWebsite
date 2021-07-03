console.log("I am in");

function covid() {
  let total = document.getElementById("total");
  let recover = document.getElementById("recover");
  let active = document.getElementById("active");
  let death = document.getElementById("death");

  let url1 = "https://api.rootnet.in/covid19-in/stats/latest";

  fetch(url1)
    .then((response) => response.json())
    .then((data) => {
     // let d = data;

      let s = data.data.summary;
      console.log(data);

      total.innerHTML = s.total;
      recover.innerHTML = s.discharged;
      death.innerHTML = s.deaths;
      active.innerHTML =
        parseInt(s.total) - parseInt(s.discharged) - parseInt(s.deaths);
    });
}


function getStateTable() {
    let url1 = "https://api.rootnet.in/covid19-in/stats/latest";

    fetch(url1).then((response) => response.json()).then((data)=> {
       

       console.log();
       




    });

}

