import LocalStorage from "@/shared/consts/localStorage";

const profileKeys: string[] = [LocalStorage.ACCESS_TOKEN, LocalStorage.REFRESH_TOKEN, LocalStorage.USER];

export function clearProfileStorage() {
  Object.entries(localStorage).forEach((key) => {
    if (profileKeys.includes(key[0])) {
      localStorage.removeItem(key[0]);
    }
  });
}
