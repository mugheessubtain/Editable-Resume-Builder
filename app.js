// // Function to handle form submission
// function handleFormSubmit(event: Event): void {
//     event.preventDefault();
//     const nameElement = document.getElementById("name") as HTMLInputElement | null;
//     const emailElement = document.getElementById("email") as HTMLInputElement | null;
//     const phoneElement = document.getElementById("phone") as HTMLInputElement | null;
//     const degreeElement = document.getElementById("degree") as HTMLInputElement | null;
//     const majorElement = document.getElementById("major") as HTMLInputElement | null;
//     const universityElement = document.getElementById("university") as HTMLInputElement | null;
//     const skillsElement = document.getElementById("skills") as HTMLTextAreaElement | null;
//     const jobTitleElement = document.getElementById("job-title") as HTMLInputElement | null;
//     const companyNameElement = document.getElementById("company-name") as HTMLInputElement | null;
//     const startDateElement = document.getElementById("start-date") as HTMLInputElement | null;
//     const endDateElement = document.getElementById("end-date") as HTMLInputElement | null;
//     const responsibilitiesElement = document.getElementById("responsibilities") as HTMLTextAreaElement | null;
//     if (!nameElement || !emailElement || !phoneElement || !degreeElement || !majorElement || !universityElement ||
//         !skillsElement || !jobTitleElement || !companyNameElement || !startDateElement || !responsibilitiesElement) {
//         console.error("One or more elements are missing");
//         return;
//     }
//     const name = nameElement.value;
//     const email = emailElement.value;
//     const phone = phoneElement.value;
//     const degree = degreeElement.value;
//     const major = majorElement.value;
//     const university = universityElement.value;
//     const skills = skillsElement.value;
//     const jobTitle = jobTitleElement.value;
//     const companyName = companyNameElement.value;
//     const startDate = startDateElement.value;
//     const endDate = endDateElement?.value || "Present"; // Handle optional end date
//     const responsibilities = responsibilitiesElement.value;
//     const resumeOutput = `
//         <h2>Resume</h2>
//         <p><strong>Name:</strong> <span class="editable" id="editName">${name}</span></p>
//         <p><strong>Email:</strong> <span class="editable" id="editEmail">${email}</span></p>
//         <p><strong>Phone:</strong> <span class="editable" id="editPhone">${phone}</span></p>
//         <h3>Education</h3>
//         <p><strong>Degree:</strong> <span class="editable" id="editDegree">${degree}</span></p>
//         <p><strong>Major:</strong> <span class="editable" id="editMajor">${major}</span></p>
//         <p><strong>University:</strong> <span class="editable" id="editUniversity">${university}</span></p>
//         <h3>Skills</h3>
//         <p class="editable" id="editSkills">${skills}</p>
//         <h3>Work Experience</h3>
//         <p><strong>Job Title:</strong> <span class="editable" id="editJobTitle">${jobTitle}</span></p>
//         <p><strong>Company Name:</strong> <span class="editable" id="editCompanyName">${companyName}</span></p>
//         <p><strong>Duration:</strong> <span class="editable" id="editDuration">${startDate} - ${endDate}</span></p>
//         <p><strong>Responsibilities:</strong> <span class="editable" id="editResponsibilities">${responsibilities}</span></p>
//     `;
//     const resumeOutputElement = document.getElementById("resumeOutput");
//     if (resumeOutputElement) {
//         resumeOutputElement.innerHTML = resumeOutput;
//     } else {
//         console.error("The resume output element is missing");
//     }
// }
// // Function to handle toggling between Edit and Save modes
// function toggleEditMode(): void {
//     const editButton = document.getElementById("editButton") as HTMLButtonElement | null;
//     if (!editButton) return;
//     const editableElements = document.querySelectorAll(".editable");
//     if (editButton.textContent === "Edit") {
//         // Switch to edit mode
//         editableElements.forEach((element) => {
//             if (element instanceof HTMLElement) {
//                 element.contentEditable = "true";
//                 element.classList.add("editing");
//             }
//         });
//         editButton.textContent = "Save";
//     } else {
//         // Switch to save mode
//         editableElements.forEach((element) => {
//             if (element instanceof HTMLElement) {
//                 element.contentEditable = "false";
//                 element.classList.remove("editing");
//             }
//         });
//         editButton.textContent = "Edit";
//     }
// }
// // Attach event listeners only once
// function attachEventListeners(): void {
//     const formElement = document.getElementById("resume-form");
//     const editButton = document.getElementById("editButton");
//     if (formElement) {
//         formElement.addEventListener("submit", handleFormSubmit);
//     }
//     if (editButton) {
//         editButton.addEventListener("click", toggleEditMode);
//     }
// }
// // Initialize the script
// attachEventListeners();
// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var degreeElement = document.getElementById("degree");
    var majorElement = document.getElementById("major");
    var universityElement = document.getElementById("university");
    var skillsElement = document.getElementById("skills");
    var jobTitleElement = document.getElementById("job-title");
    var companyNameElement = document.getElementById("company-name");
    var startDateElement = document.getElementById("start-date");
    var endDateElement = document.getElementById("end-date");
    var responsibilitiesElement = document.getElementById("responsibilities");
    var profilePictureElement = document.getElementById("profile-picture");
    if (!nameElement || !emailElement || !phoneElement || !degreeElement || !majorElement || !universityElement ||
        !skillsElement || !jobTitleElement || !companyNameElement || !startDateElement || !responsibilitiesElement || !profilePictureElement) {
        console.error("One or more elements are missing");
        return;
    }
    var name = nameElement.value;
    var email = emailElement.value;
    var phone = phoneElement.value;
    var degree = degreeElement.value;
    var major = majorElement.value;
    var university = universityElement.value;
    var skills = skillsElement.value;
    var jobTitle = jobTitleElement.value;
    var companyName = companyNameElement.value;
    var startDate = startDateElement.value;
    var endDate = (endDateElement === null || endDateElement === void 0 ? void 0 : endDateElement.value) || "Present"; // Handle optional end date
    var responsibilities = responsibilitiesElement.value;
    var profilePictureUrl = null;
    // Handle profile picture
    if (profilePictureElement.files && profilePictureElement.files[0]) {
        var file = profilePictureElement.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            if (e.target && typeof e.target.result === 'string') {
                profilePictureUrl = e.target.result;
                renderResume();
            }
        };
        reader.readAsDataURL(file);
    }
    else {
        renderResume();
    }
    function renderResume() {
        var resumeOutput = "\n            <h2>Resume</h2>\n            ".concat(profilePictureUrl ? "<img src=\"".concat(profilePictureUrl, "\" alt=\"Profile Picture\" style=\"width: 150px; height: auto;\">") : '', "\n            <p><strong>Name:</strong> <span class=\"editable\" id=\"editName\">").concat(name, "</span></p>\n            <p><strong>Email:</strong> <span class=\"editable\" id=\"editEmail\">").concat(email, "</span></p>\n            <p><strong>Phone:</strong> <span class=\"editable\" id=\"editPhone\">").concat(phone, "</span></p>\n        \n            <h3>Education</h3>\n            <p><strong>Degree:</strong> <span class=\"editable\" id=\"editDegree\">").concat(degree, "</span></p>\n            <p><strong>Major:</strong> <span class=\"editable\" id=\"editMajor\">").concat(major, "</span></p>\n            <p><strong>University:</strong> <span class=\"editable\" id=\"editUniversity\">").concat(university, "</span></p>\n        \n            <h3>Skills</h3>\n            <p class=\"editable\" id=\"editSkills\">").concat(skills, "</p>\n        \n            <h3>Work Experience</h3>\n            <p><strong>Job Title:</strong> <span class=\"editable\" id=\"editJobTitle\">").concat(jobTitle, "</span></p>\n            <p><strong>Company Name:</strong> <span class=\"editable\" id=\"editCompanyName\">").concat(companyName, "</span></p>\n            <p><strong>Duration:</strong> <span class=\"editable\" id=\"editDuration\">").concat(startDate, " - ").concat(endDate, "</span></p>\n            <p><strong>Responsibilities:</strong> <span class=\"editable\" id=\"editResponsibilities\">").concat(responsibilities, "</span></p>\n        ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("The resume output element is missing");
        }
    }
}
// Function to handle toggling between Edit and Save modes
function toggleEditMode() {
    var editButton = document.getElementById("editButton");
    if (!editButton)
        return;
    var editableElements = document.querySelectorAll(".editable");
    if (editButton.textContent === "Edit") {
        // Switch to edit mode
        editableElements.forEach(function (element) {
            if (element instanceof HTMLElement) {
                element.contentEditable = "true";
                element.classList.add("editing");
            }
        });
        editButton.textContent = "Save";
    }
    else {
        // Switch to save mode
        editableElements.forEach(function (element) {
            if (element instanceof HTMLElement) {
                element.contentEditable = "false";
                element.classList.remove("editing");
            }
        });
        editButton.textContent = "Edit";
    }
}
// Attach event listeners only once
function attachEventListeners() {
    var formElement = document.getElementById("resume-form");
    var editButton = document.getElementById("editButton");
    if (formElement) {
        formElement.addEventListener("submit", handleFormSubmit);
    }
    if (editButton) {
        editButton.addEventListener("click", toggleEditMode);
    }
}
// Initialize the script
attachEventListeners();
