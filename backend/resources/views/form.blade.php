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
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-content: center;
        }
        .d-flex{
            display: flex;
            flex-direction: column;
            width: 300px;
        }
        .button {
            max-width: 100px;
            margin: 30px auto 0 auto;
        }
        label {
            margin-top: 10px;
        }
        input {
            width: 100%;
        }
        #select {
            display: flex;
            align-items: center;
        }
        form{
            display: flex;
            padding: 50px;
            border: 1px solid black;
            justify-content: center;
        }
    </style>
    <script src="{{ asset('js/app.js') }}"></script>
</head>
<body class="antialiased">

<div id="select">
    <form id="form" onsubmit="send()">
        <div class="d-flex flex-column">
            <label>
                player name :
                <input id="player" name="player" type="text">
            </label>

            <label>
                estimation :
                <input id="estimation" name="estimation" type="text">
            </label>
            <label>
                emoji
                <input id="emoji" name="emoji" type="text">
            </label>
            <button class="button" type="submit">Envoyer</button>
        </div>
    </form>
</div>
<script>
    function send() {
        console.log('testaaa')
        var form = document.getElementById('form');

        event.preventDefault();

        const url = new URL('https://localhost/.well-known/mercure');
        //url.searchParams.append('topic', 'http://poker.test/testing-broadcast');

        const postData = window.querystring.stringify({
            'topic': 'http://poker.test/testing-broadcast',
            'data': JSON.stringify({
                'player': document.getElementById("player").value,
                'estimation': document.getElementById("estimation").value,
                'emoji': document.getElementById("emoji").value
            }),
        });

        fetch(url, {
            method: 'POST',
            body: postData,
            headers: ({
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdLCJzdWJzY3JpYmUiOlsiaHR0cHM6Ly9leGFtcGxlLmNvbS9teS1wcml2YXRlLXRvcGljIiwie3NjaGVtZX06Ly97K2hvc3R9L2RlbW8vYm9va3Mve2lkfS5qc29ubGQiLCIvLndlbGwta25vd24vbWVyY3VyZS9zdWJzY3JpcHRpb25zey90b3BpY317L3N1YnNjcmliZXJ9Il0sInBheWxvYWQiOnsidXNlciI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXNlcnMvZHVuZ2xhcyIsInJlbW90ZUFkZHIiOiIxMjcuMC4wLjEifX19.z5YrkHwtkz3O_nOnhC_FP7_bmeISe3eykAkGbAl5K7c',
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
        }).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        }).then(function (data) {
            console.log(data);
        }).catch(function (error) {
            console.warn(error);
        });
    }

</script>
</body>
</html>
