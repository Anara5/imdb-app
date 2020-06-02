import React from "react";
import Card from './Data/imdb.json';

const Card = ([picture, name, popularity, action]) => {

return <table>
<tr key={actor}>
<th>Picture</th>
<td><img src={pictureUrl} alt={picture} /></td>

<th>Name</th>
<td>{name}</td>

<th>Popularity</th>
<td>{popularity}</td>

<th>action</th>
<td>{action}</td>
</tr>
</table>
}
export default Card;