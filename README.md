**JavaScript Form Validation Project**

This project is a client-side form validation system built with Vanilla JavaScript. It demonstrates how to validate user input dynamically using JavaScript while providing immediate feedback to users.

The goal of the project is to practice DOM manipulation, event handling, and validation logic while building a user-friendly form that prevents incorrect data submission.

The form validates multiple input fields including name, email, password, confirm password, and message, ensuring that all required information is entered correctly before the form is successfully submitted.

**Features**

Real-time form validation using JavaScript

Required field validation

Email format validation using regular expressions

Password length validation (minimum and maximum characters)

Password strength validation:
  Uppercase letter requirement
  Lowercase letter requirement
  Numeric character requirement
  Special character requirement

Confirm password matching validation

Dynamic error messages that appear and disappear as the user interacts with the form

Automatic re-validation if the main password is changed after confirmation

Success message displayed when the form is submitted correctly

Form reset after successful submission

**Validation Behavior**

The form provides validation at different stages of user interaction to improve user experience:
1. Blur Validation
When a user leaves an input field, the form checks if the field is empty and displays an error message if required information is missing.
2. Real-Time Input Validation
While the user types, the form continuously checks the input and updates validation messages dynamically.
3. Final Submission Validation
When the user submits the form, all validation rules are checked again to ensure that the data meets all requirements before allowing submission.

**Password Validation Rules**

The password field must satisfy the following conditions:

Minimum of 8 characters

Maximum of 12 characters

Must contain at least:

  a.  One uppercase letter
  
  b.  One lowercase letter
  
  c.  One numeric character
  
  d.  One special character
  
The confirm password field must match the main password, and if the main password changes after confirmation, the user is prompted to re-confirm the password.

**Concepts Practiced**

  This project focuses on practicing key JavaScript concepts including:
  
  DOM element selection
  
  Event listeners (blur, input, and submit)
  
  Form validation techniques
  
  Regular expressions (Regex)
  
  Conditional logic
  
  Function modularization
  
  User experience (UX) friendly validation

This project was created as part of my journey to improve my JavaScript and front-end development skills while building practical, real-world web components.
