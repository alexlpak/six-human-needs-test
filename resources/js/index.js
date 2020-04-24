let questions = localStorage.getItem('questionState') ? JSON.parse(localStorage.getItem('questionState')) : {
  1: { title: "People are impressed by me",  answer: undefined },
  2: { title: "Feeling that I belong is important to me",  answer: undefined },
  3: { title: "I need to feel grounded",  answer: undefined },
  4: { title: "I don't mind taking risks",  answer: undefined },
  5: { title: "I don't fear change",  answer: undefined },
  6: { title: "A failure is not a failure if you keep trying",  answer: undefined },
  7: { title: "I believe in giving back",  answer: undefined },
  8: { title: "I'm good at taking care of people",  answer: undefined },
  9: { title: "I often worry about what people are saying about me",  answer: undefined },
  10: { title: "I like to have as much stability in my life as possible",  answer: undefined },
  11: { title: "It's important to contribute to your community",  answer: undefined },
  12: { title: "I like to develop new ideas and projects",  answer: undefined },
  13: { title: "I'm security conscious",  answer: undefined },
  14: { title: "I like to be an example to others",  answer: undefined },
  15: { title: "I'm competitive",  answer: undefined },
  16: { title: "I hate the feeling of boredom",  answer: undefined },
  17: { title: "I know how to make connections with people",  answer: undefined },
  18: { title: "I constantly aspire to improve",  answer: undefined },
  19: { title: "Danger is never exciting to me",  answer: undefined },
  20: { title: "In most close relationships I'm usually the giver",  answer: undefined },
  21: { title: "There is always something new to be learned",  answer: undefined },
  22: { title: "I need to feel fulfilled",  answer: undefined },
  23: { title: "I frequently evaluate myself",  answer: undefined },
  24: { title: "I like for things to be predictable",  answer: undefined },
  25: { title: "I am more loving than most people",  answer: undefined },
  26: { title: "Recognition is very important to me",  answer: undefined },
  27: { title: "I like the feeling of exertion",  answer: undefined },
  28: { title: "I'm very careful of not over spending",  answer: undefined },
  29: { title: "Education is important to me",  answer: undefined },
  30: { title: "I'm a leader",  answer: undefined },
  31: { title: "I'm always looking for new experiences",  answer: undefined },
  32: { title: "I sometimes over extend myself in trying to help people",  answer: undefined },
  33: { title: "My routines and habits are important to me",  answer: undefined },
  34: { title: "I take pride in who I am",  answer: undefined },
  35: { title: "I like how learning something new changes my perspective",  answer: undefined },
  36: { title: "Sometimes the most important work is not what you're being paid for",  answer: undefined },
  37: { title: "I'm not an adventurous person",  answer: undefined },
  38: { title: "No one would say that I'm selfish",  answer: undefined },
  39: { title: "I tend to spend beyond my limits",  answer: undefined },
  40: { title: "I like to feel important",  answer: undefined },
  41: { title: "Every failure is a learning experience",  answer: undefined },
  42: { title: "I like to learn in order to teach what I learn",  answer: undefined },
  43: { title: "I seek unity in my relationship",  answer: undefined },
  44: { title: "I like to make a difference",  answer: undefined },
  45: { title: "I refrain from acting when I'm not sure about all the consequences of my actions",  answer: undefined },
  46: { title: "I suffer when I feel blocked",  answer: undefined },
  47: { title: "I enjoy suspense",  answer: undefined },
  48: { title: "Prestige is very important to me",  answer: undefined },
  49: { title: "I'm a romantic",  answer: undefined },
  50: { title: "I'm constantly learning",  answer: undefined },
  51: { title: "Giving is more important to me than receiving",  answer: undefined },
  52: { title: "I like to be number one",  answer: undefined },
  53: { title: "I hate taking risks of any kind",  answer: undefined },
  54: { title: "I like to constantly develop myself",  answer: undefined },
  55: { title: "I like to give my time and energy to good causes",  answer: undefined },
  56: { title: "I like to be admired by others",  answer: undefined },
  57: { title: "I'm proud of my ability to learn new things",  answer: undefined },
  58: { title: "We are here to make this world a better place",  answer: undefined },
  59: { title: "I like to grow and develop in different areas",  answer: undefined },
  60: { title: "Personal relationships are the most important thing in my life",  answer: undefined },
  61: { title: "Sometimes I can be intimidating",  answer: undefined },
  62: { title: "I often look for new forms of entertainment",  answer: undefined },
  63: { title: "I'm concerned about anything that might be risky",  answer: undefined },
  64: { title: "Being fulfilled in your work is more important than being admired",  answer: undefined },
  65: { title: "I strive to improve my skills",  answer: undefined },
  66: { title: "I get close to people by being generous with money, time and energy",  answer: undefined },
  67: { title: "I like to think carefully before I go into action",  answer: undefined },
  68: { title: "Sometimes I like the thrill of experiencing fear",  answer: undefined },
  69: { title: "I need to feel respected",  answer: undefined },
  70: { title: "When we stop growing, we die",  answer: undefined },
  71: { title: "The feeling of togetherness is important to me",  answer: undefined },
  72: { title: "For life to make sense, you have to leave a mark in the world",  answer: undefined },
  73: { title: "Feeling comfortable at all times is important to me",  answer: undefined },
  74: { title: "I enjoy being involved in many different activities",  answer: undefined },
  75: { title: "I'm always comparing myself to others in terms of success",  answer: undefined },
  76: { title: "I need to have passion in my relationship",  answer: undefined },
  77: { title: "If I'm not contributing to others, my life is meaningless",  answer: undefined },
  78: { title: "When making a decision, I often think about what might be more enjoyable",  answer: undefined },
  79: { title: "I can't stand to feel stagnant",  answer: undefined },
  80: { title: "I need to feel as safe as possible at all times",  answer: undefined },
  81: { title: "If I commit to something, I worry that something better might come along",  answer: undefined },
  82: { title: "I never want to be seen as a loser",  answer: undefined },
  83: { title: "I don't care about having much stability in my life",  answer: undefined },
  84: { title: "I have a mission",  answer: undefined },
};

