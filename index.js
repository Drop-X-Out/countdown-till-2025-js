<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countdown to 2025</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        .countdown-container {
            text-align: center;
            background-color: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            margin-bottom: 20px;
        }
        .countdown {
            display: flex;
            justify-content: center;
            gap: 20px;
        }
        .time-segment {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .time {
            font-size: 2.5em;
            font-weight: bold;
            color: #4a4a4a;
        }
        .label {
            font-size: 0.9em;
            color: #888;
            text-transform: uppercase;
        }
        @media (max-width: 480px) {
            .countdown {
                flex-wrap: wrap;
            }
            .time-segment {
                flex-basis: 40%;
            }
        }
    </style>
</head>
<body>
    <div class="countdown-container">
        <h1>Countdown to 2025</h1>
        <div class="countdown">
            <div class="time-segment">
                <span id="days" class="time">00</span>
                <span class="label">Days</span>
            </div>
            <div class="time-segment">
                <span id="hours" class="time">00</span>
                <span class="label">Hours</span>
            </div>
            <div class="time-segment">
                <span id="minutes" class="time">00</span>
                <span class="label">Minutes</span>
            </div>
            <div class="time-segment">
                <span id="seconds" class="time">00</span>
                <span class="label">Seconds</span>
            </div>
        </div>
    </div>

    <script>
        // Set the date we're counting down to
        const countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();

        // Update the countdown every 1 second
        const countdownTimer = setInterval(function() {
            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the countdown date
            const distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="days", "hours", "minutes", "seconds"
            document.getElementById("days").textContent = days.toString().padStart(2, '0');
            document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
            document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
            document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

            // If the countdown is finished, display a message
            if (distance < 0) {
                clearInterval(countdownTimer);
                document.querySelector(".countdown").innerHTML = "HAPPY NEW YEAR 2025!";
            }
        }, 1000);
    </script>
</body>
</html>
