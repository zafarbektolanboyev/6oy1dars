import './index.css';
import Button from './'
export default function Card(){
    const {image, title, desc} = props;
    return(
        <div className='card'>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}