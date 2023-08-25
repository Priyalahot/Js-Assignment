const textInput = document.getElementById("textInput");
const addButton = document.getElementById("addButton");
const paragraph = document.getElementById("content");

        addButton.addEventListener("click", () => {
            const newText = textInput.value;

            if (newText.trim() !== "") {
                const newLine = document.createElement("br");
                const newContent = document.createTextNode(newText);
                paragraph.appendChild(newContent);
                paragraph.appendChild(newLine);
                textInput.value = "";
            }
        });