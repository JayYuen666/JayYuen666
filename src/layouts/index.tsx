import { Link, Outlet } from 'umi';
import { ConfigProvider, Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';
import styles from './index.less';

dayjs.locale('zh-cn');
const { Header, Content, Footer } = Layout;
const items: MenuProps['items'] = [
	{
		label: (<Link to="/">首页</Link>),
		key: 'index',
	},
	{
		label: (<Link to="/docs">介绍</Link>),
		key: 'doc',
	},
];
export default function Layouts() {
	return (
		<ConfigProvider locale={zhCN}>
			<Layout className="layout" style={{ minHeight: "100vh" }}>
				<Header>
					<Menu
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={["index"]}
						items={items}
					/>
				</Header>
				<Content style={{ flex: 1 }}>
					<Outlet />
				</Content>
				<Footer style={{ textAlign: 'center' }}>JayYuen ©2022</Footer>
			</Layout>
		</ConfigProvider>
	);
}
