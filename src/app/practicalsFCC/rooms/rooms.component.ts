import { Component } from '@angular/core';
import { Room, RoomList } from '../room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {

  hiddenValue: boolean = true;
  roomsCount: number = 40;
  name: string = "Hotel";
  empName: string = "Dilusha";

  rooms:Room = {
    availableRooms:0,
    totalRooms:10,
    bookedRooms:6
  }

  roomList:RoomList [] = [{
    roomType: 'Deluxe',
    amenities: 'wifi, air conditioner',
    price: 31000,
    photo: '',
    checkingTime: new Date('19-Oct-2024'),
    checkoutTime: new Date('20-Oct-2024'),
  },
  {
    roomType: 'standard',
    amenities: 'wifi, air conditioner',
    price: 21000,
    photo: '',
    checkingTime: new Date('19-Oct-2024'),
    checkoutTime: new Date('22-Oct-2024'),
  },
  {
    roomType: 'normal',
    amenities: 'wifi, air conditioner',
    price: 11000,
    photo: '',
    checkingTime: new Date('19-Oct-2024'),
    checkoutTime: new Date('23-Oct-2024'),
  }
];

  toggle() {
    this.hiddenValue = !this.hiddenValue;
  }
  typeValue(event:any) {
    console.log(event.target.value);

  }


}
