// Toast function
function toast({ title = "", message = "", type = "info", duration = "" }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);

    // Remove toast when clicked
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };

    const icons = {
      success: "fas fa-check-circle",
      error: "fas fa-exclamation-circle",
    };
    const icon = icons[type];

    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease 2s, linear 1s forwards`;

    toast.innerHTML = `
      <div class="toast__icon">
        <i class=${icon}></i>
      </div>
      <div class="toast__body">
          <h3 class="toast__title">${title}</h3>
          <p class="toast__msg">${message}</p>
      </div>
      <div class="toast__close">
          <i class="fas fa-times"></i>
      </div>
    `;
    console.log(toast);
    main.appendChild(toast);
  }
}

export const showSuccessToast = (mes) => {
  toast({
    title: "Thành công!",
    message: mes,
    type: "success",
    duration: 2000,
  });
};

export const showErrorToast = (mes) => {
  toast({
    title: "Thất bại!",
    message: mes,
    type: "error",
    duration: 2000,
  });
};
