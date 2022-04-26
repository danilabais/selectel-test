import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    posts: [],
    authors: [],
  },
  mutations: {
    SET_POSTS(state, payload) {
      Object.freeze(payload);
      state.posts = payload;
    },
    SET_AUTHORS(state, payload) {
      Object.freeze(payload);
      state.authors = payload;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      let posts = (await axios.get("https://jsonplaceholder.typicode.com/posts")).data;
      //Уникализирую каждого пользователя, ибо один человек мог написать несколько постов
      let authorsID = Array.from(new Set(posts.map((el) => el.userId)));
      const Promises = authorsID.map(async (el) =>
        axios.get(`https://jsonplaceholder.typicode.com/users?id=${el}`)
      );
      const authors = (await Promise.all(Promises)).map((el) => el.data[0]);
      const names = authors.map((el) => el.name);
      //Запишу массив с именами для selectа
      commit("SET_AUTHORS", names);

      const obj = Object.fromEntries(authors.map((el) => [el.id, el]));
      
      //фунция рандомная дата, принимает отрезок и возращает время
      const randomDate = (start, end) =>
        new Date(
          start.getTime() + Math.random() * (end.getTime() - start.getTime())
        );

      //Создание глобального массива для постов с дополнительными нужными полями у обьектов
      posts = posts.map((el) =>
        Object.assign(el, {
          userName: obj[el.userId].name,
          date: randomDate(new Date(2008, 9, 8), new Date()),
        })
      );
      commit("SET_POSTS", posts);
    },
  },
  getters: {
    posts: (state) => state.posts,
    authors: (state) => state.authors,
  },
});
export default store;
