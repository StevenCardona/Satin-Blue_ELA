import './styles/styles.css';

interface CustomButton {
    title: string;
    classNames?: string;
}

export const CustomButton = ({ classNames, title }: CustomButton) => {
    return <button className={` custom-button btn ${classNames}`}>{title}</button>;
};
