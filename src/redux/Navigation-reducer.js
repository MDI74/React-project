let initialState = {
    friends: [
        {id: 1, name: 'Dmitriy', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
        {id: 2, name: 'Sergey', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
        {id: 3, name: 'Katy', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
        {id: 4, name: 'Andrew', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
    ]
}
const navigationReducer = (state = initialState, action) => {
    return state;
}

export default navigationReducer;