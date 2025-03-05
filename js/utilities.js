function getInnerTextById(id){
    const tagText = document.getElementById(id).innerText;
    return tagText;
}

function updateDateTime() {
    const now = new Date();

    // Get the short weekday name 
    const weekday = now.toLocaleDateString('en-US', { weekday: 'short' });

    // Get the full date in the format 
    const formattedDate = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    // Update the elements
    document.getElementById('live-date').innerText = `${weekday}`; 
    document.getElementById('live-time').innerText = `${formattedDate}`;
}

// Update every second
setInterval(updateDateTime, 1000);

// Initial call
updateDateTime();

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
}




const cards = document.querySelectorAll(".complete-btn");
for (let card of cards ){
    card.addEventListener("click", function(){
        alert("Board updated successfully");
        const taskNumber = parseInt(getInnerTextById("task-number"));
        const totalTasks = parseInt(getInnerTextById("task-completed"));
        card.setAttribute("disabled", "");
        card.classList.add("cursor-not-allowed");
        if (taskNumber > 0){
            if(taskNumber - 1 === 0){
            alert("All tasks have been completed");
            }
            document.getElementById("task-number").innerText = taskNumber-1;

        }
        const currentTime = getCurrentTime();
        document.getElementById("task-completed").innerText = totalTasks + 1;
        const newDiv = document.createElement("div");
        const divTitle = card.parentElement.parentElement.querySelector("h2").innerText;
        newDiv.innerText = `You have succesfully completed the task ${divTitle} at ${currentTime}`;
        document.getElementById("log-container").appendChild(newDiv);
        newDiv.classList.add("bg-bg-1", "rounded-xl", "p-2", "m-2");
    })
}

document.getElementById("clear-btn").addEventListener("click", function(){
    document.getElementById("log-container").innerHTML = "";
})


document.getElementById("board-card").addEventListener("click", function(){
    window.location.href = "./questions.html";
})

// Function to generate a random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`; 
}


const themeButton = document.getElementById("theme-btn");


themeButton.addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor();
});

