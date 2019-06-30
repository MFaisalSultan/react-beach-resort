import React, { Component } from 'react'
import items from './data';

const RoomContext = React.createContext();
class RoomProvider extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            rooms: [],
            featuredRooms: [],
            sortedRooms: [],
            loading: true,
            type:'all',
            capacity:1,
            minPrice:0,
            maxPrice:0,
            minSize:0,
            maxSize:0,
            breakfast:false,
            pets:false
        }
        this.getRoom = this.getRoom.bind(this);

    }
    componentDidMount() {
        let rooms = this.formateData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        const maxPrice = Math.max(...rooms.map(item => item.price));
        const maxSize = Math.max(...rooms.map(item => item.size));
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price:maxPrice,
            maxPrice,
            maxSize,
        })
        
    }
    
    formateData(items) {
        let tempItem = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = { ...item.fields, id, images };
            return room;
        });
        return tempItem;
    }
    
    getRoom(slug) {
        
        let tempRooms = [...this.state.rooms] ;
        const room = tempRooms.find(rooms => rooms.slug === slug)
        return room;
    };
    
    handleChange = event =>{
        const target = event.target;
        const value = target.type === 'checkbox'? target.checked : target.value;
        const name = event.target.name;
        console.log(value,name);
        
        this.setState({
            [name] : value
        },this.filterRooms);
    }

    filterRooms = ()=>{
        let{
            rooms,type,capacity,price,minSize,maxSize,breakfast,pets
        } = this.state;

        let tempRooms = [...rooms];
        capacity = parseInt(capacity);
        price = parseInt(price);

        if(type !== 'all'){
           tempRooms = tempRooms.filter(temproom => temproom.type === type);
        }
        if(capacity !== 1){
           tempRooms = tempRooms.filter(temproom => temproom.capacity >= capacity);
        }


            tempRooms= tempRooms.filter(room => room.price <= price);

        // size
            tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);

        //end size

        // filter for break fast
        if(breakfast){
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }
        // filter for break fast end

        // filter for pets
        if(pets){
            tempRooms = tempRooms.filter(room => room.pets === true);
        }
        // filter for pets end
        this.setState({
            sortedRooms:tempRooms
        })
    }

    render() {
    
        return (
            <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange:this.handleChange }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;


export function withRoomConsumer(Component){
    return function consumerWrapper(props){
        return <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
}

export { RoomProvider, RoomConsumer, RoomContext };