let results;

const generateQuestions = () => {
  let questionNumbers = Object.keys(questions);
  questionNumbers.forEach(number => {
    let $question = $(`
          <div class="question shadow" id="question${number}">
            <span class="question-title">${number}. ${questions[number].title}</span>
            <div class="question-options">
              <div class="option">
                <input type="radio" id="q${number}y" name="answer${number}" value="1">
                <label for="q${number}y">Yes</label>
              </div>
              <div class="option">
                <input type="radio" id="q${number}p" name="answer${number}" value="0.5">
                <label for="q${number}p">Partly</label>
              </div>
              <div class="option">
                <input type="radio" id="q${number}n" name="answer${number}" value="0">
                <label for="q${number}n">No</label>
              </div>
            </div>
          </div>
      `);
    $('.questions-container').append($question);
  });
};

const clearAnswers = () => {
  $('.question input').toArray().forEach(input => {
    input.checked = false;
  });
  localStorage.removeItem('questionState');
  updateProgress();
  $('.question.answered').removeClass('answered');
  hideResultsButton();
}

const populateAnswers = () => {
  let questionNumbers = Object.keys(questions);
  questionNumbers.forEach(number => {
    if (questions[number].answer) {
      $(`#question${number} input[value="${questions[number].answer}"]`)[0].checked = true;
    };
  });
};

// Removes numbers from provided string
const extractNumbers = string => {
  return string.match(/\d+/g).join('');
}

generateQuestions();
populateAnswers();

const checkAnswers = () => {
  // Checks if any questions are unanswered
  let totalAnswered = $('.question.answered').length;
  let totalQuestions = $('.question').length;
  return (totalAnswered/totalQuestions == 1);
};



const showResultsButton = () => {
  $('.progress-bar').fadeOut();
  $('.percentage').fadeOut();
  setTimeout(function() { $('.progress-container button.results').fadeIn(); }, 500)
};

const hideResultsButton = () => {
  $('.progress-container button.results').fadeOut();
  setTimeout(function() { $('.progress-bar').fadeIn(); $('.percentage').fadeIn(); }, 500)
}

const getResults = () => {
  $('.questions-container').fadeOut();
  $('.progress-container').fadeOut();

  let needs = generateResults();
  let presorted = [];

  Object.keys(needs).forEach(need => {
    presorted.push([need, needs[need].total]);
  });

  function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
      return 0;
    }
    else {
      return (a[1] > b[1]) ? -1 : 1;
    }
  }

  let needsString = '';
  let sorted = presorted.sort(compareSecondColumn);
  sorted.forEach(need => {
    needsString += `
    <div class="need flex" id="${need[0].toLowerCase()}">
      <div class="score">${need[1]}</div>
      <a class="name" href="#">${need[0]}</a>
    </div>\n
    `;
  });

  let $results = $(`
    <div class="results-container flex jc-c ai-c" style="display: none;">
        <div class="results flex fd-col shadow">
            <span class="title">Your Results</span>
            <span class="subtitle">Click on a need to learn more.</span>
            <div class="needs">${needsString}</div>
        </div>
    </div>
  `);

  $('body').append($results);
  populateNeedsLinks();
  setTimeout(function() { $('.results-container').fadeIn() }, 500);
};

