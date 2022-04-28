import './ExpenceItem.css';
import ExpenceDate from './ExpenceDate';
import Card from './Card';

function ExpenceItem(props){
    

    return (
        <div className="expence-item">
            <ExpenceDate date={props.date}/>
                <div className="expence-item_description">

                    <h2>{props.title} </h2>
                    <div className='expence-item_price'>{props.amount}</div>
                
                </div>
            
        </div>
    );

}
export default ExpenceItem;