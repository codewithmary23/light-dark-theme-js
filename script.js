let darkTheme = localStorage.getItem("darkTheme");

const toggleButton = document.querySelector("#checkbox");

const toggleTheme = () => {
  darkTheme = localStorage.getItem("darkTheme");

  if (darkTheme !== "enabled") {
    localStorage.setItem("darkTheme", "enabled");
    document.body.classList.add("dark-theme");
    toggleButton.checked = true;
  } else {
    localStorage.setItem("darkTheme", null);
    document.body.classList.remove("dark-theme");
    toggleButton.checked = false;
  }
};

if (darkTheme === "enabled") {
  document.body.classList.add("dark-theme");
  toggleButton.checked = true;
  toggleButton.style.setProperty("--duration", "0s");
}

toggleButton.addEventListener("click", toggleTheme);
