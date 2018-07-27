function validate() {
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPass = $('#confirm-password');
    let companyCheckBox = $("#company");
    let companyNum = $('#companyNumber');
    let companyInfo = $('#companyInfo');
    let submitBtn = $('#submit');
    let validationDiv = $('#valid');
    let allIsValid = true;

    companyCheckBox.on('change', function () {
        if (companyCheckBox.is(':checked')) {
            companyInfo.css('display', 'block');
        } else {
            companyInfo.css('display', 'none');
        }
    });

    submitBtn.on('click', function (ev) {
        ev.preventDefault();
        validateForm();
        validationDiv.css('display', allIsValid ? "block" : "none");
        allIsValid = true;
    });

    function validateForm() {
        regexValidation(username, /^[A-Za-z\d]{3,20}$/g);
        regexValidation(email, /^.*?@.*?\..*$/g);
        if (confirmPass.val() === password.val()) {
            regexValidation(password, /^\w{5,15}$/g);
            regexValidation(confirmPass, /^\w{5,15}$/g);
        } else {
            password.css('border', 'solid red');
            confirmPass.css('border', 'solid red');
            allIsValid = false;
        }
        if (companyCheckBox.is(':checked')) {
            validateCompanyInfo();
        }
    }

    function regexValidation(input, pattern) {
        if (pattern.test(input.val())) {
            input.css('border', 'none');
        }
        else {
            input.css('border', 'solid red');
            allIsValid = false;
        }
    }

    function validateCompanyInfo() {
        let numValue = Number(companyNum.val());
        if (numValue >= 1000 && numValue <= 9999) {
            companyNum.css('border', 'none');
        }
        else {
            companyNum.css('border', 'solid red');
            allIsValid = false;
        }
    }
}
