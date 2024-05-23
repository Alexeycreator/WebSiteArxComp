import React, { useState, useEffect } from "react";
import styles from "./PersonalAchievContent.module.css";
import SliderBar from "./SliderBar";
import axios from "axios";

const PersonalAchievContent = () => {
    const [personalAchievs, setPersonalAchievs] = useState([])
    useEffect(() => {
        loadPersonalAchievs();
    }, [])
    const loadPersonalAchievs = async () => {
        const res = await axios.get("http://localhost:3001/PersonalAchiev")
        setPersonalAchievs(res.data.reverse())
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.mtd - 3}>
                    <div className={styles.tableResponsive}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Название</th>
                                    <th>Описание</th>
                                    <th>Фото</th>
                                </tr>
                            </thead>
                            <tbody>
                                {personalAchievs.map((achiev, index) => (
                                    <tr key={index}>
                                        <td>{achiev.name}</td>
                                        <td>{achiev.description}</td>
                                        <td><SliderBar /></td>
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
export default PersonalAchievContent;