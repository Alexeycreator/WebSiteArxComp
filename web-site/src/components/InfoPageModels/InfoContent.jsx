import React, { useEffect, useState } from "react";
import styles from "./InfoContent.module.css";
import axios from "axios";
import imgUrl from "../img/Фото1.jpg"

const InfoContent = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        loadUsers();
    }, [])
    const loadUsers = async () => {
        const res = await axios.get("http://localhost:3001/Users")
        setUsers(res.data.reverse())
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.mtd - 3}>
                    <div className={styles.tableResponsive}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Фамилия И.О.</th>
                                    <th>Возраст</th>
                                    <th>Место обучения</th>
                                    <th>Фото</th>
                                    <th>Телефон</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.fullName}</td>
                                        <td>{item.age}</td>
                                        <td>{item.study}</td>
                                        <td><img src={imgUrl} width={165} height={230}></img></td>
                                        <td>{item.phoneNumber}</td>
                                        <td>{item.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default InfoContent;