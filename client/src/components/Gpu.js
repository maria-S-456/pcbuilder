import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Gpu = () => {
	const [parts, setParts] = useState([]);

	useEffect(() =>{ 
		axios
		.get("http://localhost:8000/api/pcbuilder")
		.then((res) => setParts(res.data))
		.catch((err) => console.log(err));
	});

	const showPart = (pt) => {
		if(pt.type === "GPU")
			return <div>
						<p>Name:{pt.name}</p> 
						<p>Type: {pt.type}</p>
						<p>Brand: {pt.brand}</p>
						<p>Interface: {pt.interface}</p>
						<p>Chipset: {pt.chipset}</p>
						<p>Effective Memory: {pt.effectiveMemory}</p>
					</div>
		
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

export default Gpu;