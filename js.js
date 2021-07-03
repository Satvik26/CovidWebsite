console.log("I am in");

function covid() {
  let total = document.getElementById("total");
  let recover = document.getElementById("recover");
  let active = document.getElementById("active");
  let death = document.getElementById("death");

  let url1 = "https://api.rootnet.in/covid19-in/stats/latest";

  fetch(url1)
    .then((response) => response.json())
    .then((e) => {
      // let d = data;

      let s = e.data.summary;
      console.log(e);

      total.innerHTML = s.total;
      recover.innerHTML = s.discharged;
      death.innerHTML = s.deaths;
      active.innerHTML =
        parseInt(s.total) - parseInt(s.discharged) - parseInt(s.deaths);
    });
}

function getStateTable() {
  let url1 = "https://api.rootnet.in/covid19-in/stats/latest";

  fetch(url1)
    .then((response) => response.json())
    .then((e) => {
      let s1 = e.data.regional;

      console.log(s1);

      let str = "";

      Array.from(s1).forEach((element) => {
        let tablehtml = `<table class="table">
    
       
        <tbody>
          <tr>
            <td>${element.loc}</td>
            <td>${element.confirmedCasesIndian}</td>
            <td>${element.confirmedCasesIndian-element.discharged -element.deaths}</td>
            <td>${element.discharged}</td>
            <td>${element.deaths}</td>
          </tr>
         </tbody>
      </table>`;

        str += tablehtml;
      });

      document.getElementById("stateTable").innerHTML = str;
    });
}

getStateTable();
