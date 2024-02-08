// script.js

// Define an array of questions and choices
const questions = [
  {
    question: "What does the following Python code snippet do?",
    code: `word = "hello"
result = word[1:4]
print(result)`,
    choices: ["A. hello", "B. ello", "C. llo", "D. ell"],
    correctAnswer: "C. llo"
  }
    // Add more questions here as needed
  ];
  
  // Function to generate HTML for a question card
  function generateQuestionCard(questionObj) {
    const questionCard = document.createElement("div");
    questionCard.classList.add("question-card");
  
    const questionTitle = document.createElement("h1");
    questionTitle.textContent = questionObj.question;
  
    const codeBlock = document.createElement("code");
    codeBlock.innerHTML = questionObj.code;
  
    questionCard.appendChild(questionTitle);
    questionCard.appendChild(codeBlock);
  
    document.getElementById("card-container").appendChild(questionCard);
  
    const answerCard = document.createElement("div");
    answerCard.classList.add("answer-card");
  
    questionObj.choices.forEach(choice => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "choice";
      input.value = choice;
      label.appendChild(input);
      label.appendChild(document.createTextNode(choice));
      answerCard.appendChild(label);
    });
  
    document.getElementById("card-container").appendChild(answerCard);
  }
  
  // Generate cards for each question
  questions.forEach(question => {
    generateQuestionCard(question);
  });
  // Function to generate HTML for the footer card
function generateFooterCard() {
  const footerCard = document.createElement("div");
  footerCard.classList.add("footer-card");

  const footerText = document.createElement("p");
  footerText.textContent = "Made with ❤️ by Abdelouahed_Akharaze © 2024";

  footerCard.appendChild(footerText);

  document.body.appendChild(footerCard);
}
// Call the function to generate the footer card
generateFooterCard();
