
let indianClock = document.querySelector('#indianClock');
let dubaiClock = document.querySelector('#dubaiClock');
let usClock = document.querySelector('#usClock');



function jsClock(props) {
    let time = new Date().toLocaleTimeString('en-US', { timeZone: props });
    let ui = `
    <div class="card">
    <div class="card-header bg-primary ">
        ${props}
    </div>
    <di class="card-body">
        ${time}
    </di>

</div>
    
    `
    //jsClockDiv.innerHTML=ui;
    return ui;
}

let indianClockV1 = document.querySelector('#indianClockV1');
let dubaiClockV1 = document.querySelector('#dubaiClockV1');
let usClockV1 = document.querySelector('#usClockV1');

function reactClock(props) {

    let time = new Date().toLocaleTimeString('en-US', { timeZone: props });
    let ui =
        <div className="card">
            <div className="card-header bg-success">
                {props}
            </div>
            <di className="card-body">
                {time}
            </di>

        </div>
    return ui;
}




setInterval(() => {
    indianClock.innerHTML=jsClock('Asia/Kolkata');
    dubaiClock.innerHTML=jsClock('Asia/Dubai');
    usClock.innerHTML=jsClock('america/New_York');

    ReactDOM.render(reactClock('Asia/Kolkata'), indianClockV1)
    ReactDOM.render(reactClock('Asia/Dubai'), dubaiClockV1)
    ReactDOM.render(reactClock('America/New_York'), usClockV1)

}, 1000)

