import axios from 'axios';

const state = {
    posts: [],
};

const getters = {
    allPosts: (stateNew: any) => stateNew.posts,
};

const actions = {
    async fetchPosts({ commit }: any ) {
        const response = await axios.get(
            '/api/posts.json',
        );

        commit('setPosts', response.data);
    },
};

const mutations = {
    setPosts: (stateNew: any, posts: any) => (stateNew.posts = posts),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
