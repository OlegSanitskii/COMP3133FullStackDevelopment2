function validateEmployeeInput(input) {
  const required = ["first_name","last_name","email","gender","designation","salary","date_of_joining","department"];
  for (const f of required) {
    if (input[f] === undefined || input[f] === null || input[f] === "") {
      throw new Error(`${f} is required`);
    }
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email || "");
  if (!emailOk) throw new Error("Invalid email format");

  if (!["Male","Female","Other"].includes(input.gender)) throw new Error("Invalid gender (Male/Female/Other)");

  if (Number(input.salary) < 1000) throw new Error("salary must be >= 1000");
}

function validateEmployeeUpdateInput(input) {
  if (input.email) {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email || "");
    if (!emailOk) throw new Error("Invalid email format");
  }
  if (input.gender && !["Male","Female","Other"].includes(input.gender)) {
    throw new Error("Invalid gender (Male/Female/Other)");
  }
  if (input.salary !== undefined && Number(input.salary) < 1000) {
    throw new Error("salary must be >= 1000");
  }
}

module.exports = { validateEmployeeInput, validateEmployeeUpdateInput };