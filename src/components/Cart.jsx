import { Fragment } from 'react';

import Prueba from './contenido.json';

export default function Example() {
	return (
		<>
			{Prueba.map((item) => (
				<div
					class="mb-4 min-h-[11rem] w-[90%] rounded bg-[#282623] drop-shadow-xl sm:w-[60%]"
					key={item.key}
				>
					<div>
						<img class="ml-4 mt-4 size-8" src={item.src} alt={item.alt} />
						<p class="ml-5 mt-3 text-pretty text-[1.4rem] font-bold leading-[1.4rem] text-white">
							{item.title}
						</p>
						<p class="ml-5 mt-4 h-2 w-[90%] text-pretty text-[1.05rem] font-medium leading-[1.1rem] text-[#808080]">
							{item.content}
						</p>
					</div>
				</div>
			))}
		</>
	);
}
