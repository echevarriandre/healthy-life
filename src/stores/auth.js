import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(localStorage.getItem("user"));

  function login(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (password === "password") {
          user.value = { username: username };
          localStorage.setItem("user", JSON.stringify(user));
          resolve();
        }
        reject();
      }, 700);
    });
  }

  function logout() {
    user.value = null;
    localStorage.removeItem("user");
  }

  return { user, login, logout };
});
