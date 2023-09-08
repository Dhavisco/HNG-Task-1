document.addEventListener("DOMContentLoaded", function () {
    // Get the elements by data-testid attributes
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    // Create a function to update the current day and time
    function updateDateTime() {
        const currentDate = new Date();
        
        // Get the current day of the week
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];

        // Display the current day of the week
        currentDayElement.textContent = currentDayOfWeek;

        // Display the current UTC time in milliseconds
        currentUTCTimeElement.textContent = currentDate.getTime();
    }

    // Call the function initially to set the values
    updateDateTime();

    // Set an interval to update the time every second (1000 milliseconds)
    setInterval(updateDateTime, 1000);
});

