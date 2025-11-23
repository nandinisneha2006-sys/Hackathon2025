function summarize() {
  const text = document.getElementById("inputText").value;
  const type = document.getElementById("summaryType").value;

  let sentences = text.split(". ");
  let output = "";

  if (type === "short") {
    output = sentences.slice(0, 3).join(". ") + ".";
  }

  if (type === "bullet") {
    output = sentences.map(s => "• " + s.trim()).join("\n");
  }

  if (type === "exam") {
    output = "📌 Key Points:\n" +
             sentences.map(s => "- " + s.trim()).join("\n");
  }

  document.getElementById("outputText").innerText = output;
  document.getElementById("outputButtons").style.display = "block";
}
