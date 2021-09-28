import React from "react";

export class Sign extends React.Component{
    render() {
        const {style} = this.props;
        return(
            <p style={style.style.sign}>Tg: romchikae</p>
        )
    }
}