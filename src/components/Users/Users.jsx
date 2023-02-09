import React from "react";
import "./Users.scss";
import User from "./User/User";

const Users = (props) => {

    let usersElement = props.users.map(user => <User addFriend={props.addFriend}
                                                          delFriend={props.delFriend}
                                                          key={user.id} id={user.id} follow={user.followed}
                                                          name={user.name}
                                                          status={user.status}
        // city={user.location.city} country={user.location.country}
                                                          photo={user.photos.small}/>);

    //Считает количество страниц
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)

    }
    //Создаем карусель массива страниц
    let startPage = (props.currentPage - 5) < 0 ? 0 : props.currentPage - 5;
    let endPage = props.currentPage + 4;
    let currentPages = pages.slice(startPage, endPage);

    //Создаем элемент со всеми страницами
    let pagesElement = currentPages.map(page => <span
        className={props.currentPage === page ? "pagination-user__page active" : "pagination-user__page"}
        onClick={(e) => props.onPageChanged(page)}>{page}</span>)

    //Кнопки для перелистывания страниц вперед, назад
    let nextPage = <span className="pagination-user__page"
                         onClick={(e) => props.onPageChanged(props.currentPage >= props.totalUsersCount ? props.currentPage : props.currentPage + 1)}> 🠆 </span>;
    let backPage = <span className="pagination-user__page"
                         onClick={(e) => props.onPageChanged(props.currentPage <= 1 ? props.currentPage : props.currentPage - 1)}> 🠄 </span>;

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
export default Users;