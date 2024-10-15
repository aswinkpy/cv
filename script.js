document.getElementById('cv-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const linkedin = document.getElementById('linkedin').value;
    const summary = document.getElementById('summary').value;
    const degree = document.getElementById('degree').value;
    const institution = document.getElementById('institution').value;
    const eduDates = document.getElementById('edu-dates').value;
    const workExperience = document.getElementById('work-experience').value;
    const skills = document.getElementById('skills').value;
    const certification = document.getElementById('certification').value;
    const issuingOrg = document.getElementById('issuing-organization').value;
    const certDate = document.getElementById('certification-date').value;
    const projects = document.getElementById('projects').value;
    const volunteer = document.getElementById('volunteer').value;

    let cvContent = `
        <h2>${name}</h2>
        <p>${address ? address : ''} | ${phone} | ${email} | ${linkedin ? linkedin : ''}</p>
        <h3>Professional Summary</h3>
        <p>${summary}</p>
        <h3>Education</h3>
        <p>${degree}, ${institution} (${eduDates})</p>
        <h3>Work Experience</h3>
        <p>${workExperience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
        <h3>Certifications</h3>
        <p>${certification ? `${certification} (Issued by: ${issuingOrg}, Date: ${certDate})` : 'None'}</p>
        <h3>Projects or Research</h3>
        <p>${projects ? projects : 'None'}</p>
        <h3>Volunteer Experience</h3>
        <p>${volunteer ? volunteer : 'None'}</p>
    `;

    document.getElementById('cv-content').innerHTML = cvContent;
    document.getElementById('cv-output').classList.remove('hidden');

    // Call the download function
    downloadCV(name);
});

function downloadCV(name) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add content to the PDF
    const content = document.getElementById('cv-content').innerHTML;

    // Convert HTML to PDF
    doc.html(content, {
        callback: function (doc) {
            // Save the generated PDF
            doc.save(`${name}-CV.pdf`);
        },
        x: 10,
        y: 10,
    });
}
