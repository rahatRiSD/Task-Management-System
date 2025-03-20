document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText) {
            fetch("/add", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: `task=${encodeURIComponent(taskText)}`
            }).then(() => location.reload());
        }
    });

    taskList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-btn")) {
            const taskId = e.target.parentElement.getAttribute("data-id");
            fetch(`/delete/${taskId}`, { method: "DELETE" })
            .then(response => response.json())
            .then(() => location.reload());
        }
    });
});
