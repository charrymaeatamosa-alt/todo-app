document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ Todo App Initialized");

    // Confirm before deleting a task
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            const confirmed = confirm("Are you sure you want to delete this task?");
            if (!confirmed) {
                event.preventDefault();
            }
        });
    });
});
