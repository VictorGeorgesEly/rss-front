import React from 'react';
import axios from 'axios';
import * as userData from "../data/user";

class About extends React.Component {
    state = {
        users: [],
    };

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        userData.getUsers().then(res => {
            const users = res.data;
            this.setState({users});
        });
    }

    // componentDidMount() {
    //     axios.get(`http://localhost:8080/user`)
    //         .then(res => {
    //             const users = res.data;
    //             this.setState({users});
    //         });
    // }

    render(): React.ReactNode {
        return (
            <div>
                <h1>About</h1>
                {this.state.users.map(e => {
                    return (
                        <ul key={e.id}>
                            <li>
                                {e.username}
                            </li>
                            <li>
                                {e.firstName}
                            </li>
                            <li>
                                {e.lastName}
                            </li>
                        </ul>
                    );
                })}
            </div>
        );
    }
}

export default About;