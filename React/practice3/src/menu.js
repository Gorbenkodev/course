import { data } from './data'
import { MenuItem } from './menuItem';


function Menu() {
	const links = data.map(link => (
			<MenuItem title={link.title} link={link.link}/>
	));
	console.log(links);
 
	return (
		<div className='wrapper'>
			{links}
		</div>
	)
};
 
export default Menu;