const generateResults = () => {
  if (checkAnswers()) {
    let needs = {
      'Certainty': { ids: [3, 10, 13, 19, 24, 28, 33, 37, 45, 53, 63, 67, 73, 80], total: 0 },
      'Uncertainty': { ids: [4, 5, 12, 16, 27, 31, 39, 47, 62, 68, 74, 78, 81, 83], total: 0 },
      'Significance': { ids: [1, 9, 15, 23, 26, 34, 40, 48, 52, 56, 61, 69, 75, 82], total: 0 },
      'Love/Connection': { ids: [2, 8, 17, 20, 25, 32, 38, 43, 49, 51, 60, 66, 71, 76], total: 0 },
      'Growth': { ids: [6, 18, 21, 29, 35, 41, 46, 50, 54, 57, 59, 65, 70, 79], total: 0 },
      'Contribution': { ids: [7, 11, 14, 22, 30, 36, 42, 44, 55, 58, 64, 72, 77, 84], total: 0 }
    };
    Object.keys(needs).forEach(need => {
      needs[need].total = 0;
      needs[need].ids.forEach(number => {
        needs[need].total += parseFloat(questions[number].answer);
      });
    });
    return needs;
  }
  else {
    throw "All questions must be answered.";
  }
};

const highlightAnswered = () => {
  $('.question').toArray().forEach(question => {
    let answered, questionNum;
    let inputs = $(question).find('input').toArray();
    for (i = 0; i < inputs.length; i++) {
      questionNum = extractNumbers(inputs[i].name);
      if (inputs[i].checked) { answered = true; break; }
      else { answered = false; };
    };
    // Highlights the question red if answered
    if (answered) { $(question).addClass('answered'); };
  });
};

highlightAnswered();

// Removes highlighting if question is answered
// and places value of selected answer in questions object
// and saves all changes in browser cache and update progress
$('.question input').click(function() {
  let $parentQuestion = $(this).closest('.question');
  $parentQuestion.addClass('answered');
  if ($parentQuestion.hasClass('unanswered')) { $parentQuestion.removeClass('unanswered'); };
  let questionNum = extractNumbers($parentQuestion[0].id);
  questions[questionNum].answer = this.value;
  localStorage.setItem("questionState", JSON.stringify(questions));
  updateProgress();
  highlightAnswered();
  if (checkAnswers()) { showResultsButton(); };
})

const closePopup = () => {
  $('body').removeClass("no-scroll");
  $('.popup-container').remove();
};

const confirmPopup = (message, confirmFunction) => {
  let $popup = $(`
      <div class="popup-container">
        <div class="popup">
          <p class="popup-message">${message}</p>
          <div class="button-container">
            <button class="small-button confirm" onclick="${confirmFunction}" type="button">Confirm</button>
            <button class="small-button cancel" onclick="closePopup()" type="button">Cancel</button>
          </div>
        </div>
      </div>
    `);
    $('body').append($popup);
    $('body').addClass("no-scroll");
};

const getProgress = () => {
  let totalAnswered = 0;
  let totalQuestions = $('.question').length;
  $('.question').toArray().forEach(question => {
    let answered, questionNum;
    let inputs = $(question).find('input').toArray();
    for (i = 0; i < inputs.length; i++) {
      questionNum = extractNumbers(inputs[i].name);
      if (inputs[i].checked) { answered = true; break; }
      else { answered = false; };
    };
    if (answered) { ++totalAnswered; };
  });
  return Math.round(((totalAnswered/totalQuestions)*100) * 10)/10;
};

const updateProgress = () => {
  $('.progress-bar .complete').animate({width: `${getProgress()}%` });
  $('.percentage').text(`${getProgress()}%`);
};
updateProgress();

if (checkAnswers()) {
  showResultsButton();
};

const removeSpecialCharacters = string => {
  return string.replace(/[^a-zA-Z ]/g, "");
}

const populateNeedsLinks = () => {
  $('a.name').toArray().forEach(name => {
      name.href = `${removeSpecialCharacters(name.innerText.toLowerCase())}.html`;
  });
};
