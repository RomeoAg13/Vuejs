import { ref } from 'vue';

const state = ref({
    type: '',
    content: '',
    title: ''
});

const setType = (type) => {
    state.value.type = type;
};

const setTitle = (title) => {
    state.value.title = title;
};

const setContent = (content) => {
    state.value.content = content;
};

const setNewMessage = (data) => {
    state.value = {
        type: data.type,
        content: data.content,
        title: data.title
    };
};

export {
    state,
    setContent,
    setNewMessage,
    setTitle,
    setType
};
