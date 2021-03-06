import React, {Component} from 'react';

class FriendItem extends Component {
    render() {
        return (
            <div>
                <p style={style}>
                    Name: {this.props.member.name}<br></br>
                    Email: {this.props.member.email}<br></br>
                    Phone Number: {this.props.member.phone}
                </p>
            </div>
        );
    }
}

const style = {
    backgroundColor:  '#fff' ,
    color: '#4b2e83',
    border: "none",
    borderTop: "dotted #4b2e83 1px",
    paddingTop: "5px",
    fontSize: "12px",
    width: "100%",
    textAlign: "center",

}

export default FriendItem;