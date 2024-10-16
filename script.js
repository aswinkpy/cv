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
    window.print(); // Allows user to download or print the CV
});
