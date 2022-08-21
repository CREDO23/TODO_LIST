const Task = ({ topic, para, butn, date }) => {
	return (
		<div className='task'>
			<h2 className="titre">{topic}</h2>
			<div className='MaDate'>{date} </div>
			<p className="paragraphe">{para}</p>
            <div className="MonButtonSup">{butn}</div>
		</div>
	);
};

export default Task;