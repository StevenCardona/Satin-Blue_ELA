interface CustomButton {
    title: string;
    classNames?: string;
}

export const CustomButton = ({ classNames, title }: CustomButton) => {
    return <button className={`btn ${classNames}`}>{title}</button>;
};
