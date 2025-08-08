import { Link } from "react-router-dom";

function Button({ children, to, onClick, StyleType }) {
  const styles = {
    base: "rounded-md bg-green-500 px-3 py-2 text-white duration-500 hover:bg-white hover:text-green-500 ",
    login:
      "rounded-md bg-green-500 px-3 py-2 text-white font-bold duration-500 hover:bg-white hover:text-green-500 md:ml-8",
    submit:
      "rounded-md bg-green-500 font-bold px-3 py-2 text-white duration-500 hover:bg-white hover:text-green-500 ",
  };

  if (to)
    return (
      <Link to={to} className={styles[StyleType]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} className={styles[StyleType]}>
        {children}
      </button>
    );
  return <button className={styles[StyleType]}>{children}</button>;
}
export default Button;
