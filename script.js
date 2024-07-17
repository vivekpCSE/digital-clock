function displayTime() {
    let datetime = new Date();
    let hr = datetime.getHours();
    let min = padzero(datetime.getMinutes());
    let sec = padzero(datetime.getSeconds());
    let ampm = document.getElementById('ampm'); // Get the ampm span element

    if (hr >= 12) {
        ampm.innerHTML = 'PM';
        if (hr > 12) {
            hr = hr - 12;
        }
    } else {
        ampm.innerHTML = 'AM';
        if (hr === 0) {
            hr = 12;
        }
    }

    document.getElementById('hours').innerHTML = padzero(hr);
    document.getElementById('mins').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}

function padzero(num) {
    return num < 10 ? "0" + num : num;
}

    


// Call displayTime function initially and then update every 500 milliseconds
displayTime();
setInterval(displayTime, 500);
