document.addEventListener('DOMContentLoaded', () => {
    const downloadPDFButton = document.getElementById('download-pdf-button');

    downloadPDFButton.innerHTML = `
        <button id="download-pdf" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Download PDF
        </button>
    `;

    const generatePDF = document.getElementById('download-pdf');
    generatePDF.addEventListener('click', () => {
        const element = document.getElementById('content');
        html2pdf().from(element).save('CV-Nama-Kamu.pdf');
    });
});