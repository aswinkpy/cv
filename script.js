document.getElementById('cvForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const experience = document.getElementById('experience').value;
    const hobby = document.querySelector('input[name="hobby"]:checked').value;
    
    const photoInput = document.getElementById('photo');
    const photoURL = URL.createObjectURL(photoInput.files[0]);

    const cvOutput = `
        <div class="cv-header">
            <h2>${name}</h2>
            <img src="${photoURL}" alt="Profile Photo">
        </div>
        <div class="cv-section">
            <h3>Contact Information</h3>
            <div class="cv-detail"><strong>Email:</strong> ${email}</div>
        </div>
        <div class="cv-section">
            <h3>Hobbies</h3>
            <div class="cv-detail">${hobby}</div>
        </div>
        <div class="cv-section">
            <h3>Experience</h3>
            <div class="cv-detail">${experience}</div>
        </div>
    `;
    
    document.getElementById('cvOutput').innerHTML = cvOutput;
    document.getElementById('cvOutput').style.display = 'block';
    document.getElementById('downloadBtn').style.display = 'block';
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    const pdf = new jsPDF();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const experience = document.getElementById('experience').value;
    const hobby = document.querySelector('input[name="hobby"]:checked').value;

    pdf.text(20, 20, `Name: ${name}`);
    pdf.text(20, 30, `Email: ${email}`);
    pdf.text(20, 40, `Hobby: ${hobby}`);
    pdf.text(20, 50, `Experience: ${experience}`);
    
    pdf.save('CV.pdf');
});

