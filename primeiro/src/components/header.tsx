import './header.css';

interface HeaderProps {
    title?: string;
}

export default function Header({
    title }: HeaderProps) {
    return (
        <header className='header'>
            <div>
                <h1 className='title'>{title}</h1>
            </div>
        </header>
    );
}
