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

    // Make alert messages dismissible and pause auto-hide on hover
    document.querySelectorAll(".alert").forEach(alertEl => {
        alertEl.setAttribute("role", "status");
        alertEl.setAttribute("tabindex", "0");

        // click to dismiss
        alertEl.addEventListener("click", () => alertEl.remove());

        // pause fade-out on hover if inline script initiates it
        let isHovered = false;
        alertEl.addEventListener("mouseenter", () => { isHovered = true; alertEl.style.opacity = "1"; });
        alertEl.addEventListener("mouseleave", () => { isHovered = false; });

        // safety auto-remove after 8s if still present
        setTimeout(() => {
            if (!isHovered && document.body.contains(alertEl)) {
                alertEl.style.opacity = "0";
                setTimeout(() => alertEl.remove(), 500);
            }
        }, 8000);
    });

    // Focus outline only when navigating with keyboard
    function handleFirstTab(e) {
        if (e.key === "Tab") {
            document.documentElement.classList.add("user-is-tabbing");
            window.removeEventListener("keydown", handleFirstTab);
            window.addEventListener("mousedown", handleMouseDownOnce);
        }
    }
    function handleMouseDownOnce() {
        document.documentElement.classList.remove("user-is-tabbing");
        window.removeEventListener("mousedown", handleMouseDownOnce);
        window.addEventListener("keydown", handleFirstTab);
    }
    window.addEventListener("keydown", handleFirstTab);
});