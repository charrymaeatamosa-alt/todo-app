document.addEventListener("DOMContentLoaded", function() {
    console.log("Todo App loaded ✅");

    // Example: confirm before deleting a task
    let deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach(button => {
        button.addEventListener("click", function() {
            if (!confirm("Are you sure you want to delete this task?")) {
                event.preventDefault();
            }
        });
    });
});