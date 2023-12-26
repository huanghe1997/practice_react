import { Button } from 'antd';
import style from './style.module.less';
function Home() {
  return (
    <div>
      <div className={style.container}></div>
      <Button type="primary">点击</Button>
      <b>黄河</b>
    </div>
  );
}
export default Home;
