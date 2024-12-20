console.log("Feedback");

//  html form ko access karna hai
const feedback_form = document.getElementById("feedback_form");
// const formHeading = document.getElementById("form_heading");
const formHeading = document.querySelector("#form_heading")
const clearButton = document.getElementById("clear_button")
console.log(feedback_form);
console.log("=======");
const fd = document.getElementById("feedback_item_container");
console.log(fd );

// console.log(formHeading);
// console.log(clearButton);

const today = new Date();

    // Format date as YYYY-MM-DD
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
const formattedDate = `${year}-${month}-${day}`;

    // Update the heading with today's date
document.getElementById("task-title").textContent = `Hourly Task of ${formattedDate}`;


    // time checl
const fromTimeInput = document.getElementById('t1');
const toTimeInput = document.getElementById('time2');

  // Listen for changes on the "From" time input
fromTimeInput.addEventListener('input', function () {
    // Get the value of "From" time
  const fromTime = fromTimeInput.value;

    // Set the "To" time to be at least the "From" time
  toTimeInput.min = fromTime;  // Set the min value to prevent selecting a time before "From"
});

function clearAllAtMidnight() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // Check if the time is exactly 00:00 (midnight)
  if (hours === 0 && minutes === 0) {
    console.log("Resetting all tasks at midnight...");

    // Clear both arrays and update localStorage
    localStorage.removeItem("feedbacks");
    localStorage.removeItem("completedTasks");

    // Clear the global variables
    completedTasks = [];
    loadFeedbacks();
  }
}

// Check every minute for midnight
setInterval(clearAllAtMidnight, 60000); // 60000 ms = 1 minute

  //
function loadFeedbacks() {
  const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
  fd.innerHTML = ""; // Clear the container

  feedbacks.reverse();
  feedbacks.forEach((item) => {
    const isDone = completedTasks.includes(item.uniqueID);

    const feedItem = `
      <div id="feedback_${item.uniqueID}" 
           class="list_item mt-2 p-5 flex flex-col gap-3 bg-gray-700 rounded-lg border" 
           style="opacity: ${isDone ? "0.5" : "1"};">
        
        <div class="flex justify-between">
          <h1 id="name_${item.uniqueID}" class="font-bold text-3xl" 
              style="text-decoration: ${isDone ? "line-through" : "none"};">
            ${item.name}
          </h1>
          <h1 id="time_${item.uniqueID}" class="text-gray-400 text-2xl" 
              style="text-decoration: ${isDone ? "line-through" : "none"};">
            ${item.t1} to ${item.time2}
          </h1>
        </div>

        <div class="flex justify-between">
          <p id="message_${item.uniqueID}" 
             style="text-decoration: ${isDone ? "line-through" : "none"};">
            ${item.message}
          </p>

          <div class="flex">
            <!-- Done button -->
            <button onclick="updateFeedback('${item.uniqueID}')" 
                    class="px-3 py-2 mr-7 bg-green-600 text-sm hover:bg-green-400 rounded"
                    style="pointer-events: ${isDone ? "none" : "auto"};">
              Done
            </button>

            <!-- Delete button (always active) -->
            <button onclick="deleteFeedback('${item.uniqueID}')" 
                    class="px-3 py-2 bg-red-600 text-sm hover:bg-red-400 rounded">
              Delete
            </button>
          </div>
        </div>
      </div>
    `;

    fd.innerHTML += feedItem;
  });
}

let completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];



loadFeedbacks();

  function generateUniqueID() {
        // You can use current time + a random number to ensure uniqueness
    return "ID-" + new Date().getTime() + "-" + Math.floor(Math.random() * 1000);
  }

      // Set the unique ID in the hidden input field
// 
feedback_form.addEventListener("submit",(event)=>{
    event.preventDefault();
    // console.log(feedback_form);

  const name = document.getElementById("name").value;
  const t1 =  document.getElementById("t1").value;
  const time2 = document.getElementById("time2").value;
  const message = document.getElementById("message").value;
  document.getElementById("unique_id").value = generateUniqueID();
  const uniqueID = document.getElementById("unique_id").value;
    
    console.log(name);
    console.log(t1);
    
    console.log(time2);
    console.log(message);
    
    console.log(message);
    console.log(uniqueID);
    

    const feedbackObject = {name,t1,time2,message,uniqueID};
    
    console.log(feedbackObject);
    
    savetoLocalStorage(feedbackObject);
     loadFeedbacks();
    
});

function savetoLocalStorage(feedback){
    // localStorage.getItem
    const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    feedbacks.push(feedback);
    localStorage.setItem("feedbacks",JSON.stringify(feedbacks));
    console.log("feedback saved");
    feedback_form.reset();
    
}

// // DOM = Document Object Model 
clearButton.addEventListener("click",()=>{
    console.log("clear button clicked");
    formHeading.innerHTML = "Add Tasks"
    // formHeading.style.color='red'
    // formHeading.style.backgroundColor='yellow'
    formHeading.classList.remove('text-2xl');
    formHeading.classList.add("text-3xl");

})

// console.log();


function deleteFeedback(id) {
 const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
  const newFeedbackList = feedbacks.filter((item) => item.uniqueID !== id);
  localStorage.setItem("feedbacks", JSON.stringify(newFeedbackList));
  completedTasks = completedTasks.filter((taskId) => taskId !== id);
  localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  loadFeedbacks();
}

function updateFeedback(uniqueID){
  alert("Updating "+uniqueID);
  completedTasks.push(uniqueID);
  localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  loadFeedbacks(); // Make it visually disabled
}
