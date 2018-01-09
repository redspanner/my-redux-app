export const setState = (obj) => ({
  "type":"SET_STATE",
  "value":obj,
})

export const setPic = (url) => ({
  "type":"SET_PIC",
  "url":url,
})

export const setEmail = (email) => ({
  "type":"SET_EMAIL",
  "email":email,
})
