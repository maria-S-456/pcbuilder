import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Case = () => {
	const [parts, setParts] = useState([]);

	useEffect(() =>{ 
		axios
		.get("http://localhost:8000/api/pcbuilder")
		.then((res) => setParts(res.data))
		.catch((err) => console.log(err));
	});

	const showPart = (pt) => {
		if(pt.type === "case")
			return <div>
						<p>Name:{pt.name}</p> 
						<p>Type: {pt.type}</p>
						<p>Case Type: {pt.caseType}</p>
						<p>Brand: {pt.brand}</p>
						<p>Series: {pt.series}</p>
						<p>Color: {pt.color}</p>
						<p>Case Material: {pt.caseMaterial}</p>
						<p>Power Supply Mount: {pt.powerSupplyMount}</p>
						<p>Motherboard Compatibility: {pt.motherboardComp}</p>
						<p>Side Panel: {pt.sidePanel}</p>
						<p>Internal 3.5" Drives: {pt.internal3point5}</p>
						<p>Internal 2.5" Drives: {pt.internal2point5}</p>
						<p>Dimensions: {pt.dimensions}</p>
						
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

export default Case;