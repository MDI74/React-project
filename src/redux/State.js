let store ={
    _state: {
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
            ],
            messagesData:[
                {id:1, message:'Hello, how are you?'},
                {id:2, message:'efw'},
                {id:3, message:'gtrg'},
            ],
            newMessageText: ''
        },
        navigation:{
            friendsData: [
                {id:1,name:'Dmitriy',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
                {id:2,name:'Sergey',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
                {id:3,name:'Katy',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
                {id:4,name:'Andrew',avatar:'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'}
            ]
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){
        console.log("State changes")
    },
    addPost(){
        if (this._state.profile.newPostText){
            let newPost = {
                id: 1,
                //получаем значение текста из state который сам обновляется
                message: this._state.profile.newPostText,
                likescount: 0
            };
            this._state.profile.postsData.push(newPost);
            this._state.profile.newPostText = '';
        }
       this._callSubscriber(this._state);
    },
    updateNewPostText(newText){
        this._state.profile.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage () {
        if (this._state.dialogs.newMessageText){
            let newMessage = {
                id: 1,
                //получаем значение текста из state который обновляется при вводе любого символа в чате
                message: this._state.dialogs.newMessageText
            };
            this._state.dialogs.messagesData.push(newMessage);
            this._state.dialogs.newMessageText = '';
        }
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText){
        this._state.dialogs.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer){
        //Перерисовка страницы
        this._callSubscriber = observer; // Наблюдатель паттерн
    }
}

export default store;