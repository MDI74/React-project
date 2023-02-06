import {addPostAС, updateNewPostAС} from "../../../redux/Profille-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

//Функция для передачи state
let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

//Функция для передачи dispatch
let mapDispatchToProps = (dispatch) => {
    return {
        //Функция для добавления постов на страницу profile
        addPost: () => {
            dispatch(addPostAС());
        },
        //Функция для обновления textarea при вводе текста
        updateNewPostText: (text) => {
            dispatch(updateNewPostAС(text));
        }
    }
}

//Создаем контейнерную компоненту с помощью react-redux
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;