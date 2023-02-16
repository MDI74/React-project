import {addPost, updateNewPostText} from "../../../redux/Profille-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

//Функция для передачи state
let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

//Создаем контейнерную компоненту с помощью react-redux, передаем туда mapStateToProps и объекты dispatch
export default connect(mapStateToProps, {addPost, updateNewPostText,})(MyPosts);
