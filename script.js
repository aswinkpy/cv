document.getElementById('cvForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form inputs
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const photoFile = document.getElementById('photo').files[0];

    // Display inputs in the CV container
    document.getElementById('cvName').textContent = fullName;
    document.getElementById('cvEmail').textContent = email;
    document.getElementById('cvPhone').textContent = phone;
    document.getElementById('cvSummary').textContent = summary;
    document.getElementById('cvExperience').textContent = experience;
    document.getElementById('cvEducation').textContent = education;
    document.getElementById('cvSkills').textContent = skills;

    // Display the uploaded photo
    const reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById('cvPhoto').src = e.target.result;
    };
    reader.readAsDataURL(photoFile);

    // Show the CV container
    document.getElementById('cvContainer').classList.remove('hidden');
});

document.getElementById('downloadBtn').addEventListener('click', function () {
    const cvContainer = document.getElementById('cvContainer');

    html2canvas(cvContainer).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();

        // Calculate image dimensions and add to PDF
        const imgWidth = 190; // Adjust based on PDF size
        const pageHeight = pdf.internal.pageSize.height;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;

        let position = 0;

        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        pdf.save('CV.pdf'); // Save the PDF with a name
    });
});
