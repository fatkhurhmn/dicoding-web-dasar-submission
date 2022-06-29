let softskills = [
    {
        skillName: "Critical Thinking",
        image: "assets/images/critikal_thinking.jpeg",
    },
    {
        skillName: "Problem Solving",
        image: "assets/images/problem_solving.jpg",
    },
    {
        skillName: "Time Management",
        image: "assets/images/time_management.jpg",
    }
];

let hardskills = [
    {
        skillName: "Android Development",
        image: "assets/images/android_development.png",
    },
    {
        skillName: "UI/UX Design",
        image: "assets/images/design.png",
    },
    {
        skillName: "Web Development",
        image: "assets/images/web_development.png",
    }
];

function setSkills() {
    let skill1 = document.getElementById("softskills");
    let skill2 = document.getElementById("hardskills");

    for (let softskill of softskills) {
        let newElement = document.createElement("li");
        newElement.innerHTML = `
          <div class="skill-container">
            <img src="${softskill.image}" />
            <p>${softskill.skillName}</p>
          </div>
        `;
        skill1.appendChild(newElement);
    }

    for (let hardskil of hardskills) {
        let newElement = document.createElement("li");
        newElement.innerHTML = `
          <div class="skill-container">
            <img src="${hardskil.image}" />
            <p>${hardskil.skillName}</p>
          </div>
        `;
        skill2.appendChild(newElement);
    }
}

setSkills()