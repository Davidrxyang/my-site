const ArrayPage: React.FC = () => {
    const names: string[] = ["David", "John", "George"];

    return ( 
        <div>
            {names.map((data, index) => (
            <div>
                <p>{data}</p>
                <h1>this is the name of a person</h1>
            </div>
        ))}
        </div>
    );
};

export default ArrayPage;