// 각 퀴즈에 대한 정답을 배열에 입력
const answer1 = ["111"];
const answer2 = ["222"];
const answer3 = ["333"];
const answer4 = ["444"];

const clickSubmitBtn = (quizNum) => {
  const result = document.getElementById(`quiz${quizNum}`).value;
  let resultSpan = document.getElementById(`resultStr${quizNum}`);
  const resultBox = document.getElementById(`quizBox${quizNum}`);
  let userResult = false;

  if (String(quizNum) === "1") {
    if (answer1.includes(result)) {
      userResult = true;
    } else {
      userResult = false;
    }
  }
  if (String(quizNum) === "2") {
    if (answer2.includes(result)) {
      userResult = true;
    } else {
      userResult = false;
    }
  }
  if (String(quizNum) === "3") {
    if (answer3.includes(result)) {
      userResult = true;
    } else {
      userResult = false;
    }
  }
  if (String(quizNum) === "4") {
    if (answer4.includes(result)) {
      userResult = true;
    } else {
      userResult = false;
    }
  }

  const checkUserResult = () => {
    if (userResult) {
      resultBox.classList.remove("blue");
      resultBox.classList.remove("red");
      resultBox.classList.add("blue");
      return "정답입니다!";
    } else {
      resultBox.classList.remove("blue");
      resultBox.classList.remove("red");
      resultBox.classList.add("red");
      const resultText = document.createTextNode("오답입니다!");
      return "오답입니다!";
    }
  };

  const resultText = document.createTextNode(checkUserResult());
  resultSpan.innerText = "";
  resultSpan.appendChild(resultText);
};
