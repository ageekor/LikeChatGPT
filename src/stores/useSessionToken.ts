import { defineStore } from 'pinia'

const useSessionToken = defineStore('sessionToken', {
  state: () => ({
    token: "",
  }),
  actions: {
    setToken(token: string) {
      this.token = token
    },
    removeToken() {
      this.token = ""
    },
  },
})

export default useSessionToken