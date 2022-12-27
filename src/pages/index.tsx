import react from '../assets/react.svg';

export default function HomePage() {
	return (
		<div>
			<h2>Yay! Welcome to JayYuen!</h2>
			<p>
				<img src={react} width={200} />
			</p>
			<p>
				这是一个实验版的<code>react</code>项目
			</p>
		</div>
	);
}
