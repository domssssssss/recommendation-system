if (window.location.pathname === "/index.html") {
  setTimeout(function () {
    document.querySelector(".loading-screen").style.display = "none";
  }, 500);

  document.querySelector(".get-started").addEventListener("click", function () {
    const loadingScreen = document.querySelector(".loading-screen");
    loadingScreen.style.display = "flex";

    setTimeout(function () {
      window.location.href = "holland-code.html";
    }, 500);
  });
}
if (window.location.pathname.endsWith("holland-code.html")) {
  const loadingScreen = document.querySelector(".loading-screen");
  loadingScreen.style.display = "none";

  document
    .querySelector(".background-next-button")
    .addEventListener("click", function () {
      loadingScreen.style.display = "flex";

      setTimeout(function () {
        window.location.href = "how-it-works.html";
      }, 500);
    });
}
if (window.location.pathname === "/how-it-works.html") {
  const loadingScreen = document.querySelector(".loading-screen");
  loadingScreen.style.display = "none";

  document
    .querySelector(".background-next-button")
    .addEventListener("click", function () {
      loadingScreen.style.display = "flex";

      setTimeout(function () {
        window.location.href = "terms.html";
      }, 500);
    });
}
if (window.location.pathname === "/terms.html") {
  const loadingScreen = document.querySelector(".loading-screen");
  loadingScreen.style.display = "none";

  document
    .querySelector(".background-next-button")
    .addEventListener("click", function () {
      loadingScreen.style.display = "flex";

      setTimeout(function () {
        window.location.href = "riasec.html";
      }, 500);
    });
}
if (window.location.pathname === "/riasec.html") {
  const loadingScreen = document.querySelector(".loading-screen");
  loadingScreen.style.display = "none";

  document
    .querySelector(".background-next-button")
    .addEventListener("click", function () {
      loadingScreen.style.display = "flex";

      setTimeout(function () {
        window.location.href = "inputs.html";
      }, 500);
    });
}
if (window.location.pathname === "/inputs.html") {
  const loadingScreen = document.querySelector(".loading-screen");
  loadingScreen.style.display = "none";

  document
    .querySelector(".submit-button")
    .addEventListener("click", function () {
      loadingScreen.style.display = "flex";

      setTimeout(function () {
        window.location.href = "page1.html";
      }, 500);
    });
}
if (window.location.pathname === "/page1.html") {
  let currentQuestionIndex = 0;
  let totalQuestions = 0;
  let questions = [];
  let previousQuestionIndex = -1;

  fetch("questions.json")
    .then((response) => response.json())
    .then((data) => {
      questions = data;
      totalQuestions = questions.length;

      // Shuffle the questions array
      shuffleQuestions();

      // Initialize the first question
      updateQuestion();

      // Add event listener to the Redo button
      document
        .querySelector(".redo-button")
        .addEventListener("click", function () {
          if (previousQuestionIndex >= 0) {
            currentQuestionIndex = previousQuestionIndex;
            updateQuestion(); // Revert to the previous question
          }
        });
    })
    .catch((error) => console.error("Error loading JSON:", error));

  // Shuffle the questions array using Fisher-Yates algorithm
  function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]]; // Swap elements
    }
  }

  // Update the question and choices
  function updateQuestion() {
    const questionData = questions[currentQuestionIndex];

    // Update the question text
    document.querySelector(".question").textContent = questionData.question;

    // Update the scale (rating circles)
    const scaleElement = document.querySelector(".scale");
    scaleElement.innerHTML = ""; // Clear previous options

    questionData.choices.forEach((choice) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.setAttribute("data-value", choice.value);

      const circleElement = document.createElement("div");
      circleElement.classList.add("circle");
      circleElement.style.backgroundColor = choice.color;
      optionElement.appendChild(circleElement);

      const labelElement = document.createElement("p");
      labelElement.textContent = choice.label;
      optionElement.appendChild(labelElement);

      scaleElement.appendChild(optionElement);

      // Add click event to circle
      circleElement.addEventListener("click", function () {
        handleCircleClick();
      });
    });

    // Update progress bar
    updateProgressBar();

    // Track previous question index
    previousQuestionIndex = currentQuestionIndex;

    // Show submit button on the last question
    if (currentQuestionIndex === totalQuestions - 1) {
      document.querySelector(".submit-button").style.display = "inline-block"; // Show submit button
    } else {
      document.querySelector(".submit-button").style.display = "none"; // Hide submit button
    }
  }

  // Handle circle click (advance to next question)
  function handleCircleClick() {
    if (currentQuestionIndex < totalQuestions - 1) {
      currentQuestionIndex++; // Move to the next question
      updateQuestion(); // Update the question and choices
    }
  }

  // Update the progress bar
  function updateProgressBar() {
    const progress = (currentQuestionIndex / (totalQuestions - 1)) * 100;
    document.querySelector(".progress").style.width = progress + "%"; // Update the width of the progress bar
  }
  document
    .querySelector(".submit-button")
    .addEventListener("click", function () {
      setTimeout(function () {
        window.location.href = "completed.html";
      }, 500);
    });
}
if (window.location.pathname === "/completed.html") {
  document
    .querySelector(".completed-button")
    .addEventListener("click", function () {
      setTimeout(function () {
        window.location.href = "result.html";
      }, 500);
    });
}
