const Avatar =({avatarUrl, name}) => (
	<img className='Avatar'
			src={avatarUrl}
		alt={name}
	/>
);

const UserInfo =({name}) => (
	<div className='UserInfo-name'>
		{name}
	</div>
);

const View = ({className, children}) => (
	<div className={className}>{children}</div>
)

function Comment(props) {
	const {author, text, date} = props;
	return (
		<div className='Comment'>
			<div className='UserInfo'>
				<Avatar {...author}/>
				<UserInfo name={author.name}/>
			</div>
			<View className='Comment-text'>
				{props.text}
			</View>
			<View className='Comment-date'>
				{formatDate(props.date)}
			</View>
		</div>
	)
}