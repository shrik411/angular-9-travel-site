import { Hotel } from './hotel';

export const HOTELS: Hotel[] = [
    {
        id: 1,
        name: 'Iberostar Grand Salomé',
        city: 'Costa Adeje',
        state: 'Tenerife',
        ratings: 5,
        img: 'hotel-image-1.png',
        start_date: '07/03/2020',
        duration: 7,
        persons: {
            'adults': 2,
            'childrens': 2,
            'infant': 1
        },
        duration_in: 'days',
        departing_from: 'East Midlands',
        price: 1136,
        overview: `This charming adults only boutique hotel guarantees peaceful relaxation on the seafront. Enjoy personalised attention from our butler service in suites with spectacular sea views. Relax in our two outdoor pools, both overlooking the ocean. Savour a gourmet breakfast on the El Mirador terrace. Also, take advantage of the benefits of being in one of the best resorts in Tenerife by exploring the wide array of bars and restaurants while enjoying the spacious area and its gardens without losing the privacy of a truly exclusive experience.
            Our Iberostar Aliveness concept encourages you to reconnect with yourself and with nature, learn how to listen to your body, satisfy its needs with movement and feed it with thoughtfully prepared cuisine from Iberostar Honest Food.`
    },
    {
        id: 2,
        name: 'Aguamarina Golf Hotel',
        city: 'Costa Adeje',
        state: 'Tenerife',
        ratings: 3,
        img: 'hotel-image-2.png',
        start_date: '05/27/2020',
        duration: 7,
        persons: {
            'adults': 2,
            'childrens': 1,
        },
        duration_in: 'days',       
        departing_from: 'Liverpool',
        price: 696,
        overview: `Hotel Gema Aguamarina Golf is on Tenerife’s south coast, between Golf del Sur and Amarilla Golf Clubs. It has 4 swimming pools, a fitness center, a sauna and tennis courts.
        All air-conditioned rooms at the Aguamarina Golf come with a balcony and a private bathroom. They also offer satellite TV.`
    },
    {
        id: 4,
        name: 'Las Piramides Resort',
        city: 'Costa Adeje',
        state: 'Tenerife',
        ratings: 4,
        img: 'hotel-image-3.png',
        start_date: '03/07/2020',
        duration: 7,
        persons: {
            'adults': 2,
            'childrens': 2,
        },
        duration_in: 'days',
        departing_from: 'Manchester',
        price: 499,
        overview: 'Finding an ideal budget friendly hotel in Playa de las Americas does not have to be difficult. Welcome to Piramides Resort, a nice option for travellers like you. Rooms at Piramides Resort provide a refrigerator and a kitchenette, and getting online is easy, with wifi available. In addition, Piramides Resort offers a pool and breakfast, which will help make your Playa de las Americas trip additionally gratifying. '
    }
]