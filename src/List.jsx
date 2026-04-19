import { ListItem } from './ListItem';
export function List(props) {
    return (
        <main>
            <ul>
                {props.items.map((item) => (
                   <li> <ListItem item={item} key={item.id}/> </li>
                ))}
                
            </ul>
        </main>
    )
}