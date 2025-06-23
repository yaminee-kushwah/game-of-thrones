export interface Character {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  family: string;
  image: string;
  imageUrl: string;
}

export interface Continent {
  id: number;
  name: string;
}

//  {
//     "id": 0,
//     "firstName": "Daenerys",
//     "lastName": "Targaryen",
//     "fullName": "Daenerys Targaryen",
//     "title": "Mother of Dragons",
//     "family": "House Targaryen",
//     "image": "daenerys.jpg",
//     "imageUrl": "https://thronesapi.com/assets/images/daenerys.jpg"
//   }
