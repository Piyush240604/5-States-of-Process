// New Process
function newProcess(new_variable) {
            

    // Check if Admitted is Clicked
    if (new_variable == 1) {

        // Styling Button
        const admittedbutton = document.getElementById('admitted');
        admittedbutton.style.backgroundColor="#009900";
        admittedbutton.style.color="white";

        // Output
        document.getElementById('target_state').innerHTML = "READY";

        // Explanation
        document.getElementById('targetContainer').scrollIntoView({behavior: 'smooth'});
        document.getElementById('referenceContainer').classList.toggle("animateMove");
        document.getElementById('explanationContainer').classList.toggle("animateFade");
        document.getElementById('explanationText').innerHTML = "The system would transition the process from new to ready, and it is now ready for running.";
    }

    // Enable the transition buttons wrt to input button
    document.getElementById('admitted').disabled=false;

    // Disable other input buttons
    document.getElementById('ready').disabled=true;
    document.getElementById('running').disabled=true;
    document.getElementById('waiting').disabled=true;
    document.getElementById('terminated').disabled=true;

    // Styling click button
    const newbutton = document.getElementById('new');
    newbutton.style.backgroundColor="#009900";
    newbutton.style.color="white";

    
}

// Ready Process
function readyProcess(ready_variable) {

    // Check if scheduler_dispatch is clicked
    if (ready_variable == 1) {

        // Styling Button
        const admittedbutton = document.getElementById('scheduler_dispatch');
        admittedbutton.style.backgroundColor="#009900";
        admittedbutton.style.color="white";

        // Output state
        document.getElementById("target_state").innerHTML="RUNNING";

        // Explanation
        document.getElementById('targetContainer').scrollIntoView({behavior: 'smooth'});
        document.getElementById('referenceContainer').classList.toggle("animateMove");
        document.getElementById('explanationContainer').classList.toggle("animateFade");
        document.getElementById('explanationText').innerHTML = "The operating system now chooses a process for running, and the system selects single process in a ready state for running.";
        
    }

    // Enable the transition buttons wrt to input button
    document.getElementById('scheduler_dispatch').disabled=false;

    // Disable other input buttons
    document.getElementById('new').disabled=true;
    document.getElementById('running').disabled=true;
    document.getElementById('waiting').disabled=true;
    document.getElementById('terminated').disabled=true;

    // Styling click button
    const button = document.getElementById('ready');
    button.style.backgroundColor="#009900";
    button.style.color="white";

}

// Running Process
function runningProcess(running_variable) {
    
    // Enable the transition buttons wrt to input button
    document.getElementById('interrupt').disabled=false;
    document.getElementById('event_wait').disabled=false;
    document.getElementById('exit').disabled=false;

    // Disable other input buttons
    document.getElementById('new').disabled=true;
    document.getElementById('ready').disabled=true;
    document.getElementById('waiting').disabled=true;
    document.getElementById('terminated').disabled=true;

    // Styling click button
    const button = document.getElementById('running');
    button.style.backgroundColor="#009900";
    button.style.color="white";

    // Interrupt
    if (running_variable == 1) {

        // Disable other two transition buttons
        document.getElementById('event_wait').disabled=true;
        document.getElementById('exit').disabled=true;
        
        // Styling Button
        const admittedbutton = document.getElementById('interrupt');
        admittedbutton.style.backgroundColor="#009900";
        admittedbutton.style.color="white";

        // Output
        document.getElementById("target_state").innerHTML="READY";

        // Explanation
        document.getElementById('targetContainer').scrollIntoView({behavior: 'smooth'});
        document.getElementById('referenceContainer').classList.toggle("animateMove");
        document.getElementById('explanationContainer').classList.toggle("animateFade");
        document.getElementById('explanationText').innerHTML = "This transition occurs when the running process has achieved its maximum running time for continuous execution.";
    }

    // Event Wait
    if (running_variable == 2) {

        // Disable other two transition buttons
        document.getElementById('interrupt').disabled=true;
        document.getElementById('exit').disabled=true;

        // Styling Button
        const admittedbutton = document.getElementById('event_wait');
        admittedbutton.style.backgroundColor="#009900";
        admittedbutton.style.color="white";

        // Output
        document.getElementById("target_state").innerHTML="WAITING"

        // Explanation
        document.getElementById('targetContainer').scrollIntoView({behavior: 'smooth'});
        document.getElementById('referenceContainer').classList.toggle("animateMove");
        document.getElementById('explanationContainer').classList.toggle("animateFade");
        document.getElementById('explanationText').innerHTML = "If a process requests something for which it is waiting, it is placed in the waiting state. For example, a process can require resources that aren't currently available, or it could be waiting for an Input/Output operation or another process to complete before proceeding.";
    }

    // Exit
    if (running_variable == 3) {

        // Disable other two transition buttons
        document.getElementById('interrupt').disabled=true;
        document.getElementById('event_wait').disabled=true;

        // Styling Button
        const admittedbutton = document.getElementById('exit');
        admittedbutton.style.backgroundColor="#009900";
        admittedbutton.style.color="white";

        // Output
        document.getElementById("target_state").innerHTML="TERMINATED"

        // Explanation
        document.getElementById('targetContainer').scrollIntoView({behavior: 'smooth'});
        document.getElementById('referenceContainer').classList.toggle("animateMove");
        document.getElementById('explanationContainer').classList.toggle("animateFade");
        document.getElementById('explanationText').innerHTML = "If a process indicates that it is now complete or has been aborted, the system terminates it.";
    }

}

// Waiting Process
function waitingProcess(waiting_variable) {

    // Ready
    if (waiting_variable == 1) {

        // Styling Button
        const admittedbutton = document.getElementById('event_completion');
        admittedbutton.style.backgroundColor="#009900";
        admittedbutton.style.color="white";

        // Output
        document.getElementById('target_state').innerHTML="READY";

        // Explanation
        document.getElementById('targetContainer').scrollIntoView({behavior: 'smooth'});
        document.getElementById('referenceContainer').classList.toggle("animateMove");
        document.getElementById('explanationContainer').classList.toggle("animateFade");
        document.getElementById('explanationText').innerHTML = "When the event for which the process has been waiting occurs, the process switches from blocked to ready state.";
    }

    // Enable the transition buttons wrt to input button
    document.getElementById('event_completion').disabled=false;

    // Disable other input buttons
    document.getElementById('new').disabled=true;
    document.getElementById('ready').disabled=true;
    document.getElementById('running').disabled=true;
    document.getElementById('terminated').disabled=true;

    // Styling click button
    const button = document.getElementById('waiting');
    button.style.backgroundColor="#009900";
    button.style.color="white";
}

// Terminated Process has no Transition State
function terminatedProcess() {

    // Disable other input buttons
    document.getElementById('new').disabled=true;
    document.getElementById('ready').disabled=true;
    document.getElementById('running').disabled=true;
    document.getElementById('waiting').disabled=true;

    // Styling click button
    const button = document.getElementById('terminated');
    button.style.backgroundColor="#009900";
    button.style.color="white";

    // Output
    document.getElementById("target_state").innerHTML="TERMINATED";

    // Explanation
    document.getElementById('targetContainer').scrollIntoView({behavior: 'smooth'});
    document.getElementById('referenceContainer').classList.toggle("animateMove");
    document.getElementById('explanationContainer').classList.toggle("animateFade");
    document.getElementById('explanationText').innerHTML = "There is no Transition, the process has been terminated and not a problem of OS anymore!";

    
}

// Reset
function reset() {
    document.getElementById('title').scrollIntoView({behavior:"smooth"});

    setTimeout(function() {
        location.reload();
    }, 1000);
}