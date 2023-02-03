import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/Profille-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

//Функция для передачи state
let mapStateToProps = (state) => {
    return {
        postsData: state.profile.postsData,
        newPostText: state.profile.newPostText
    }
}

//Функция для передачи dispatch
let mapDispatchToProps = (dispatch) => {
    return {
        //Функция для добавления постов на страницу profile
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        //Функция для обновления textarea при вводе текста
        updateNewPostText: (text) => {
            dispatch(updateNewPostActionCreator(text));
        }
    }
}

//Создаем контейнерную компоненту с помощью react-redux
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;