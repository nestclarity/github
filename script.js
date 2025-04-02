document.getElementById("generateBtn").addEventListener("click", function() {
    let scriptText = document.getElementById("scriptInput").value;

    if (scriptText.trim() === "") {
        alert("Please enter a script!");
        return;
    }

    document.getElementById("outputMsg").innerText = "🎥 AI is generating your anime reel... (Demo Version)";
});
