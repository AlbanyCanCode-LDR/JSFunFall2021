let student = {
  name: "Maria Gómez",
  skills: ["JavaScript"],
};

/**
 * Update the "student" object name to equal your name.
 * Add another skill to the "skills" array.
 * @example
 * console.log(student);
 * {
 *   name: "Jamal Taylor",
 *   skills: ["JavaScript", "Being a permanent student"],
 * };
 */

// WRITE YOUR ANSWER BELOW THIS LINE

student["name"] = "Lawrence Reid";
student["skills"].push("React");
//Why does this work? as opposed to student[skills] = student[skills].push("Being a permanent student")

console.log(student);
