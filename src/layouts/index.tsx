import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
	return (
		<div className={styles.navs}>
			<ul>
				<li>
					<Link to="/">首页</Link>
				</li>
				<li>
					<Link to="/docs">介绍</Link>
				</li>
				<li>
					<a href="https://github.com/JayYuen666">Github</a>
				</li>
			</ul>
			<Outlet />
		</div>
	);
}
