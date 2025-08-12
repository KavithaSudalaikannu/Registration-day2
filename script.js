function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let age = document.getElementById("age").value;
  let gender = document.querySelector('input[name="gender"]:checked');
  let department = document.getElementById("department").value;
  let year = document.getElementById("year").value;
  let projectTitle = document.getElementById("project").value.trim();
  let section = document.getElementById("section").value;
  let agree = document.getElementById("agree").checked;
  let startDate = document.getElementById("startDate").value;
  let endDate = document.getElementById("endDate").value;

  if (
    name === "" || email === "" || !gender || age === "" || department === "" ||
    year === "" || projectTitle === "" || section === "" ||
    startDate === "" || endDate === "" || !agree
  ) {
    alert("Please fill all fields and agree to the terms.");
    return false;
  }
  return true;
}
