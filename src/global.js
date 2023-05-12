import jsPDF from "jspdf";

const btnPrint = document.getElementById("btnPrint");
btnPrint.addEventListener("click", () => {
    const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
    });

    const content = document.querySelector(".contentToPrint");
    // Masquer le bouton lors de la capture du contenu HTML
    btnPrint.style.display = "none";

    html2canvas(content).then((canvas) => {
        const imageData = canvas.toDataURL("image/jpeg");
        doc.addImage(imageData, "JPEG", 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
        doc.save("CV - David Rondio.pdf");
        // Restaurer l'affichage du bouton après la génération du PDF
        btnPrint.style.display = "block";

    });
});