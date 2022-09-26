
export const MenuItem = (props) => {
  const {title, link} = props
	if (link === null) {
		<div onClick={() => alert('This page is under construction yet')}></div>
	}
	return (
		<a onClick={console.log({ title })} target="_blank" href={link} rel="noreferrer"> {title} </a>
	)
};