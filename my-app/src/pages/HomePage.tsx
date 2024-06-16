import React from 'react';
import { useNavigate } from 'react-router-dom';


const HomePage: React.FC = () => {
    const name: string = "Ruoxing David Yang";

    const navigate = useNavigate();

    const handleClickArrayPage = () => {
       navigate('/array');
    };

    const handleClickTodoPage = () => {
        navigate('/todo');
    };

    return (
        <div>
            <h1>{name}</h1>
            <button onClick = {handleClickArrayPage}> Go to Array Page </button>
            <button onClick = {handleClickTodoPage}> Go to Todo Page </button>
        </div>
    );
};

export default HomePage;