<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">


        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
        </style>
    </head>
    <body class="antialiased">
        <div id="display">
            <ul>
                <li>Participant : <span id="player-display"></span></li>
                <li>Estimation : <span id="estimation-display"></span></li>
                <li>Emoji : <span id="emoji-display"></span></li>
            </ul>
        </div>

    <script>
        console.log(encodeURIComponent('http://poker.test/testing-broadcast'))
        var es = new EventSource('https://localhost/.well-known/mercure?topic=' + encodeURIComponent('http://poker.test/testing-broadcast'));
        es.addEventListener('message', (messageEvent) => {
            var eventData = JSON.parse(messageEvent.data);
            console.log(eventData);
            var playerInput = document.getElementById('player-display');
            var estimationInput = document.getElementById('estimation-display');
            var emojiInput = document.getElementById('emoji-display');

            console.log("test");

            playerInput.innerHTML = eventData['player'];
            estimationInput.innerHTML = eventData['estimation'];
            emojiInput.innerHTML = eventData['emoji'];
        });
    </script>
    </body>
</html>
