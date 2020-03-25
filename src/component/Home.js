import React, { Component } from 'react'
import DnD from './DnD';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

class Home extends Component {

    onDragEnd = () => {
        //TODO
    }
    render() {
        console.log(this.props.list);

        const { list } = this.props;
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div class="col-6 m-5">
                    <form>
                        <div class="row m-5">
                            <div class="col-">
                                Enter the list<input type="text" class="form-control " placeholder="Your Content" />
                            </div>
                            <div class="col">
                                <button type="submit" class="btn btn-outline-primary mt-4">Add</button>
                            </div>
                        </div>
                    </form>
                    <h5>Hello Users !!</h5>
                    <div style={styles.list}>
                        {list.map(list => (
                            <DnD listID={list.id} key={list.id} title={list.title} cards={list.cards} />
                        ))}
                    </div>
                </div>
            </DragDropContext>
        )
    }
}

const styles = {
    list: {
        display: "flex",
        flexDirection: "row",
    }
}

const mapStateToProps = state => ({
    list: state.list
})

export default connect(mapStateToProps)(Home);
