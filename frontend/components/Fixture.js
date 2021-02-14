const Fixture = ({ fixture }) => {
    return (
		<tr>
			<td align="center">
				{fixture.round}
			</td>
			<td align="center">
				{fixture.date}
			</td>
			<td align="center">
				{fixture.location}
			</td>
			<td>
				{fixture.division.map(d => (
					<div key={d.divisionName} className={`fixtures-table-row ${d.result === 'Win' ? 'won' : ''} ${d.result === 'Loss' ? 'lost' : ''} `}>
						<div style={{width: "30%"}}>
							{d.divisionName}
						</div>
						<div style={{width: "20%"}}>
							<strong>{d.score}</strong>
						</div>
						<div style={{width: "50%"}}>
							{d.opposition}
						</div>
					</div>
				))}
			</td>
		</tr>
    );
};

export default Fixture;
