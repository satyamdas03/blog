import "./header.css";

export default function header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">React & node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://images.pling.com/img/00/00/50/43/77/1259174/21262412b7f7224684d7e09aed14b23fa7381.jpg" alt="" />
        </div>
    )
}
