const exams = [
  { name: "Luyện tập", status: "free" },
  { name: "Giữa kỳ", status: "time-bound" },
  { name: "Cuối kỳ", status: "time-bound" },
  { name: "Thi thử", status: "free" }
];

const examList = document.getElementById("examList");
const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");

function renderExams() {
  examList.innerHTML = "";
  const searchTerm = searchInput.value.toLowerCase();
  const selectedStatus = statusFilter.value;

  exams.filter(exam => {
    const nameMatches = exam.name.toLowerCase().includes(searchTerm);
    const statusMatches = selectedStatus === "all" || exam.status === selectedStatus;
    return nameMatches && statusMatches;
  }).forEach(exam => {
    const li = document.createElement("li");
    li.textContent = exam.name;
    examList.appendChild(li);
  });
}

searchInput.addEventListener("input", renderExams);
statusFilter.addEventListener("change", renderExams);

renderExams();
