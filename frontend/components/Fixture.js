const Fixture = ({ fixture }) => {
    return (
        <li>
            <span>{fixture.round}</span>
            <span>{fixture.date}</span>
            <span>{fixture.location}</span>
            <ul>
                {fixture.division.map(d => (
                    <li key={d.divisionName}>
                        <span>{d.divisionName}</span>
                        <span>{d.score}</span>
                        <span>{d.result}</span>
						<span>{d.opposition}</span>
                    </li>
                ))}
            </ul>
        </li>
    );
};

export default Fixture;
