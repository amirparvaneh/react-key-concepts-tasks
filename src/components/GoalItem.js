function GoalItem (props) {
    return(
        <li>
            <h2>
                {props.Title}
            </h2>
            <p>
                {props.Children}
            </p>
        </li>
    );
}

export default GoalItem;