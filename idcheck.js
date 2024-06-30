document.getElementById('gameCheckerForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const userId = document.getElementById('userId').value;
    const serverId = document.getElementById('serverId').value;

    const url = `https://id-game-checker.p.rapidapi.com/mobile-legends/${userId}/${serverId}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '6a57c3afaemsh97b2229926ed212p15ed21jsn184ff53a1c81',
            'x-rapidapi-host': 'id-game-checker.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const resultDiv = document.getElementById('result');

        if (result.success) {
            resultDiv.textContent = `Username: ${result.data.username}`;
        } else {
            resultDiv.textContent = `Error: ${result.message}`;
        }
    } catch (error) {
        console.error(error);
        document.getElementById('result').textContent = 'An error occurred while fetching data.';
    }
});
