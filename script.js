document.getElementById("cvForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const summary = document.getElementById("summary").value;
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value;

    // Set CV content
    document.getElementById("cvName").innerText = fullName;
    document.getElementById("cvEmail").innerText = email;
    document.getElementById("cvPhone").innerText = phone;
    document.getElementById("cvSummary").innerText = summary;
    document.getElementById("cvExperience").innerText = experience;
    document.getElementById("cvEducation").innerText = education;
    document.getElementById("cvSkills").innerText = skills;

    // Handle photo upload
    const photoInput = document.getElementById("photo");
    const file = photoInput.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        document.getElementById("cvPhoto").src = reader.result;
    };
    if (file) {
        reader.readAsDataURL(file);
    }

    // Show CV container
    document.getElementById("cvContainer").classList.remove("hidden");
});

document.getElementById("downloadBtn").addEventListener("click", function () {
    const cvContainer = document.getElementById("cvContainer");
    html2canvas(cvContainer).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save("cv.pdf");
    });
});
