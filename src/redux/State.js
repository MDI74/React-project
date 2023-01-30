import {rerenderEntireTree} from "../render";

let state ={
    profile:{
        postsData: [
            {id:1, message:'hello', likescount:12},
            {id:2, message:'ko', likescount:4},
            {id:3, message:'second', likescount:11},
        ],
        newPostText: ''
    },
    dialogs:{
        dialogsData: [
            {id:1,name:'Dmitriy',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:2,name:'Sergey',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:3,name:'Katy',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:4,name:'Andrew',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:1,name:'Dmitriy',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:2,name:'Sergey',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:3,name:'Katy',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:4,name:'Andrew',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:1,name:'Dmitriy',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:2,name:'Sergey',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:3,name:'Katy',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:4,name:'Andrew',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:1,name:'Dmitriy',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:2,name:'Sergey',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:3,name:'Katy',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:4,name:'Andrew',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:1,name:'Dmitriy',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:2,name:'Sergey',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:3,name:'Katy',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:4,name:'Andrew',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:1,name:'Dmitriy',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:2,name:'Sergey',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:3,name:'Katy',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:4,name:'Andrew',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:1,name:'Dmitriy',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:2,name:'Sergey',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:3,name:'Katy',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:4,name:'Andrew',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:1,name:'Dmitriy',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:2,name:'Sergey',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:3,name:'Katy',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:4,name:'Andrew',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
        ],
        messagesData:[
            {id:1, message:'Hello, how are you?'},
            {id:2, message:'efw'},
            {id:3, message:'gtrg'},
            {id:3, message:'gtrg'},
            {id:3, message:'gtrg'},
            {id:3, message:'gtrg'},
            {id:3, message:'gtrg'},
            {id:3, message:'gtrg'},
            {id:3, message:'gtrg'},
            {id:3, message:'gtrg'},
            {id:3, message:'gtrg'},
            {id:3, message:'gtrg'},
            {id:3, message:'gtrg'},
            {id:3, message:'gtrg'},
            {id:3, message:'gtrg'},
            {id:3, message:'gtrg'},
            {id:3, message:'gtrg'},
            {id:3, message:'gtrg'},
            {id:3, message:'gtrg'},
            {id:3, message:'gtrg'},
            {id:3, message:'gtrg'},
            {id:3, message:'gtrg'},
            {id:3, message:'gtrg'},
            {id:3, message:'gtrg'},
            {id:3, message:'gtrg'},
            {id:3, message:'gtrg'},
        ]
    },
    navigation:{
        friendsData: [
            {id:1,name:'Dmitriy',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:2,name:'Sergey',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:3,name:'Katy',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id:4,name:'Andrew',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'}
        ]
    }
}

export const addPost = () =>{
    let newPost = {
        id: 1,
        //получаем значение текста из state который сам обновляется
        message: state.profile.newPostText,
        likescount: 0
    };
    state.profile.postsData.push(newPost);
    state.profile.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) =>{
    state.profile.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;