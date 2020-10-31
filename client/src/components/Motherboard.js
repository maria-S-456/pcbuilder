import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Motherboard = () => {
	const [parts, setParts] = useState([]);

	useEffect(() =>{ 
		axios
		.get("http://localhost:8000/api/pcbuilder")
		.then((res) => setParts(res.data))
		.catch((err) => console.log(err));
	});

	const showPart = (pt) => {
		if(pt.type === "motherboard")
			return <p>Name:{pt.name}, Type: {pt.type}</p>
		
	}

	return(
		<div>

			{			
				parts.map(part => (
				<div key={part.id}>			
					
					{showPart(part)}									
				</div>						
								
			))
			}
		</div>
	)
}

export default Motherboard;