import headerCSS from './headerCSS.module.css';
import { HeaderList } from './headerList';

const Header = () => {

    return (
        <header className={headerCSS['site-header']}>
            <div className={headerCSS.wrapper + ' ' + headerCSS['site-header__wrapper']}>
                <div className={headerCSS['site-header__start']}>
                    <a href="/info" className={headerCSS.brand}>HF-World</a>
                </div>
                <div className={headerCSS['site-header__end']}>
                    <nav className={headerCSS.nav}>
                        <HeaderList />
                        
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;