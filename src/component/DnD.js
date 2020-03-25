import React from 'react';
import DndCard from './DndCard';
import { Droppable } from 'react-beautiful-dnd';

const DnD = ({ title, cards,listID }) => {
    return (
        <Droppable droppableId={String(listID)}>
            { provided => (
                 <div {...provided.droppableProps} ref={provided.innerRef} style={styles.container}>
                 <h4>{title}</h4>
                 {cards.map((card ,index) => (
                     <DndCard key={card.id} index={index} text={card.text} id={card.id}/>
                 ))}
                 {provided.placeholder}
             </div>
            )}
           
        </Droppable>
    )
}

const styles = {
    container: {
        backgroundColor: "#00FF00",
        borderRadius: 5,
        width: 350,
        padding: 5,
        marginRight: 8
    }
}
export default DnD;