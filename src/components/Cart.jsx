import { Fragment } from 'react';

import Prueba from './contenido.json';


export default function Example() {
	return (
		<>
				{Prueba.map((item) => (
                    <div class="min-h-[11rem] w-[90%] bg-[#282623] rounded drop-shadow-xl mb-4" key={item.key}>
					<div >
                    <img class="size-8 mt-4 ml-4" src={item.src} alt={item.alt}/>
                    <p class="font-bold text-[1.4rem] leading-[1.4rem] text-white text-pretty ml-5 mt-3">{item.title}</p>
                    <p class="font-medium text-[#808080] h-2 w-[90%] text-[1.05rem] leading-[1.1rem] text-pretty ml-5 mt-4">{item.content}</p>
                </div>

                    </div>
				))}
		</>
	);
}