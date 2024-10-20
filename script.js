document.getElementById('cvForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const skills = formData.get('skills').split(',').map(skill => `<li>${skill.trim()}</li>`).join('');
  const experience = formData.get('experience');
  const photo = URL.createObjectURL(formData.get('photo'));

  const newWindow = window.open('', '_blank');
  newWindow.document.write(`
    <html>
      <head>
        <title>${name}'s CV</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .cv-container { display: flex; justify-content: space-between; }
          .cv-photo { width: 30%; }
          .cv-details { width: 70%; }
          img { max-width: 100%; border-radius: 10px; }
        </style>
      </head>
      <body>
        <div class="cv-container">
          <div class="cv-photo">
            <img src="${photo}" alt="Profile Photo">
          </div>
          <div class="cv-details">
            <h1>${name}</h1>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h2>Skills</h2>
            <ul>${skills}</ul>
            <h2>Experience</h2>
            <p>${experience}</p>
          </div>
        </div>
      </body>
    </html>
  `);
  newWindow.document.close();
});
