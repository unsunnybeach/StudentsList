import { useState } from "react";

export const AddStudent = ({ onAdd }) => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [grades, setGrades] = useState("");

    const onAddClickHandler = () => {
        onAdd(name, surname, grades);
        setName("");
        setSurname("");
        setGrades("");
    };

    return (
    <div>
        <label>Name</label> <br />
        <input value={name} onChange={(ev) => setName(ev.target.value)} />
        <br /> <br />

        <label>Surname</label> <br />
        <input value={surname} onChange={(ev) => setSurname(ev.target.value)} />
        <br /> <br />

        <label>Grades</label> <br />
        <input value={grades} onChange={(ev) => setGrades(ev.target.value)} />
        <br /> <br />

        <button onClick={onAddClickHandler}>Add</button>

    </div>
    );
  };