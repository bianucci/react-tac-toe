import React from "react";

export class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={this.props.onClickSquare}>
                {this.props.value}
            </button>
        );
    }
}
