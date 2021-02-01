const Fixture = ({ fixture }) => {
    return (
        <li>
            <span>{fixture.round}</span>
            <span>{fixture.date}</span>
            <span>{fixture.location}</span>
            <span>{fixture.oppostion}</span>
            <ul>
                {fixture.division.map(d => (
                    <li>
                        <span>{d.divisionName}</span>
                        <span>{d.score}</span>
                        <span>{d.result}</span>
                    </li>
                ))}
            </ul>
        </li>
    );
};

export default Fixture;
