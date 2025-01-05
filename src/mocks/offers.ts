import { OfferType } from '../types/types';

const offers: OfferType[] = [
  {
    id: 'cba2cab1-a30a-45d7-b678-7249cc98f412',
    title: 'Perfectly located Castro',
    type: 'apartment',
    price: 381,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.379863,
        longitude: 4.894327,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.4
  },
  {
    id: 'f52f8b66-b9ef-48b1-ba8a-d3d6ca219ea4',
    title: 'Canal View Prinsengracht',
    type: 'hotel',
    price: 142,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.379863,
        longitude: 4.894327,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.7
  },
  {
    id: '15e5fdeb-9a47-408f-a191-efcba10e8266',
    title: 'The house among olive',
    type: 'room',
    price: 235,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.379863,
        longitude: 4.894327,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.2
  },
  {
    id: '79f386bc-09b4-40e8-a099-77d98be34a15',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'apartment',
    price: 184,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.379863,
        longitude: 4.894327,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.1
  }
];

export default offers;
