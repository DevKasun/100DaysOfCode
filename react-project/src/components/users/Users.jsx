const Users = props => {

    const usersList = props.userData.map((user) => {
        return (
            <li>
                <p>{user.name}</p>
                <span>{user.job}</span>
            </li>
        );
    });

    return (
        <ul>{usersList}</ul>
    )
}

export default Users;