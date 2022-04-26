async function fetchEvents() {
  const data = await fetch("https://events-api.qwertyreboot.repl.co/event/all");
  const events = await data.json();
  console.log(events);
  displayEvents(events.data);
}

const main = document.getElementById("flexible");

function displayEvents(events) {

  for (let event of events) {
    const el = document.createElement('div');
    const eventname = document.createElement('h2');
    const image = document.createElement('img');
    const text = document.createElement('p');
    const registerbutton = document.createElement('button');

    eventname.innerHTML = `${event.title}`;

    image.src = `${event.image}`;
    text.innerHTML = `${event.startDate}`;
    registerbutton.innerHTML = "Register";

    el.appendChild(eventname);
    el.appendChild(image);
    el.appendChild(text);
    el.appendChild(registerbutton);
    main.appendChild(el);
  }
}

function linking() {
  window.location.href = "./register.html"
}

var x = document.getElementById('flexible');
x.addEventListener("load", fetchEvents());
x.addEventListener("click", linking);
