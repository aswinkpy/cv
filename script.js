document.getElementById('cv-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const summary = document.getElementById('summary').value;
    const workExperience = document.getElementById('work-experience').value;
    const skills = document.getElementById('skills').value;
    const profilePic = document.getElementById('profile-pic').files[0];

    let reader = new FileReader();
    reader.onload = function (event) {
        let profileImgSrc = event.target.result;

        // Populate the CV content
        let cvContent = `
            <img src="${profileImgSrc}" alt="Profile Picture">
            <h2>${name}</h2>
            <p>Phone: ${phone} | Email: ${email}</p>
            <h3>Summary</h3>
            <p>${summary}</p>
            <h3>Work Experience</h3>
            <p>${workExperience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        document.getElementById('cv-content').innerHTML = cvContent;
        document.getElementById('cv-output').classList.remove('hidden');

        // Generate and download the CV as PDF
        downloadCV(name, profileImgSrc, cvContent);
    };

    if (profilePic) {
        reader.readAsDataURL(profilePic);
    } else {
        alert("Please upload a profile picture!");
    }
});

function downloadCV(name, profileImgSrc, cvContent) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add the profile image
    doc.addImage(profileImgSrc, 'JPEG', 10, 10, 50, 50);

    // Add the rest of the content to the PDF
    doc.fromHTML(cvContent, 70, 10, {
        width: 130
    });

    // Save the PDF
    doc.save(`${name}-CV.pdf`);
}
