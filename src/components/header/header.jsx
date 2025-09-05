import headerCSS from './headerCSS.module.css';
import { HeaderList } from './headerList';

const Header = () => {
  return (
    <header className={headerCSS['site-header']}>
      <div className={headerCSS.wrapper + ' ' + headerCSS['site-header__wrapper']}>
        <div style={{ flex: 1 }}>
          <h1 >HFW World</h1>
        </div>
        <nav>
          <HeaderList />
        </nav>
      </div>
    </header>
  );
}

export default Header;