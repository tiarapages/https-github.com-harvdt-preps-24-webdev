// pada string 'Nama Kamu' sesuaikan nama asli kamu ya 😊
const title = document.title = `CV - ${'Nama Kamu'}`;








// script ini tidak perlu diulik ya 😊
const nama_kamu = document.getElementById('nama_kamu').innerHTML = title.split('CV - ').join('');
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
        element.className = 'container mx-auto px-4 py-8 sm:px-10 lg:px-[10%]';
        html2pdf().from(element).save(`${title}`);
    });
});