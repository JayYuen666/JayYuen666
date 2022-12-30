import { Link, Navigate, Outlet, history } from 'umi';
import classNames from 'classnames/bind';
import logo from "../assets/logo.svg";
import github from "../assets/github.svg"
import styles from './index.less';
let cx = classNames.bind(styles);
export default function Layouts() {
	return (
		<div className={cx("layout")}>
			<header className={cx("layout-header")}>
				<div className={cx("layout-header-inner")}>
					<div className={cx("layout-header-left")} onClick={() => history.push('/')}>
						<img src={logo} />
					</div>
					<div className={cx("layout-header-nav")}>
						<div onClick={() => history.push("/components")} className={cx("layout-header-nav_link")}>
							基础组件
						</div>
						<div className={cx("layout-header-nav_link")}>
						<img src={github} className={cx("github")} onClick={() => window.open("https://github.com/JayYuen666/yuen", "_blank")} />
						</div>
					</div>
				</div>
			</header>
			<Outlet />
			<footer style={{ textAlign: 'center' }}>JayYuen ©2022</footer>
		</div>
	);
}
