const earthApi = "https://api.nasa.gov/planetary/earth/assets";
const apiKey = "2vP1PAZRIhq3o91gAL4b11LlXhKDA9vEEMotYac9";

document.getElementById("submit").addEventListener("click", sendfetch);

function sendfetch() {
  let text = document.getElementById("coordinates").value;
  let array = text.split(",");
  let lon = array[0];
  let lat = array[1];
 

  fetch(
    `${earthApi}?lon=${lat}&lat=${lon}&date=2018-01-01&dim=0.10&api_key=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      Swal.fire({
        imageUrl: data.url,
      });
    });
}
