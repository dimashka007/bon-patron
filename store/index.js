import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      categories: [],
      posts: [],
      suggestedPosts: [],
      websiteData: []
    },
    getters: {
      categories(state) {
        return state.categories
      },
      posts(state) {
        return state.posts
      },
      suggestedPosts(state) {
        return state.suggestedPosts
      },
      websiteDataMain(state) {
        for(let i = 0; i < state.websiteData.length; i++) {
          if( state.websiteData[i].type == 'mainText') {
            return state.websiteData[i].text
          }
        }
      },
      websiteDataSub(state) {
        for(let i = 0; i < state.websiteData.length; i++) {
          if( state.websiteData[i].type == 'subText') {
            return state.websiteData[i].text
          }
        }
      }
    },
    mutations: {
      setCategories(state, categories) {
        state.categories = [];
          for (let i = 0; i< categories.length; i++){
            state.categories.push(categories[i].category)
            }
      },
      setSuggested(state, suggestedPosts) {
        state.suggestedPosts = suggestedPosts
      },
      setPosts(state, posts) {
        state.posts = posts
      },
      setData(state, data) {
        state.websiteData = data
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        vuexContext.dispatch('getCategories');
        vuexContext.dispatch('getPosts')
        vuexContext.dispatch('getData')
      },
      getData(vuexContext) {
        return axios
        .get("/api/data")
        .then(res => {
          vuexContext.commit('setData', res.data)
        })
        .catch(e => (e));
      },
      updateText(vuexContext, texts) {
        return axios
        .put(
          "/api/data", texts
        )
        .then(res => {
          vuexContext.dispatch('getData')
        })
      },
      addCategory(vuexContext, category) {
        return axios
        .post(
          "/api/categories", {categoryToInsert: category}
        )
        .then(res => {
          vuexContext.dispatch('getCategories')
        })
        .catch(e => (e));
      },
      getCategories(vuexContext) {
        return axios
        .get("/api/categories")
        .then(res => {
          vuexContext.commit('setCategories', res.data)
        })
        .catch(e => (e));
      },
      deleteCategory(vuexContext, category) {
        return axios
        .delete(
          "/api/categories", {data: {categoryToDelete: category}}
        )
        .then(res => {
          vuexContext.dispatch('getCategories')
        })
        .catch(e => (e));
      },
      getSuggest(vuexContext) {
        return axios
        .get("/api/suggested")
        .then(res => {
          vuexContext.commit('setSuggested', res.data)
        })
        .catch(e => (e));
      },
      addSuggest(vuexContext, suggestedPost) {
        return axios
        .post('/api/suggested', {postToSuggest: suggestedPost})
        .then(res => {
          vuexContext.dispatch('getSuggest')
        })
        .catch(e => (e));
      },
      deleteSuggest(vuexContext, suggestedPost) {
        return axios
        .delete(
          "/api/suggested", {data: {id: suggestedPost}}
        )
        .then(res => {
          vuexContext.dispatch('getSuggest')
        })
        .catch(e => (e));
      },
      getPosts(vuexContext) {
        return axios
        .get("/api/posts")
        .then(res => {
          vuexContext.commit('setPosts', res.data)
        })
        .catch(e => (e));
      },
      addPost(vuexContext, post) {
        return axios
        .post('/api/posts', post)
        .then(res => {
          // vuexContext.dispatch('getSuggest')
        })
        .catch(e => (e));
      },
      deletePost(vuexContext, suggestedPost) {
        return axios
        .delete(
          "/api/posts", {data: {id: suggestedPost}}
        )
        .then(res => {
          vuexContext.dispatch('getPosts')
        })
        .catch(e => (e));
      },
      updatePost(vuexContext, updatedPost) {
        return axios
        .put(
          "/api/posts", updatedPost
        )
        .then(res => {
          vuexContext.dispatch('getPosts')
        })
        .catch(e => (e));
      },
      filterPosts(vuexContext, category) {
        return axios
        .get(`/api/posts?category=${category}`)
        .then(res => {
          vuexContext.commit('setPosts', res.data)
        })
        .catch(e => (e));
      }
    }
  })
};

export default createStore