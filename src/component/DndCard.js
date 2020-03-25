import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Droppable } from 'react-beautiful-dnd';
const DndCard = ({ text, id, index }) => {
    return ( 
        <Droppable droppableId={String(id)} index={index}>
            {provided => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    {...provided.dragHandleProps}
                >
                    <Card style={styles.cardContainer}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {text}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            )}

        </Droppable>
    )
}
const styles = {
    cardContainer: {
        marginBottom: 5,

    }
}
export default DndCard
