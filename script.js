document.getElementById('cvForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const experience = document.getElementById('experience').value;
    const hobby = document.querySelector('input[name="hobby"]:checked').value;
    
    const photoInput = document.getElementById('photo');
    const photoURL = URL.createObjectURL(photoInput.files[0]);

    const cvOutput = `
        <div class="cert-title">Certificate of Achievement</div>
        <img src="${photoURL}" alt="Profile Photo">
        <div class="cert-detail"><strong>Name:</strong> ${name}</div>
        <div class="cert-detail"><strong>Email:</strong> ${email}</div>
        <div class="cert-detail"><strong>Hobby:</strong> ${hobby}</div>
        <div class="cert-detail"><strong>Experience:</strong> ${experience}</div>
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

    pdf.text(20, 20, `Certificate of Achievement`);
    pdf.text(20, 30, `Name: ${name}`);
    pdf.text(20, 40, `Email: ${email}`);
    pdf.text(20, 50, `Hobby: ${hobby}`);
    pdf.text(20, 60, `Experience: ${experience}`);
    
    pdf.save('CV.pdf');
});
