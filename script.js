const goalsArray = [
    // using code names becuase site is publicly deployed
    {
        goalName: "Work Milestone 1",
        deadline: new Date("2026-11-15")
    },
    {
        goalName: "Work Milestone 2",
        deadline: new Date("2027-05-15")
    },
    {
        goalName: "Personal Goal - 'Omicron Persei 8' ",
        deadline: new Date("2026-11-30")
    },
    {
        goalName: "Personal Goal - 'eta mu' ",
        deadline: new Date("2027-07-01")
    },
    {
        goalName: "Task - 'Earl' ",
        deadline: new Date("2027-01-01")
    },
    {
        goalName: "Personal Goal - Who Decided That",
        deadline: new Date("2027-09-01")
    }
]

function listGoals(arr) {
    const sortedArr = arr.sort((a,b)=>{
        return a.deadline - b.deadline
    });

    const today = new Date();
    const dayOfWeek = today.toLocaleDateString('en-US', { weekday: 'long' });
    const month = today.toLocaleDateString("default", { month: "long" });
    const dateOfMonth = today.toLocaleString('en-US', { day: '2-digit' });
    const year = today.getFullYear();
    document.getElementById("todaysDate").innerText = `Today is ${dayOfWeek} ${month}  ${dateOfMonth}, ${year}.`;

    sortedArr.map(async (goal) => {
        const deadline = goal.deadline;
        const goalName = goal.goalName;
        const goalDaysUntil = Math.floor((deadline - today) / (1000 * 60 * 60 * 24))

        let goalSection = document.createElement("section");
        let goalHeader = document.createElement("h3");
        let goalDaysUntilHTML = document.createElement("p");

        goalSection.className = "goal-container";
        goalHeader.className = "";
        goalDaysUntilHTML.className = "days-until";

        goalHeader.innerText = `Days until ${goalName} Deadline:`;
        goalDaysUntilHTML.innerText = goalDaysUntil;

        goalSection.appendChild(goalHeader);
        goalSection.appendChild(goalDaysUntilHTML)

        document.getElementById("goals-container").appendChild(goalSection);
    });
}

window.addEventListener("load", ()=>{
    listGoals(goalsArray)
})
