export interface Room{
  availableRooms:number; //? means optional
  bookedRooms:number;
  totalRooms:number;

}

export interface RoomList{
  roomType : string;
  amenities: string;
  price: number;
  photo: string;
  checkingTime?:Date;
  checkoutTime?:Date;

}
