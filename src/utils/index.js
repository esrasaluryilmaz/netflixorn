import axios from "axios";

//Api'key gibi unique degerler ile proje gelistirirken bu degerleri gerekli sekilde muhafaza etmezsek herkes buna erisebilir. Bunu ise env dosyasinda tanimlayarak yapariz.

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
});

export default api;
