import React from "react";
import "./Users.scss";
import User from "./User/User";
import axios from "axios";

class Users extends React.Component {

    //Вызывается после рендеринга компонента
    componentDidMount() {
        //Подгружаем данные из api
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
        }
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let usersElement = this.props.users.map(user => <User addFriend={this.props.addFriend}
                                                              delFriend={this.props.delFriend}
                                                              key={user.id} id={user.id} follow={user.followed}
                                                              name={user.name}
                                                              status={user.status}
            // city={user.location.city} country={user.location.country}
                                                              photo={user.photos.small}/>);

        //Считает количество страниц
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)

        }

        //Создаем карусель массива страниц
        let startPage = (this.props.currentPage - 5) < 0 ? 0 : this.props.currentPage - 5;
        let endPage = this.props.currentPage + 4;
        let currentPages = pages.slice(startPage, endPage);

        //Создаем элемент со всеми страницами
        let pagesElement = currentPages.map(page => <span
            className={this.props.currentPage === page ? "pagination-user__page active" : "pagination-user__page"}
            onClick={(e) => this.onPageChanged(page)}>{page}</span>)

        let nextPage = <span className="pagination-user__page"
                             onClick={(e) => this.onPageChanged(this.props.currentPage >= this.props.totalUsersCount ? this.props.currentPage : this.props.currentPage + 1)}> 🠆 </span>;
        let backPage = <span className="pagination-user__page"
                             onClick={(e) => this.onPageChanged(this.props.currentPage <= 1 ? this.props.currentPage : this.props.currentPage - 1)}> 🠄 </span>;

        pagesElement = [...pagesElement, nextPage];

        pagesElement = [backPage, ...pagesElement];
        return (
            <section className="users">
                <div className="users__container">
                    <div className="users__content">
                        <div className="user__topmenu">
                            <p className="users__title">Найти друзей</p>
                        </div>
                        <div className="users__item item-user">
                            <div className="item-user__content">
                                {usersElement}
                            </div>
                        </div>
                        <div className={"users__pagination pagination-user"}>
                            <div className="pagination-user__content">
                                {pagesElement}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Users;