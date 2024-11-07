var _a;
//listing elements//
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //type assertion 
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //create  resume output
        var resumeOutput = "\n     <h2>RESUME</h2>\n     <p><strong>Name:</strong><span id=\"edit-name\" class=\"editable\"> ".concat(name_1, "</span></p>\n     <p><strong>E-mail:</strong><span id=\"edit-edit\" class=\"editable\"> ").concat(email, "</span></p>\n     <p><strong>Phone Number:</strong><span id=\"edit-phone\" class=\"editable\"> ").concat(phone, "</span></p>\n     \n     <h3>Education</h3>\n     <pid=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n     <h3>Experience</h3>\n     <pid=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n     <h3>Skills</h3>\n     <pid=\"edit-skills\" class=\"editable\">").concat(skills, "</p> \n     ");
        //displlay output resume
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('one or more elements are missing');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElment = element;
            var currentValue = currentElment.textContent || "";
            //replace content
            if (currentElment.tagName === "P" || currentElment.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElment.textContent = input_1.value;
                    currentElment.style.display = 'inline';
                    input_1.remove();
                });
                currentElment.style.display = 'none';
                (_a = currentElment.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElment);
                input_1.focus();
            }
        });
    });
}
