import React from "react";
import styles from './Card.module.scss'
class Card extends React.Component<{ message: string }> {
    render() {
        return (
            <div className={styles.card} >
                {this.props.message}
            </div>
        );
    };
}
export default Card;