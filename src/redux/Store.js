// import profileReducer from "./Profille-reducer";
// import dialogsReducer from "./Dialogs-reducer";
// import navigationReducer from "./Navigation-reducer";
//
// let store = {
//     _state: {
//         profile: {
//             posts: [
//                 {id: 1, message: 'Hello', likes_count: 12},
//                 {id: 2, message: 'ko', likes_count: 4},
//                 {id: 3, message: 'second', likes_count: 11},
//             ],
//             newPostText: '',
//         },
//         dialogs: {
//             dialogsData: [
//                 {id: 1, name: 'Dmitriy', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
//                 {id: 2, name: 'Sergey', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
//                 {id: 3, name: 'Katy', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
//                 {id: 4, name: 'Andrew', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
//                 {id: 1, name: 'Dmitriy', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
//                 {id: 2, name: 'Sergey', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
//                 {id: 3, name: 'Katy', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
//                 {id: 3, name: 'Katy', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
//                 {id: 4, name: 'Andrew', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
//                 {id: 1, name: 'Dmitriy', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
//                 {id: 2, name: 'Sergey', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
//                 {id: 3, name: 'Katy', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
//                 {id: 1, name: 'Dmitriy', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
//                 {id: 2, name: 'Sergey', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
//                 {id: 3, name: 'Katy', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
//             ],
//             messagesData: [
//                 {id: 1, message: 'Hello, how are you?'},
//                 {id: 2, message: 'br!'},
//                 {id: 3, message: 'HAH!'},
//             ],
//             newMessageText: '',
//         },
//         navigation: {
//             friendsData: [
//                 {id: 1, name: 'Dmitriy', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
//                 {id: 2, name: 'Sergey', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
//                 {id: 3, name: 'Katy', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
//                 {id: 4, name: 'Andrew', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
//             ]
//         }
//     },
//     _callSubscriber() {
//         console.log('State changes');
//     },
//
//     //?????????????? ?????? ?????????????????? state
//     getState() {
//         return this._state;
//     },
//     //?????????????? ?????? ?????????????????????? ????????????????
//     subscribe(observer) {
//         this._callSubscriber = observer; // ?????????????????????? ??????????????
//     },
//     //?????????????? ?????????????? ?????????????????? action ?? ???????????????? ?????????????????????? ??????????????
//     dispatch(action) {
//         this._state.profile = profileReducer(this._state.profile, action);
//         this._state.dialogs = dialogsReducer(this._state.dialogs, action);
//         this._state.navigation = navigationReducer(this._state.navigation, action);
//         this._callSubscriber(this._state);
//     },
// }
//
// export default store;