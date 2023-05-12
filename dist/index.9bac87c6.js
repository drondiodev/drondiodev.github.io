const btnPrint = document.getElementById("btnPrint");
btnPrint.addEventListener("click", function() {
    const pdf = new jsPDF();
    pdf.fromHTML(document.querySelector(".content"), 15, 15, {
        "width": 170
    });
    pdf.save("sample-file.pdf");
    this.style.display = "block";
});

//# sourceMappingURL=index.9bac87c6.js.map
