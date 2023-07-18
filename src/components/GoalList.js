import GoalItem from "./GoalItem";

function GoalList() {
    return(
        <ul>
            <GoalItem title='first goal item 1'>
                react is nice
            </GoalItem>
            <GoalItem title = 'second goal item 2'>
                and beauty in code
            </GoalItem>
            <GoalItem title = 'third goal item 3'>
                and being functiona is a great choice.
            </GoalItem>
        </ul>
    );
}

export default GoalList;