import React from "react";
const styles = require("./Container.module.scss");

interface IContainerProps {
  children?: React.ReactNode;
}

const Container: React.FC<IContainerProps> = ({
  children
}: IContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
